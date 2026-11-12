import type { Dictionary } from "../types"
import about from "./about"
import careers from "./careers"
import home from "./home"
import technologies from "./technologies"

const en: Dictionary = {
  meta: {
    siteName: "Curdworks",
    tagline: "We don't make cheese. We grow it.",
    description:
      "Curdworks is a cheese technology lab and alpine dairy — where 300-year-old craft meets sensors, cultures and patience.",
  },
  nav: {
    home: "Home",
    about: "About",
    technologies: "Technologies",
    careers: "Careers",
  },
  header: {
    cta: "Book a cave tour",
    menu: "Menu",
    close: "Close",
    language: "Language",
    skipToContent: "Skip to content",
  },
  footer: {
    statement: "Patience, engineered.",
    columns: [
      {
        title: "Explore",
        links: [
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
          { label: "Technologies", href: "/technologies" },
          { label: "Careers", href: "/careers" },
        ],
      },
      {
        title: "Visit",
        links: [
          { label: "Cave tours", href: "/about#visit" },
          { label: "Tasting room", href: "/about#visit" },
          { label: "Press kit", href: "/about#press" },
          { label: "Open positions", href: "/careers#jobs" },
        ],
      },
      {
        title: "Follow",
        links: [
          { label: "Instagram", href: "#" },
          { label: "LinkedIn", href: "#" },
          { label: "YouTube", href: "#" },
        ],
      },
    ],
    newsletter: {
      title: "The Rind Report",
      text: "One letter a month. New wheels, cave notes and the occasional recipe. Matured, never spammy.",
      placeholder: "your@email.com",
      submit: "Subscribe",
      success: "You're on the list. First letter ripens soon.",
    },
    address: ["Curdworks GmbH", "Käsereiweg 7", "87509 Hochalm, Allgäu", "Germany"],
    legal: [
      { label: "Imprint", href: "#" },
      { label: "Privacy", href: "#" },
      { label: "Cookies", href: "#" },
    ],
    copyright: "© 2026 Curdworks GmbH. All wheels reserved.",
    backToTop: "Back to top",
  },
  home,
  about,
  technologies,
  careers,
}

export default en
