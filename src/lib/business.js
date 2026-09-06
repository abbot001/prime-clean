// Central business configuration for PRIME CLEAN.
// Update these values with the real business details.

export const BUSINESS = {
  name: "PRIME CLEAN",
  tagline: "Professional laundry & dry cleaning, delivered.",
  phone: "+234 706 754 7137",
  phoneRaw: "+2347067547137",
  whatsapp: "2347067547137",
  email: null,
  address: "Fidelis Compound, behind SunPet Fuel Station, Ishieke, Abakaliki, Ebonyi State, Nigeria",
  mapsUrl: "https://maps.app.goo.gl/qzGznh9dPhSbjuqC7",
  mapCoords: { lat: 6.385, lng: 8.0274 },
  hours: [
    { day: "Monday – Saturday", time: "By appointment — call to confirm" },
    { day: "Sunday", time: "12:00 PM – 12:00 AM" },
  ],
  serviceArea: "Abakaliki & surrounding areas across Ebonyi State. Coverage confirmed at booking.",
  social: {
    instagram: "https://instagram.com",
    facebook: "https://facebook.com",
    twitter: "https://twitter.com",
  },
};

export const SERVICE_OPTIONS = [
  "Wash & Fold",
  "Dry Cleaning",
  "Ironing & Pressing",
  "Stain Removal",
  "Curtain & Bedding Care",
];

export const SERVICES = [
  {
    slug: "wash-fold",
    name: "Wash & Fold",
    from: "from $2.50 / lb",
    short: "Professional washing, drying, folding and packaging — returned fresh and ready to wear.",
    included: [
      "Sort, wash & dry by fabric type",
      "Neatly folded & packaged",
      "Hypoallergenic detergent options",
      "48-hour standard turnaround",
    ],
    turnaround: "48 hours",
    image: "WASH_FOLD",
  },
  {
    slug: "dry-cleaning",
    name: "Dry Cleaning",
    from: "from $4.00 / item",
    short: "Careful professional cleaning for garments that demand solvent treatment and gentle handling.",
    included: [
      "Solvent cleaning by garment type",
      "Hand-finished pressing",
      "Stain pre-treatment",
      "Protective garment packaging",
    ],
    turnaround: "72 hours",
    image: "DRY_CLEAN",
  },
  {
    slug: "ironing-pressing",
    name: "Ironing & Pressing",
    from: "from $3.00 / item",
    short: "Crisp, presentable finishing for shirts, trousers and everyday garments.",
    included: [
      "Steam press finishing",
      "Collars & cuffs shaped",
      "Folded or on hanger",
      "24-hour express available",
    ],
    turnaround: "24–48 hours",
    image: "IRON",
  },
  {
    slug: "stain-removal",
    name: "Stain Removal",
    from: "from $5.00 / item",
    short: "Specialized treatment for difficult stains, assessed and treated by our specialists.",
    included: [
      "Stain assessment & diagnosis",
      "Targeted solvent treatment",
      "Color-safe processes",
      "Outcome reported per item",
    ],
    turnaround: "72 hours",
    image: "STAIN",
  },
  {
    slug: "curtain-bedding",
    name: "Curtain & Bedding Care",
    from: "from $15.00 / item",
    short: "Cleaning and care for curtains, bedsheets, duvets, blankets and household textiles.",
    included: [
      "Bedsheets, duvets & blankets",
      "Curtain cleaning per panel",
      "Fresh, sanitized finish",
      "Careful re-packaging",
    ],
    turnaround: "3–5 days",
    image: "BEDDING",
  },
];

