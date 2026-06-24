import type { CategorySlug } from "./products";

// Which city-specific data field anchors this occasion's unique local block.
// This is the core anti-thin lever: weddings show venues, sympathy shows funeral
// homes, get-well shows hospitals, prom shows schools — so the same city renders
// genuinely different content per occasion.
export type LocalFocus = "venues" | "hospitals" | "funeralHomes" | "schools" | "landmarks";

export type OccasionSchemaType = "Service" | "Event";

export interface OccasionFaq {
  q: string; // may contain {city}
  a: string; // may contain {city}
}

export interface Occasion {
  slug: string;
  label: string; // "Quinceañera"
  plural: string; // "Quinceañeras"
  /** keyword phrase used in copy, e.g. "quinceañera flowers" */
  phrase: string;
  h1Template: string; // "{occasion} Flowers in {city}, TX"
  hubH1: string; // region-level hub H1
  metaTitleTemplate: string; // "{occasion} Flowers in {city}, TX | ..."
  metaDescTemplate: string;
  /** generic intro pool — one is chosen deterministically per city+occasion */
  introVariants: string[];
  whatWeOffer: string[];
  /** local block heading + lead-in for the occasion-specific section */
  localFocus: LocalFocus;
  localHeading: string; // "{occasion} venues we deliver to in {city}"
  productCategories: CategorySlug[];
  faqs: OccasionFaq[];
  schemaType: OccasionSchemaType;
  /** sitemap priority weight + index tiering */
  tier: 1 | 2;
  seasonalMonth?: number; // 1-12, bumps changefreq near the season
}

