import { createFileRoute } from "@tanstack/react-router";
import type {} from "@tanstack/react-start";

// Lead capture endpoint for the contact / quote forms.
// Today it validates + logs the lead and (optionally) forwards it to a webhook
// set via the LEAD_WEBHOOK_URL env var (e.g. a Zapier/Make hook, Formspree, or a
// serverless email function). Swap in Mariela's preferred delivery target here.

interface LeadPayload {
  name?: string;
  email?: string;
  phone?: string;
  occasion?: string;
  message?: string;
  source?: string;
}

function json(body: unknown, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: { "Content-Type": "application/json" },
  });
}

export const Route = createFileRoute("/api/lead")({
  server: {
    handlers: {
      POST: async ({ request }) => {
        let data: LeadPayload;
        try {
          data = (await request.json()) as LeadPayload;
        } catch {
          return json({ ok: false, error: "Invalid request body" }, 400);
        }

        if (!data.name || !data.email || !data.message) {
          return json({ ok: false, error: "Name, email, and message are required." }, 422);
        }

        const lead = {
          name: String(data.name).slice(0, 200),
          email: String(data.email).slice(0, 200),
          phone: data.phone ? String(data.phone).slice(0, 50) : "",
          occasion: data.occasion ? String(data.occasion).slice(0, 200) : "",
          message: String(data.message).slice(0, 4000),
          source: data.source ? String(data.source).slice(0, 100) : "site",
          receivedAt: new Date().toISOString(),
        };

        // Always log so leads are recoverable from server output.
        console.log("[lead]", JSON.stringify(lead));

        const webhook = process.env.LEAD_WEBHOOK_URL;
        if (webhook) {
          try {
            await fetch(webhook, {
              method: "POST",
              headers: { "Content-Type": "application/json" },
              body: JSON.stringify(lead),
            });
          } catch (err) {
            console.error("[lead] webhook forward failed", err);
            // Still return ok — we have the lead in logs.
          }
        }

        return json({ ok: true });
      },
    },
  },
});
