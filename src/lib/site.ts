// Single source of truth for site URL + business NAP (name/address/phone).
// Change SITE_URL here and it propagates to every canonical, OG tag, sitemap, and
// JSON-LD block. Use the canonical host (apex 308-redirects to www).
export const SITE_URL = "https://www.forgetmenotrgv.com";

export interface BusinessHours {
  days: string; // schema.org dayOfWeek shorthand, e.g. "Mo-Fr"
  open: string; // "HH:MM"
  close: string; // "HH:MM"
}

export const BUSINESS = {
  name: "Forget Me Not Flowers & Gifts",
  shortName: "Forget Me Not",
  owner: "Mariela",
  phonePrimary: "+1-956-313-1847",
  phonePrimaryDisplay: "(956) 313-1847",
  phonePrimaryTel: "tel:+19563131847",
  phoneSecondary: "+1-956-682-2119",
  phoneSecondaryDisplay: "(956) 682-2119",
  region: "Rio Grande Valley",
  regionAbbr: "RGV",
  state: "TX",
  studioCity: "Pharr",
  sameDayCutoff: "3pm CST",
  hours: [
    { days: "Mo-Fr", open: "09:00", close: "18:00" },
    { days: "Sa", open: "09:00", close: "15:00" },
    { days: "Su", open: "09:00", close: "17:00" },
  ] as BusinessHours[],
  hoursHuman: [
    { label: "Mon–Fri", value: "9am–6pm" },
    { label: "Sat", value: "9am–3pm" },
    { label: "Sun", value: "9am–5pm" },
  ],
} as const;

export const ogImage =
  "https://pub-bb2e103a32db4e198524a2e9ed8f35b4.r2.dev/92661d75-0521-4840-9a1e-c165fb0e953c/id-preview-0fadca38--3879e339-6209-40d7-988b-a4163235fb1c.lovable.app-1780502167681.png";
