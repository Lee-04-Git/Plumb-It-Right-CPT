/**
 * ─────────────────────────────────────────────────────────────────────────────
 *  SITE CONTENT: edit this file to update the website.
 * ─────────────────────────────────────────────────────────────────────────────
 *  Every business detail shown on the site lives here. Sources:
 *   • "FB flyer": the business's own services flyer posted on Facebook (Mar 2026)
 *   • "FB posts": captions and photos from the business's Facebook timeline
 *   • "listing": a public business directory listing
 *  Values marked `confirmed: false` still need the owner's confirmation (not shown on the site).
 */

export type ServiceId = 'electrical' | 'solar' | 'maintenance'

/** Responsive widths produced by scripts/optimize-images.mjs for job photos */
export const WORK_WIDTHS = [480, 800, 1200]
export type Img = { base: string; alt: string; position?: string }
const work = (name: string, alt: string, position?: string): Img => ({ base: `/images/work/${name}`, alt, position })

export const site = {
  name: 'Plumb It Right CPT',
  /** From the business's own Facebook intro. */
  description: 'Specialist in electrical and solar geyser installations as well as plumbing maintenance.',
  tagline: 'Plumbing & maintenance services', // FB flyer
  /** The business's own words in its Aug 2026 Facebook post. Confirm before launch. */
  team: { text: 'trade tested plumbers', confirmed: false },

  logo: {
    /** Logo from the Facebook profile, converted to transparent PNGs. */
    navy: '/images/logo-navy.png',
    white: '/images/logo-white.png',
  },

  /** Primary business number (Clint), on the FB flyer and the business listing. Confirmed by the client (Oct 2026). */
  phone: { display: '081 583 2999', international: '+27 81 583 2999', tel: '+27815832999', confirmed: true },

  /**
   * Named contacts as printed on the FB flyer. Not shown on the site: the client asked for a
   * single contact number. Kept here for reference.
   */
  contacts: [
    { name: 'Clint', display: '081 583 2999', tel: '+27815832999' },
    { name: 'Jade', display: '071 688 2731', tel: '+27716882731' },
  ],

  /** WhatsApp on the business number, in international format for wa.me links. Confirmed by the client. */
  whatsapp: { number: '27815832999', confirmed: true },

  /** Printed on the FB flyer and business card. */
  email: { address: 'Plumbitrightcpt@gmail.com', confirmed: false },

  /** Linked from the Facebook page intro. Not yet checked. */
  instagram: { url: 'https://www.instagram.com/PlumbitrightCPT_', handle: '@PlumbitrightCPT_' },

  facebook: {
    url: 'https://www.facebook.com/p/Plumb-it-right-CPT-61556120617709/',
    followers: 840,
    followersCheckedOn: 'October 2026',
  },

  location: {
    suburb: 'Portlands',
    area: "Mitchell's Plain",
    city: 'Cape Town',
    province: 'Western Cape',
    /** From a business listing. Hidden until the owner confirms it should be public. */
    street: 'Nile Way',
    postalCode: '7785',
    showStreetAddress: false,
  },

  serviceArea: { label: "Mitchell's Plain & across Cape Town", confirmed: false },

  /** Unknown: add e.g. [{ days: 'Mon – Fri', time: '08:00 – 17:00' }] once confirmed. */
  hours: null as { days: string; time: string }[] | null,
}

