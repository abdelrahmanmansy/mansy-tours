export type Destination = {
  slug: string;
  name: string;
  region: string;
  tagline: string;
  description: string;
  longDescription: string;
  image: string;
  imageAlt: string;
  bestTime: string;
  idealStay: string;
  startingPrice: number;
  highlights: string[];
};

export const regions = [
  "Cairo & Giza",
  "Upper Egypt",
  "Red Sea",
  "Sinai",
  "Western Desert",
  "Mediterranean",
];

export const destinations: Destination[] = [
  {
    slug: "giza",
    name: "Giza & Cairo",
    region: "Cairo & Giza",
    tagline: "Stand before eternity",
    description:
      "The last surviving wonder of the ancient world, a sprawling medina and the greatest museum on earth — all in one city.",
    longDescription:
      "Cairo rewards the curious. Watch the sun climb over the Great Pyramid, wander the lantern-lit alleys of Khan el-Khalili, then stand face to face with Tutankhamun's gold in the Grand Egyptian Museum. Our local guides stitch the ancient and the modern together, from rooftop koshary dinners to hidden Coptic chapels most visitors never find.",
    image: "/images/giza.jpg",
    imageAlt: "The Great Sphinx and a pyramid at Giza at sunset",
    bestTime: "October – April",
    idealStay: "3–4 days",
    startingPrice: 39,
    highlights: [
      "Great Pyramid & Sphinx at golden hour",
      "Grand Egyptian Museum",
      "Khan el-Khalili bazaar",
      "Islamic Cairo walking tour",
    ],
  },
  {
    slug: "luxor",
    name: "Luxor",
    region: "Upper Egypt",
    tagline: "The world's greatest open-air museum",
    description:
      "Two banks of the Nile, one unbroken story: temples, tombs and hot-air balloons drifting over the Valley of the Kings.",
    longDescription:
      "Luxor is where Egypt feels most alive. On the east bank, Karnak's hypostyle hall still dwarfs every visitor; on the west bank, painted tombs glow in the dark. Sail a felucca at sunset, rise before dawn for a balloon flight, and let our Egyptologists slow the history down so you can actually feel it.",
    image: "/images/luxor.jpg",
    imageAlt: "Luxor Temple illuminated in warm evening light",
    bestTime: "October – March",
    idealStay: "3–4 days",
    startingPrice: 79,
    highlights: [
      "Karnak & Luxor temples",
      "Valley of the Kings",
      "Hot-air balloon at sunrise",
      "Felucca sail on the Nile",
    ],
  },
  {
    slug: "aswan",
    name: "Aswan",
    region: "Upper Egypt",
    tagline: "Nubian gold on the Nile",
    description:
      "Granite islands, painted Nubian villages and the most relaxed stretch of the Nile — Egypt at its gentlest pace.",
    longDescription:
      "Aswan is where the desert softens and the river turns glassy. Drift between Elephantine Island and the Aga Khan mausoleum, share tea in a cobalt-blue Nubian house, then make the early run south to Abu Simbel. It is the perfect place to end — or begin — a Nile cruise.",
    image: "/images/aswan.jpg",
    imageAlt: "Panoramic view of Aswan and the Nile",
    bestTime: "October – March",
    idealStay: "2–3 days",
    startingPrice: 89,
    highlights: [
      "Philae Temple at sunset",
      "Nubian village visit",
      "Abu Simbel day trip",
      "Nile cruise departure point",
    ],
  },
  {
    slug: "hurghada",
    name: "Hurghada",
    region: "Red Sea",
    tagline: "Sun, reefs and desert breeze",
    description:
      "A 40-kilometre ribbon of beach, easy diving and family-friendly resorts with the desert right behind.",
    longDescription:
      "Hurghada is the gateway to the northern Red Sea: shallow, warm reefs perfect for first dives, islands where dolphins pass by, and a desert interior of canyons and Bedouin tea. Come for the water, stay for the sunsets over the Eastern Desert.",
    image: "/images/hurghada.jpg",
    imageAlt: "Turquoise water along the Hurghada coast",
    bestTime: "March – November",
    idealStay: "4–7 days",
    startingPrice: 55,
    highlights: [
      "Giftun Island boat trip",
      "Beginner-friendly diving",
      "Desert quad & Bedouin dinner",
      "Mahmya beach day",
    ],
  },
  {
    slug: "sharm-el-sheikh",
    name: "Sharm El Sheikh",
    region: "Sinai",
    tagline: "Where the desert meets the reef",
    description:
      "World-class diving from Ras Mohammed to Tiran, big resorts and the stark beauty of the Sinai mountains.",
    longDescription:
      "Sharm is the Red Sea's polished resort town — but step beyond the pool and you find some of the planet's finest coral walls, shipwrecks and desert canyons. Our boat days are capped at small groups so you can actually hear the reef, not the crowd.",
    image: "/images/sharm.jpg",
    imageAlt: "Red Sea coastline at Sharm El Sheikh",
    bestTime: "March – November",
    idealStay: "5–7 days",
    startingPrice: 69,
    highlights: [
      "Ras Mohammed National Park",
      "Thistlegorm wreck dive",
      "Tiran Island snorkel safari",
      "Sinai desert sunset",
    ],
  },
  {
    slug: "dahab",
    name: "Dahab",
    region: "Sinai",
    tagline: "Slow days, deep blue water",
    description:
      "A Bedouin-flavoured beach town where the desert meets the sea and the Blue Hole is a shore dive away.",
    longDescription:
      "Dahab moves at its own speed: cushions on the sand, strong coffee, and the best shore diving in Egypt. Spend mornings underwater at the Blue Hole or the Canyon, afternoons on a camel to the dunes, and evenings around a fire with Bedouin musicians.",
    image: "/images/dahab.jpg",
    imageAlt: "The coastline and mountains of Dahab",
    bestTime: "March – November",
    idealStay: "4–6 days",
    startingPrice: 49,
    highlights: [
      "Blue Hole snorkelling",
      "Canyon dive site",
      "Camel ride to the dunes",
      "Bedouin night in the desert",
    ],
  },
  {
    slug: "siwa",
    name: "Siwa Oasis",
    region: "Western Desert",
    tagline: "An oasis lost in time",
    description:
      "Salt lakes, palm groves and sand seas — a remote Berber oasis closer to Libya than to Cairo.",
    longDescription:
      "Siwa feels like a secret. Mud-brick villages, hot and cold springs, the ruined Oracle of Amun and the vast Great Sand Sea at its doorstep. Sleep in a desert camp, sandboard down dunes taller than buildings, and float in salt pools that make the Dead Sea seem ordinary.",
    image: "/images/siwa.jpg",
    imageAlt: "Palm trees and a lake in Siwa Oasis",
    bestTime: "October – April",
    idealStay: "3–4 days",
    startingPrice: 120,
    highlights: [
      "Great Sand Sea safari",
      "Cleopatra's Spring",
      "Oracle of Amun temple",
      "Salt lakes & hot springs",
    ],
  },
  {
    slug: "alexandria",
    name: "Alexandria",
    region: "Mediterranean",
    tagline: "A Mediterranean storybook",
    description:
      "Sea air, fading belle-époque facades and a library trying to hold the whole world again.",
    longDescription:
      "Once home to the greatest library in antiquity, Alexandria still wears its history lightly: a Roman amphitheatre beneath the streets, a citadel built on a lighthouse, and cafés that have argued about poetry for a century. It is a day trip with soul — or two, if you like the sea.",
    image: "/images/alexandria.jpg",
    imageAlt: "The Mediterranean waterfront in Alexandria",
    bestTime: "March – June",
    idealStay: "2 days",
    startingPrice: 59,
    highlights: [
      "Bibliotheca Alexandrina",
      "Qaitbay Citadel",
      "Roman amphitheatre",
      "Stanley Bridge seafront",
    ],
  },
  {
    slug: "fayoum",
    name: "Fayoum",
    region: "Western Desert",
    tagline: "Waterfalls, pottery and whales",
    description:
      "A green depression west of Cairo with turtle fossils, desert waterfalls and the White Desert next door.",
    longDescription:
      "Fayoum is Cairo's best-kept weekend secret: Lake Qarun, the waterfalls of Wadi El Rayan, villages where potters still work by hand, and Wadi El Hitan — the Valley of the Whales — with 40-million-year-old skeletons lying in the sand. Add a night in the White Desert and you have a story for life.",
    image: "/images/white-desert.jpg",
    imageAlt: "Chalk rock formations in Egypt's White Desert",
    bestTime: "October – April",
    idealStay: "1–2 days",
    startingPrice: 45,
    highlights: [
      "Wadi El Rayan waterfalls",
      "Valley of the Whales",
      "Tunis pottery village",
      "White Desert overnight camp",
    ],
  },
  {
    slug: "marsa-alam",
    name: "Marsa Alam",
    region: "Red Sea",
    tagline: "Turtles, corals and quiet shores",
    description:
      "The Red Sea's untouched south — house reefs, sea turtles and barely another footprint in the sand.",
    longDescription:
      "Marsa Alam is what Hurghada was thirty years ago. Small eco-lodges, a reef that starts at the beach, dugongs at Abu Dabbab and hammerhead sharks at Daedalus. Come for the diving, stay for the feeling of having the sea almost to yourself.",
    image: "/images/marsa-alam.jpg",
    imageAlt: "Palm trees and turquoise water at Marsa Alam",
    bestTime: "March – November",
    idealStay: "5–7 days",
    startingPrice: 75,
    highlights: [
      "Abu Dabbab sea turtles",
      "House-reef snorkelling",
      "Dolphin House boat trip",
      "Wadi El Gemal desert",
    ],
  },
];

