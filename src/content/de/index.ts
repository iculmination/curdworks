import type { Dictionary } from "../types"
import about from "./about"
import home from "./home"

const de: Dictionary = {
  meta: {
    siteName: "Curdworks",
    tagline: "Wir machen keinen Käse. Wir lassen ihn wachsen.",
    description:
      "Curdworks ist Käse-Technologielabor und Alpensennerei zugleich — wo 300 Jahre altes Handwerk auf Sensorik, Kulturen und Geduld trifft.",
  },
  nav: {
    home: "Start",
    about: "Über uns",
    technologies: "Technologien",
    careers: "Karriere",
  },
  header: {
    cta: "Höhlenführung buchen",
    menu: "Menü",
    close: "Schließen",
    language: "Sprache",
    skipToContent: "Zum Inhalt springen",
  },
  footer: {
    statement: "Geduld, präzise gemacht.",
    columns: [
      {
        title: "Entdecken",
        links: [
          { label: "Start", href: "/" },
          { label: "Über uns", href: "/about" },
          { label: "Technologien", href: "/technologies" },
          { label: "Karriere", href: "/careers" },
        ],
      },
      {
        title: "Besuchen",
        links: [
          { label: "Höhlenführungen", href: "/about#visit" },
          { label: "Verkostungsraum", href: "/about#visit" },
          { label: "Pressemappe", href: "/about#press" },
          { label: "Offene Stellen", href: "/careers#jobs" },
        ],
      },
      {
        title: "Folgen",
        links: [
          { label: "Instagram", href: "#" },
          { label: "LinkedIn", href: "#" },
          { label: "YouTube", href: "#" },
        ],
      },
    ],
    newsletter: {
      title: "Der Rindenbrief",
      text: "Ein Brief im Monat. Neue Laibe, Notizen aus der Höhle und hin und wieder ein Rezept. Gereift, nie aufdringlich.",
      placeholder: "ihre@email.de",
      submit: "Abonnieren",
      success: "Sie sind dabei. Der erste Brief reift bereits.",
    },
    address: ["Curdworks GmbH", "Käsereiweg 7", "87509 Hochalm, Allgäu", "Deutschland"],
    legal: [
      { label: "Impressum", href: "#" },
      { label: "Datenschutz", href: "#" },
      { label: "Cookies", href: "#" },
    ],
    copyright: "© 2026 Curdworks GmbH. Alle Laibe vorbehalten.",
    backToTop: "Nach oben",
  },
  home,
  about,
}

export default de