/** The three specialities named in the Facebook intro. */
export const services: {
  id: ServiceId
  title: string
  short: string
  body: string
  detail: string
  /** What the service covers: only items from the business's own description, flyer and job posts. */
  includes: string[]
  image: Img
}[] = [
  {
    id: 'electrical',
    title: 'Electrical Geyser Installations',
    short: 'Electrical geysers',
    body: 'Installation of new electrical geysers and replacement or relocation of old units.',
    detail:
      'Recent work includes a 150 L electric geyser moved to an outside wall with new copper pipework. Describe your current set-up and it can be assessed and quoted.',
    includes: [
      'New electric geyser installations',
      'Replacing old geysers',
      'Moving a geyser, for example to an outside wall',
      'New copper pipework and connections',
    ],
    image: work(
      'geyser-relocation-01',
      'A 150 litre electric geyser mounted on an outside wall with new copper pipework',
      '50% 40%',
    ),
  },
  {
    id: 'solar',
    title: 'Solar Geyser Installations',
    short: 'Solar geysers',
    body: 'Solar geyser installations, replacements and electric-to-solar conversions.',
    detail:
      'Solar water heating can reduce how much grid electricity goes into heating water. Geyserwise controllers and heat pumps are also installed. Ask which option suits your home.',
    includes: [
      'Solar geyser installations',
      'Solar geyser replacements',
      'Electric-to-solar conversions',
      'Geyserwise controllers',
      'Heat pumps',
    ],
    image: work(
      'solar-diepriver-01',
      'Flat-panel solar geyser installed on a tiled roof under a clear blue sky',
      '50% 45%',
    ),
  },
  {
    id: 'maintenance',
    title: 'Plumbing Maintenance',
    short: 'Plumbing maintenance',
    body: 'Everyday plumbing maintenance and repairs, from burst pipes to blocked drains and leaking cisterns.',
    detail:
      'Tell us what’s going on when you get in touch, and the job can be assessed and quoted before any work begins.',
    includes: [
      'Burst pipe repairs',
      'Blocked drains',
      'Leaking cisterns and float valves',
      'Taps and kitchen mixers',
      'Sinks and outdoor plumbing',
    ],
    image: work('burst-portlands-01', 'New water supply pipe being fitted during a burst pipe repair', '50% 60%'),
  },
]

/** Additional services, as listed on the business's own FB flyer (Mar 2026). */
/**
 * Additional services, as listed on the business's own FB flyer (Mar 2026). Each card on the
 * Services page uses `image`; to use a different picture (e.g. a generated illustration), put
 * a WebP in public/images/ and point `image.base` at it (see `WORK_WIDTHS` for the sizes needed).
 */
export const moreServices: { title: string; text: string; image: Img }[] = [
  {
    title: 'Burst pipe repairs',
    text: 'Finding and repairing burst supply pipes, including pipes that run underground.',
    image: work('burst-morgans-01', 'Trench dug along a wall to reach a burst underground pipe', '50% 60%'),
  },
  {
    title: 'Blocked drains',
    text: 'Clearing blocked drains so water runs away freely again.',
    image: work('outdoor-sink-01', 'Outdoor double sink with its waste and drainage pipework'),
  },
  {
    title: 'Bathroom renovations',
    text: 'Bathroom plumbing for renovations, from toilets and basins to showers and baths.',
    image: work('bathroom-clawfoot-01', 'Renovated bathroom with a clawfoot bath and brass taps'),
  },
  {
    title: 'Geyserwise unit installation',
    text: 'Fitting Geyserwise controllers to monitor and control your geyser.',
    image: work('solar-surrey-02', 'Inside of a Geyserwise geyser controller during installation'),
  },
  {
    title: 'Heat pump installation',
    text: 'Installing heat pumps for heating your home’s water.',
    image: work('solar-maitland-02', 'Hot water tank mounted on a steel stand on a rooftop', '50% 40%'),
  },
  {
    title: 'COC certificates',
    text: 'Plumbing certificates of compliance (COC) for your property.',
    image: work('water-meters-saltriver-01', 'Water meters and supply pipework installed in a ceiling void', '50% 70%'),
  },
]

export type Project = {
  slug: string
  title: string
  place: string
  date: string
  category: 'Solar geysers' | 'Electric geysers' | 'Repairs & maintenance' | 'Bathrooms' | 'Water supply'
  summary: string
  images: Img[]
}

