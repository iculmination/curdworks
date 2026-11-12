import type { HomeDict } from "../types"

const home: HomeDict = {
  hero: {
    eyebrow: "Käse-Technologielabor · seit 1987",
    meta: "47,52° N · 10,18° O — Höhle 03 jetzt: 12,4 °C",
    titleLines: ["Wir machen", "keinen Käse. {img}", "Wir {img} lassen|ihn *reifen*."],
    titleImages: ["Hand bricht einen gereiften Käselaib auf", "Makroaufnahme von Käselöchern"],
    lead: "Bei Curdworks trifft 300 Jahre altes Alpenhandwerk auf Mikrobiologie, Sensorik und Robotik. Das Ergebnis: Käse, der ehrlich ist, präzise — und das Warten absolut wert.",
    primaryCta: "Den Prozess entdecken",
    secondaryCta: "Höhlenführung buchen",
    badge: "Seit 1987 • Hochalm • Rohmilch • Lebende Kulturen • ",
    scrollHint: "Scrollen",
    marquee: ["Alpine Rohmilch", "48 lebende Kulturen", "6 Kupferkessel", "3 Sandsteinhöhlen", "Keine Abkürzungen"],
  },

  process: {
    index: "02",
    eyebrow: "Der Prozess",
    title: "Von der Milch zum *Meisterwerk*.",
    lead: "Sechs Stufen, tausend Variablen. Wir messen jede einzelne — und lassen die Natur dann tun, was sie seit Jahrhunderten tut.",
    hint: "Ziehen oder scrollen",
    steps: [
      {
        number: "01",
        title: "Die Morgenmilch",
        text: "Rohmilch von 32 heugefütterten Herden erreicht uns binnen zwei Stunden nach dem Melken. Jeder Tank wird auf Fett, Eiweiß und Zellzahl geprüft, bevor er in den Kessel darf.",
        specs: [
          { label: "Menge", value: "14.000 L / Tag" },
          { label: "Höfe", value: "32 im Umkreis 25 km" },
          { label: "Transport", value: "≤ 2 Std." },
        ],
        image: "Milchwagen im Morgengrauen auf einer Alpenstraße",
      },
      {
        number: "02",
        title: "Kulturen erwecken",
        text: "Starterkulturen aus unserer eigenen Bibliothek mit 48 Stämmen beginnen, die Milch zu säuern. Dann lässt Lab sie zu einem weichen, zitternden Gel gerinnen.",
        specs: [
          { label: "Temp.", value: "32 °C" },
          { label: "Stämme", value: "48 in der Bibliothek" },
          { label: "Gerinnung", value: "35 Min." },
        ],
        image: "Pipette tropft Kultur in Milch",
      },
      {
        number: "03",
        title: "Bruch schneiden",
        text: "Harfenförmige Messer zerteilen das Gel in Körner. Die Korngröße entscheidet alles: reiskorngroß für Alpenhartkäse, walnussgroß für Weichkäse.",
        specs: [
          { label: "Korn", value: "3–5 mm" },
          { label: "Temp.", value: "32 °C" },
          { label: "Dauer", value: "18 Min." },
        ],
        image: "Käseharfe schneidet durch einen Kupferkessel",
      },
      {
        number: "04",
        title: "Wärme & Druck",
        text: "Der Bruch wird gerührt und langsam erwärmt, um Molke freizusetzen, dann in Formen geschöpft und über Nacht in seine endgültige Gestalt gepresst.",
        specs: [
          { label: "Brennen", value: "52 °C" },
          { label: "Pressen", value: "4 bar" },
          { label: "Dauer", value: "16 Std." },
        ],
        image: "Reihe von Käseformen in einer Presse",
      },
      {
        number: "05",
        title: "Das Salzbad",
        text: "Die Laibe schwimmen in gesättigter Salzlake. Salz entzieht Feuchtigkeit, bildet die Rinde und entscheidet, welche Mikroben bleiben dürfen.",
        specs: [
          { label: "Salzgehalt", value: "22 %" },
          { label: "Temp.", value: "13 °C" },
          { label: "Dauer", value: "48–72 Std." },
        ],
        image: "Laibe schwimmen in einem Salzbad",
      },
      {
        number: "06",
        title: "Gemessene Geduld",
        text: "In Sandsteinhöhlen wenden und bürsten Roboter jeden Laib. Unsere Affineure verkosten, klopfen und bewerten — und entscheiden, wann ein Käse wirklich fertig ist.",
        specs: [
          { label: "Temp.", value: "12,4 °C" },
          { label: "Feuchte", value: "94 % rF" },
          { label: "Reifung", value: "3–36 Monate" },
        ],
        image: "Affineur klopft mit einem Hämmerchen auf einen Laib",
      },
    ],
  },

  cave: {
    index: "03",
    eyebrow: "In der Höhle",
    title: "Wo Zeit die *wichtigste* Zutat ist.",
    lead: "Drei Sandsteinhöhlen, achtzehn Meter unter der Hochalm-Wiese. Jede beherbergt 2.400 Laibe — jeder einzelne markiert, verfolgt, gewendet, gebürstet und belauscht.",
    image: "Endlose Eichenregale voller Laibe in einer dämmrigen Sandsteinhöhle",
    live: {
      title: "Höhle 03",
      status: "Live",
      readings: [
        { label: "Temperatur", value: "12,4 °C" },
        { label: "Feuchte", value: "94 % rF" },
        { label: "CO₂", value: "0,21 %" },
        { label: "Luftstrom", value: "0,3 m/s" },
        { label: "Heute gewendet", value: "812 Laibe" },
      ],
    },
    stats: [
      { value: "2.400", label: "Laibe reifen in jeder Höhle" },
      { value: "±0,2", unit: "°C", label: "Temperaturtoleranz, das ganze Jahr" },
      { value: "18", unit: "m", label: "unter der Erde, unter der Wiese" },
      { value: "36", unit: "Mo.", label: "längste Reifezeit im Sortiment" },
    ],
    cta: "Unsere Technologien entdecken",
  },

  collection: {
    index: "04",
    eyebrow: "Die Kollektion",
    title: "Vier Käse. *Null* Kompromisse.",
    lead: "Jeder um eine einzige Idee herum entwickelt — und dann lange genug in Ruhe gelassen, um ganz er selbst zu werden.",
    cta: "So entstehen sie",
    products: [
      {
        name: "Hochalm 24",
        family: "Alpenhartkäse",
        tagline: "Vierundzwanzig Monate in der Höhle. Kristalle, die man hören kann.",
        specs: [
          { label: "Reifung", value: "24 Monate" },
          { label: "Milch", value: "Roh, Heumilch" },
          { label: "Dazu", value: "Riesling, Walnüsse" },
        ],
        image: "Aufgebrochener Laib gereiften Alpenkäses",
        tone: "wax",
      },
      {
        name: "Weißer Mond",
        family: "Weißschimmel",
        tagline: "Eine mondweiße Rinde um ein Herz, das bei Raumtemperatur zerfließt.",
        specs: [
          { label: "Reifung", value: "6 Wochen" },
          { label: "Milch", value: "Pasteurisiert, Kuh" },
          { label: "Dazu", value: "Crémant, Honig" },
        ],
        image: "Angeschnittener, fließender Weichkäse",
        tone: "ghost",
      },
      {
        name: "Blaue Stunde",
        family: "Blauschimmel",
        tagline: "Vierzigmal von Hand gestochen. Süß, pfeffrig, gefährlich verführerisch.",
        specs: [
          { label: "Reifung", value: "4 Monate" },
          { label: "Milch", value: "Roh, Kuh & Schaf" },
          { label: "Dazu", value: "Sauternes, Birne" },
        ],
        image: "Blauschimmelkäse auf Schiefer",
        tone: "mold",
      },
      {
        name: "Glutrinde",
        family: "Rotschmiere",
        tagline: "Jeden dritten Tag mit regionalem Bernsteinbier gebürstet. Riecht kühn, schmeckt sanft.",
        specs: [
          { label: "Reifung", value: "10 Wochen" },
          { label: "Milch", value: "Roh, Kuh" },
          { label: "Dazu", value: "Roggenbrot, Bier" },
        ],
        image: "Käse mit orangefarbener Rinde wird gebürstet",
        tone: "rind",
      },
    ],
  },

  press: {
    label: "Darüber schreiben",
    names: ["Gourmet Ledger", "The Curd Review", "Alpine Food Journal", "Dairy Futures", "Slow Table", "Käse & Kultur", "Rind & Rye"],
  },

  visit: {
    index: "05",
    eyebrow: "Die Höhlen besuchen",
    title: "Kommen Sie *Geduld* kosten.",
    lead: "Höhlenführungen von Donnerstag bis Sonntag. Neunzig Minuten unter der Erde, sechs Käse, ein sehr ehrlicher Affineur.",
    images: ["Verkostungsbrett mit sechs Käsesorten", "Schwere Eichentür zu Höhle 01", "Besucher mit Laternen in der Höhle"],
    primaryCta: "Höhlenführung buchen",
    secondaryCta: "Ins Team kommen",
    quotes: [
      {
        text: "Das Nächste an einer Schweizer Uhr, das man essen kann.",
        author: "M. Keller",
        source: "Gourmet Ledger",
      },
      {
        text: "Sie behandeln Bakterien wie ein Orchester — und jeder Laib ist eine andere Symphonie.",
        author: "J. Okafor",
        source: "The Curd Review",
      },
      {
        text: "Ich kam für die Führung, blieb wegen der Blauen Stunde und ging mit vier Kilo nach Hause.",
        author: "Anna, Besucherin",
        source: "München",
      },
    ],
  },
}

export default home
