export type Post = {
  slug: string;
  title: string;
  excerpt: string;
  image: string;
  imageAlt: string;
  category: string;
  date: string;
  readTime: string;
  author: string;
  content: { heading?: string; body: string }[];
};

export const posts: Post[] = [
  {
    slug: "grand-egyptian-museum-first-visit",
    title: "The Grand Egyptian Museum: a first-timer's guide",
    excerpt:
      "Tutankhamun's complete collection, a 4,600-year-old boat and 5,000 years of history under one roof. Here is how to see it without the overwhelm.",
    image: "/images/giza.jpg",
    imageAlt: "The pyramids of Giza beyond the Grand Egyptian Museum",
    category: "Guides",
    date: "12 May 2026",
    readTime: "6 min read",
    author: "Ali Mansy",
    content: [
      {
        body: "The Grand Egyptian Museum is the largest archaeological museum on earth, and the first thing most visitors notice is not the gold — it is the scale. More than 100,000 artefacts, a grand staircase of royal statues and a view straight out to the pyramids. Trying to see it all in one go is the fastest way to remember none of it.",
      },
      {
        heading: "Start with Tutankhamun, then slow down",
        body: "The boy king's galleries are the emotional heart of the museum. Go early, head straight there, and give yourself a full hour. The death mask alone is worth the trip, but it is the everyday objects — sandals, game boards, a lock of hair — that make him feel human. After that, take a break. The museum is a marathon, not a sprint.",
      },
      {
        heading: "Do not skip the Khufu boat",
        body: "The 4,600-year-old solar boat of Khufu has its own building and almost no queue. It is 43 metres of cedar, reassembled from 1,200 pieces, and it was buried beside the Great Pyramid to carry the pharaoh into the afterlife. Most visitors walk right past it. Do not be most visitors.",
      },
      {
        heading: "The practical bits",
        body: "Book a timed ticket online, arrive at opening and allow at least four hours. The museum is about 20 minutes from central Cairo and 10 minutes from the pyramids, so pairing it with Giza in one day is possible but ambitious. A private guide pays for itself here — not for the facts, but for the route.",
      },
    ],
  },
  {
    slug: "luxor-in-three-days",
    title: "Luxor in three days: the perfect slow itinerary",
    excerpt:
      "Hot-air balloons, tomb paintings, a felucca at sunset and enough time to actually look. A three-day plan for the world's greatest open-air museum.",
    image: "/images/luxor.jpg",
    imageAlt: "Luxor Temple at sunset",
    category: "Itineraries",
    date: "2 May 2026",
    readTime: "7 min read",
    author: "Youssef Hassan",
    content: [
      {
        body: "Luxor is not a place to tick off. It is a place to settle into — the call to prayer at dusk, the feluccas sliding past, the sheer density of history on both banks of the Nile. Three days is the sweet spot: enough for the big monuments without turning your holiday into a queueing exercise.",
      },
      {
        heading: "Day one: the east bank",
        body: "Start with Karnak, but go late afternoon rather than at opening. The hypostyle hall empties out, the light turns amber and you can hear the pigeons in the columns. Walk the sphinx avenue to Luxor Temple afterwards, when it is lit for the evening. Dinner on the corniche, early night.",
      },
      {
        heading: "Day two: west bank at dawn",
        body: "Book a balloon for sunrise if you can — 45 minutes over the Valley of the Kings is the best money you will spend in Egypt. Then head straight to the tombs while it is still cool. Three tombs are included on the standard ticket; add Seti I or Tutankhamun if you want the extra wow. Finish at Hatshepsut's terraced temple and the Colossi of Memnon.",
      },
      {
        heading: "Day three: the quiet side",
        body: "Use your last day for the things most tours skip: the Luxor Museum (beautifully lit, almost empty), Medinet Habu's painted reliefs and a long felucca sail with tea. If you have energy left, cross to the west bank for sunset and a simple Nubian dinner.",
      },
      {
        heading: "Where to stay",
        body: "The east bank is convenient and lively; the west bank is quieter with better views of the river and the mountains. We usually recommend two nights east and one west for a first visit. Avoid the big chain hotels if you want atmosphere — the small guesthouses are often better.",
      },
    ],
  },
  {
    slug: "best-time-to-visit-the-red-sea",
    title: "When to visit the Red Sea (month by month)",
    excerpt:
      "Water temperature, wind, marine life and crowds — an honest guide to choosing the right month for diving and beach time in Egypt.",
    image: "/images/coral.jpg",
    imageAlt: "Coral and clear water in the Red Sea",
    category: "Guides",
    date: "21 April 2026",
    readTime: "5 min read",
    author: "Nour El Din",
    content: [
      {
        body: "The Red Sea is a year-round destination, but the experience changes dramatically between January and August. Water temperature swings from 21°C in winter to 29°C in late summer, and the wind decides whether your boat is calm or a rollercoaster.",
      },
      {
        heading: "March to May: the sweet spot",
        body: "Warm air, calm water and excellent visibility. This is our favourite window for diving and snorkelling, especially in the northern sites around Sharm and Ras Mohammed. Expect 24–26°C water and plenty of turtles and reef fish.",
      },
      {
        heading: "June to August: hot, but the sea is glorious",
        body: "Air temperatures push past 35°C, but the water is bath-warm and the reefs are at their busiest with life. Dive early, nap in the afternoon and save the desert for sunset. This is also peak family season, so book boats and hotels well ahead.",
      },
      {
        heading: "September to November: the locals' choice",
        body: "The heat breaks, the water stays warm and the crowds thin out after mid-September. Hammerheads and oceanic whitetips appear at the southern sites, and the light in the desert is extraordinary. It is our pick for a diving trip.",
      },
      {
        heading: "December to February: quiet and crisp",
        body: "Water drops to 21–23°C, so a 5mm wetsuit is worth packing. The upside is empty sites, lower prices and beautiful clear days. On land it can be genuinely chilly at night — bring a jacket for the desert.",
      },
    ],
  },
  {
    slug: "siwa-oasis-travel-guide",
    title: "Siwa Oasis: everything you need to know",
    excerpt:
      "How to get there, where to sleep, what to eat and why the most remote oasis in Egypt is worth the long drive.",
    image: "/images/siwa.jpg",
    imageAlt: "Palms and a spring at Siwa Oasis",
    category: "Destinations",
    date: "9 April 2026",
    readTime: "8 min read",
    author: "Ali Mansy",
    content: [
      {
        body: "Siwa is not on the way to anywhere. It sits in the Western Desert near the Libyan border, separated from Cairo by eight hours of sand and checkpoints. That isolation is exactly why it still feels like itself — Berber-speaking, mud-brick and stubbornly independent.",
      },
      {
        heading: "Getting there",
        body: "The most comfortable option is a private 4x4 from Cairo with a driver who knows the desert road. Public buses run overnight from Cairo and Alexandria and are perfectly safe, but slow. There are also seasonal flights to Siwa's small airport. We usually recommend the drive for the landscape alone.",
      },
      {
        heading: "What to see",
        body: "The Oracle of Amun, where Alexander the Great was declared the son of Zeus, is the historical headline. But the real Siwa is in the springs: cold freshwater pools in the palm groves, hot springs at sunset, and the salt lakes where you float like a cork. Add the Great Sand Sea for dunes and sandboarding.",
      },
      {
        heading: "Where to stay and eat",
        body: "There are no big resorts, which is the point. Eco-lodges built from salt and mud, family guesthouses and desert camps range from simple to genuinely lovely. Eat Siwan dates, olives, and the local flatbread; dinner is usually a shared table of tagines and stews.",
      },
      {
        heading: "Practical tips",
        body: "Bring cash — ATMs are unreliable. Dress modestly in the villages, ask before photographing people, and plan at least two nights so the long drive does not eat your trip. The best months are October to April; summer is punishingly hot.",
      },
    ],
  },
];

export const getPost = (slug: string) => posts.find((p) => p.slug === slug);
