import type { AboutDict } from "../types"

const about: AboutDict = {
  meta: {
    title: "Über uns",
    description: "Von einem Kupferkessel in einer Heuscheune zu drei Sandsteinhöhlen: Geschichte, Werte und Menschen hinter Curdworks.",
  },

  hero: {
    eyebrow: "Über Curdworks",
    title: "Hartnäckig *langsam*.",
    lead: "Wir begannen mit einem Kupferkessel in einer Heuscheune. Neununddreißig Jahre später haben wir drei Höhlen, ein Mikrobiologielabor und vierundsechzig Menschen — und wir weigern uns immer noch, auch nur einen Laib zu hetzen.",
    images: ["Gründerin Lena Brandt in der Höhle, Porträt", "Die ursprüngliche Heuscheune, 1987"],
    facts: [
      { value: "1987", label: "gegründet in einer Heuscheune oberhalb der Hochalm" },
      { value: "64", label: "Menschen, von Landwirten bis Data Scientists" },
      { value: "3", label: "Sandsteinhöhlen, von Hand und Maschine gegraben" },
    ],
  },

  story: {
    index: "01",
    eyebrow: "Unsere Geschichte",
    title: "Neununddreißig Jahre gutes *Warten*.",
    lead: "Jedes Kapitel begann mit einer Frage, die noch niemand beantworten konnte — und endete mit einem Käse, der sie beantwortete.",
    entries: [
      {
        year: "1987",
        title: "Eine Scheune, ein Kessel, eine sture Idee",
        text: "Lena Brandt beginnt, aus der Milch ihrer Nachbarn Käse zu machen — in einer umgebauten Heuscheune. Der erste Laib ist ungenießbar. Der vierzigste ist ausverkauft.",
        image: "Archivfoto der ursprünglichen Scheune",
      },
      {
        year: "1994",
        title: "Höhle 01 wird gegraben",
        text: "Zu viele Laibe, zu wenig Keller. Mit zwei Freunden und einem geliehenen Bagger gräbt Lena die erste Höhle in den Sandstein unter der Wiese.",
        image: "Arbeiter in der halb gegrabenen Höhle, 1994",
      },
      {
        year: "2003",
        title: "Die Kulturbibliothek",
        text: "Mikrobiologe Tomasz Wierzbicki kommt dazu und isoliert die wilden Stämme aus unseren Höhlenwänden. Heute umfasst die Bibliothek 48 davon.",
        image: "Petrischalen mit Kulturen",
      },
      {
        year: "2011",
        title: "Höhle 02 und die ersten Sensoren",
        text: "Eine zweite Höhle — und die ersten Funksensoren an jedem Regal. Zum ersten Mal sehen wir die Höhle atmen, Stunde für Stunde.",
      },
      {
        year: "2018",
        title: "Roboter, die wenden",
        text: "Jonas Brandt baut einen Gabelstapler zu unserem ersten Wenderoboter um. Die Affineure heben keine 40-Kilo-Laibe mehr — und verkosten dafür mehr.",
        image: "Früher Prototyp des Wenderoboters",
      },
      {
        year: "2024",
        title: "Höhle 03 und das Reifemodell",
        text: "Unsere tiefste Höhle öffnet — zusammen mit einem Modell, das die Geschmacksentwicklung aus 11 Jahren Sensordaten vorhersagt. Es liegt in 87 % der Fälle richtig. Den Rest entscheidet der Affineur.",
      },
    ],
  },

  values: {
    index: "02",
    eyebrow: "Woran wir glauben",
    title: "Drei Regeln, die wir *nie* brechen.",
    lead: "Über alles andere lässt sich reden.",
    missionLabel: "Unsere Mission",
    mission:
      "Käse machen, der nach seinem Ort und seiner Zeit schmeckt — mit jedem Werkzeug, das die Wissenschaft bietet, und keinem, das eine Abkürzung nimmt.",
    items: [
      {
        number: "01",
        title: "Milch zuerst",
        text: "Großer Käse beginnt auf der Wiese. Wir zahlen unseren 32 Höfen 30 % über Marktpreis für Heu-Rohmilch und besuchen jeden von ihnen in jeder Saison.",
      },
      {
        number: "02",
        title: "Alles messen",
        text: "Tausende Messwerte pro Laib. Nicht, um das Gespür des Käsers zu ersetzen — sondern um ihm bessere Fragen zu stellen.",
      },
      {
        number: "03",
        title: "Niemals hetzen",
        text: "Keine beschleunigte Reifung, keine Abkürzungen, keine Ausnahmen. Braucht ein Laib vier Wochen mehr, bekommt er vier Wochen mehr.",
      },
    ],
  },

  team: {
    index: "03",
    eyebrow: "Die Menschen",
    title: "Vierundsechzig Menschen. *Eine* Leidenschaft.",
    lead: "Käser, Mikrobiologinnen, Ingenieure, Landwirte und ein sehr geduldiger Buchhalter. Lernen Sie einige von ihnen kennen.",
    cta: "Werden Sie Teil davon",
    members: [
      {
        name: "Lena Brandt",
        role: "Gründerin & Käsermeisterin",
        note: "Hat geschätzt 41.000 Laibe verkostet. Erinnert sich noch an den ersten.",
        image: "Porträt von Lena Brandt",
      },
      {
        name: "Dr. Tomasz Wierzbicki",
        role: "Leiter Mikrobiologie",
        note: "Hält 48 Kulturen am Leben und hat für jede einen Namen.",
        image: "Porträt von Tomasz im Labor",
      },
      {
        name: "Amara Osei",
        role: "Leitende Affineurin",
        note: "Hört einen Riss im Laib aus drei Regalen Entfernung.",
        image: "Porträt von Amara in der Höhle",
      },
      {
        name: "Jonas Brandt",
        role: "Leiter Technik",
        note: "Baute unseren ersten Wenderoboter aus einem Gabelstapler und viel Optimismus.",
        image: "Porträt von Jonas mit dem Roboter",
      },
      {
        name: "Mei Tanaka",
        role: "Daten & Sensorik",
        note: "Hat das Reifemodell geschrieben. Lässt es trotzdem nie das letzte Wort haben.",
        image: "Porträt von Mei am Schreibtisch",
      },
      {
        name: "Franz Huber",
        role: "Höfe & Partner",
        note: "Kennt alle 32 Partnerhöfe — und die meisten Kühe beim Namen.",
        image: "Porträt von Franz auf einer Wiese",
      },
    ],
  },

  facility: {
    index: "04",
    eyebrow: "Hochalm in Zahlen",
    title: "Kleine Sennerei. *Ernsthafte* Infrastruktur.",
    lead: "Alles passiert an einem Ort: von der Milchannahme im Morgengrauen bis zum letzten Bürstenstrich in der Höhle.",
    stats: [
      { value: "32", label: "Partnerhöfe im Umkreis von 25 km" },
      { value: "14k", unit: "L", label: "Rohmilch, verarbeitet jeden Tag" },
      { value: "7.200", label: "Laibe reifen in drei Höhlen" },
      { value: "48", label: "Kulturstämme in eigener Bibliothek" },
    ],
    gallery: [
      "Luftaufnahme der Sennerei Hochalm und der Wiese",
      "Halle der Kupferkessel",
      "Arbeitsplatz im Mikrobiologielabor",
      "Gang in Höhle 03",
      "Verkostungsraum mit langer Eichentafel",
    ],
  },

  visit: {
    index: "05",
    eyebrow: "Besuchen Sie uns",
    title: "Kommen Sie *hinab* zur Hochalm.",
    lead: "Sehen Sie die Kessel, gehen Sie durch die Höhlen und schmecken Sie, was Zeit aus Milch macht. Führungen vom Frühling bis zum ersten Schnee.",
    tour: {
      title: "Höhlenführung",
      specs: [
        { label: "Tage", value: "Do – So" },
        { label: "Zeiten", value: "11:00 · 14:00 · 16:30" },
        { label: "Dauer", value: "90 Min." },
        { label: "Gruppe", value: "max. 14 Personen" },
        { label: "Sprachen", value: "DE · EN" },
        { label: "Preis", value: "28 € inkl. Verkostung" },
      ],
      note: "Bringen Sie eine Jacke mit — in den Höhlen hat es das ganze Jahr 12 °C.",
      cta: "Führung anfragen",
      email: "tours@curdworks.example",
    },
    tasting: {
      title: "Verkostungsraum & Laden",
      specs: [
        { label: "Geöffnet", value: "Di – So" },
        { label: "Zeiten", value: "10:00 – 18:00" },
        { label: "Reservierung", value: "Nicht nötig" },
      ],
    },
    addressTitle: "So finden Sie uns",
    mapLabel: "Karte — Hochalm, Allgäu",
  },

  press: {
    index: "06",
    eyebrow: "Presse",
    title: "Presse & *Medien*.",
    lead: "Sie schreiben über Käse, Fermentation oder alpine Lebensmitteltechnik? Hier finden Sie alles Nötige — und unsere Höhlen stehen Journalisten nach Absprache offen.",
    downloadLabel: "Herunterladen",
    downloads: [
      { label: "Logo-Paket", meta: "SVG, PNG · 2,4 MB" },
      { label: "Fotoauswahl", meta: "JPG · 48 MB" },
      { label: "Faktenblatt 2026", meta: "PDF · 340 KB" },
    ],
    contact: {
      title: "Pressekontakt",
      name: "Clara Vogt",
      role: "Presse & Kommunikation",
      email: "press@curdworks.example",
    },
  },
}

export default about
