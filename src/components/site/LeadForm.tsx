import { useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { toast } from "sonner";

interface LeadFormProps {
  /** prefills the occasion/date field, e.g. "Quinceañera — McAllen" */
  defaultOccasion?: string;
  /** hidden tracking value, e.g. "mcallen/quinceanera" */
  source?: string;
  heading?: string;
  blurb?: string;
}

export function LeadForm({
  defaultOccasion,
  source,
  heading = "Send an inquiry",
  blurb = "Tell us about your moment — we'll handle the rest.",
}: LeadFormProps) {
  const [loading, setLoading] = useState(false);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    setLoading(true);
    try {
      const data = Object.fromEntries(new FormData(form).entries());
      const res = await fetch("/api/lead", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("Request failed");
      toast.success("Thank you — we'll be in touch within one business day.");
      form.reset();
    } catch {
      toast.error("Something went wrong. Please call (956) 313-1847 and we'll help right away.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <form
      id="inquire"
      onSubmit={onSubmit}
      className="scroll-mt-28 rounded-3xl border border-border/70 bg-card p-8 shadow-sm lg:p-10"
    >
      <h3 className="font-serif text-2xl text-foreground">{heading}</h3>
      <p className="mt-1 text-sm text-muted-foreground">{blurb}</p>
      {source ? <input type="hidden" name="source" value={source} /> : null}
      <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-2">
        <div className="space-y-2">
          <Label htmlFor="name">Name</Label>
          <Input id="name" name="name" required placeholder="Your name" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" name="phone" type="tel" placeholder="(956) 000-0000" />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="email">Email</Label>
          <Input id="email" name="email" type="email" required placeholder="you@example.com" />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="occasion">Occasion / Event date</Label>
          <Input
            id="occasion"
            name="occasion"
            defaultValue={defaultOccasion}
            placeholder="e.g. Wedding, October 12"
          />
        </div>
        <div className="space-y-2 sm:col-span-2">
          <Label htmlFor="message">Message</Label>
          <Textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us what you're imagining…"
          />
        </div>
      </div>
      <Button
        type="submit"
        size="lg"
        disabled={loading}
        className="mt-8 w-full rounded-full sm:w-auto sm:px-10"
      >
        {loading ? "Sending…" : "Send Inquiry"}
      </Button>
    </form>
  );
}
