// ---------------------------------------------------------------------------
// Hope Car Rental — single source of truth for all site content.
// Business facts (names, prices, contact, features) are preserved exactly from
// the reference site hopecarrental.mu. Descriptive copy is written to match.
// ---------------------------------------------------------------------------

export const business = {
  name: "Hope Car Rental",
  domain: "Hopecarrental.mu",
  tagline: "Reliable Rides, Remarkable Experiences",
  phone: "+230 58 097 529",
  phoneHref: "tel:+23058097529",
  whatsappHref: "https://wa.me/23058097529",
  email: "infohopecarrental@gmail.com",
  emailHref: "mailto:infohopecarrental@gmail.com",
  address: {
    line1: "Pereybere - Grand Baie",
    line2: "Port Louis 30510",
    country: "Mauritius",
  },
  currency: "EUR",
};

export const nav = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Fleet", href: "#fleet" },
  { label: "Feedback", href: "#feedback" },
  { label: "Contact", href: "#contact" },
];

export const about = {
  heading: "About Us",
  intro:
    "Welcome to Hope Car Rental, your trusted partner for exploring the beautiful island of Mauritius. Nestled in the heart of this tropical paradise, Hope Car Rental offers an unparalleled experience in transportation solutions, allowing you to discover every corner of this enchanting destination with ease and comfort. With a commitment to exceptional service and a passion for customer satisfaction, we provide a wide range of well-maintained vehicles to suit your every need. Whether you're here for business or leisure, our dedicated team is here to ensure your journey is smooth, memorable, and filled with endless possibilities. Let Hope Car Rental be your gateway to adventure in Mauritius.",
};

// Trust pillars from the reference "About" section.
export const pillars = [
  {
    key: "fleet",
    title: "Diverse Fleet",
    icon: "fleet",
    body: "Hope Car Rental boasts a diverse fleet of vehicles, catering to the needs and preferences of every traveler. From compact cars to spacious SUVs and 7-seater vans, we offer a wide range of options to suit various travel requirements.",
  },
  {
    key: "price",
    title: "Best Price Guarantee",
    icon: "price",
    body: "At Hope Car Rental, we understand the importance of affordability without compromising on quality. We offer competitive pricing and flexible rental options, allowing customers to access reliable transportation solutions at cost-effective rates.",
  },
  {
    key: "service",
    title: "Exceptional Service",
    icon: "service",
    body: "We prioritize customer satisfaction and aim to provide exceptional service at every touchpoint. Our friendly and knowledgeable staff are dedicated to assisting customers throughout their rental experience, ensuring a seamless and enjoyable journey from start to finish.",
  },
  {
    key: "maintenance",
    title: "Meticulous Maintenance",
    icon: "maintenance",
    body: "The safety and comfort of our customers are paramount. We uphold rigorous standards of vehicle maintenance, ensuring that every car in our fleet is regularly inspected and serviced to deliver optimal performance and reliability on the road.",
  },
];

export const servicesIntro =
  "At Hope Car Rental, we're committed to providing exceptional service tailored to your needs. With a diverse fleet, competitive rates, and flexible rental options, we make every journey convenient and enjoyable. Our friendly team is dedicated to assisting you from booking to drop-off, ensuring a seamless experience. Whether it's a weekend getaway or long-term travel, we have the perfect vehicle for you. Experience the difference with Hope Car Rental, where satisfaction is guaranteed.";

// Included-with-every-rental perks.
export const perks = [
  {
    title: "No Deposit Required",
    tag: "FREE",
    body: "Benefit from the convenience of complimentary delivery and collection of the vehicle to your specified location, adding ease to your rental experience.",
    icon: "shield",
  },
  {
    title: "24HR Mechanical Assistance",
    tag: "FREE",
    body: "Drive with confidence knowing that our dedicated team is available round-the-clock to provide assistance and support in the event of any mechanical issues.",
    icon: "wrench",
  },
];

