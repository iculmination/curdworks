import type { AboutDict } from "../types"

const about: AboutDict = {
  meta: {
    title: "About",
    description: "From one copper vat in a hay barn to three sandstone caves: the story, values and people behind Curdworks.",
  },

  hero: {
    eyebrow: "About Curdworks",
    title: "Stubborn about *slow*.",
    lead: "We started with one copper vat in a hay barn. Thirty-nine years later we have three caves, a microbiology lab and sixty-four people — and we still refuse to hurry a single wheel.",
    images: ["Founder Lena Brandt in the cave, portrait", "The original hay barn, 1987"],
    facts: [
      { value: "1987", label: "founded in a hay barn above Hochalm" },
      { value: "64", label: "people, from farmers to data scientists" },
      { value: "3", label: "sandstone caves, dug by hand and by machine" },
    ],
  },

  story: {
    index: "01",
    eyebrow: "Our story",
    title: "Thirty-nine years of *waiting* well.",
    lead: "Every chapter started with a question nobody could answer yet — and ended with a cheese that answered it.",
    entries: [
      {
        year: "1987",
        title: "A barn, a vat, a stubborn idea",
        text: "Lena Brandt starts making cheese from her neighbours' milk in a converted hay barn. The first wheel is inedible. The fortieth is sold out.",
        image: "Archive photo of the original barn",
      },
      {
        year: "1994",
        title: "Digging Cave 01",
        text: "Too many wheels, too little cellar. With two friends and a rented excavator, Lena digs the first cave into the sandstone below the meadow.",
        image: "Workers in the half-dug cave, 1994",
      },
      {
        year: "2003",
        title: "The culture library",
        text: "Microbiologist Tomasz Wierzbicki joins and starts isolating the wild strains living in our cave walls. Today the library holds 48 of them.",
        image: "Petri dishes with cultures",
      },
      {
        year: "2011",
        title: "Cave 02 and the first sensors",
        text: "A second cave — and the first wireless sensors on every shelf. For the first time we can see the cave breathe, hour by hour.",
      },
      {
        year: "2018",
        title: "Robots that turn",
        text: "Jonas Brandt rebuilds a forklift into our first wheel-turning robot. Affineurs stop lifting 40-kilo wheels and start tasting more of them.",
        image: "Early prototype of the turning robot",
      },
      {
        year: "2024",
        title: "Cave 03 and the ripening model",
        text: "Our deepest cave opens, together with a model that predicts flavour development from 11 years of sensor data. It's right 87 % of the time. The affineur decides the rest.",
      },
    ],
  },

  values: {
    index: "02",
    eyebrow: "What we believe",
    title: "Three rules we *never* break.",
    lead: "Everything else is up for discussion.",
    missionLabel: "Our mission",
    mission:
      "Make cheese that tastes of its place and its time — using every tool science offers, and never one that cuts a corner.",
    items: [
      {
        number: "01",
        title: "Milk first",
        text: "Great cheese starts on the meadow. We pay our 32 farms 30 % above market price for hay-fed raw milk and visit every one of them each season.",
      },
      {
        number: "02",
        title: "Measure everything",
        text: "Thousands of readings per wheel. Not to replace the cheesemaker's instinct — but to give it better questions to ask.",
      },
      {
        number: "03",
        title: "Never rush",
        text: "No accelerated ripening, no shortcuts, no exceptions. If a wheel needs four more weeks, it gets four more weeks.",
      },
    ],
  },

  team: {
    index: "03",
    eyebrow: "The people",
    title: "Sixty-four people. *One* obsession.",
    lead: "Cheesemakers, microbiologists, engineers, farmers and one very patient accountant. Meet some of them.",
    cta: "Join them",
    members: [
      {
        name: "Lena Brandt",
        role: "Founder & Head Cheesemaker",
        note: "Has tasted an estimated 41,000 wheels. Still remembers the first one.",
        image: "Portrait of Lena Brandt",
      },
      {
        name: "Dr. Tomasz Wierzbicki",
        role: "Head of Microbiology",
        note: "Keeps 48 cultures alive and has a name for every one of them.",
        image: "Portrait of Tomasz in the lab",
      },
      {
        name: "Amara Osei",
        role: "Head Affineur",
        note: "Can hear a crack inside a wheel from three shelves away.",
        image: "Portrait of Amara in the cave",
      },
      {
        name: "Jonas Brandt",
        role: "Engineering Lead",
        note: "Built our first turning robot out of a forklift and a lot of optimism.",
        image: "Portrait of Jonas with the robot",
      },
      {
        name: "Mei Tanaka",
        role: "Data & Sensors",
        note: "Wrote the ripening model. Refuses to let it make the final call.",
        image: "Portrait of Mei at her desk",
      },
      {
        name: "Franz Huber",
        role: "Farm Relations",
        note: "Knows all 32 partner farms — and most of the cows by name.",
        image: "Portrait of Franz on a meadow",
      },
    ],
  },

  facility: {
    index: "04",
    eyebrow: "Hochalm in numbers",
    title: "Small dairy. *Serious* infrastructure.",
    lead: "Everything happens on one site: from the milk reception at dawn to the last brush stroke in the cave.",
    stats: [
      { value: "32", label: "partner farms within 25 km" },
      { value: "14k", unit: "L", label: "of raw milk processed every day" },
      { value: "7,200", label: "wheels ageing across three caves" },
      { value: "48", label: "culture strains in our own library" },
    ],
    gallery: [
      "Aerial view of the Hochalm dairy and meadow",
      "Hall of copper vats",
      "Microbiology lab bench",
      "Corridor of Cave 03",
      "Tasting room with a long oak table",
    ],
  },

  visit: {
    index: "05",
    eyebrow: "Visit us",
    title: "Come *down* to Hochalm.",
    lead: "See the vats, walk the caves and taste what time does to milk. Tours run from spring to the first snow.",
    tour: {
      title: "Cave tour",
      specs: [
        { label: "Days", value: "Thu – Sun" },
        { label: "Times", value: "11:00 · 14:00 · 16:30" },
        { label: "Duration", value: "90 min" },
        { label: "Group", value: "max. 14 people" },
        { label: "Languages", value: "DE · EN" },
        { label: "Price", value: "€ 28 incl. tasting" },
      ],
      note: "Bring a jacket — the caves stay at 12 °C all year round.",
      cta: "Request a tour",
      email: "tours@curdworks.example",
    },
    tasting: {
      title: "Tasting room & shop",
      specs: [
        { label: "Open", value: "Tue – Sun" },
        { label: "Hours", value: "10:00 – 18:00" },
        { label: "Booking", value: "Not needed" },
      ],
    },
    addressTitle: "Find us",
    mapLabel: "Map — Hochalm, Allgäu",
  },

  press: {
    index: "06",
    eyebrow: "Press",
    title: "Press & *media*.",
    lead: "Writing about cheese, fermentation or alpine food tech? Everything you need is here — and our caves are open to journalists by appointment.",
    downloadLabel: "Download",
    downloads: [
      { label: "Logo pack", meta: "SVG, PNG · 2.4 MB" },
      { label: "Photo selection", meta: "JPG · 48 MB" },
      { label: "Fact sheet 2026", meta: "PDF · 340 KB" },
    ],
    contact: {
      title: "Press contact",
      name: "Clara Vogt",
      role: "Press & Communications",
      email: "press@curdworks.example",
    },
  },
}

export default about
