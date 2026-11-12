import type { CareersDict } from "../types"

const careers: CareersDict = {
  meta: {
    title: "Karriere",
    description:
      "Käser, Affineure, Mikrobiologinnen und Ingenieure: Werden Sie Teil des Teams in Hochalm, das Käse langsam macht — und alles misst.",
  },

  hero: {
    eyebrow: "Karriere bei Curdworks",
    title: "Wir suchen Menschen, die gern *warten*.",
    lead: "Unser Käse reift bis zu drei Jahre. Unsere Leute bleiben meist noch länger. Wenn Sie geduldige Arbeit, präzise Werkzeuge und eine Höhle mögen, die nach Haselnuss riecht, gibt es hier wahrscheinlich einen Platz für Sie.",
    primaryCta: "Offene Stellen ansehen",
    secondaryCta: "So stellen wir ein",
    images: ["Affineurin klopft einen Laib in Höhle 02 ab", "Teamessen auf der Wiese"],
    stats: [
      { value: "64", label: "Menschen an einem Standort in Hochalm" },
      { value: "9,4", unit: "J.", label: "bleiben unsere Leute im Durchschnitt" },
      { value: "14", label: "Nationalitäten, zwei Arbeitssprachen" },
    ],
  },

  perks: {
    index: "01",
    eyebrow: "Warum hier arbeiten",
    title: "Guter Käse braucht *ausgeruhte* Menschen.",
    lead: "Start-up-Gehälter in Anteilen können wir nicht zahlen. Wir können fair zahlen, in Jahrzehnten planen und Ihnen Zeit für ein Leben außerhalb der Höhle lassen.",
    image: "Mitarbeiterwohnungen im Dorf Hochalm",
    items: [
      {
        tag: "4 kg / Monat",
        title: "Käse, natürlich",
        text: "Alle Mitarbeitenden nehmen jeden Monat vier Kilo Käse mit nach Hause. Die meisten werden dadurch bei ihren Nachbarn sehr beliebt.",
      },
      {
        tag: "Nov – Feb",
        title: "Vier-Tage-Woche im Winter",
        text: "Wenn die Wiesen schlafen, ruhen wir auch ein bisschen. Von November bis Februar 32 Stunden pro Woche — bei vollem Lohn.",
      },
      {
        tag: "2.500 € / Jahr",
        title: "Weiterbildungsbudget",
        text: "Kurse, Konferenzen, Bücher oder Ihre Käsermeisterprüfung. Die Zeit, die Sie dafür brauchen, bezahlen wir auch.",
      },
      {
        tag: "9 € / m²",
        title: "Wohnungen im Dorf",
        text: "Zwölf Wohnungen in Hochalm, deutlich unter Marktpreis an unser Team vermietet. Fünf Minuten zu Fuß zu den Höhlen.",
      },
      {
        tag: "10 % vom Gewinn",
        title: "Geteilter Gewinn",
        text: "Ein Zehntel des Jahresgewinns wird gleichmäßig unter allen Mitarbeitenden aufgeteilt. Die Käsermeisterin bekommt so viel wie der Azubi.",
      },
      {
        tag: "30 + 2 Tage",
        title: "Urlaub und Hoftage",
        text: "Dreißig Urlaubstage plus zwei bezahlte Tage im Jahr auf einem unserer 32 Partnerhöfe. Damit man weiß, woher die Milch kommt.",
      },
    ],
    quote: {
      text: "Ich kam für einen Sommerjob zum Laibewenden. Elf Jahre später habe ich immer noch keinen besseren Duft gefunden, um den Tag zu beginnen.",
      author: "Amara Osei",
      source: "Leitende Affineurin",
    },
  },

  jobs: {
    index: "02",
    eyebrow: "Offene Stellen",
    title: "Gerade am *Reifen*.",
    lead: "Alle Stellen sind in Hochalm, sofern nicht anders angegeben. Alle Positionen richten sich an alle Geschlechter (m/w/d).",
    allLabel: "Alle",
    filterLabel: "Nach Bereich filtern",
    departments: [
      { id: "cave", label: "Höhle & Affinage" },
      { id: "dairy", label: "Sennerei" },
      { id: "lab", label: "Mikrobiologie" },
      { id: "tech", label: "Technik & Daten" },
      { id: "visit", label: "Besucher" },
    ],
    detail: {
      about: "Über die Stelle",
      tasks: "Ihre Aufgaben",
      profile: "Ihr Profil",
      apply: "Jetzt bewerben",
      close: "Schließen",
    },
    openApplication: {
      title: "Nichts dabei?",
      text: "Schicken Sie uns eine Initiativbewerbung. Einige unserer besten Leute kamen mit einer Stelle, die wir noch gar nicht erfunden hatten.",
      cta: "Initiativ bewerben",
    },
    items: [
      {
        id: "affineur",
        dept: "cave",
        title: "Affineur (m/w/d)",
        location: "Hochalm · Höhlen",
        type: "Vollzeit",
        summary: "Pflegen Sie 2.400 Laibe in Höhle 02 — verkosten, abklopfen und entscheiden, wann sie fertig sind.",
        about:
          "Sie verstärken Amaras Team aus sieben Affineuren und übernehmen Verantwortung für einen Höhlenabschnitt. Die Roboter heben, Sie hören zu. Mit Hilfe unseres Reifemodells entscheiden Sie, welche Laibe fertig sind, welche mehr Zeit brauchen und welche etwas anderes werden.",
        tasks: [
          "Laibe auf der täglichen Runde verkosten, abklopfen und bewerten",
          "Salz-, Schmier- und Bürstenpläne für Ihren Abschnitt festlegen",
          "Mit dem Datenteam das Reifemodell verbessern",
          "Azubis anlernen und gelegentlich Führungen leiten",
        ],
        profile: [
          "Ausbildung als Käser/-in oder Milchtechnologe/-in",
          "Mindestens zwei Jahre Erfahrung mit Hart- oder Rotschmierkäse",
          "Eine gute Nase und die Geduld, ihr zu vertrauen",
          "Wohlfühlen bei 12 °C und 95 % Luftfeuchte",
        ],
        specs: [
          { label: "Start", value: "März 2027" },
          { label: "Stunden", value: "40 h · Winter 32 h" },
          { label: "Gehalt", value: "46–54 Tsd. €" },
          { label: "Team", value: "7 Affineure" },
          { label: "Sprache", value: "Deutsch" },
        ],
      },
      {
        id: "cave-tech",
        dept: "cave",
        title: "Höhlentechniker (m/w/d)",
        location: "Hochalm · Höhlen",
        type: "Vollzeit · Schichtdienst",
        summary: "Halten Sie 640 Sensoren, die Lüftung und unsere Wende-Shuttles rund um die Uhr am Laufen.",
        about:
          "Drei Höhlen, zwei Roboterflotten und ein Erdwärmekreislauf brauchen jemanden, der einen Schaltplan und eine Käserinde mit derselben Ruhe liest. Sie sind die erste Stelle, wenn in den Höhlen etwas piept.",
        tasks: [
          "Sensoren, Lüftungsanlage und Erdwärmekreislauf warten",
          "Wende-Shuttles warten und kalibrieren",
          "Auf Alarme reagieren — in einer fairen Rufbereitschaft",
          "Alles so dokumentieren, dass andere es nachvollziehen können",
        ],
        profile: [
          "Ausbildung als Mechatroniker/-in oder Elektroniker/-in",
          "Erfahrung mit SPS-Steuerungen oder Gebäudeautomation",
          "Ruhig unter Druck, sorgfältig bei Lebensmittelhygiene",
          "Führerschein Klasse B",
        ],
        specs: [
          { label: "Start", value: "Ab sofort" },
          { label: "Stunden", value: "40 h · 3 Schichten" },
          { label: "Gehalt", value: "44–50 Tsd. € + Zulagen" },
          { label: "Bereitschaft", value: "1 Woche von 6" },
          { label: "Sprache", value: "Deutsch" },
        ],
      },
      {
        id: "cheesemaker",
        dept: "dairy",
        title: "Käser (m/w/d)",
        location: "Hochalm · Kesselhalle",
        type: "Vollzeit",
        summary: "Machen Sie aus 14.000 Litern Rohmilch täglich Bruch — in Kupferkesseln, von Hand und mit Gefühl.",
        about:
          "Unsere Kesselhalle beginnt um fünf Uhr morgens, wenn die Milch noch warm von den Höfen kommt. Sie führen einen unserer sechs Kupferkessel vom Einlaben bis zum Ausformen und helfen uns, zwei neue Käse für 2028 zu entwickeln.",
        tasks: [
          "Einen Kupferkessel von der Milch bis zum geformten Laib führen",
          "Rezepturen mit dem Labor an die Milch der Saison anpassen",
          "Chargenprotokolle und Hygiene tadellos führen",
          "An Verkostungen zur Produktentwicklung teilnehmen",
        ],
        profile: [
          "Abgeschlossene Ausbildung als Milchtechnologe/-in oder Käser/-in",
          "Erfahrung mit Rohmilchkäse ist ein großes Plus",
          "Frühaufsteher — oder bereit, einer zu werden",
          "Teamgeist und Blick fürs Detail",
        ],
        specs: [
          { label: "Start", value: "Januar 2027" },
          { label: "Stunden", value: "40 h · ab 05:00" },
          { label: "Gehalt", value: "42–50 Tsd. €" },
          { label: "Team", value: "11 Käser" },
          { label: "Sprache", value: "Deutsch" },
        ],
      },
      {
        id: "apprentice",
        dept: "dairy",
        title: "Ausbildung Milchtechnologe (m/w/d)",
        location: "Hochalm · Kesselhalle",
        type: "Ausbildung · 3 Jahre",
        summary: "Lernen Sie das Handwerk von der Milchannahme bis zur Höhle — mit garantiertem Jobangebot am Ende.",
        about:
          "Drei Jahre, alle Bereiche, ein Meister. Sie arbeiten in der Kesselhalle, in den Höhlen, im Labor und auf unseren Partnerhöfen. Die Berufsschule ist in Kempten; Zug und Zimmer zahlen wir.",
        tasks: [
          "Kesselhalle, Höhlen, Labor und Höfe durchlaufen",
          "Blockunterricht an der Berufsschule Kempten",
          "Im dritten Jahr eine eigene kleine Testcharge herstellen",
        ],
        profile: [
          "Schulabschluss (egal welcher)",
          "Neugier auf Lebensmittel, Biologie oder Maschinen",
          "Zuverlässigkeit — Käse wartet auf niemanden",
        ],
        specs: [
          { label: "Start", value: "1. September 2027" },
          { label: "Vergütung", value: "1.150 – 1.400 € / Monat" },
          { label: "Dauer", value: "3 Jahre" },
          { label: "Danach", value: "Übernahme garantiert" },
          { label: "Wohnen", value: "Mitarbeiterwohnung möglich" },
        ],
      },
      {
        id: "microbiologist",
        dept: "lab",
        title: "Mikrobiologe, Kulturbibliothek (m/w/d)",
        location: "Hochalm · Labor",
        type: "Vollzeit",
        summary: "Isolieren, sequenzieren und erhalten Sie die 48 wilden Stämme, die unserem Käse Charakter geben.",
        about:
          "Tomasz' Labor ist klein, gut ausgestattet und leicht besessen. Sie betreuen die Kulturbibliothek, entwickeln Mischungen für neue Käse und leiten unser Projekt, das das Mikrobiom von Höhle 03 beim Reifen kartiert.",
        tasks: [
          "Unsere Bibliothek aus 48 Stämmen pflegen und erweitern",
          "Sequenzierung und Stammcharakterisierung durchführen",
          "Kulturmischungen gemeinsam mit den Käsern entwickeln",
          "Die Mikrobiom-Studie in Höhle 03 leiten",
        ],
        profile: [
          "Promotion oder Master in Mikrobiologie, Lebensmittelwissenschaft o. Ä.",
          "Praktische Erfahrung mit Milchsäurebakterien oder Schimmelpilzen",
          "Grundlagen der Bioinformatik (wir nutzen Python und R)",
          "Freude daran, Wissenschaft verständlich zu erklären",
        ],
        specs: [
          { label: "Start", value: "Frühjahr 2027" },
          { label: "Stunden", value: "40 h · flexibel" },
          { label: "Gehalt", value: "58–68 Tsd. €" },
          { label: "Team", value: "4 im Labor" },
          { label: "Sprache", value: "Englisch oder Deutsch" },
        ],
      },
      {
        id: "robotics",
        dept: "tech",
        title: "Robotik-Ingenieur (m/w/d)",
        location: "Hochalm",
        type: "Vollzeit",
        summary: "Bauen Sie die nächste Generation unserer Wende-Shuttles — sanfter, klüger und kletterfähig.",
        about:
          "Jonas' Team entwirft und baut jeden Roboter in unseren Höhlen. Der nächste muss die obersten Regale von Höhle 03 erreichen, eine gerissene Rinde erkennen und darf niemals einen 40-Kilo-Laib fallen lassen.",
        tasks: [
          "Mechanik und Bewegungssteuerung des nächsten Shuttles entwickeln",
          "Die Bildverarbeitung für die Rindenkontrolle verbessern",
          "In einer echten Höhle testen — mit echtem Käse",
          "Die bestehende Flotte Release für Release verbessern",
        ],
        profile: [
          "Studium in Mechatronik, Robotik o. Ä.",
          "Erfahrung mit ROS 2 und Embedded-Systemen",
          "Prototyp-Mentalität: Sie halten gern in der Hand, was Sie entworfen haben",
          "Bewusstsein für Lebensmittelsicherheit — oder Lust, es zu lernen",
        ],
        specs: [
          { label: "Start", value: "Ab sofort" },
          { label: "Stunden", value: "40 h · flexibel" },
          { label: "Gehalt", value: "62–74 Tsd. €" },
          { label: "Team", value: "5 Ingenieure" },
          { label: "Sprache", value: "Englisch oder Deutsch" },
        ],
      },
      {
        id: "data",
        dept: "tech",
        title: "Data Engineer, Sensorplattform (m/w/d)",
        location: "Hochalm oder remote (EU)",
        type: "Vollzeit · hybrid",
        summary: "1,8 Millionen Messwerte am Tag aus drei Höhlen. Machen Sie sie zuverlässig, schnell und nützlich.",
        about:
          "Mei hat unsere Sensorplattform und darauf das Reifemodell gebaut. Jetzt braucht sie ein zweites Paar Hände: bessere Pipelines, sauberere Daten und Tools, die unsere Affineure gern öffnen.",
        tasks: [
          "Die Pipeline vom Sensor bis zum Dashboard verantworten",
          "Datenqualität und Alarmierung verbessern",
          "Interne Tools für Affineure und Labor bauen",
          "Beim Nachtrainieren und Bewerten des Reifemodells helfen",
        ],
        profile: [
          "Drei+ Jahre Erfahrung im Data Engineering",
          "Sicher in Python und SQL; Erfahrung mit Zeitreihen",
          "Bereit, mindestens zweimal im Monat in die Höhlen zu kommen",
          "Pragmatisch: lieber langweilige, zuverlässige Technik als glänzende Tools",
        ],
        specs: [
          { label: "Start", value: "Februar 2027" },
          { label: "Stunden", value: "40 h · hybrid" },
          { label: "Gehalt", value: "64–76 Tsd. €" },
          { label: "Vor Ort", value: "2+ Tage / Monat" },
          { label: "Sprache", value: "Englisch" },
        ],
      },
      {
        id: "guide",
        dept: "visit",
        title: "Höhlenführer (m/w/d)",
        location: "Hochalm · Besucherzentrum",
        type: "Saison · April – November",
        summary: "Führen Sie Gäste auf Deutsch und Englisch durch Kessel und Höhlen — und lassen Sie sie sich in Käse verlieben.",
        about:
          "Rund 9.000 Menschen machen jedes Jahr unsere Höhlenführung. Sie führen Gruppen von bis zu vierzehn Personen durch die Sennerei, beantworten jede Frage zu Löchern und Robotern und leiten die Verkostung am Ende.",
        tasks: [
          "90-minütige Führungen auf Deutsch und Englisch leiten",
          "Verkostungen durchführen und im Laden aushelfen",
          "Fragen der Gäste für unsere FAQ sammeln",
        ],
        profile: [
          "Fließend Deutsch und Englisch; eine dritte Sprache ist ein Bonus",
          "Sie mögen Menschen und erzählen gern Geschichten",
          "Erfahrung in Gastronomie, Gästeführung oder Unterricht",
        ],
        specs: [
          { label: "Saison", value: "Apr – Nov 2027" },
          { label: "Stunden", value: "30–40 h · Do–So" },
          { label: "Lohn", value: "17 € / h + Trinkgeld" },
          { label: "Wohnen", value: "Mitarbeiterwohnung möglich" },
          { label: "Sprache", value: "Deutsch + Englisch" },
        ],
      },
    ],
  },

  process: {
    index: "03",
    eyebrow: "So stellen wir ein",
    title: "Vier Schritte. *Keine* Rätsel.",
    lead: "Keine Assessment-Center, keine Fangfragen, kein Ghosting. So läuft es genau ab, nachdem Sie auf Senden geklickt haben.",
    steps: [
      {
        number: "01",
        title: "Bewerben",
        text: "Ein Lebenslauf und fünf ehrliche Sätze, warum Sie hier arbeiten möchten. Kein Anschreiben-Theater.",
        duration: "10 Min.",
      },
      {
        number: "02",
        title: "Erstes Gespräch",
        text: "Ein Video- oder Telefonat mit Ihrer künftigen Teamleitung. Wir erzählen von der Stelle, Sie von sich.",
        duration: "45 Min.",
      },
      {
        number: "03",
        title: "Probetag",
        text: "Ein bezahlter Probetag in Hochalm. Sie arbeiten mit dem Team, essen mit ihm zu Mittag und sehen, ob es passt. Die Anreise zahlen wir.",
        duration: "1 Tag",
      },
      {
        number: "04",
        title: "Angebot",
        text: "Ein klares Angebot innerhalb von fünf Werktagen nach dem Probetag — oder eine ehrliche Erklärung, warum nicht.",
        duration: "≤ 5 Tage",
      },
    ],
    promise: "Wir beantworten jede Bewerbung innerhalb von zehn Werktagen. Versprochen.",
  },

  apply: {
    index: "04",
    eyebrow: "Bewerben",
    title: "Beginnen Sie Ihre *Reifezeit*.",
    lead: "Dauert etwa zehn Minuten. Innerhalb von zehn Werktagen meldet sich ein echter Mensch bei Ihnen.",
    fields: {
      name: "Vollständiger Name",
      email: "E-Mail",
      position: "Stelle",
      positionPlaceholder: "Stelle auswählen",
      openPosition: "Initiativbewerbung",
      link: "Portfolio oder LinkedIn",
      linkPlaceholder: "https://",
      message: "In fünf Sätzen: Warum Käse?",
      messagePlaceholder: "Erzählen Sie uns von dem Käse, der Ihre Meinung geändert hat…",
      cv: "Lebenslauf anhängen",
      cvHint: "PDF, max. 10 MB",
      consent: "Ich bin einverstanden, dass Curdworks meine Daten für diese Bewerbung bis zu sechs Monate speichert.",
      optional: "optional",
    },
    submit: "Bewerbung senden",
    success: {
      title: "Danke — sie liegt in der Höhle.",
      text: "Ihre Bewerbung reift in unserem Regal. Jemand aus dem Team meldet sich innerhalb von zehn Werktagen bei Ihnen.",
      reset: "Weitere Bewerbung senden",
    },
    contact: {
      title: "Erst Fragen?",
      name: "Sophie Lindner",
      role: "People & Culture",
      email: "jobs@curdworks.example",
    },
  },

  cta: {
    title: "Noch *unsicher*?",
    text: "Lernen Sie uns erst kennen. Jeden Donnerstag ist ein Platz der Höhlenführung für Bewerberinnen und Bewerber reserviert — natürlich kostenlos.",
    primary: { label: "Höhlenführung buchen", href: "/about#visit" },
    secondary: { label: "Das Team kennenlernen", href: "/about" },
  },
}

export default careers