// ---------------------------------------------------------------------------
// Fleet — every category, price and model preserved from the reference site hopecarrental.mu.
// Real vehicle photos downloaded from hopecarrental.mu into /images/cars/
// ---------------------------------------------------------------------------
export const categories = [
  {
    id: "economy",
    name: "Economy",
    label: "Economy Cars",
    from: 35,
    body: "hatch",
    accent: "#35c4c2",
    image: "/images/cars/nissan-micra.jpg",
    seats: 4,
    bags: 2,
    blurb:
      "Nimble, fuel-sipping hatchbacks — the smart choice for couples and solo travellers navigating Mauritius on a budget.",
    cars: ["Nissan Micra", "Suzuki Alto", "Kia Picanto", "Hyundai i10"],
  },
  {
    id: "compact",
    name: "Compact",
    label: "Compact Cars",
    from: 38,
    body: "hatch",
    accent: "#1aa8a7",
    image: "/images/cars/toyota-vitz.jpg",
    seats: 5,
    bags: 2,
    blurb:
      "A little more room without losing the easy city manners — comfortable for small families and longer island drives.",
    cars: [
      "Toyota Vitz",
      "Nissan Note",
      "Honda Fit",
      "Hyundai Grand i10",
      "Kia Rio",
      "Hyundai i20",
    ],
  },
  {
    id: "sedan",
    name: "Sedan",
    label: "Sedan Cars",
    from: 49,
    body: "sedan",
    accent: "#345a9e",
    image: "/images/cars/hyundai-accent.png",
    seats: 5,
    bags: 3,
    blurb:
      "Refined four-door comfort with a generous boot — ideal for business travel and relaxed family touring.",
    cars: ["Hyundai Accent", "Suzuki Dezire", "Kia Rio Sedan", "Perodua Bezza"],
  },
  {
    id: "7seater",
    name: "7-Seater",
    label: "7-Seater Cars",
    from: 65,
    body: "van",
    accent: "#e9a62f",
    image: "/images/cars/suzuki-ertiga.jpg",
    seats: 7,
    bags: 4,
    blurb:
      "Space for the whole group and the luggage to match — built for family holidays and friends exploring together.",
    cars: [
      "Suzuki Ertiga",
      "Toyota Avanza",
      "Toyota Rush",
      "Perodua Alza",
      "Nissan NV200",
    ],
  },
  {
    id: "suv",
    name: "SUV",
    label: "SUV",
    from: 68,
    body: "suv",
    accent: "#27477e",
    image: "/images/cars/suzuki-fronx.png",
    seats: 5,
    bags: 3,
    blurb:
      "A commanding drive with raised comfort and ample space — confident on coast roads and mountain passes alike.",
    cars: [
      "Nissan Magnite",
      "Suzuki Fronx",
      "Suzuki Grand Vitara",
      "Renault Duster",
      "Hyundai Creta",
    ],
  },
  {
    id: "luxury7",
    name: "Luxury 7-Seater",
    label: "Luxury 7-Seater Cars",
    from: 115,
    body: "van",
    accent: "#bf6915",
    image: "/images/cars/toyota-noah.jpg",
    seats: 7,
    bags: 5,
    blurb:
      "Premium people-movers with plush seating and quiet cabins — group travel that feels first class.",
    cars: ["Toyota Esquire", "Toyota Noah", "Toyota Voxy"],
  },
  {
    id: "sedanLuxury",
    name: "Sedan Luxury",
    label: "Sedan Luxury Cars",
    from: 245,
    body: "luxury",
    accent: "#152747",
    image: "/images/cars/mercedes-cla-200.jpg",
    seats: 5,
    bags: 3,
    blurb:
      "Make an entrance. European prestige saloons for weddings, VIP transfers and occasions that deserve something special.",
    cars: ["BMW Serie 3", "BMW Serie 5", "Mercedes CLA 180", "Mercedes CLA 200"],
  },
  {
    id: "4x4",
    name: "4x4",
    label: "4X4 Cars",
    from: 120,
    body: "pickup",
    accent: "#9e4b15",
    image: "/images/cars/toyota-hilux.jpg",
    seats: 5,
    bags: 4,
    blurb:
      "Rugged double-cab pickups ready for any terrain — the go-anywhere choice for adventure and heavy loads.",
    cars: ["Toyota Hilux", "Nissan Navara", "Mitsubishi Triton"],
  },
  {
    id: "suvLuxury",
    name: "SUV Luxury",
    label: "SUV Luxury Cars",
    from: 1300,
    body: "luxury-suv",
    accent: "#0d1b33",
    image: "/images/cars/bmw-serie-3.jpg",
    seats: 5,
    bags: 4,
    blurb:
      "The flagship. A statement luxury SUV combining presence, performance and absolute comfort for the most discerning traveller.",
    cars: ["BMW X5"],
  },
];