export const OCCASIONS: Occasion[] = [
  {
    slug: "weddings",
    label: "Wedding",
    plural: "Weddings",
    phrase: "wedding flowers",
    h1Template: "Wedding Flowers in {city}, TX",
    hubH1: "Wedding Florist for the Rio Grande Valley",
    metaTitleTemplate: "Wedding Flowers in {city}, TX | Bridal Bouquets & Centerpieces",
    metaDescTemplate:
      "Wedding florist serving {city}, TX. Bridal bouquets, ceremony arches & reception centerpieces hand-arranged by Mariela. Free consultation — call {phone}.",
    introVariants: [
      "From the first-look bouquet to the last centerpiece, Forget Me Not Flowers designs full wedding florals for couples in {city}, TX. We handle bridal and bridesmaid bouquets, boutonnieres, ceremony arches, aisle markers, and reception tablescapes — all hand-arranged in studio and delivered fresh to your {city} venue.",
      "Your {city} wedding deserves flowers that match the moment. Mariela works one-on-one with each couple to design bridal bouquets, ceremony installations, and reception centerpieces in your palette, then delivers and sets up on the day across {city} and the wider Rio Grande Valley.",
      "Planning a wedding in {city}? Forget Me Not Flowers is a full-service wedding florist covering everything from the bride's bouquet to head-table arrangements and arch florals. We coordinate delivery and setup with your {city} venue so the flowers are ready before you walk in.",
    ],
    whatWeOffer: [
      "Bridal & bridesmaid bouquets",
      "Boutonnieres & corsages",
      "Ceremony arches & aisle florals",
      "Reception centerpieces & head-table designs",
      "Cake flowers & toss bouquets",
    ],
    localFocus: "venues",
    localHeading: "Wedding venues we deliver to around {city}",
    productCategories: ["romance", "everyday", "congratulations"],
    faqs: [
      {
        q: "Do you deliver wedding flowers in {city}, TX?",
        a: "Yes. We design, deliver, and set up complete wedding florals throughout {city} and the surrounding Rio Grande Valley, coordinating timing directly with your venue.",
      },
      {
        q: "How far in advance should I book my {city} wedding flowers?",
        a: "We recommend reaching out 3–6 months before your date so we can lock in your consultation, palette, and seasonal blooms — but we'll always try to accommodate shorter timelines in {city} when we can.",
      },
      {
        q: "Can you match my wedding colors and Pinterest inspiration?",
        a: "Absolutely. Bring photos, swatches, or a moodboard and Mariela will build a custom proposal for your {city} wedding around your palette and budget.",
      },
      {
        q: "Do you set up the flowers at the venue?",
        a: "Yes — for full weddings we deliver and set up ceremony and reception florals at your {city}-area venue so everything is in place before guests arrive.",
      },
    ],
    schemaType: "Service",
    tier: 1,
  },
  {
    slug: "events",
    label: "Event",
    plural: "Events",
    phrase: "event flowers",
    h1Template: "Event & Party Flowers in {city}, TX",
    hubH1: "Event & Party Florals Across the RGV",
    metaTitleTemplate: "Event Flowers in {city}, TX | Party & Corporate Arrangements",
    metaDescTemplate:
      "Event florist in {city}, TX. Centerpieces & florals for parties, galas, showers & corporate events. Hand-arranged, delivered & styled. Call {phone}.",
    introVariants: [
      "Throwing a party, banquet, or corporate event in {city}? Forget Me Not Flowers creates centerpieces, entry arrangements, and accent florals scaled to your guest count and venue, delivered and styled across {city}, TX.",
      "From intimate gatherings to large galas, we design event florals for {city} hosts — table centerpieces, welcome arrangements, stage and podium flowers — all hand-arranged by Mariela and delivered fresh to your {city} venue.",
      "Forget Me Not Flowers handles event florals of every size in {city}, TX. Tell us your theme, colors, and number of tables, and we'll build a cohesive look and deliver it ready to display.",
    ],
    whatWeOffer: [
      "Table centerpieces at any scale",
      "Welcome & entry arrangements",
      "Stage, podium & head-table florals",
      "Themed & seasonal color stories",
      "Delivery, setup & teardown options",
    ],
    localFocus: "venues",
    localHeading: "Event venues we serve near {city}",
    productCategories: ["everyday", "congratulations", "thank-you"],
    faqs: [
      {
        q: "What kinds of events do you provide flowers for in {city}?",
        a: "Birthdays, anniversaries, showers, quinceañeras, galas, grand openings, and corporate events throughout {city} and the RGV.",
      },
      {
        q: "Can you scale centerpieces to a large {city} venue?",
        a: "Yes. We design per-table and accent pieces to match your guest count and room, then deliver and set up at your {city} venue.",
      },
      {
        q: "Do you offer same-day event arrangements?",
        a: "Smaller orders may qualify for same-day in {city} before our 3pm cutoff; larger events should be booked in advance so we can source the right blooms.",
      },
      {
        q: "Can you work with my event planner?",
        a: "Definitely — we regularly coordinate directly with planners and {city}-area venues on timing, delivery, and setup.",
      },
    ],
    schemaType: "Service",
    tier: 1,
  },
  {
    slug: "birthday",
    label: "Birthday",
    plural: "Birthdays",
    phrase: "birthday flowers",
    h1Template: "Birthday Flowers in {city}, TX",
    hubH1: "Birthday Flower Delivery Across the RGV",
    metaTitleTemplate: "Birthday Flowers in {city}, TX | Same-Day Delivery",
    metaDescTemplate:
      "Send birthday flowers in {city}, TX. Bright, hand-arranged bouquets delivered same-day before {cutoff}. Order from Forget Me Not — call {phone}.",
    introVariants: [
      "Make their day in {city} with a bright, hand-arranged birthday bouquet from Forget Me Not Flowers. Order by {cutoff} and we'll deliver same-day to homes, offices, and restaurants across {city}, TX.",
      "Surprise someone special in {city} with fresh birthday flowers designed in our studio. From cheerful mixed bouquets to roses and balloons, we deliver birthday joy across {city} and the Rio Grande Valley.",
      "Birthday flower delivery in {city} is easy with Forget Me Not. Pick the vibe — playful, elegant, or over-the-top — and Mariela will hand-arrange it and get it to their door in {city} the same day.",
    ],
    whatWeOffer: [
      "Bright mixed birthday bouquets",
      "Rose arrangements & balloon add-ons",
      "Fruit & treat bouquets",
      "Plants & long-lasting designs",
      "Same-day delivery before {cutoff}",
    ],
    localFocus: "landmarks",
    localHeading: "Birthday delivery across {city}",
    productCategories: ["birthday", "everyday", "congratulations"],
    faqs: [
      {
        q: "Can I get same-day birthday flowers in {city}?",
        a: "Yes — order before {cutoff} and we'll deliver the same day to most {city} addresses.",
      },
      {
        q: "Can you deliver to a workplace or restaurant in {city}?",
        a: "We deliver birthday flowers to homes, offices, schools, and restaurants throughout {city}, TX.",
      },
      {
        q: "Can I add balloons or a card?",
        a: "Of course — add balloons, a treat bouquet, or a handwritten card to any {city} birthday order.",
      },
      {
        q: "What if I don't know what to pick?",
        a: "Call {phone} and Mariela will design a custom birthday bouquet for your recipient in {city}.",
      },
    ],
    schemaType: "Service",
    tier: 1,
  },
  {
    slug: "quinceanera",
    label: "Quinceañera",
    plural: "Quinceañeras",
    phrase: "quinceañera flowers",
    h1Template: "Quinceañera Flowers in {city}, TX",
    hubH1: "Quinceañera Florist for the Rio Grande Valley",
    metaTitleTemplate: "Quinceañera Flowers in {city}, TX | Centerpieces & Bouquets",
    metaDescTemplate:
      "Quinceañera florist in {city}, TX. Tall centerpieces, the last-doll bouquet, corsages & ceremony flowers for your XV. Call {phone} for a consultation.",
    introVariants: [
      "Your quinceañera in {city} is a once-in-a-lifetime celebration, and the flowers should be unforgettable. Forget Me Not designs tall centerpieces, the traditional last-doll and toast bouquets, damas corsages, and church arrangements for XV celebrations across {city}, TX.",
      "Celebrating a quinceañera in {city}? Mariela creates cohesive XV florals — from the misa at church to the grand centerpieces at the salón — in your theme colors, delivered and styled throughout {city} and the RGV.",
      "From the bouquet de cambio to towering reception centerpieces, Forget Me Not Flowers brings quinceañera dreams to life in {city}, TX. We coordinate colors with your dress and decor and deliver to your church and {city} venue.",
    ],
    whatWeOffer: [
      "Tall reception centerpieces",
      "Last-doll & toast bouquets",
      "Damas & chambelanes corsages/boutonnieres",
      "Church & altar arrangements",
      "Color-matched to your theme",
    ],
    localFocus: "venues",
    localHeading: "Quinceañera venues & churches we deliver to in {city}",
    productCategories: ["congratulations", "romance", "everyday"],
    faqs: [
      {
        q: "Do you do quinceañera flowers in {city}?",
        a: "Yes — we design full quinceañera florals (church, centerpieces, bouquets, corsages) and deliver throughout {city} and the surrounding Valley.",
      },
      {
        q: "Can you match my quince colors?",
        a: "Absolutely. Bring your color palette and theme and we'll build centerpieces and bouquets to match for your {city} celebration.",
      },
      {
        q: "How early should I book my {city} quinceañera flowers?",
        a: "Two to four months ahead is ideal for XV celebrations in {city}, especially during spring and summer.",
      },
      {
        q: "Do you deliver to both the church and the reception?",
        a: "Yes, we coordinate delivery to your {city}-area church and reception venue so everything is ready on time.",
      },
    ],
    schemaType: "Service",
    tier: 1,
  },
  {
    slug: "prom",
    label: "Prom",
    plural: "Proms",
    phrase: "prom flowers",
    h1Template: "Prom Corsages & Boutonnieres in {city}, TX",
    hubH1: "Prom Corsages & Boutonnieres Across the RGV",
    metaTitleTemplate: "Prom Flowers in {city}, TX | Corsages & Boutonnieres",
    metaDescTemplate:
      "Prom corsages & boutonnieres in {city}, TX. Wrist corsages, pin-ons & matching sets in your colors. Order from Forget Me Not — call {phone}.",
    introVariants: [
      "Prom season in {city} means corsages and boutonnieres that match the dress and the moment. Forget Me Not Flowers makes custom wrist and pin-on corsages, boutonnieres, and matching sets for students across {city}, TX.",
      "Heading to prom in {city}? We design fresh wrist corsages, classic boutonnieres, and color-matched couple sets — pick your ribbon and bloom colors and we'll have them ready for your big night in {city}.",
      "Forget Me Not Flowers keeps {city} students looking sharp for prom with hand-made corsages and boutonnieres in any color. Order early during prom season and pick up or have them delivered in {city}.",
    ],
    whatWeOffer: [
      "Wrist & pin-on corsages",
      "Classic & modern boutonnieres",
      "Color-matched couple sets",
      "Keepsake & ribbon options",
      "Early-order prom scheduling",
    ],
    localFocus: "schools",
    localHeading: "Schools we make prom flowers for near {city}",
    productCategories: ["romance", "congratulations"],
    faqs: [
      {
        q: "Can I order prom corsages in {city}?",
        a: "Yes — we make custom corsages and boutonnieres for students throughout {city} and the RGV.",
      },
      {
        q: "Can you match my prom dress color?",
        a: "We match ribbon and flower colors to your {city} prom dress or tux — just bring a photo or swatch.",
      },
      {
        q: "How early should I order prom flowers?",
        a: "Order at least a week ahead during {city} prom season, as dates book up quickly.",
      },
      {
        q: "Do you offer pickup and delivery?",
        a: "Both — pick up at the studio or have your prom flowers delivered in {city}.",
      },
    ],
    schemaType: "Service",
    tier: 2,
  },
  {
    slug: "baby-shower",
    label: "Baby Shower",
    plural: "Baby Showers",
    phrase: "baby shower flowers",
    h1Template: "Baby Shower Flowers in {city}, TX",
    hubH1: "Baby Shower Florals Across the RGV",
    metaTitleTemplate: "Baby Shower Flowers in {city}, TX | Delivery & Centerpieces",
    metaDescTemplate:
      "Baby shower flowers in {city}, TX. Soft centerpieces, welcome arrangements & new-baby bouquets. Delivered fresh by Forget Me Not — call {phone}.",
    introVariants: [
      "Welcome the newest little one with soft, sweet baby shower florals from Forget Me Not. We design centerpieces, gift bouquets, and welcome arrangements in pinks, blues, or neutrals and deliver them across {city}, TX.",
      "Hosting a baby shower in {city}? Mariela creates gentle, cheerful arrangements that match your theme — perfect for the dessert table, gift table, and the guest of honor — delivered fresh in {city}.",
      "From 'oh baby' centerpieces to new-mom bouquets, Forget Me Not Flowers makes baby shower florals for celebrations across {city} and the Rio Grande Valley.",
    ],
    whatWeOffer: [
      "Shower centerpieces & table florals",
      "Pink, blue & neutral palettes",
      "New-baby & new-mom bouquets",
      "Welcome-home arrangements",
      "Delivery throughout {city}",
    ],
    localFocus: "landmarks",
    localHeading: "Baby shower delivery across {city}",
    productCategories: ["baby", "congratulations", "everyday"],
    faqs: [
      {
        q: "Do you deliver baby shower flowers in {city}?",
        a: "Yes — we deliver shower centerpieces and bouquets to homes and venues throughout {city}, TX.",
      },
      {
        q: "Can you match a gender-reveal or shower theme?",
        a: "We match pinks, blues, neutrals, or any theme color for your {city} baby shower.",
      },
      {
        q: "Can I send flowers to a new mom at home?",
        a: "Of course — we deliver welcome-home and new-baby arrangements across {city}.",
      },
      {
        q: "How many centerpieces should I order?",
        a: "Call {phone} with your table count and we'll recommend the right number for your {city} shower.",
      },
    ],
    schemaType: "Service",
    tier: 2,
  },
  {
    slug: "gender-reveal",
    label: "Gender Reveal",
    plural: "Gender Reveals",
    phrase: "gender reveal flowers",
    h1Template: "Gender Reveal Flowers in {city}, TX",
    hubH1: "Gender Reveal Florals Across the RGV",
    metaTitleTemplate: "Gender Reveal Flowers in {city}, TX | Pink & Blue Arrangements",
    metaDescTemplate:
      "Gender reveal flowers in {city}, TX. Pink & blue centerpieces and surprise arrangements for your reveal party. Forget Me Not — call {phone}.",
    introVariants: [
      "Pink or blue? Forget Me Not Flowers designs gender-reveal centerpieces and surprise arrangements for reveal parties across {city}, TX — perfect for the big moment and every photo after.",
      "Hosting a gender reveal in {city}? We create pink, blue, and neutral florals to set the scene, plus 'he or she' centerpieces delivered fresh to your {city} venue.",
      "Make your {city} gender reveal bloom with custom pink-and-blue arrangements from Forget Me Not Flowers, delivered and styled for your celebration.",
    ],
    whatWeOffer: [
      "'He or She' reveal centerpieces",
      "Pink & blue color stories",
      "Dessert & gift table florals",
      "Photo-ready accent arrangements",
      "Delivery throughout {city}",
    ],
    localFocus: "landmarks",
    localHeading: "Gender reveal delivery across {city}",
    productCategories: ["baby", "congratulations", "everyday"],
    faqs: [
      {
        q: "Do you make gender reveal flowers in {city}?",
        a: "Yes — we design reveal-themed centerpieces and arrangements delivered throughout {city}, TX.",
      },
      {
        q: "Can you keep the gender a surprise?",
        a: "We can coordinate with a helper so the reveal colors stay a surprise to the parents at your {city} party.",
      },
      {
        q: "Can I combine this with a baby shower order?",
        a: "Absolutely — many {city} families book reveal and shower florals together.",
      },
      {
        q: "How early should I order?",
        a: "A few days to a week ahead is ideal for {city} reveal parties so we can match your colors.",
      },
    ],
    schemaType: "Service",
    tier: 2,
  },
  {
    slug: "mothers-day",
    label: "Mother's Day",
    plural: "Mother's Day",
    phrase: "Mother's Day flowers",
    h1Template: "Mother's Day Flowers in {city}, TX",
    hubH1: "Mother's Day Flower Delivery Across the RGV",
    metaTitleTemplate: "Mother's Day Flowers in {city}, TX | Same-Day Delivery",
    metaDescTemplate:
      "Send Mother's Day flowers in {city}, TX. Roses, mixed bouquets & plants delivered fresh. Order early from Forget Me Not — call {phone}.",
    introVariants: [
      "Show Mom how much she means with fresh Mother's Day flowers delivered across {city}, TX. Forget Me Not designs elegant roses, cheerful mixed bouquets, and lasting plants — order early, as Mother's Day is our busiest weekend in {city}.",
      "Celebrate Mom in {city} with hand-arranged Mother's Day flowers from Forget Me Not. From classic roses to garden-style bouquets, we deliver to homes and care facilities throughout {city} and the RGV.",
      "Make Mother's Day special in {city} with a bouquet designed by Mariela. Reserve early for delivery to Mom's door anywhere in {city}, TX.",
    ],
    whatWeOffer: [
      "Classic rose bouquets",
      "Garden-style mixed arrangements",
      "Long-lasting blooming plants",
      "Add-on chocolates & balloons",
      "Early reservations for the weekend",
    ],
    localFocus: "landmarks",
    localHeading: "Mother's Day delivery across {city}",
    productCategories: ["everyday", "romance", "birthday"],
    faqs: [
      {
        q: "Can I get Mother's Day delivery in {city}?",
        a: "Yes — we deliver throughout {city}, but Mother's Day books up fast, so reserve early.",
      },
      {
        q: "How early should I order Mother's Day flowers?",
        a: "Order at least a few days ahead for {city} Mother's Day delivery to guarantee your date.",
      },
      {
        q: "Can you deliver to a nursing home or care facility?",
        a: "We deliver to homes, hospitals, and care facilities across {city}, TX.",
      },
      {
        q: "Do you offer plants that last longer than cut flowers?",
        a: "Yes — blooming and green plants are a lasting Mother's Day option we deliver in {city}.",
      },
    ],
    schemaType: "Service",
    tier: 1,
    seasonalMonth: 5,
  },
  {
    slug: "valentines-day",
    label: "Valentine's Day",
    plural: "Valentine's Day",
    phrase: "Valentine's Day flowers",
    h1Template: "Valentine's Day Flowers in {city}, TX",
    hubH1: "Valentine's Day Flower Delivery Across the RGV",
    metaTitleTemplate: "Valentine's Day Flowers in {city}, TX | Roses & Same-Day Delivery",
    metaDescTemplate:
      "Send Valentine's Day flowers in {city}, TX. Red roses, romantic bouquets & chocolates delivered. Reserve early with Forget Me Not — call {phone}.",
    introVariants: [
      "Say it with roses this Valentine's Day in {city}. Forget Me Not Flowers designs classic dozen-rose bouquets, romantic mixed arrangements, and chocolate-and-flower combos delivered across {city}, TX — reserve early for February 14.",
      "Valentine's Day in {city} calls for something unforgettable. From a single dozen red roses to lavish romantic bouquets, Mariela hand-arranges every order and delivers to your valentine's door in {city}.",
      "Make Valentine's Day bloom in {city} with red roses, buchones, and romantic designs from Forget Me Not Flowers. Order ahead — Valentine's is our most-requested day in {city} and the RGV.",
    ],
    whatWeOffer: [
      "Classic dozen & two-dozen rose bouquets",
      "Rose buchones & premium designs",
      "Chocolate-covered strawberry combos",
      "Romantic mixed arrangements",
      "Balloons & add-ons",
    ],
    localFocus: "landmarks",
    localHeading: "Valentine's Day delivery across {city}",
    productCategories: ["romance", "anniversary", "birthday"],
    faqs: [
      {
        q: "Can I get Valentine's Day flower delivery in {city}?",
        a: "Yes — we deliver Valentine's flowers throughout {city}, but February 14 books up early, so reserve ahead.",
      },
      {
        q: "How early should I order Valentine's flowers?",
        a: "Order at least several days in advance for {city} Valentine's delivery to secure roses and your time window.",
      },
      {
        q: "Do you offer roses with chocolates?",
        a: "Yes — we pair roses with chocolate-covered strawberries and other add-ons for {city} deliveries.",
      },
      {
        q: "Can you deliver to a workplace or restaurant?",
        a: "We deliver Valentine's flowers to homes, offices, and restaurants across {city}, TX.",
      },
    ],
    schemaType: "Service",
    tier: 1,
    seasonalMonth: 2,
  },
  {
    slug: "anniversary",
    label: "Anniversary",
    plural: "Anniversaries",
    phrase: "anniversary flowers",
    h1Template: "Anniversary Flowers in {city}, TX",
    hubH1: "Anniversary Flower Delivery Across the RGV",
    metaTitleTemplate: "Anniversary Flowers in {city}, TX | Romantic Same-Day Delivery",
    metaDescTemplate:
      "Send anniversary flowers in {city}, TX. Roses & romantic bouquets hand-arranged and delivered same-day before {cutoff}. Call {phone}.",
    introVariants: [
      "Mark another year together with romantic anniversary flowers delivered across {city}, TX. Forget Me Not designs roses and elegant bouquets that say what words can't — same-day in {city} before {cutoff}.",
      "Celebrate your anniversary in {city} with a hand-arranged bouquet from Mariela. From classic roses to lush garden designs, we deliver romance to their door anywhere in {city}.",
      "Anniversary flower delivery in {city} is simple with Forget Me Not. Choose roses or a custom romantic arrangement and we'll deliver it fresh the same day across {city} and the RGV.",
    ],
    whatWeOffer: [
      "Classic & premium rose bouquets",
      "Romantic mixed arrangements",
      "Year-milestone designs",
      "Chocolate & balloon add-ons",
      "Same-day delivery before {cutoff}",
    ],
    localFocus: "landmarks",
    localHeading: "Anniversary delivery across {city}",
    productCategories: ["anniversary", "romance"],
    faqs: [
      {
        q: "Can I get same-day anniversary flowers in {city}?",
        a: "Yes — order before {cutoff} for same-day anniversary delivery to most {city} addresses.",
      },
      {
        q: "Can you deliver to a restaurant for a dinner surprise?",
        a: "We coordinate restaurant and workplace deliveries throughout {city}, TX.",
      },
      {
        q: "What flowers are best for an anniversary?",
        a: "Roses are classic, but Mariela can design any romantic style for your {city} anniversary — just call {phone}.",
      },
      {
        q: "Can I include a card or gift?",
        a: "Add a handwritten card, chocolates, or balloons to any {city} anniversary order.",
      },
    ],
    schemaType: "Service",
    tier: 1,
  },
  {
    slug: "sympathy",
    label: "Sympathy & Funeral",
    plural: "Sympathy & Funeral",
    phrase: "sympathy flowers",
    h1Template: "Sympathy & Funeral Flowers in {city}, TX",
    hubH1: "Sympathy & Funeral Flowers Across the RGV",
    metaTitleTemplate: "Sympathy & Funeral Flowers in {city}, TX | Same-Day Delivery",
    metaDescTemplate:
      "Sympathy & funeral flowers in {city}, TX. Standing sprays, wreaths & casket pieces delivered to funeral homes. Forget Me Not — call {phone}.",
    introVariants: [
      "In a difficult time, Forget Me Not Flowers helps {city} families honor their loved ones with timeless sympathy and funeral designs — standing sprays, wreaths, casket pieces, and sympathy bouquets delivered directly to funeral homes and homes across {city}, TX.",
      "When words aren't enough, flowers speak. We create dignified funeral and sympathy arrangements for services in {city}, coordinating delivery timing with local funeral homes throughout the Rio Grande Valley.",
      "Forget Me Not Flowers offers comforting sympathy florals for {city} families — from standing sprays and wreaths to sympathy plants and bouquets — delivered with care to {city}-area funeral homes and residences.",
    ],
    whatWeOffer: [
      "Standing sprays & easel wreaths",
      "Casket & casket-spray designs",
      "Sympathy bouquets & baskets",
      "Comforting plants",
      "Timed delivery to funeral homes",
    ],
    localFocus: "funeralHomes",
    localHeading: "Funeral homes we deliver to in {city}",
    productCategories: ["sympathy"],
    faqs: [
      {
        q: "Can you deliver funeral flowers to a {city} funeral home?",
        a: "Yes — we deliver standing sprays, wreaths, and casket pieces directly to funeral homes throughout {city}, timed to the service.",
      },
      {
        q: "How quickly can you arrange sympathy flowers?",
        a: "We often arrange same-day sympathy flowers in {city}; call {phone} and we'll work to meet your service time.",
      },
      {
        q: "What should I send to a funeral?",
        a: "Standing sprays and wreaths are traditional for the service, while plants and bouquets comfort the family at home in {city}.",
      },
      {
        q: "Can you coordinate delivery timing with the service?",
        a: "Yes — give us the funeral home and service time in {city} and we'll deliver ahead of the viewing.",
      },
    ],
    schemaType: "Service",
    tier: 1,
  },
  {
    slug: "get-well",
    label: "Get Well",
    plural: "Get Well",
    phrase: "get well flowers",
    h1Template: "Get Well Flowers in {city}, TX",
    hubH1: "Get Well Flower Delivery Across the RGV",
    metaTitleTemplate: "Get Well Flowers in {city}, TX | Hospital Delivery",
    metaDescTemplate:
      "Send get well flowers in {city}, TX. Cheerful bouquets & plants delivered to hospitals and homes same-day. Forget Me Not — call {phone}.",
    introVariants: [
      "Brighten a recovery with cheerful get-well flowers delivered across {city}, TX. Forget Me Not arranges uplifting bouquets and easy-care plants and delivers them to hospitals, care facilities, and homes throughout {city}.",
      "Send well-wishes to someone in {city} with a get-well bouquet from Forget Me Not. We deliver to {city}-area hospitals and residences, same-day before {cutoff}.",
      "A little color goes a long way. Mariela designs bright get-well arrangements for patients and recovering loved ones across {city}, with reliable hospital delivery.",
    ],
    whatWeOffer: [
      "Cheerful get-well bouquets",
      "Easy-care plants for recovery",
      "Bright, uplifting color palettes",
      "Add-on balloons & treats",
      "Same-day hospital delivery",
    ],
    localFocus: "hospitals",
    localHeading: "Hospitals we deliver to in {city}",
    productCategories: ["get-well", "everyday", "friendship"],
    faqs: [
      {
        q: "Can you deliver flowers to a hospital in {city}?",
        a: "Yes — we deliver get-well flowers to hospitals and care facilities throughout {city}; just provide the patient's name and room if known.",
      },
      {
        q: "Can I get same-day get-well delivery?",
        a: "Order before {cutoff} for same-day get-well delivery to most {city} hospitals and homes.",
      },
      {
        q: "Are plants a good get-well gift?",
        a: "Plants last longer and are great for recovery — we deliver both bouquets and plants in {city}.",
      },
      {
        q: "What if the patient has been discharged?",
        a: "Call {phone} and we'll redirect the delivery to their {city} home.",
      },
    ],
    schemaType: "Service",
    tier: 1,
  },
  {
    slug: "congratulations",
    label: "Congratulations",
    plural: "Congratulations",
    phrase: "congratulations flowers",
    h1Template: "Congratulations Flowers in {city}, TX",
    hubH1: "Congratulations Flower Delivery Across the RGV",
    metaTitleTemplate: "Congratulations Flowers in {city}, TX | Same-Day Delivery",
    metaDescTemplate:
      "Send congratulations flowers in {city}, TX. Graduations, new jobs, new homes & milestones. Hand-arranged & delivered. Forget Me Not — call {phone}.",
    introVariants: [
      "Celebrate the win with festive congratulations flowers delivered across {city}, TX. Whether it's a graduation, promotion, new home, or new baby, Forget Me Not designs vibrant arrangements and delivers same-day in {city}.",
      "Someone in {city} did something great — say congrats with flowers from Forget Me Not. We design bright, celebratory bouquets for graduations, new jobs, and milestones, delivered throughout {city}.",
      "From graduation season to grand openings, Mariela creates congratulations florals for every milestone in {city}, TX, delivered fresh and on time.",
    ],
    whatWeOffer: [
      "Graduation bouquets & leis",
      "New-job & promotion arrangements",
      "New-home & housewarming florals",
      "Grand-opening designs",
      "Same-day delivery before {cutoff}",
    ],
    localFocus: "landmarks",
    localHeading: "Congratulations delivery across {city}",
    productCategories: ["congratulations", "everyday", "thank-you"],
    faqs: [
      {
        q: "Can I send congratulations flowers same-day in {city}?",
        a: "Yes — order before {cutoff} for same-day delivery to most {city} addresses.",
      },
      {
        q: "Do you have graduation flowers?",
        a: "We design graduation bouquets and leis and deliver them throughout {city} during grad season.",
      },
      {
        q: "Can you deliver to a business for a grand opening?",
        a: "Absolutely — we deliver congratulatory arrangements to {city} businesses and events.",
      },
      {
        q: "Can you match school or team colors?",
        a: "Yes — tell us the colors and we'll design to match for your {city} celebration.",
      },
    ],
    schemaType: "Service",
    tier: 2,
  },
  {
    slug: "just-because",
    label: "Just Because",
    plural: "Just Because",
    phrase: "just because flowers",
    h1Template: "Just Because Flowers in {city}, TX",
    hubH1: "Just Because Flower Delivery Across the RGV",
    metaTitleTemplate: "Just Because Flowers in {city}, TX | Same-Day Delivery",
    metaDescTemplate:
      "Send 'just because' flowers in {city}, TX. Surprise someone with a fresh hand-arranged bouquet delivered same-day. Forget Me Not — call {phone}.",
    introVariants: [
      "No occasion required. Surprise someone you love in {city} with a fresh 'just because' bouquet from Forget Me Not, hand-arranged by Mariela and delivered same-day across {city}, TX.",
      "Sometimes the best gift is unexpected. Send 'just because' flowers to a friend, partner, or family member in {city} and brighten their whole day — same-day delivery before {cutoff}.",
      "Brighten an ordinary day in {city} with a thoughtful bouquet. Forget Me Not designs fresh 'just because' arrangements and delivers them throughout {city} and the RGV.",
    ],
    whatWeOffer: [
      "Fresh seasonal bouquets",
      "Designer's-choice arrangements",
      "Single-variety & mixed designs",
      "Add-on treats & balloons",
      "Same-day delivery before {cutoff}",
    ],
    localFocus: "landmarks",
    localHeading: "'Just because' delivery across {city}",
    productCategories: ["just-because", "everyday", "friendship"],
    faqs: [
      {
        q: "Can I send flowers in {city} with no special occasion?",
        a: "That's exactly what 'just because' flowers are for — we deliver thoughtful surprises throughout {city}, TX.",
      },
      {
        q: "Can I get same-day delivery?",
        a: "Yes — order before {cutoff} for same-day 'just because' delivery in {city}.",
      },
      {
        q: "What if I want the florist to choose?",
        a: "Pick a designer's-choice bouquet and Mariela will craft something beautiful with the freshest blooms for your {city} delivery.",
      },
      {
        q: "Can I send anonymously?",
        a: "We can keep the sender anonymous on the card for your {city} surprise — just let us know.",
      },
    ],
    schemaType: "Service",
    tier: 2,
  },
  {
    slug: "bridal-shower",
    label: "Bridal Shower",
    plural: "Bridal Showers",
    phrase: "bridal shower flowers",
    h1Template: "Bridal Shower Flowers in {city}, TX",
    hubH1: "Bridal Shower Flowers Across the RGV",
    metaTitleTemplate: "Bridal Shower Flowers in {city}, TX | Arrangements & Centerpieces",
    metaDescTemplate:
      "Bridal shower flowers in {city}, TX. Centerpieces, bouquets & décor hand-arranged by Forget Me Not. Same-day delivery or pre-scheduled. Call {phone}.",
    introVariants: [
      "Celebrate the bride-to-be in {city} with fresh, feminine florals from Forget Me Not Flowers. We design bridal shower centerpieces, table arrangements, guest-of-honor bouquets, and welcome displays — delivered and styled throughout {city}, TX.",
      "Planning a bridal shower in {city}? Forget Me Not creates cohesive floral packages — table centerpieces, a bride's bouquet, and accent pieces — in your chosen palette and delivered ready to display at your {city} venue.",
      "Forget Me Not Flowers makes {city} bridal showers bloom. From an intimate backyard brunch to a ballroom party, Mariela designs bridal shower florals to match your theme, colors, and guest count.",
    ],
    whatWeOffer: [
      "Table centerpieces for every guest count",
      "Bride's honorary bouquet",
      "Welcome & entry arrangements",
      "Themed color palettes & styles",
      "Delivery & setup in {city}",
    ],
    localFocus: "venues",
    localHeading: "Bridal shower venues near {city}",
    productCategories: ["everyday", "romance", "congratulations"],
    faqs: [
      {
        q: "Can you do bridal shower flowers for a small gathering in {city}?",
        a: "Absolutely — we design for intimate showers of any size in {city}, TX, from a few centerpieces to full venue florals.",
      },
      {
        q: "How far in advance should I order bridal shower flowers?",
        a: "We recommend at least a week ahead for {city} bridal showers to source specialty blooms; last-minute same-day orders are possible for simpler arrangements.",
      },
      {
        q: "Can you match a specific color palette?",
        a: "Yes — share your colors and we'll hand-select blooms to match for your {city} bridal shower.",
      },
      {
        q: "Do you set up the florals at the venue?",
        a: "We can deliver and arrange florals at your {city}-area venue so everything is in place before guests arrive.",
      },
    ],
    schemaType: "Service",
    tier: 1,
  },
  {
    slug: "romance",
    label: "Romance & Roses",
    plural: "Romance & Roses",
    phrase: "romantic flowers & roses",
    h1Template: "Roses & Romantic Flowers in {city}, TX",
    hubH1: "Roses & Romantic Flowers Across the RGV",
    metaTitleTemplate: "Roses & Romantic Flowers in {city}, TX | Same-Day Delivery",
    metaDescTemplate:
      "Send roses & romantic flowers in {city}, TX. Dozen roses, buchones & lush bouquets delivered same-day before {cutoff}. Forget Me Not — call {phone}.",
    introVariants: [
      "Say 'I love you' with roses delivered across {city}, TX. Forget Me Not designs classic dozen-rose bouquets, rose buchones, and lush romantic arrangements, delivered same-day to your special someone in {city}.",
      "Romance blooms in {city} with hand-arranged roses from Mariela. From a single dozen to dramatic premium designs, we deliver romance to their door anywhere in {city} before {cutoff}.",
      "Whether it's date night or 'just because I love you,' Forget Me Not creates romantic rose arrangements for {city}, TX, delivered fresh and same-day across the RGV.",
    ],
    whatWeOffer: [
      "Classic dozen & two-dozen roses",
      "Rose buchones & premium designs",
      "Lush romantic mixed bouquets",
      "Chocolate-covered strawberry combos",
      "Same-day delivery before {cutoff}",
    ],
    localFocus: "landmarks",
    localHeading: "Romantic delivery across {city}",
    productCategories: ["romance", "anniversary"],
    faqs: [
      {
        q: "Can I get same-day rose delivery in {city}?",
        a: "Yes — order before {cutoff} for same-day rose and romantic-flower delivery in {city}.",
      },
      {
        q: "How much is a dozen roses in {city}?",
        a: "Pricing varies by season and style; call {phone} for current dozen-rose options delivered in {city}.",
      },
      {
        q: "Can you deliver to a restaurant or workplace?",
        a: "We deliver romantic arrangements to homes, restaurants, and offices across {city}, TX.",
      },
      {
        q: "Do you offer roses with chocolates?",
        a: "Yes — pair roses with chocolate-covered strawberries and other add-ons for your {city} delivery.",
      },
    ],
    schemaType: "Service",
    tier: 2,
  },
];

export const TIER1_OCCASIONS = OCCASIONS.filter((o) => o.tier === 1);

export function getOccasion(slug: string): Occasion | undefined {
  return OCCASIONS.find((o) => o.slug === slug);
}
