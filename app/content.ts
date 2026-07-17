export const business = {
  name: "Carli & Co Organic Hair & Beauty",
  shortName: "Carli & Co",
  tagline: "Look & Feel Beautiful",
  phoneDisplay: "0493 073 743",
  phoneHref: "tel:+61493073743",
  email: "info@ccorganicsalon.com",
  address: "Shop 3, 62 Davies Road, Claremont WA 6010",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Shop+3%2C+62+Davies+Road%2C+Claremont+WA+6010",
  bookingUrl: "https://bookings.gettimely.com/carliandco/bb/book",
};

export const navigation = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/about", label: "About" },
  { href: "/gallery", label: "Gallery & Reviews" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" },
];

export const openingHours = [
  ["Monday", "Closed"],
  ["Tuesday", "9:30 am – 3:30 pm"],
  ["Wednesday", "9:30 am – 7:30 pm"],
  ["Thursday", "9:30 am – 7:30 pm"],
  ["Friday", "9:30 am – 4:30 pm"],
  ["Saturday", "9:00 am – 3:00 pm"],
  ["Sunday", "Closed"],
];

export type ServiceItem = { name: string; price: string; description?: string };
export type ServiceGroup = { id: string; title: string; kicker: string; image?: string; items: ServiceItem[] };

export const serviceGroups: ServiceGroup[] = [
  {
    id: "colour",
    title: "Colour",
    kicker: "Blondes, balayage & dimensional tones",
    image: "/images/hair-texture.webp",
    items: [
      { name: "Half roots application", price: "$80" },
      { name: "Root colour retouch", price: "$100" },
      { name: "Roots to ends colour / semi-permanent", price: "$120" },
      { name: "Blonde retouch", price: "$140" },
      { name: "Face-framing foils / T-section", price: "$60" },
      { name: "Feature foils", price: "$100" },
      { name: "Half head foils", price: "$150" },
      { name: "Full head foils", price: "$200" },
      { name: "Balayage full application", price: "$220" },
      { name: "Balayage half application", price: "$175" },
      { name: "Toner — stand alone", price: "$50" },
      { name: "Toner with colour service", price: "$30" },
      { name: "Men’s colour", price: "$50" },
      { name: "Root touch-up between foils", price: "$70" },
      { name: "Corrective colour", price: "Complimentary consultation" },
    ],
  },
  {
    id: "cuts-styling",
    title: "Cuts & Styling",
    kicker: "Contemporary, flattering and easy to live in",
    image: "/images/precision-cut.webp",
    items: [
      { name: "Ladies cut", price: "$70" },
      { name: "Ladies cut + blow-dry — short", price: "$100" },
      { name: "Ladies cut + blow-dry — long", price: "$120" },
      { name: "Men’s cut", price: "$50" },
      { name: "Men’s shave", price: "$40" },
      { name: "Kids 0–13", price: "$40" },
      { name: "Kids 14–17", price: "$50" },
      { name: "Hair donation cut — 20 cm+", price: "$110" },
      { name: "Fringe trim", price: "$10" },
      { name: "Blow-wave — short", price: "$50" },
      { name: "Blow-wave — medium", price: "$60" },
      { name: "Blow-wave — long", price: "$70" },
      { name: "Blow-wave + GHD curls", price: "$80" },
      { name: "Curls only", price: "From $55" },
      { name: "GHD curls — no wash", price: "$55" },
      { name: "Loyal customer / weekly blow-dry", price: "$55" },
      { name: "Special occasion hair upstyle", price: "$100" },
      { name: "Bridal hairstyle", price: "$120" },
      { name: "Wedding hair trial", price: "$100" },
      { name: "Haircut with colour service", price: "$55" },
      { name: "Flower girl", price: "$60" },
      { name: "Bridal party", price: "$80" },
    ],
  },
  {
    id: "quiet-chair",
    title: "Quiet Chair",
    kicker: "Private, considered services",
    image: "/images/salon-stations.webp",
    items: [
      { name: "Serenity Cut — 50 min", price: "$100", description: "A peaceful, spa-like haircut in a private space for calm self-care, neurodivergent guests and highly sensitive individuals." },
      { name: "Modesty Cut — 50 min", price: "$100", description: "A respectful private haircut for clients observing religious or cultural head-covering practices." },
      { name: "Compassion Cut — 50 min", price: "$100", description: "A gentle private appointment for anyone navigating hair loss, grief or a significant life transition." },
      { name: "Hair Loss Support Cut — 50 min", price: "$100", description: "A private one-to-one service for clients facing cancer treatment or medical hair loss." },
    ],
  },
  {
    id: "beauty-specialist",
    title: "Beauty & Specialist Services",
    kicker: "Occasions, smoothing and extensions",
    image: "/images/blowdry.webp",
    items: [
      { name: "Full face makeup", price: "Price on request", description: "Organic makeup for everyday wear, bridal parties and special events." },
      { name: "Hair extensions", price: "Consultation" },
      { name: "Organic perm", price: "Consultation" },
      { name: "Smoother / defrizzer", price: "Consultation" },
    ],
  },
  {
    id: "add-ons",
    title: "Add-ons",
    kicker: "Finishing details",
    items: [
      { name: "Wash and dry-off — short", price: "$10" },
      { name: "Wash and dry-off — medium / long", price: "$20" },
    ],
  },
];