/** Jobs posted on the business's Facebook page. Photos are the business's own. */
export const projects: Project[] = [
  {
    slug: 'solar-maitland',
    title: 'Solar geyser replacement',
    place: 'Maitland',
    date: 'Aug 2026',
    category: 'Solar geysers',
    summary: 'Evacuated-tube solar geysers on a commercial rooftop, with Table Mountain in the background.',
    images: [
      work(
        'solar-maitland-01',
        'Row of evacuated-tube solar geysers on a rooftop with Table Mountain behind',
        '50% 30%',
      ),
      work('solar-maitland-02', 'Solar geyser tank mounted on a steel stand'),
      work('solar-maitland-03', 'Close-up of a solar geyser element and thermostat'),
    ],
  },
  {
    slug: 'solar-diepriver',
    title: 'Solar geyser installation',
    place: 'Diep River',
    date: 'Sep 2025',
    category: 'Solar geysers',
    summary: 'A flat-panel solar geyser installed on a tiled roof.',
    images: [
      work('solar-diepriver-01', 'Flat-panel solar geyser on a tiled roof under a blue sky'),
      work('solar-diepriver-02', 'Solar geyser tank and panel seen from above the roofline'),
    ],
  },
  {
    slug: 'geyser-relocation',
    title: 'Geyser relocation & installation',
    place: "Portlands, Mitchell's Plain",
    date: 'Apr 2025',
    category: 'Electric geysers',
    summary: 'A 150 litre electric geyser installed on an outside wall, with new copper pipework and element wiring.',
    images: [
      work('geyser-relocation-01', 'Electric geyser on an outside wall with copper pipework', '50% 40%'),
      work('geyser-relocation-02', 'Close-up of the geyser element and thermostat wiring'),
    ],
  },
  {
    slug: 'solar-surrey',
    title: 'Electric-to-solar conversion',
    place: 'Surrey Estate',
    date: 'Apr 2025',
    category: 'Solar geysers',
    summary:
      'Conversion of an existing electric geyser to a solar system, including a solar panel, pump system and Geyserwise control unit.',
    images: [
      work('solar-surrey-01', 'Flat solar collector panel on a slate roof'),
      work('solar-surrey-02', 'Geyserwise controller wiring'),
    ],
  },
  {
    slug: 'bathroom-showcase',
    title: 'Bathroom renovation',
    place: 'Plattekloof',
    date: 'Oct 2025',
    category: 'Bathrooms',
    summary: 'A modern bathroom with a wall-hung toilet, compact basin and a walk-in rain shower.',
    images: [
      work('bathroom-showcase-02', 'Walk-in shower with ceiling rain head and large-format tiles'),
      work('bathroom-showcase-01', 'Wall-hung toilet and compact basin'),
    ],
  },
  {
    slug: 'bathroom-clawfoot',
    title: 'Bathroom renovation & master box',
    place: 'Kuils River',
    date: 'Apr 2025',
    category: 'Bathrooms',
    summary:
      'A completed bathroom renovation with a master box installed: clawfoot bath, brass mixer and a black subway-tile shower.',
    images: [
      work('bathroom-clawfoot-01', 'Clawfoot bath with brass taps beside a feature tile niche'),
      work('bathroom-clawfoot-02', 'Shower with black subway tiles and a brass rain head'),
    ],
  },
  {
    slug: 'jojo-tanks',
    title: 'JoJo tank feed & supply lines',
    place: 'Tokai',
    date: 'Apr 2025',
    category: 'Water supply',
    summary: 'Feed and supply lines completed for a bank of JoJo tanks, with Table Mountain in view.',
    images: [
      work('jojo-tanks-01', 'Blue supply pipes running along a gabion wall towards water tanks, Table Mountain behind'),
      work('jojo-tanks-02', 'Pipe junction on a gabion wall'),
    ],
  },
  {
    slug: 'burst-portlands',
    title: 'Burst pipe repair',
    place: 'Portlands',
    date: 'Apr 2025',
    category: 'Repairs & maintenance',
    summary: 'An underground burst pipe excavated and repaired, close to home in Portlands.',
    images: [
      work('burst-portlands-01', 'New flexible supply pipe being connected in an excavated trench'),
      work('burst-portlands-02', 'Excavated area beside a house where the burst pipe was found'),
    ],
  },
  {
    slug: 'burst-morgans',
    title: 'Burst pipe repair',
    place: "Morgan's Village",
    date: 'Apr 2025',
    category: 'Repairs & maintenance',
    summary: 'Trench dug along a wall to reach and replace a burst supply pipe.',
    images: [work('burst-morgans-01', 'Trench along a wall exposing a water supply pipe')],
  },
  {
    slug: 'water-meters',
    title: 'Smart water installation',
    place: 'Salt River',
    date: 'Aug 2026',
    category: 'Water supply',
    summary: 'Smart water meters installed in a meter cabinet.',
    images: [work('water-meters-saltriver-01', 'Two smart water meters installed in a meter cabinet')],
  },
  {
    slug: 'gas-geyser',
    title: 'Gas geyser installation',
    place: 'Tafelsig',
    date: 'Apr 2025',
    category: 'Repairs & maintenance',
    summary: 'A wall-mounted gas geyser installed with neat external pipe runs.',
    images: [work('gas-geyser-tafelsig-01', 'Wall-mounted gas geyser with pipes running down an exterior wall')],
  },
  {
    slug: 'outdoor-sink',
    title: 'Outdoor double sink',
    place: 'Elsies River',
    date: 'May 2025',
    category: 'Repairs & maintenance',
    summary: 'A steel double-bowl outdoor sink plumbed with supply and drainage.',
    images: [work('outdoor-sink-01', 'Outdoor stainless steel double sink with drainage pipes')],
  },
  {
    slug: 'kitchen-tap',
    title: 'Kitchen mixer tap replacement',
    place: 'Rocklands',
    date: 'Apr 2025',
    category: 'Repairs & maintenance',
    summary: 'A new kitchen mixer tap fitted to a stainless steel sink.',
    images: [work('kitchen-tap-rocklands-01', 'New chrome mixer tap on a stainless steel kitchen sink')],
  },
  {
    slug: 'float-valve',
    title: 'Float valve & basin taps replaced',
    place: 'Kuils River',
    date: 'May 2025',
    category: 'Repairs & maintenance',
    summary: 'A bottom-inlet float valve and basin taps replaced.',
    images: [work('float-valve-01', 'Inside of a toilet cistern with a new float valve')],
  },
]


