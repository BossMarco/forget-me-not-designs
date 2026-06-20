// Blog post data. Each post is one language; altSlug points to the other-language sibling.
// bodyHtml is rendered via dangerouslySetInnerHTML inside the .blog-prose wrapper.
// faqs are rendered by LocalFaq (accordion) AND wired to FAQPage schema.

export interface PostFaq {
  q: string;
  a: string;
}

export interface BlogPost {
  slug: string;
  lang: "en" | "es";
  altSlug: string;
  metaTitle: string; // ≤60 chars
  metaDescription: string; // 150-160 chars
  h1: string;
  publishDate: string; // YYYY-MM-DD
  category: string;
  categoryLabel: string;
  excerpt: string;
  bodyHtml: string;
  faqs: PostFaq[];
  tags: string[];
}

export const POSTS: BlogPost[] = [
  // ─── English: Birthday Flowers ─────────────────────────────────────────────
  {
    slug: "birthday-flowers-rgv",
    lang: "en",
    altSlug: "flores-para-cumpleanos-rgv",
    metaTitle: "Birthday Flower Delivery in the RGV — Same Day | Forget Me Not",
    metaDescription:
      "Send gorgeous birthday flowers anywhere in the Rio Grande Valley. Same-day delivery before 3 PM. Call Forget Me Not in Pharr: (956) 313-1847.",
    h1: "Birthday Flower Delivery in the Rio Grande Valley",
    publishDate: "2026-06-20",
    category: "birthday",
    categoryLabel: "Birthday",
    excerpt:
      "A hand-crafted birthday bouquet delivered the same day — to every city in the RGV before 3 PM. Roses, sunflowers, birth-month blooms, and more.",
    faqs: [
      {
        q: "Can I get same-day birthday flower delivery in McAllen?",
        a: "Yes. We deliver same-day to McAllen and every city in the Rio Grande Valley as long as you place your order before our 3 PM CST cut-off. Call (956) 313-1847 to place your order.",
      },
      {
        q: "What are the best birthday flowers for Mom?",
        a: "Roses in her favorite color, lilies, and soft garden mixes are perennial favorites for a mom's birthday. If you know her birth month, we can center the arrangement on her birth flower — a personal touch most people never expect.",
      },
      {
        q: "How much do birthday flower arrangements cost?",
        a: "Birthday arrangements start around $45 and go up depending on bloom type, size, and customization. Call (956) 313-1847 for current pricing on specific arrangements.",
      },
      {
        q: "Do you deliver birthday flowers outside of Pharr?",
        a: "Absolutely. We deliver to every city in the RGV — McAllen, Edinburg, Mission, Weslaco, Harlingen, Brownsville, South Padre Island, Rio Grande City, and everywhere in between. Same-day delivery is available for most areas before 3 PM.",
      },
      {
        q: "Can I send birthday flowers anonymously?",
        a: "Yes. Just let us know when you order and we'll omit the sender name from the card — or leave the card blank. Your secret is safe with us.",
      },
      {
        q: "What if I don't know the birthday person's favorite flower?",
        a: "Tell us about the person — their personality, home style, and age. We'll suggest an arrangement that fits them. Our designers have been making these matches for years.",
      },
    ],
    bodyHtml: `<p>Few gifts speak as directly to the heart as fresh flowers — and in the Rio Grande Valley, where birthdays mean family, music, and celebration, a hand-crafted bouquet from Forget Me Not makes the moment unforgettable. Whether you're surprising a mom in Mission, a best friend in Edinburg, or a grandparent in Brownsville, our same-day birthday flower delivery reaches every corner of the RGV before 3 PM. From vibrant sunflowers to lush romantic roses, every arrangement is designed and delivered locally — not shipped in a box. Just fresh, beautiful flowers, on time, every time.</p>

<h2>Why Birthday Flowers Are Always the Right Choice</h2>
<p>Birthday cakes are eaten and forgotten. Gift cards end up in a drawer. But fresh flowers transform a space and lift a mood in a way few other gifts can. Research from Rutgers University found that receiving flowers produces immediate positive emotions and reduces anxiety — especially when they arrive unexpectedly.</p>
<p>In the RGV, birthdays are a community event. Families gather, food gets made, music plays. A gorgeous flower arrangement on the table makes the whole celebration feel intentional. It signals that your family's birthday is worth marking — with something beautiful and real.</p>
<p>Flowers work for every age and every person. A towering sunflower arrangement makes a twenty-year-old laugh with delight; a soft arrangement of pale lavender roses and white lilies makes a grandmother tear up. We know the valley — call us and we'll match the arrangement to the person.</p>

<h2>Birthday Flowers by Birth Month — The Perfect Bloom for Every Birthday</h2>
<p>Every month has a traditional birth flower, just like a birthstone. Sending someone their birth month flower shows a level of thoughtfulness that goes far beyond a generic bouquet. Here's what each month's flower means — and why it makes the perfect birthday gift.</p>

<p><strong>January — Carnation.</strong> Carnations symbolize deep love, admiration, and good fortune. Red carnations express romantic love; pink carnations represent gratitude; white carnations mean pure love and good luck. Perfect for the January birthday person who deserves to feel truly seen.</p>

<p><strong>February — Violet &amp; Iris.</strong> Violets carry meanings of modesty, faithfulness, and everlasting love. Irises represent wisdom, hope, and courage — fitting for someone born in the month of love.</p>

<p><strong>March — Daffodil.</strong> Daffodils burst into spring just as March birthdays arrive. They symbolize new beginnings and unbounded joy — a signal that the birthday year ahead is full of possibility.</p>

<p><strong>April — Daisy &amp; Sweet Pea.</strong> Daisies represent innocence, loyalty, and cheerfulness — an uplifting choice for the April person who illuminates every room. Sweet peas carry a message of blissful appreciation.</p>

<p><strong>May — Lily of the Valley.</strong> One of the most delicate blooms, lily of the valley means happiness, purity, and good luck. It's said to bring fortune to anyone who receives it — what better birthday gift?</p>

<p><strong>June — Rose.</strong> June's birth flower is the rose — the world's most recognized symbol of love and beauty. Red for romance, yellow for friendship, pink for gratitude, orange for enthusiasm. A June birthday is the perfect excuse to go all-in on roses.</p>

<p><strong>July — Larkspur.</strong> Larkspur represents a strong bond of love and positivity. Its tall, dramatic spikes add visual interest to any arrangement and pair beautifully with white lilies for a summer birthday look.</p>

<p><strong>August — Gladiolus.</strong> The gladiolus ("gladiator's flower") stands for strength, integrity, and infatuation. A bold choice for a bold August birthday — especially striking during the valley's summer heat.</p>

<p><strong>September — Aster.</strong> Asters represent wisdom, valor, and faith. Their name means "star" in Greek, and they come in rich purples, pinks, and whites that suit the thoughtful September birthday person perfectly.</p>

<p><strong>October — Marigold.</strong> October's birth flower is the marigold — called <em>cempasúchil</em> in our community. In the Rio Grande Valley, marigolds carry deep cultural meaning beyond birthdays: they're the flower of Día de los Muertos, representing the luminous path that guides souls home. Gifting an October birthday person marigolds connects their celebration to the valley's richest traditions.</p>

<p><strong>November — Chrysanthemum.</strong> Chrysanthemums represent joy, optimism, and longevity — the right message for someone entering the season of gratitude.</p>

<p><strong>December — Narcissus &amp; Holly.</strong> Narcissus (paperwhite) symbolizes hope, wealth, and good luck heading into the new year. Paired with holly accents, it makes a festive December birthday arrangement that stands apart from standard holiday decor.</p>

<h2>Most Popular Birthday Flower Arrangements at Forget Me Not</h2>
<p>Our customers' most-requested birthday arrangements include:</p>
<ul>
  <li><strong>The Classic Rose Bouquet</strong> — Available in any color combination. One of our most-ordered gifts for moms, partners, and grandmothers.</li>
  <li><strong>The Sunflower Celebration Bundle</strong> — Bright, oversized sunflowers with lush greenery for a bold, joyful statement. A favorite for younger birthdays and garden-lovers.</li>
  <li><strong>The Garden Mix</strong> — A loose, natural bouquet mixing seasonal blooms in coordinating colors — perfect for the person who loves an organic, gathered look.</li>
  <li><strong>The Tropical RGV Arrangement</strong> — Birds of paradise, anthuriums, and tropical greenery that captures the spirit of the Rio Grande Valley. A favorite for outdoor birthday parties.</li>
  <li><strong>The Lavender Dream</strong> — Soft lilacs, lavender spray roses, and eucalyptus for the person who gravitates toward calm, elegant spaces.</li>
</ul>
<p>Call us at <a href="tel:+19563131847">(956) 313-1847</a> and describe who you're shopping for — we'll match the arrangement to their personality in minutes.</p>

<h2>Same-Day Birthday Flower Delivery Across the Rio Grande Valley</h2>
<p>We deliver birthday flowers to every city in the RGV the same day you order, as long as you place your order before our 3 PM CST cut-off. Some of our most common delivery destinations:</p>
<ul>
  <li><a href="/flower-delivery/mcallen/birthday">Birthday flowers in McAllen</a></li>
  <li><a href="/flower-delivery/edinburg/birthday">Birthday flowers in Edinburg</a></li>
  <li><a href="/flower-delivery/mission/birthday">Birthday flowers in Mission</a></li>
  <li><a href="/flower-delivery/harlingen/birthday">Birthday flowers in Harlingen</a></li>
  <li><a href="/flower-delivery/brownsville/birthday">Birthday flowers in Brownsville</a></li>
  <li><a href="/flower-delivery/weslaco/birthday">Birthday flowers in Weslaco</a></li>
  <li><a href="/flower-delivery/pharr/birthday">Birthday flowers in Pharr</a></li>
</ul>
<p>For cities farther out — Roma, Rio Grande City, Raymondville, South Padre Island — next-day or advance delivery is available. Call us and we'll sort it out.</p>

<h2>Tips for Making a Birthday Arrangement Extra Special</h2>
<ul>
  <li><strong>Add a handwritten note.</strong> We include a small card with every arrangement. Tell us exactly what to write — we'll handle the rest.</li>
  <li><strong>Upgrade to a vase.</strong> Our vased arrangements arrive delivery-ready and look stunning on a dining table with no setup required from the recipient.</li>
  <li><strong>Consider a plant for longevity.</strong> If the birthday person loves greenery, pair a bouquet with a potted succulent or orchid — they'll enjoy it for months.</li>
  <li><strong>Order before noon for maximum flexibility.</strong> While we deliver same-day until 3 PM, ordering in the morning gives us more scheduling options and ensures the freshest blooms.</li>
  <li><strong>Ask about custom colors.</strong> Have a specific color palette in mind? Call us directly — we work with what's in season and do our best to match.</li>
</ul>`,
    tags: ["birthday", "same-day delivery", "RGV", "birth month flowers"],
  },

  // ─── Spanish: Flores para Cumpleaños ───────────────────────────────────────
  {
    slug: "flores-para-cumpleanos-rgv",
    lang: "es",
    altSlug: "birthday-flowers-rgv",
    metaTitle: "Flores para Cumpleaños — Entrega el Mismo Día | Valle de TX",
    metaDescription:
      "Envía flores hermosas para cumpleaños en todo el Valle de Texas. Entrega el mismo día antes de las 3 PM. Llama a Forget Me Not: (956) 313-1847.",
    h1: "Flores para Cumpleaños en el Valle de Texas — Entrega el Mismo Día",
    publishDate: "2026-06-20",
    category: "cumpleanos",
    categoryLabel: "Cumpleaños",
    excerpt:
      "Arreglos de cumpleaños hechos a mano y entregados el mismo día en todo el Valle — desde McAllen hasta Brownsville. Rosas, girasoles, flores del mes de nacimiento y más.",
    faqs: [
      {
        q: "¿Puedo pedir flores de cumpleaños con entrega el mismo día en McAllen?",
        a: "Sí. Entregamos el mismo día en McAllen y en todas las ciudades del Valle de Texas, siempre que hagas tu pedido antes de las 3 PM (hora del centro). Llama al (956) 313-1847 para hacer tu pedido.",
      },
      {
        q: "¿Cuáles son las mejores flores para el cumpleaños de mamá?",
        a: "Para el cumpleaños de mamá, las rosas en su color favorito, los lirios y los ramos mixtos de jardín son los más queridos. Si sabes en qué mes nació, podemos crear un arreglo centrado en su flor de nacimiento — un detalle que muy pocas personas esperan.",
      },
      {
        q: "¿Cuánto cuestan los arreglos de flores para cumpleaños?",
        a: "Los arreglos de cumpleaños comienzan desde $45 y varían según el tipo de flor, el tamaño y la personalización. Llama al (956) 313-1847 para conocer los precios actuales.",
      },
      {
        q: "¿Entregan flores de cumpleaños fuera de Pharr?",
        a: "Claro que sí. Entregamos en todo el Valle — McAllen, Edinburg, Mission, Weslaco, Harlingen, Brownsville, South Padre Island, Río Grande City y más. La entrega el mismo día está disponible para la mayoría de las ciudades antes de las 3 PM.",
      },
      {
        q: "¿Puedo enviar flores de cumpleaños de forma anónima?",
        a: "Sí. Solo avísanos al hacer el pedido y omitimos el nombre del remitente en la tarjeta — o la dejamos en blanco. Tu secreto está a salvo.",
      },
      {
        q: "¿Qué hago si no sé cuál es la flor favorita de quien cumple años?",
        a: "Cuéntanos sobre la persona — su personalidad, el estilo de su hogar, su edad. Nosotros sugerimos el arreglo que mejor le quede. Nuestros diseñadores llevan años haciendo exactamente eso.",
      },
    ],
    bodyHtml: `<p>En el Valle de Texas, los cumpleaños son una celebración familiar como ninguna otra. La música, la comida, la familia reunida — y en el centro de todo, un arreglo de flores frescas que dice "te recuerdo, te quiero, y quiero que este día sea especial." En Forget Me Not Flowers &amp; Gifts en Pharr, creamos cada arreglo de cumpleaños a mano y entregamos en todo el Valle — desde Río Grande City hasta South Padre Island — el mismo día del pedido (pide antes de las 3 PM).</p>

<p>Ya sea que busques rosas clásicas, girasoles vibrantes, o un arreglo mixto personalizado que capture exactamente quién es el cumpleañero, esta guía te ayuda a elegir con confianza y a sorprender a quien más quieres.</p>

<h2>¿Por Qué las Flores Son el Regalo Ideal para un Cumpleaños?</h2>
<p>El pastel se acaba. Las tarjetas de regalo se pierden. Pero un arreglo de flores frescas transforma un espacio y levanta el ánimo de una manera que pocos regalos pueden igualar. Investigadores de la Universidad de Rutgers encontraron que recibir flores genera emociones positivas inmediatas y reduce la ansiedad — especialmente cuando llegan como sorpresa.</p>
<p>En nuestra comunidad del Valle, un cumpleaños merece celebrarse con flores. Un arreglo hermoso sobre la mesa dice que ese día se festeja de verdad — con belleza, con cuidado, con intención. Las flores funcionan para todas las edades: el arreglo de girasoles gigantes que hace reír a un joven de 20 años, o la docena de rosas suaves que hace llorar de emoción a una abuela de 80.</p>

<h2>Flores Según el Mes de Nacimiento — La Flor Perfecta para Cada Cumpleañero</h2>
<p>Cada mes tiene una flor de nacimiento tradicional, igual que una piedra de nacimiento. Enviar la flor del mes de alguien demuestra un nivel de consideración que va mucho más allá de un ramo genérico. Esto es lo que simboliza la flor de cada mes — y por qué hace el regalo de cumpleaños perfecto.</p>

<p><strong>Enero — Clavel.</strong> El clavel representa amor profundo, admiración y buena fortuna. Claveles rojos para el amor romántico; rosados para gratitud y cariño; blancos para amor puro y buena suerte. Perfecto para el cumpleañero de enero que merece sentirse verdaderamente querido.</p>

<p><strong>Febrero — Violeta e Iris.</strong> La violeta simboliza modestia, fidelidad y amor eterno. El iris representa sabiduría, esperanza y valentía. Para alguien nacido en el mes del amor, estas flores llevan un significado extra especial.</p>

<p><strong>Marzo — Narciso.</strong> Los narcisos florecen con la llegada de la primavera, igual que los cumpleañeros de marzo. Simbolizan nuevos comienzos y alegría sin límites — una señal de que el año que comienza está lleno de posibilidades.</p>

<p><strong>Abril — Margarita y Guisante de Olor.</strong> La margarita representa inocencia, lealtad y alegría. Una elección fresca y luminosa para el cumpleañero de abril que ilumina los cuartos con su sola presencia.</p>

<p><strong>Mayo — Lirio del Valle.</strong> Una de las flores más delicadas y queridas, el lirio del valle simboliza felicidad, pureza y buena suerte. Se dice que trae fortuna a quien lo recibe — ¿qué mejor regalo de cumpleaños?</p>

<p><strong>Junio — Rosa.</strong> La flor de junio es la rosa — el símbolo más reconocido del amor y la belleza en el mundo. Roja para el amor romántico, amarilla para la amistad, rosada para gratitud, naranja para entusiasmo.</p>

<p><strong>Julio — Espuela de Caballero.</strong> La espuela de caballero representa un fuerte vínculo de amor, ligereza y positividad. Su tallo dramático y colorido es perfecto para un arreglo de verano con carácter.</p>

<p><strong>Agosto — Gladiolo.</strong> El gladiolo — "la flor del gladiador" — representa fuerza, integridad e infatuación. Una elección audaz para un cumpleañero igualmente audaz de agosto.</p>

<p><strong>Septiembre — Aster.</strong> El aster simboliza sabiduría, valor y fe. Su nombre significa "estrella" en griego, y sus colores morados, rosados y blancos son elegantes y únicos.</p>

<p><strong>Octubre — Cempasúchil.</strong> La flor de octubre es el cempasúchil — el marigold. En el Valle de Texas, esta flor lleva un significado profundo que va más allá del cumpleaños: es la flor del Día de los Muertos, el camino luminoso que guía a las almas de regreso a casa. Regalar cempasúchiles a alguien que nació en octubre es conectar su celebración con una de las tradiciones más queridas de nuestra cultura.</p>

<p><strong>Noviembre — Crisantemo.</strong> El crisantemo representa alegría, optimismo y larga vida — perfecto para alguien que cumple años en la temporada de agradecimiento y reflexión.</p>

<p><strong>Diciembre — Narciso y Acebo.</strong> El narciso (paperwhite) simboliza esperanza, riqueza y buena suerte para el año nuevo. Combinado con detalles de acebo, hace un arreglo de diciembre festivo que se distingue del adorno navideño típico.</p>

<h2>Los Arreglos de Cumpleaños Más Pedidos en Forget Me Not</h2>
<p>Los arreglos que nuestros clientes piden más para cumpleaños son:</p>
<ul>
  <li><strong>La Docena de Rosas Clásicas</strong> — En cualquier combinación de colores. El regalo más solicitado para mamás, parejas y abuelas.</li>
  <li><strong>El Arreglo de Girasoles</strong> — Girasoles grandes y brillantes con follaje verde. Favorito para cumpleaños juveniles y amantes de la naturaleza.</li>
  <li><strong>El Ramo Silvestre Mixto</strong> — Flores de temporada en colores coordinados, perfecto para quien prefiere un look natural y relajado.</li>
  <li><strong>El Arreglo Tropical del Valle</strong> — Aves del paraíso, anturios y follaje tropical que captura el espíritu del Valle de Texas. Favorito para fiestas al aire libre.</li>
  <li><strong>El Sueño Lila</strong> — Rosas spray lavanda, lila y eucalipto para quien prefiere espacios tranquilos y elegantes.</li>
</ul>
<p>Llámanos al <a href="tel:+19563131847">(956) 313-1847</a> y descríbenos a la persona — en minutos encontramos el arreglo perfecto para su personalidad.</p>

<h2>Entrega de Flores de Cumpleaños en Todo el Valle de Texas</h2>
<p>Entregamos flores de cumpleaños en todas las ciudades del Valle el mismo día del pedido, siempre que pidas antes de las 3 PM (hora del centro). Algunas de las ciudades donde entregamos con más frecuencia:</p>
<ul>
  <li><a href="/flower-delivery/mcallen/birthday">Flores de cumpleaños en McAllen</a></li>
  <li><a href="/flower-delivery/edinburg/birthday">Flores de cumpleaños en Edinburg</a></li>
  <li><a href="/flower-delivery/mission/birthday">Flores de cumpleaños en Mission</a></li>
  <li><a href="/flower-delivery/harlingen/birthday">Flores de cumpleaños en Harlingen</a></li>
  <li><a href="/flower-delivery/brownsville/birthday">Flores de cumpleaños en Brownsville</a></li>
  <li><a href="/flower-delivery/weslaco/birthday">Flores de cumpleaños en Weslaco</a></li>
  <li><a href="/flower-delivery/pharr/birthday">Flores de cumpleaños en Pharr</a></li>
</ul>
<p>Para ciudades más alejadas — Roma, Río Grande City, Raymondville, South Padre Island — ofrecemos entrega al día siguiente o con anticipación. Llámanos y lo arreglamos juntos.</p>

<h2>Cómo Hacer que las Flores de Cumpleaños Sean Aún Más Especiales</h2>
<ul>
  <li><strong>Agrega una nota escrita a mano.</strong> Incluimos una tarjeta pequeña con cada arreglo. Dinos qué quieres que diga — nosotros nos encargamos.</li>
  <li><strong>Pide el arreglo en jarrón.</strong> Los arreglos en jarrón llegan listos para exhibir — la persona que los recibe no necesita buscar un recipiente.</li>
  <li><strong>Considera una planta para mayor durabilidad.</strong> Si al cumpleañero le encanta la naturaleza, complementa el ramo con un suculento o una orquídea en maceta — la disfrutará por meses.</li>
  <li><strong>Pide antes del mediodía para más opciones.</strong> Aunque entregamos el mismo día hasta las 3 PM, pedir en la mañana nos da más flexibilidad y garantiza las flores más frescas.</li>
  <li><strong>Pregunta por colores específicos.</strong> ¿Tienes una paleta de colores en mente? Llámanos directamente — trabajamos con lo que hay en temporada y hacemos todo lo posible por satisfacer tu visión.</li>
</ul>`,
    tags: ["cumpleaños", "entrega el mismo día", "Valle de Texas", "flores por mes"],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return POSTS.find((p) => p.slug === slug);
}