// Mapping of specific car models to their official hopecarrental.mu asset images
export const carImages = {
  // Economy
  "Nissan Micra": "/images/cars/nissan-micra.jpg",
  "Suzuki Alto": "/images/cars/suzuki-alto.jpg",
  "Kia Picanto": "/images/cars/kia-picanto.jpg",
  "Hyundai i10": "/images/cars/hyundai-i10.jpg",

  // Compact
  "Toyota Vitz": "/images/cars/toyota-vitz.jpg",
  "Nissan Note": "/images/cars/nissan-note.jpg",
  "Honda Fit": "/images/cars/honda-fit.jpg",
  "Hyundai Grand i10": "/images/cars/hyundai-grand-i10.jpg",
  "Kia Rio": "/images/cars/kia-rio.jpg",
  "Hyundai i20": "/images/cars/hyundai-i20.jpg",

  // Sedan
  "Hyundai Accent": "/images/cars/hyundai-accent.png",
  "Suzuki Dezire": "/images/cars/suzuki-dzire.jpg",
  "Suzuki Dzire": "/images/cars/suzuki-dzire.jpg",
  "Kia Rio Sedan": "/images/cars/kia-rio-sedan.png",
  "Perodua Bezza": "/images/cars/perodua-bezza.jpg",

  // 7-Seater
  "Suzuki Ertiga": "/images/cars/suzuki-ertiga.jpg",
  "Toyota Avanza": "/images/cars/toyota-avanza.jpg",
  "Toyota Rush": "/images/cars/toyota-rush.jpg",
  "Perodua Alza": "/images/cars/perodua-alza.jpg",
  "Nissan NV200": "/images/cars/toyota-avanza.jpg",

  // SUV
  "Nissan Magnite": "/images/cars/nissan-magnite.jpg",
  "Suzuki Fronx": "/images/cars/suzuki-fronx.png",
  "Suzuki Grand Vitara": "/images/cars/suzuki-grand-vitara.jpg",
  "Renault Duster": "/images/cars/hyundai-creta.jpg",
  "Hyundai Creta": "/images/cars/hyundai-creta.jpg",

  // Luxury 7-Seater
  "Toyota Esquire": "/images/cars/toyota-esquire.jpg",
  "Toyota Noah": "/images/cars/toyota-noah.jpg",
  "Toyota Voxy": "/images/cars/toyota-voxy.jpg",

  // Sedan Luxury
  "BMW Serie 3": "/images/cars/bmw-serie-3.jpg",
  "BMW Serie 5": "/images/cars/bmw-serie-3.jpg",
  "Mercedes CLA 180": "/images/cars/mercedes-cla-180.jpg",
  "Mercedes CLA 200": "/images/cars/mercedes-cla-200.jpg",

  // 4x4
  "Toyota Hilux": "/images/cars/toyota-hilux.jpg",
  "Nissan Navara": "/images/cars/nissan-navara.jpg",
  "Mitsubishi Triton": "/images/cars/mitsubishi-triton.jpg",

  // SUV Luxury
  "BMW X5": "/images/cars/bmw-serie-3.jpg",
};