// Indicative pricing — replace with the business's official price list.
export const PRICING = [
  {
    category: "Laundry",
    note: "Priced per pound unless noted",
    items: [
      { item: "Wash & Fold", price: "$2.50 / lb" },
      { item: "Duvet (single)", price: "$25.00" },
      { item: "Bedsheet", price: "$8.00" },
      { item: "Pillow", price: "$6.00" },
    ],
  },
  {
    category: "Dry Cleaning",
    note: "Per garment",
    items: [
      { item: "Shirt", price: "$4.00" },
      { item: "Trousers", price: "$5.00" },
      { item: "Jacket / Blazer", price: "$8.00" },
      { item: "Coat", price: "$12.00" },
      { item: "Sweater", price: "$6.00" },
    ],
  },
  {
    category: "Shirts & Trousers",
    note: "Wash & press",
    items: [
      { item: "Shirt", price: "$3.50" },
      { item: "Trousers", price: "$4.50" },
      { item: "Polo shirt", price: "$3.00" },
      { item: "Jeans", price: "$4.00" },
    ],
  },
  {
    category: "Dresses & Suits",
    note: "Dry-cleaned & pressed",
    items: [
      { item: "Dress", price: "$8.00" },
      { item: "Suit (2-piece)", price: "$16.00" },
      { item: "Blazer", price: "$8.00" },
      { item: "Evening gown", price: "$18.00" },
    ],
  },
  {
    category: "Bedding",
    note: "Fresh & sanitized",
    items: [
      { item: "Bedsheet", price: "$8.00" },
      { item: "Duvet", price: "$25.00" },
      { item: "Blanket", price: "$15.00" },
      { item: "Comforter", price: "$22.00" },
      { item: "Pillow", price: "$6.00" },
    ],
  },
  {
    category: "Curtains",
    note: "Per panel",
    items: [
      { item: "Standard panel", price: "$12.00" },
      { item: "Sheer panel", price: "$8.00" },
      { item: "Heavy / lined panel", price: "$18.00" },
    ],
  },
  {
    category: "Special Care",
    note: "Quoted per item",
    items: [
      { item: "Stain removal", price: "from $5.00" },
      { item: "Leather & suede", price: "from $25.00" },
      { item: "Wedding dress", price: "from $40.00" },
      { item: "Alterations", price: "from $10.00" },
    ],
  },
];

export const TESTIMONIALS = [
  {
    name: "Amelia R.",
    role: "Busy professional",
    rating: 5,
    quote:
      "I dropped off my week and got it back folded like a boutique shelf. The pickup saved my evenings entirely.",
  },
  {
    name: "Daniel K.",
    role: "Returning customer",
    rating: 5,
    quote:
      "My suits come back immaculate every time. Crisp, fresh, and the delivery is always on the scheduled hour.",
  },
  {
    name: "Sofia M.",
    role: "Family of four",
    rating: 5,
    quote:
      "Bedding day used to be a whole afternoon. Now it's a tap and a doorstep exchange. Genuinely life-improving.",
  },
];

export const TRUST_BADGES = [
  { label: "Professional Care", desc: "Trained garment handling" },
  { label: "Quality Service", desc: "Inspected before delivery" },
  { label: "Pickup & Delivery", desc: "Doorstep convenience" },
  { label: "Secure Booking", desc: "Private, protected details" },
  { label: "Customer Support", desc: "Reachable every business day" },
];

export const HOW_IT_WORKS = [
  {
    step: "01",
    title: "Schedule Pickup",
    desc: "Choose a convenient pickup date and time that fits your day.",
  },
  {
    step: "02",
    title: "We Collect",
    desc: "Our team collects your clothes from your preferred address.",
  },
  {
    step: "03",
    title: "Professional Cleaning",
    desc: "Your items are cleaned and handled according to the selected service.",
  },
  {
    step: "04",
    title: "Fresh Delivery",
    desc: "Clean, fresh items are delivered back to your doorstep.",
  },
];

export const FAQS = [
  {
    q: "How does pickup work?",
    a: "Book a pickup online, choose a date and time window, and our team arrives at your address to collect your items — no need to be present if you leave them in a secure spot you specify.",
  },
  {
    q: "How long does cleaning take?",
    a: "Standard wash & fold is 48 hours, dry cleaning around 72 hours, and ironing can be as quick as 24 hours with express. Bedding and curtains typically take 3–5 days.",
  },
  {
    q: "How is my clothing handled?",
    a: "Every item is sorted by fabric and color, cleaned using the appropriate process, inspected, and finished by hand before being carefully packaged for delivery.",
  },
  {
    q: "What happens if an item has a difficult stain?",
    a: "Our specialists assess and treat stains individually using color-safe, targeted methods. We'll report the outcome per item so you always know what to expect.",
  },
  {
    q: "When will my order be delivered?",
    a: "Delivery is scheduled at booking. You'll receive your fresh items back within the turnaround window for your selected services, on the day you choose.",
  },
  {
    q: "How do I contact PRIME CLEAN?",
    a: "Call us, message us on WhatsApp, or use the contact form — our team responds during business hours and we'll confirm every booking promptly.",
  },
];

export const WHY_CHOOSE = [
  { title: "Professional Cleaning", desc: "Every fabric treated with the right process." },
  { title: "Doorstep Convenience", desc: "Pickup and delivery built around your schedule." },
  { title: "Careful Handling", desc: "Garments inspected at every stage." },
  { title: "Reliable Turnaround", desc: "Back when you expect it, every time." },
  { title: "Quality-Focused", desc: "Finished by hand, checked before delivery." },
  { title: "Easy Online Booking", desc: "A pickup in under a minute." },
];