/**
 * Customer reviews, kept faithful to the supplied material. Each showed a
 * five-star rating. Theo Oliver's review was truncated, so only its visible
 * content is summarised (and labelled as a summary).
 */
export const reviews: {
  name: string
  rating: number
  text: string
  kind: 'quote' | 'summary'
  topic?: string
}[] = [
  {
    name: 'Theo Oliver',
    rating: 5,
    kind: 'summary',
    topic: 'Geyser replacement',
    text: 'Praised the prompt response, assessment and quote.',
  },
  { name: 'Justin Thomas Patience', rating: 5, kind: 'quote', text: 'Quick fast and genuine workmanship.' },
  { name: 'Nazeema Pedro', rating: 5, kind: 'quote', text: 'Work was done excellent. Thanks!' },
]

export type BannerKey = 'home' | 'about' | 'services' | 'showcase' | 'contact'

/** Widths produced for page banners by scripts/optimize-images.mjs */
export const BANNER_WIDTHS = [960, 1600]

/**
 * Background banner at the top of each page. The images are made by `npm run images` from the
 * job photos listed in BANNERS (scripts/optimize-images.mjs). To use your own artwork, such as an
 * AI-generated image, save it as assets/source/banners/<page>.jpg, re-run `npm run images`, and
 * update the alt text here.
 */
export const banners: Record<BannerKey, Img> = {
  home: { base: '/images/banners/home', alt: 'Solar geysers on a Maitland rooftop with Table Mountain behind', position: '50% 30%' },
  about: { base: '/images/banners/about', alt: 'Blue supply pipes running past water tanks, with Table Mountain in the distance' },
  services: { base: '/images/banners/services', alt: 'Flat-panel solar geyser on a tiled roof in Diep River' },
  showcase: { base: '/images/banners/showcase', alt: 'Renovated bathroom with a clawfoot bath and brass taps' },
  contact: { base: '/images/banners/contact', alt: 'Rooftops in Surrey Estate under an open sky, with a newly fitted solar panel' },
}

export const navLinks = [
  { path: '/', label: 'Home', title: 'Plumber & Geyser Installations in Mitchell’s Plain, Cape Town' },
  { path: '/about', label: 'About Us', title: 'About Us' },
  { path: '/services', label: 'Services', title: 'Geyser Installations & Plumbing Services' },
  { path: '/showcase', label: 'Showcase', title: 'Our Work: Plumbing & Geyser Projects' },
  { path: '/contact', label: 'Contact', title: 'Contact Us' },
] as const

export type NavPath = (typeof navLinks)[number]['path']