export function getDestination(slug: string) {
  return destinations.find((d) => d.slug === slug);
}

const destinationGalleries: Record<string, string[]> = {
  giza: ["/images/museum.jpg", "/images/khan.jpg"],
  luxor: ["/images/felucca.jpg", "/images/aswan.jpg"],
  aswan: ["/images/abu-simbel.jpg", "/images/felucca.jpg"],
  hurghada: ["/images/coral.jpg", "/images/sharm.jpg"],
  "sharm-el-sheikh": ["/images/coral.jpg", "/images/hurghada.jpg"],
  dahab: ["/images/sharm.jpg", "/images/coral.jpg"],
  siwa: ["/images/white-desert.jpg", "/images/cairo.jpg"],
  alexandria: ["/images/cairo.jpg", "/images/felucca.jpg"],
  fayoum: ["/images/siwa.jpg", "/images/cairo.jpg"],
  "marsa-alam": ["/images/turtle.jpg", "/images/coral.jpg"],
};

export function getDestinationGallery(slug: string) {
  const destination = getDestination(slug);
  if (!destination) return ["/images/felucca.jpg", "/images/cairo.jpg"];

  return [destination.image, ...(destinationGalleries[slug] ?? [])]
    .filter((src, i, arr) => arr.indexOf(src) === i)
    .slice(0, 3);
}
