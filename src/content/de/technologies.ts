import type { TechDict } from "../types"

const technologies: TechDict = {
  meta: {
    title: "Technologien",
    description:
      "Mikrofiltration, eine lebende Kulturbibliothek, robotische Affinage, sensorgesteuerte Höhlen, ein Reifemodell und ein abfallfreier Molkekreislauf — die Technik hinter Curdworks.",
  },

  hero: {
    eyebrow: "Technologien",
    title: "Altes Handwerk, *neue* Instrumente.",
    lead: "Im Prinzip hat sich die Käserei seit 8.000 Jahren nicht verändert: Milch, Kulturen, Salz, Zeit. Verändert hat sich, wie genau wir sehen können, was passiert — und wie sanft wir eingreifen können.",
    tocLabel: "Sechs Technologien",
    image: "Bruchkörner unter dem Mikroskop",
  },

  specsLabel: "Technische Daten",

  features: [
    {
      id: "milk",
      number: "01",
      name: "Milchbehandlung",
      title: "Saubere Milch, *gleiche* Seele.",
      text: "Klassische Pasteurisierung macht Milch sicher — und bringt vieles zum Schweigen, was nach ihrer Wiese schmeckt. Wir filtern statt zu kochen: Keramikmembranen entfernen sporenbildende Bakterien, danach erhält eine sanfte Thermisierung die natürliche Flora.",
      points: [
        "Keramikmembranen entfernen 99,6 % der Sporen ohne Hitze",
        "Thermisierung bei 63 °C statt Pasteurisierung bei 72 °C",
        "Jeder Tank wird inline geprüft, bevor er in den Kessel kommt",
      ],
      specs: [
        { label: "Membranporen", value: "1,4 µm" },
        { label: "Sporenreduktion", value: "99,6 %" },
        { label: "Thermisierung", value: "63,0 ± 0,1 °C · 15 s" },
        { label: "Durchsatz", value: "6.000 L/h" },
        { label: "Wärmerückgewinnung", value: "92 %" },
      ],
      image: "Edelstahl-Mikrofiltrationsanlage mit Keramikmembranen",
      detailImage: "Querschnitt einer Keramikmembran",
    },
    {
      id: "cultures",
      number: "02",
      name: "Kulturbibliothek",
      title: "48 Stämme, *ein* Gefrierschrank.",
      text: "Die wilden Bakterien und Schimmel in unseren Höhlenwänden sind die eigentlichen Autoren unseres Käses. Seit 2003 isolieren, sequenzieren und archivieren wir sie. Jeder Curdworks-Käse beginnt mit einer Mischung aus dieser Bibliothek — und nirgendwo sonst.",
      points: [
        "Stämme aus unseren eigenen Höhlen und Partnerhöfen",
        "Jeder Stamm vollständig genomsequenziert",
        "Eigene Mischungen für jeden Käse",
      ],
      specs: [
        { label: "Stämme", value: "48" },
        { label: "Lagerung", value: "−80 °C, doppelt" },
        { label: "Sequenziert", value: "100 %" },
        { label: "Eigene Mischungen", value: "11" },
        { label: "Ältester Stamm", value: "Höhle 01, 2003" },
      ],
      image: "Mikrobiologin an einer Sterilbank",
      detailImage: "Petrischale mit blauer Schimmelkolonie",
    },
    {
      id: "robotics",
      number: "03",
      name: "Robotische Affinage",
      title: "Roboter, die *wenden*.",
      text: "Ein 40-Kilo-Laib muss hunderte Male gewendet und gebürstet werden, bevor er fertig ist. Unsere autonomen Shuttles übernehmen das Heben, damit unsere Affineure tun können, was nur Menschen können: verkosten, klopfen, lauschen und entscheiden. Eine Kamera auf jedem Shuttle fotografiert jede Rinde bei jeder Runde.",
      points: [
        "Autonome Shuttles wenden und bürsten jeden Laib",
        "Bildverarbeitung verfolgt die Rindenentwicklung täglich",
        "Affineure verkosten, statt zu schleppen",
      ],
      specs: [
        { label: "Laibe pro Stunde", value: "180" },
        { label: "Max. Laibgewicht", value: "45 kg" },
        { label: "Rindenfotos", value: "7.200 / Tag" },
        { label: "Verfügbarkeit", value: "99,2 %" },
        { label: "Gebaut von", value: "Eigenem Team" },
      ],
      image: "Roboter-Shuttle hebt einen Laib zwischen Eichenregalen",
      detailImage: "Nahaufnahme des Bürstenkopfs",
    },
    {
      id: "climate",
      number: "04",
      name: "Höhlenklima",
      title: "Eine Höhle, die *atmet*.",
      text: "640 Funksensoren messen Temperatur, Feuchte, CO₂ und Luftstrom an jedem Regal. Ein adaptives System lenkt die Höhle sanft zum idealen Klima — gekühlt vom Berg selbst, über Erdwärmeschleifen statt Kompressoren.",
      points: [
        "640 Sensoren, Messwerte alle 60 Sekunden",
        "Adaptiver Luftstrom pro Regalzone",
        "Erdwärmekühlung, keine Kompressoren in Höhle 03",
      ],
      specs: [
        { label: "Sensoren", value: "640" },
        { label: "Messwerte", value: "1,8 Mio. / Tag" },
        { label: "Temp.-Toleranz", value: "± 0,2 °C" },
        { label: "Feuchte", value: "92–96 % rF" },
        { label: "Kühlung", value: "Erdwärme" },
      ],
      image: "Sensorknoten an einem Eichenregal in der Höhle",
      detailImage: "Live-Klima-Dashboard auf einem Tablet",
    },
    {
      id: "model",
      number: "05",
      name: "Reifemodell",
      title: "*Geschmack* vorhersagen.",
      text: "Elf Jahre Sensordaten, Rindenfotos und Verkostungsnotizen haben ein Modell trainiert, das vorhersagt, wie sich jeder Laib entwickelt. Es sagt uns, welche Laibe wir als Nächstes verkosten sollten und wann eine Charge ihren Höhepunkt erreicht. Es liegt in 87 % der Fälle richtig. Den Rest entscheidet der Affineur.",
      points: [
        "Trainiert mit 11 Jahren Höhlen- und Verkostungsdaten",
        "Sagt den Geschmackshöhepunkt bis zu 120 Tage voraus",
        "Berät — entscheidet nie. Das letzte Wort hat der Mensch",
      ],
      specs: [
        { label: "Trainingsdaten", value: "11 Jahre" },
        { label: "Genauigkeit", value: "87 %" },
        { label: "Horizont", value: "120 Tage" },
        { label: "Eingaben", value: "Klima, Bilder, Notizen" },
        { label: "Letztes Wort", value: "Mensch" },
      ],
      image: "Affineur vergleicht einen Laib mit einer Prognose am Bildschirm",
      detailImage: "Diagramm einer Geschmackskurve",
    },
    {
      id: "whey",
      number: "06",
      name: "Molkekreislauf",
      title: "*Nichts* verschwendet.",
      text: "Für jedes Kilo Käse bleiben neun Liter Molke zurück. Unsere verlässt den Hof nie als Abfall: Eiweiße werden für unseren eigenen Ricotta und Sporternährungspartner zurückgewonnen, der Rest speist eine Biogasanlage, die 40 % der Sennerei mit Energie versorgt.",
      points: [
        "Molkeneiweiß für Ricotta und Partner zurückgewonnen",
        "Restmolke speist eine Biogasanlage vor Ort",
        "Gärreste gehen als Dünger zurück an die Partnerhöfe",
      ],
      specs: [
        { label: "Molke", value: "12.600 L / Tag" },
        { label: "Eiweißrückgewinnung", value: "94 %" },
        { label: "Energie am Standort", value: "40 % aus Biogas" },
        { label: "Auf die Deponie", value: "0 kg" },
      ],
      image: "Biogaskuppeln neben der Sennerei in der Dämmerung",
      detailImage: "Frischer Ricotta in einem Körbchen",
    },
  ],

  comparison: {
    index: "07",
    eyebrow: "Im Vergleich",
    title: "Gleiches Handwerk. *Schärfere* Werkzeuge.",
    lead: "Wir ersetzen Tradition nicht — wir vermessen sie. Das ändert sich dadurch in der Praxis.",
    columns: ["Bereich", "Klassische Sennerei", "Curdworks"],
    rows: [
      ["Milchsicherheit", "Volle Pasteurisierung oder roh, ungeprüft", "Mikrofiltration + sanfte Thermisierung"],
      ["Kulturen", "Handelsübliche Starterkulturen", "48 eigene Stämme, sequenziert"],
      ["Höhlenklima", "± 3 °C, täglich geprüft", "± 0,2 °C, jede Minute gemessen"],
      ["Wenden der Laibe", "Von Hand, wöchentlich", "Robotisch, täglich"],
      ["Rindenkontrolle", "Nach Augenmaß, gelegentlich", "Bei jeder Runde fotografiert"],
      ["Reifeentscheidung", "Nur Erfahrung", "Erfahrung + Prognosemodell"],
      ["Molke", "Oft entsorgt", "100 % verwertet oder umgewandelt"],
    ],
  },

  faq: {
    index: "08",
    eyebrow: "Fragen",
    title: "*Oft* gefragt.",
    lead: "Und ehrlich beantwortet.",
    contactText: "Ihre Frage war nicht dabei? Unser Laborteam fachsimpelt gern.",
    contactCta: "Dem Labor schreiben",
    items: [
      {
        q: "Macht die Technik Ihren Käse weniger traditionell?",
        a: "Nein — sie macht ihn gleichmäßiger und erlaubt uns, traditionelle Methoden (Rohmilch, wilde Kulturen, lange Reifung) sicherer einzusetzen. Jedes Rezept entscheiden nach wie vor Käserinnen und Käser.",
      },
      {
        q: "Ist Rohmilchkäse sicher?",
        a: "Mit Mikrofiltration, strenger Herdengesundheit, Inline-Prüfung jedes Tanks und mindestens 60 Tagen Reifung erfüllen und übertreffen unsere Rohmilchkäse die EU-Sicherheitsstandards. Schwangere sollten dennoch dem Rat ihrer Ärztin folgen.",
      },
      {
        q: "Warum haben manche Käse Löcher?",
        a: "Propionsäurebakterien setzen während der Warmraumreifung CO₂ frei. Das Gas sammelt sich zu den berühmten Löchern. Größe und Anzahl steuern wir über die Temperatur — und darüber, welche Stämme wir einladen.",
      },
      {
        q: "Entscheidet ein Roboter oder das Modell, wann ein Käse fertig ist?",
        a: "Nie. Das Modell schlägt vor, welche Laibe wann verkostet werden sollten; der Affineur verkostet, lauscht dem Laib und entscheidet. Etwa in jedem achten Fall ist er anderer Meinung als das Modell.",
      },
      {
        q: "Können andere Sennereien Ihre Kulturen oder Technik nutzen?",
        a: "Wir lizenzieren ausgewählte Kulturmischungen und teilen unser Höhlensensor-Design als Open Hardware. Schreiben Sie dem Labor, wenn Sie zusammenarbeiten möchten.",
      },
      {
        q: "Wie groß ist Ihr CO₂-Fußabdruck?",
        a: "Rund 40 % unter dem deutschen Durchschnitt pro Kilo Hartkäse — vor allem dank Erdwärmekühlung, Biogas aus Molke und kurzer Milchwege. Die vollständigen Zahlen veröffentlichen wir im jährlichen Faktenblatt.",
      },
    ],
  },

  cta: {
    title: "Erleben Sie es *in Aktion*.",
    text: "Am besten versteht man die Technik, wenn man durch sie hindurchgeht. Kommen Sie zu einer Höhlenführung — oder ins Team, das sie baut.",
    primary: { label: "Höhlenführung buchen", href: "/about#visit" },
    secondary: { label: "Offene Stellen", href: "/careers" },
  },
}

export default technologies
