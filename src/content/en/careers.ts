import type { CareersDict } from "../types"

const careers: CareersDict = {
  meta: {
    title: "Careers",
    description:
      "Cheesemakers, affineurs, microbiologists and engineers: join the team in Hochalm that makes cheese slowly — and measures everything.",
  },

  hero: {
    eyebrow: "Careers at Curdworks",
    title: "We hire people who *love* to wait.",
    lead: "Our cheese takes up to three years to ripen. Our people tend to stay even longer. If you like patient work, sharp tools and a cave that smells of hazelnuts, there is probably a place for you here.",
    primaryCta: "See open positions",
    secondaryCta: "How we hire",
    images: ["Affineur tapping a wheel in Cave 02", "Team lunch on the meadow"],
    stats: [
      { value: "64", label: "people on one site in Hochalm" },
      { value: "9.4", unit: "yrs", label: "average time people stay with us" },
      { value: "14", label: "nationalities, two working languages" },
    ],
  },

  perks: {
    index: "01",
    eyebrow: "Why work here",
    title: "Good cheese needs *rested* people.",
    lead: "We can't pay start-up salaries in shares. We can pay fairly, plan for decades and leave you time for a life outside the cave.",
    image: "Staff flats in the village of Hochalm",
    items: [
      {
        tag: "4 kg / month",
        title: "Cheese, obviously",
        text: "Every employee takes home four kilos of cheese a month. Most people end up very popular with their neighbours.",
      },
      {
        tag: "Nov – Feb",
        title: "Four-day winter weeks",
        text: "When the meadows sleep, so do we — a little. 32 hours a week from November to February, at full pay.",
      },
      {
        tag: "€ 2,500 / year",
        title: "Learning budget",
        text: "Courses, conferences, books, or your master cheesemaker exam. We also pay for the time you spend on it.",
      },
      {
        tag: "€ 9 / m²",
        title: "Staff flats in the village",
        text: "Twelve flats in Hochalm, rented to our team at well below market price. Five minutes' walk from the caves.",
      },
      {
        tag: "10 % of profit",
        title: "Shared profit",
        text: "A tenth of every year's profit is split equally between all employees. The head cheesemaker gets the same as the apprentice.",
      },
      {
        tag: "30 + 2 days",
        title: "Holidays and farm days",
        text: "Thirty days off, plus two paid days a year to work on one of our 32 partner farms. Helps you understand where the milk comes from.",
      },
    ],
    quote: {
      text: "I came for a summer job turning wheels. Eleven years later I still haven't found a better smell to start the day with.",
      author: "Amara Osei",
      source: "Head Affineur",
    },
  },

  jobs: {
    index: "02",
    eyebrow: "Open positions",
    title: "Currently *ripening*.",
    lead: "Every role below is based in Hochalm unless stated otherwise. All positions are open to all genders.",
    allLabel: "All",
    filterLabel: "Filter by department",
    departments: [
      { id: "cave", label: "Cave & affinage" },
      { id: "dairy", label: "Dairy" },
      { id: "lab", label: "Microbiology" },
      { id: "tech", label: "Engineering & data" },
      { id: "visit", label: "Visitors" },
    ],
    detail: {
      about: "About the role",
      tasks: "What you'll do",
      profile: "What you bring",
      apply: "Apply for this role",
      close: "Close",
    },
    openApplication: {
      title: "Nothing fits?",
      text: "Send us an open application. Some of our best people arrived with a job title we hadn't invented yet.",
      cta: "Apply openly",
    },
    items: [
      {
        id: "affineur",
        dept: "cave",
        title: "Affineur",
        location: "Hochalm · Caves",
        type: "Full-time",
        summary: "Care for 2,400 wheels in Cave 02 — tasting, tapping and deciding when they are ready.",
        about:
          "You'll join Amara's team of seven affineurs and take responsibility for one cave section. The robots do the lifting; you do the listening. You decide, with the help of our ripening model, which wheels are ready, which need more time and which become something else.",
        tasks: [
          "Taste, tap and grade wheels on a daily round",
          "Set brine, wash and brushing plans for your section",
          "Work with the data team to improve the ripening model",
          "Train apprentices and lead the occasional cave tour",
        ],
        profile: [
          "Training as a cheesemaker or dairy technologist",
          "At least two years of experience with hard or washed-rind cheese",
          "A good nose and the patience to trust it",
          "Comfortable at 12 °C and 95 % humidity",
        ],
        specs: [
          { label: "Start", value: "March 2027" },
          { label: "Hours", value: "40 h · winter 32 h" },
          { label: "Salary", value: "€ 46–54k" },
          { label: "Team", value: "7 affineurs" },
          { label: "Language", value: "German" },
        ],
      },
      {
        id: "cave-tech",
        dept: "cave",
        title: "Cave technician",
        location: "Hochalm · Caves",
        type: "Full-time · shifts",
        summary: "Keep 640 sensors, the airflow system and our turning shuttles running around the clock.",
        about:
          "Three caves, two robot fleets and a geothermal cooling loop need someone who can read a wiring diagram and a cheese rind with the same calm. You'll be the first responder when something in the caves beeps.",
        tasks: [
          "Maintain sensors, air handling and the geothermal loop",
          "Service and calibrate the turning shuttles",
          "Respond to alerts on a fair on-call rotation",
          "Document everything so the next person can follow",
        ],
        profile: [
          "Training as a mechatronics or electronics technician",
          "Experience with industrial controls (PLC) or building automation",
          "Calm under pressure, careful with food-safety rules",
          "Driving licence (class B)",
        ],
        specs: [
          { label: "Start", value: "As soon as possible" },
          { label: "Hours", value: "40 h · 3 shifts" },
          { label: "Salary", value: "€ 44–50k + shift pay" },
          { label: "On call", value: "1 week in 6" },
          { label: "Language", value: "German" },
        ],
      },
      {
        id: "cheesemaker",
        dept: "dairy",
        title: "Cheesemaker",
        location: "Hochalm · Vat hall",
        type: "Full-time",
        summary: "Turn 14,000 litres of raw milk a day into curd — in copper vats, by hand and by feel.",
        about:
          "Our vat hall starts at five in the morning, when the milk arrives still warm from the farms. You'll run one of our six copper vats, from renneting to moulding, and help us develop two new cheeses planned for 2028.",
        tasks: [
          "Run a copper vat from milk to moulded wheel",
          "Adjust recipes to the season's milk with the lab",
          "Keep immaculate batch records and hygiene",
          "Take part in product development tastings",
        ],
        profile: [
          "Completed training as a Milchtechnologe/-in or cheesemaker",
          "Experience with raw-milk cheese is a strong plus",
          "Early riser — or willing to become one",
          "Team player with an eye for detail",
        ],
        specs: [
          { label: "Start", value: "January 2027" },
          { label: "Hours", value: "40 h · from 05:00" },
          { label: "Salary", value: "€ 42–50k" },
          { label: "Team", value: "11 cheesemakers" },
          { label: "Language", value: "German" },
        ],
      },
      {
        id: "apprentice",
        dept: "dairy",
        title: "Apprentice dairy technologist",
        location: "Hochalm · Vat hall",
        type: "Apprenticeship · 3 years",
        summary: "Learn the craft from milk reception to cave — with a guaranteed job offer at the end.",
        about:
          "Three years, every department, one master. You'll spend time in the vat hall, the caves, the lab and on our partner farms. Vocational school is in Kempten; we pay for the train and the room.",
        tasks: [
          "Rotate through vat hall, caves, lab and farms",
          "Attend vocational school in Kempten in blocks",
          "Run your own small test batch in year three",
        ],
        profile: [
          "School-leaving certificate (any)",
          "Curiosity about food, biology or machines",
          "Reliability — cheese doesn't wait for anyone",
        ],
        specs: [
          { label: "Start", value: "1 September 2027" },
          { label: "Pay", value: "€ 1,150 – 1,400 / month" },
          { label: "Duration", value: "3 years" },
          { label: "After", value: "Job offer guaranteed" },
          { label: "Housing", value: "Staff flat available" },
        ],
      },
      {
        id: "microbiologist",
        dept: "lab",
        title: "Microbiologist, culture library",
        location: "Hochalm · Lab",
        type: "Full-time",
        summary: "Isolate, sequence and keep alive the 48 wild strains that give our cheese its character.",
        about:
          "Tomasz's lab is small, well-equipped and slightly obsessed. You'll look after the culture library, design blends for new cheeses and lead our project mapping the microbiome of Cave 03 as it matures.",
        tasks: [
          "Maintain and expand our library of 48 strains",
          "Run sequencing and strain characterisation",
          "Design culture blends together with the cheesemakers",
          "Lead the Cave 03 microbiome study",
        ],
        profile: [
          "PhD or MSc in microbiology, food science or similar",
          "Hands-on experience with lactic acid bacteria or moulds",
          "Bioinformatics basics (we use Python and R)",
          "Enjoy explaining science to non-scientists",
        ],
        specs: [
          { label: "Start", value: "Spring 2027" },
          { label: "Hours", value: "40 h · flexible" },
          { label: "Salary", value: "€ 58–68k" },
          { label: "Team", value: "4 in the lab" },
          { label: "Language", value: "English or German" },
        ],
      },
      {
        id: "robotics",
        dept: "tech",
        title: "Robotics engineer",
        location: "Hochalm",
        type: "Full-time",
        summary: "Build the next generation of our turning shuttles — gentler, smarter, and able to climb.",
        about:
          "Jonas's team designs and builds every robot in our caves. The next one needs to reach the top shelves of Cave 03, recognise a cracked rind and never, ever drop a 40-kilo wheel.",
        tasks: [
          "Design mechanics and motion control for the next shuttle",
          "Improve the machine-vision pipeline for rind inspection",
          "Test in a real cave — with real cheese",
          "Keep the current fleet improving release by release",
        ],
        profile: [
          "Degree in mechatronics, robotics or similar",
          "Experience with ROS 2 and embedded systems",
          "Prototype-minded: you like holding what you designed",
          "Food-safety awareness, or the will to learn it",
        ],
        specs: [
          { label: "Start", value: "As soon as possible" },
          { label: "Hours", value: "40 h · flexible" },
          { label: "Salary", value: "€ 62–74k" },
          { label: "Team", value: "5 engineers" },
          { label: "Language", value: "English or German" },
        ],
      },
      {
        id: "data",
        dept: "tech",
        title: "Data engineer, sensor platform",
        location: "Hochalm or remote (EU)",
        type: "Full-time · hybrid",
        summary: "1.8 million readings a day from three caves. Make them reliable, fast and useful.",
        about:
          "Mei built our sensor platform and the ripening model on top of it. Now it needs a second pair of hands: better pipelines, cleaner data, and tools our affineurs actually enjoy opening.",
        tasks: [
          "Own the pipeline from sensor to dashboard",
          "Improve data quality and alerting",
          "Build internal tools for affineurs and the lab",
          "Help retrain and evaluate the ripening model",
        ],
        profile: [
          "Three+ years in data engineering",
          "Strong Python and SQL; time-series experience",
          "Happy to visit the caves at least twice a month",
          "Pragmatic: boring, reliable technology over shiny tools",
        ],
        specs: [
          { label: "Start", value: "February 2027" },
          { label: "Hours", value: "40 h · hybrid" },
          { label: "Salary", value: "€ 64–76k" },
          { label: "On site", value: "2+ days / month" },
          { label: "Language", value: "English" },
        ],
      },
      {
        id: "guide",
        dept: "visit",
        title: "Cave tour guide",
        location: "Hochalm · Visitor centre",
        type: "Seasonal · April – November",
        summary: "Lead visitors through vats and caves in German and English — and make them fall for cheese.",
        about:
          "Around 9,000 people take our cave tour every year. You'll guide groups of up to fourteen through the dairy, answer every question about holes and robots, and run the tasting at the end.",
        tasks: [
          "Lead 90-minute tours in German and English",
          "Run tastings and help in the shop",
          "Collect visitor questions for our FAQ",
        ],
        profile: [
          "Fluent German and English; a third language is a bonus",
          "You enjoy people and telling stories",
          "Experience in hospitality, guiding or teaching",
        ],
        specs: [
          { label: "Season", value: "Apr – Nov 2027" },
          { label: "Hours", value: "30–40 h · Thu–Sun" },
          { label: "Pay", value: "€ 17 / h + tips" },
          { label: "Housing", value: "Staff flat available" },
          { label: "Language", value: "German + English" },
        ],
      },
    ],
  },

  process: {
    index: "03",
    eyebrow: "How we hire",
    title: "Four steps. *No* riddles.",
    lead: "No assessment centres, no trick questions, no ghosting. Here's exactly what happens after you hit send.",
    steps: [
      {
        number: "01",
        title: "Apply",
        text: "A CV and five honest sentences about why you'd like to work here. No cover-letter theatre.",
        duration: "10 min",
      },
      {
        number: "02",
        title: "First talk",
        text: "A video or phone call with your future team lead. We tell you about the role; you tell us about you.",
        duration: "45 min",
      },
      {
        number: "03",
        title: "Taste day",
        text: "A paid trial day in Hochalm. You work alongside the team, have lunch with them, and see if it fits. We cover travel.",
        duration: "1 day",
      },
      {
        number: "04",
        title: "Offer",
        text: "A clear offer within five working days of your taste day — or an honest explanation of why not.",
        duration: "≤ 5 days",
      },
    ],
    promise: "We answer every application within ten working days. Promise.",
  },

  apply: {
    index: "04",
    eyebrow: "Apply",
    title: "Start your *ripening*.",
    lead: "Takes about ten minutes. You'll hear from a real person within ten working days.",
    fields: {
      name: "Full name",
      email: "Email",
      position: "Position",
      positionPlaceholder: "Choose a position",
      openPosition: "Open application",
      link: "Portfolio or LinkedIn",
      linkPlaceholder: "https://",
      message: "In five sentences: why cheese?",
      messagePlaceholder: "Tell us about the cheese that changed your mind…",
      cv: "Attach your CV",
      cvHint: "PDF, max. 10 MB",
      consent: "I agree that Curdworks may store my data for this application for up to six months.",
      optional: "optional",
    },
    submit: "Send application",
    success: {
      title: "Thank you — it's in the cave.",
      text: "Your application is ripening on our shelf. Someone from the team will get back to you within ten working days.",
      reset: "Send another application",
    },
    contact: {
      title: "Questions first?",
      name: "Sophie Lindner",
      role: "People & Culture",
      email: "jobs@curdworks.example",
    },
  },

  cta: {
    title: "Not sure *yet*?",
    text: "Come and see us first. Every Thursday, one cave tour place is reserved for applicants — free, of course.",
    primary: { label: "Book a cave tour", href: "/about#visit" },
    secondary: { label: "Meet the team", href: "/about" },
  },
}

export default careers