export function getCarImage(carName, categoryId) {
  if (carImages[carName]) return carImages[carName];
  const cat = categories.find((c) => c.id === categoryId);
  if (cat && cat.image) return cat.image;
  return "/images/cars/nissan-micra.jpg";
}

// Every rental is automatic transmission (per the reference fleet listing).
export const fleetFacts = {
  transmission: "Automatic Transmission",
  deposit: "No deposit required",
  delivery: "Free delivery & collection",
};

export const testimonials = [
  {
    id: "sebastien-zangbari",
    name: "Sebastien Zangbari",
    role: "Verified customer",
    image: "/images/testimonials/sebastien-zangbari.jpg",
    rating: 5,
    quote:
      "Very flexible and helpful staff that delivered and picked up the car at our place. Good car and no hazzle at all.",
  },
  {
    id: "mantas-varna",
    name: "Mantas Varna",
    role: "Verified customer",
    image: "/images/testimonials/mantas-varna.jpg",
    rating: 5,
    quote:
      "Really good service. Delivered car to our hotel with no extra fees. Clean hybrid car, economical and smooth. 10/10!",
  },
  {
    id: "disha-pertaub",
    name: "Disha Pertaub",
    role: "Verified customer",
    image: "/images/testimonials/disha-pertaub.jpg",
    rating: 5,
    quote:
      "Very good service and helpful staff. Good quality cars at affordable prices and a great rental experience overall.",
  },
  {
    id: "emma-miller",
    name: "Emma Miller",
    role: "Verified customer",
    image: "/images/testimonials/emma-miller.jpg",
    rating: 5,
    quote:
      "The rental process was seamless, staff was friendly and the car was in great condition. Highly recommended!",
  },
  {
    id: "mark-melone",
    name: "Mark Melone",
    role: "Verified customer",
    image: "/images/testimonials/mark-melone.jpg",
    rating: 5,
    quote:
      "Quick and easy process, and staff went above and beyond for our needs. Safe, comfortable car in excellent condition.",
  },
  {
    id: "jessica-2112",
    name: "Jessica 2112",
    role: "Verified customer",
    image: "/images/testimonials/jessica-2112.jpg",
    rating: 5,
    quote:
      "Hope Car Rental provided impeccable service from start to finish. The staff was friendly and rates were unbeatable.",
  },
];

// FAQ grounded strictly in the business facts stated on the reference site.
export const faqs = [
  {
    q: "Do I need to pay a deposit?",
    a: "No. At Hope Car Rental there is no deposit required, and delivery and collection of your vehicle are complimentary to your chosen location.",
  },
  {
    q: "Will the car be delivered to me?",
    a: "Yes. We offer free delivery and collection of the vehicle to your specified location anywhere convenient for you, adding ease to your rental experience.",
  },
  {
    q: "What happens if the car has a mechanical issue?",
    a: "Drive with confidence — our dedicated team provides free 24-hour mechanical assistance and support, round the clock, in the event of any mechanical issue.",
  },
  {
    q: "Are the vehicles automatic?",
    a: "Our fleet is offered with automatic transmission across every category, from economy hatchbacks to luxury SUVs.",
  },
  {
    q: "What types of vehicles can I rent?",
    a: "We offer a diverse fleet spanning economy, compact, sedan, SUV, 7-seater, luxury 7-seater, luxury sedans, 4x4 pickups and a flagship luxury SUV — a vehicle for every traveller and budget.",
  },
  {
    q: "How do I book a car?",
    a: "Send us your request through the booking form on this site, call us, or message us on WhatsApp. Our friendly team will confirm availability and guide you from booking to drop-off.",
  },
];
