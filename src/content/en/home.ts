import type { HomeDict } from "../types"

const home: HomeDict = {
  hero: {
    eyebrow: "Cheese technology lab · since 1987",
    meta: "47.52° N · 10.18° E — Cave 03 now: 12.4 °C",
    titleLines: ["We don't make", "cheese. {img}", "We {img} *grow* it."],
    titleImages: ["Hand breaking open a wheel of aged cheese", "Macro of cheese eyes"],
    lead: "Curdworks is where 300-year-old alpine craft meets microbiology, sensors and robotics. The result: cheese that is honest, precise — and absolutely worth the wait.",
    primaryCta: "Discover the process",
    secondaryCta: "Book a cave tour",
    badge: "Est. 1987 • Hochalm • Raw milk • Living cultures • ",
    scrollHint: "Scroll",
    marquee: ["Raw alpine milk", "48 living cultures", "6 copper vats", "3 sandstone caves", "Zero shortcuts"],
  },

  process: {
    index: "02",
    eyebrow: "The process",
    title: "From milk to *masterpiece*.",
    lead: "Six stages, a thousand variables. We measure every one of them — and then let nature do what it has done for centuries.",
    hint: "Drag or scroll",
    steps: [
      {
        number: "01",
        title: "The morning milk",
        text: "Raw milk from 32 hay-fed herds reaches us within two hours of milking. Every tank is tested for fat, protein and cell count before it may enter a vat.",
        specs: [
          { label: "Volume", value: "14,000 L / day" },
          { label: "Farms", value: "32 within 25 km" },
          { label: "Transit", value: "≤ 2 h" },
        ],
        image: "Milk tanker at dawn on an alpine road",
      },
      {
        number: "02",
        title: "Waking the cultures",
        text: "Starter cultures from our own library of 48 strains begin to acidify the milk. Then rennet sets it into a soft, trembling gel.",
        specs: [
          { label: "Temp", value: "32 °C" },
          { label: "Strains", value: "48 in library" },
          { label: "Set time", value: "35 min" },
        ],
        image: "Pipette dropping culture into milk",
      },
      {
        number: "03",
        title: "Cutting the curd",
        text: "Harp-shaped knives slice the gel into grains. Grain size decides everything: rice-sized for alpine hard cheese, walnut-sized for soft.",
        specs: [
          { label: "Grain", value: "3–5 mm" },
          { label: "Temp", value: "32 °C" },
          { label: "Time", value: "18 min" },
        ],
        image: "Curd harp cutting through a copper vat",
      },
      {
        number: "04",
        title: "Heat & pressure",
        text: "The curds are stirred and slowly warmed to release whey, then scooped into moulds and pressed overnight into their final shape.",
        specs: [
          { label: "Cook", value: "52 °C" },
          { label: "Press", value: "4 bar" },
          { label: "Duration", value: "16 h" },
        ],
        image: "Row of cheese moulds in a press",
      },
      {
        number: "05",
        title: "The salt bath",
        text: "Wheels float in saturated brine. Salt draws out moisture, starts the rind and decides which microbes are welcome to stay.",
        specs: [
          { label: "Salinity", value: "22 %" },
          { label: "Temp", value: "13 °C" },
          { label: "Time", value: "48–72 h" },
        ],
        image: "Wheels floating in a brine pool",
      },
      {
        number: "06",
        title: "Patience, measured",
        text: "In sandstone caves, robots turn and brush every wheel. Our affineurs taste, tap and grade — and decide when a cheese is finally ready.",
        specs: [
          { label: "Temp", value: "12.4 °C" },
          { label: "Humidity", value: "94 % RH" },
          { label: "Ageing", value: "3–36 months" },
        ],
        image: "Affineur tapping a wheel with a hammer",
      },
    ],
  },

  cave: {
    index: "03",
    eyebrow: "Inside the cave",
    title: "Where time is the *main* ingredient.",
    lead: "Three sandstone caves, eighteen metres beneath the Hochalm meadow. Each holds 2,400 wheels — every one tagged, tracked, turned, brushed and listened to.",
    image: "Endless oak shelves of wheels in a dim sandstone cave",
    live: {
      title: "Cave 03",
      status: "Live",
      readings: [
        { label: "Temperature", value: "12.4 °C" },
        { label: "Humidity", value: "94 % RH" },
        { label: "CO₂", value: "0.21 %" },
        { label: "Air flow", value: "0.3 m/s" },
        { label: "Turned today", value: "812 wheels" },
      ],
    },
    stats: [
      { value: "2,400", label: "wheels ripening in each cave" },
      { value: "±0.2", unit: "°C", label: "temperature tolerance, all year round" },
      { value: "18", unit: "m", label: "underground, beneath the meadow" },
      { value: "36", unit: "mo", label: "longest ageing in our range" },
    ],
    cta: "Explore our technologies",
  },

  collection: {
    index: "04",
    eyebrow: "The collection",
    title: "Four cheeses. *Zero* compromises.",
    lead: "Each one engineered around a single idea — then left alone long enough to become itself.",
    cta: "See how they're made",
    products: [
      {
        name: "Hochalm 24",
        family: "Alpine hard",
        tagline: "Twenty-four months in the cave. Crystals you can hear.",
        specs: [
          { label: "Aged", value: "24 months" },
          { label: "Milk", value: "Raw cow, hay-fed" },
          { label: "Pair with", value: "Riesling, walnuts" },
        ],
        image: "Cracked wheel of aged alpine cheese",
        tone: "wax",
      },
      {
        name: "Weißer Mond",
        family: "Bloomy soft",
        tagline: "A moon-white rind around a heart that melts at room temperature.",
        specs: [
          { label: "Aged", value: "6 weeks" },
          { label: "Milk", value: "Pasteurised cow" },
          { label: "Pair with", value: "Crémant, honey" },
        ],
        image: "Soft white cheese cut open, oozing",
        tone: "ghost",
      },
      {
        name: "Blaue Stunde",
        family: "Blue",
        tagline: "Pierced forty times by hand. Sweet, peppery, dangerously moreish.",
        specs: [
          { label: "Aged", value: "4 months" },
          { label: "Milk", value: "Raw cow & sheep" },
          { label: "Pair with", value: "Sauternes, pear" },
        ],
        image: "Blue-veined cheese on slate",
        tone: "mold",
      },
      {
        name: "Glutrinde",
        family: "Washed rind",
        tagline: "Brushed with local amber ale every third day. Smells bold, tastes gentle.",
        specs: [
          { label: "Aged", value: "10 weeks" },
          { label: "Milk", value: "Raw cow" },
          { label: "Pair with", value: "Dark rye, ale" },
        ],
        image: "Orange-rind cheese being brushed",
        tone: "rind",
      },
    ],
  },

  press: {
    label: "As written about in",
    names: ["Gourmet Ledger", "The Curd Review", "Alpine Food Journal", "Dairy Futures", "Slow Table", "Käse & Kultur", "Rind & Rye"],
  },

  visit: {
    index: "05",
    eyebrow: "Visit the caves",
    title: "Come taste *patience*.",
    lead: "Guided cave tours run Thursday to Sunday. Ninety minutes underground, six cheeses, one very honest affineur.",
    images: ["Tasting board with six cheeses", "Heavy oak door to Cave 01", "Visitors with lanterns in the cave"],
    primaryCta: "Book a cave tour",
    secondaryCta: "Join the team",
    quotes: [
      {
        text: "The closest thing to a Swiss watch that you can eat.",
        author: "M. Keller",
        source: "Gourmet Ledger",
      },
      {
        text: "They treat bacteria like an orchestra — and every wheel is a different symphony.",
        author: "J. Okafor",
        source: "The Curd Review",
      },
      {
        text: "I came for the tour, stayed for the Blaue Stunde and left with four kilos.",
        author: "Anna, visitor",
        source: "Munich",
      },
    ],
  },
}

export default home
