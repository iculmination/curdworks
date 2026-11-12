import type { TechDict } from "../types"

const technologies: TechDict = {
  meta: {
    title: "Technologies",
    description:
      "Microfiltration, a living culture library, robotic affinage, sensor-driven caves, a ripening model and a zero-waste whey loop — the technology behind Curdworks.",
  },

  hero: {
    eyebrow: "Technologies",
    title: "Old craft, *new* instruments.",
    lead: "Cheesemaking hasn't changed in principle for 8,000 years: milk, cultures, salt, time. What has changed is how precisely we can see what is happening — and how gently we can intervene.",
    tocLabel: "Six technologies",
    image: "Curd grains under the microscope",
  },

  specsLabel: "Specifications",

  features: [
    {
      id: "milk",
      number: "01",
      name: "Milk treatment",
      title: "Clean milk, *same* soul.",
      text: "Classic pasteurisation makes milk safe — and silences most of what makes it taste of its meadow. We filter instead of boiling: ceramic membranes remove spore-forming bacteria, then a gentle thermisation keeps the native flora alive.",
      points: [
        "Ceramic membranes remove 99.6 % of spores without heat",
        "Thermisation at 63 °C instead of 72 °C pasteurisation",
        "Every tank tested in-line before it reaches a vat",
      ],
      specs: [
        { label: "Membrane pore", value: "1.4 µm" },
        { label: "Spore reduction", value: "99.6 %" },
        { label: "Thermisation", value: "63.0 ± 0.1 °C · 15 s" },
        { label: "Throughput", value: "6,000 L/h" },
        { label: "Heat recovery", value: "92 %" },
      ],
      image: "Stainless microfiltration unit with ceramic membranes",
      detailImage: "Cross-section of a ceramic membrane",
    },
    {
      id: "cultures",
      number: "02",
      name: "Culture library",
      title: "48 strains, *one* freezer.",
      text: "The wild bacteria and moulds living in our cave walls are the real authors of our cheese. Since 2003 we have isolated, sequenced and archived them. Every Curdworks cheese starts with a blend designed from this library — and nowhere else.",
      points: [
        "Strains isolated from our own caves and partner farms",
        "Every strain fully genome-sequenced",
        "Custom blends designed for each cheese",
      ],
      specs: [
        { label: "Strains", value: "48" },
        { label: "Storage", value: "−80 °C, duplicated" },
        { label: "Sequenced", value: "100 %" },
        { label: "Custom blends", value: "11" },
        { label: "Oldest strain", value: "Cave 01, 2003" },
      ],
      image: "Microbiologist at a laminar-flow bench",
      detailImage: "Petri dish with a blue mould colony",
    },
    {
      id: "robotics",
      number: "03",
      name: "Robotic affinage",
      title: "Robots that *turn*.",
      text: "A 40-kilo wheel must be turned and brushed hundreds of times before it is ready. Our autonomous shuttles do the lifting, so our affineurs can do what only humans can: taste, tap, listen and decide. A camera on every shuttle photographs each rind on every pass.",
      points: [
        "Autonomous shuttles turn and brush every wheel",
        "Machine vision tracks rind development daily",
        "Affineurs spend their time tasting, not lifting",
      ],
      specs: [
        { label: "Wheels per hour", value: "180" },
        { label: "Max. wheel weight", value: "45 kg" },
        { label: "Rind photos", value: "7,200 / day" },
        { label: "Uptime", value: "99.2 %" },
        { label: "Built by", value: "In-house team" },
      ],
      image: "Robotic shuttle lifting a wheel between oak shelves",
      detailImage: "Close-up of the brush head",
    },
    {
      id: "climate",
      number: "04",
      name: "Cave climate",
      title: "A cave that *breathes*.",
      text: "640 wireless sensors measure temperature, humidity, CO₂ and airflow on every shelf. An adaptive system nudges the cave towards the ideal climate — cooled by the mountain itself, through geothermal loops instead of compressors.",
      points: [
        "640 sensors, readings every 60 seconds",
        "Adaptive airflow per shelf zone",
        "Geothermal cooling, no compressors in Cave 03",
      ],
      specs: [
        { label: "Sensors", value: "640" },
        { label: "Readings", value: "1.8 M / day" },
        { label: "Temp. tolerance", value: "± 0.2 °C" },
        { label: "Humidity", value: "92–96 % RH" },
        { label: "Cooling", value: "Geothermal" },
      ],
      image: "Sensor node mounted on an oak shelf in the cave",
      detailImage: "Live climate dashboard on a tablet",
    },
    {
      id: "model",
      number: "05",
      name: "Ripening model",
      title: "Forecasting *flavour*.",
      text: "Eleven years of sensor data, rind photos and tasting notes trained a model that predicts how each wheel will develop. It tells us which wheels to taste next and when a batch will peak. It is right 87 % of the time. The affineur decides the rest.",
      points: [
        "Trained on 11 years of cave and tasting data",
        "Predicts peak flavour up to 120 days ahead",
        "Advises — never decides. Final call is human",
      ],
      specs: [
        { label: "Training data", value: "11 years" },
        { label: "Accuracy", value: "87 %" },
        { label: "Horizon", value: "120 days" },
        { label: "Inputs", value: "Climate, images, notes" },
        { label: "Final call", value: "Human" },
      ],
      image: "Affineur comparing a wheel with a forecast on screen",
      detailImage: "Flavour curve chart",
    },
    {
      id: "whey",
      number: "06",
      name: "Whey loop",
      title: "*Nothing* wasted.",
      text: "For every kilo of cheese, nine litres of whey are left behind. Ours never leaves the site as waste: proteins are recovered for our own ricotta and sports-nutrition partners, the rest feeds a biogas plant that powers 40 % of the dairy.",
      points: [
        "Whey proteins recovered for ricotta and partners",
        "Remaining whey fed into an on-site biogas plant",
        "Digestate returns to partner farms as fertiliser",
      ],
      specs: [
        { label: "Whey", value: "12,600 L / day" },
        { label: "Protein recovery", value: "94 %" },
        { label: "Site energy", value: "40 % from biogas" },
        { label: "To landfill", value: "0 kg" },
      ],
      image: "Biogas domes next to the dairy at dusk",
      detailImage: "Fresh ricotta in a basket",
    },
  ],

  comparison: {
    index: "07",
    eyebrow: "Side by side",
    title: "Same craft. *Sharper* tools.",
    lead: "We don't replace tradition — we measure it. Here's what that changes in practice.",
    columns: ["", "Traditional dairy", "Curdworks"],
    rows: [
      ["Milk safety", "Full pasteurisation or raw, untested", "Microfiltration + gentle thermisation"],
      ["Cultures", "Commercial starter packs", "48 own strains, sequenced"],
      ["Cave climate", "± 3 °C, checked daily", "± 0.2 °C, measured every minute"],
      ["Wheel turning", "Manual, weekly", "Robotic, daily"],
      ["Rind inspection", "By eye, occasionally", "Photographed on every pass"],
      ["Ripening decisions", "Experience only", "Experience + forecast model"],
      ["Whey", "Often disposed of", "100 % recovered or converted"],
    ],
  },

  faq: {
    index: "08",
    eyebrow: "Questions",
    title: "Asked *often*.",
    lead: "And answered honestly.",
    contactText: "Didn't find your question? Our lab team is happy to talk shop.",
    contactCta: "Write to the lab",
    items: [
      {
        q: "Is technology making your cheese less traditional?",
        a: "No — it makes it more consistent and lets us use traditional methods (raw milk, wild cultures, long ageing) more safely. Every recipe is still decided by cheesemakers.",
      },
      {
        q: "Is raw-milk cheese safe to eat?",
        a: "With microfiltration, strict herd health, in-line testing of every tank and at least 60 days of ageing, our raw-milk cheeses meet and exceed EU safety standards. Pregnant guests should still follow their doctor's advice.",
      },
      {
        q: "Why do some cheeses have holes?",
        a: "Propionibacteria release CO₂ during warm-room ripening. The gas gathers into the famous eyes. We can steer their size and number by temperature — and by which strains we invite.",
      },
      {
        q: "Does a robot or the model decide when a cheese is ready?",
        a: "Never. The model suggests which wheels to taste and when; the affineur tastes, listens to the wheel and makes the call. Roughly one in eight times, they disagree with the model.",
      },
      {
        q: "Can other dairies use your cultures or technology?",
        a: "We license selected culture blends and share our cave-sensor design as open hardware. Write to the lab if you'd like to collaborate.",
      },
      {
        q: "How big is your carbon footprint?",
        a: "Around 40 % below the German average per kilo of hard cheese, mainly thanks to geothermal cooling, biogas from whey and short milk routes. We publish the full figures in our yearly fact sheet.",
      },
    ],
  },

  cta: {
    title: "See it *working*.",
    text: "The best way to understand the technology is to walk through it. Join a cave tour — or join the team that builds it.",
    primary: { label: "Book a cave tour", href: "/about#visit" },
    secondary: { label: "Open positions", href: "/careers" },
  },
}

export default technologies
