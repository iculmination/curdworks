import type { ArtSpec } from "@/components/brand/art"

/**
 * Visuals for every image slot, shared by all locales (dictionaries only hold
 * the alt text). Arrays follow the order of the matching dictionary arrays.
 *
 * `photo` is optional: if a file with that name (any of .webp/.jpg/.png/.avif)
 * exists under /public it replaces the art,
 * so generated photos can be dropped in one by one without code changes.
 */
export type Visual = { art: ArtSpec; photo?: string }

const v = (art: ArtSpec, photo?: string): Visual => ({ art, photo })

export const visuals = {
  home: {
    hero: [v({ motif: "wheel", tone: "rind", seed: 3 }), v({ motif: "holes", tone: "wax", seed: 7 })],
    process: [
      v({ motif: "landscape", tone: "cream", seed: 2, variant: "road" }),
      v({ motif: "rings", tone: "paper", seed: 4 }),
      v({ motif: "curd", tone: "cream", seed: 6 }),
      v({ motif: "machine", tone: "cream", seed: 8 }),
      v({ motif: "waves", tone: "paper", seed: 3, variant: "float" }),
      v({ motif: "portrait", tone: "wax", seed: 5, variant: "cap" }),
    ],
    cave: v({ motif: "shelves", tone: "cave", seed: 11 }, "/photos/cave"),
    collection: [
      v({ motif: "wheel", tone: "cream", seed: 21 }, "/photos/product-alpine"),
      v({ motif: "wheel", tone: "mold", seed: 22, variant: "soft" }, "/photos/product-soft"),
      v({ motif: "wheel", tone: "wax", seed: 23, variant: "blue" }, "/photos/product-blue"),
      v({ motif: "wheel", tone: "cave", seed: 24, variant: "washed" }, "/photos/product-washed"),
    ],
    visit: [
      v({ motif: "wheel", tone: "rind", seed: 31 }),
      v({ motif: "arches", tone: "cave", seed: 32, variant: "door" }),
      v({ motif: "arches", tone: "rind", seed: 33 }),
    ],
  },
  about: {
    hero: [
      v({ motif: "portrait", tone: "wax", seed: 41, variant: "bun" }, "/photos/founder"),
      v({ motif: "landscape", tone: "paper", seed: 42, variant: "barn" }),
    ],
    /** by timeline entry index; entries without an image are skipped */
    timeline: [
      v({ motif: "landscape", tone: "cream", seed: 51, variant: "barn" }),
      v({ motif: "arches", tone: "rind", seed: 52 }),
      v({ motif: "rings", tone: "paper", seed: 53 }),
      undefined,
      v({ motif: "machine", tone: "wax", seed: 55, variant: "robot" }),
      undefined,
    ],
    team: [
      v({ motif: "portrait", tone: "wax", seed: 61, variant: "bun" }),
      v({ motif: "portrait", tone: "mold", seed: 62, variant: "short" }),
      v({ motif: "portrait", tone: "rind", seed: 63, variant: "long" }),
      v({ motif: "portrait", tone: "cream", seed: 64, variant: "cap" }),
      v({ motif: "portrait", tone: "paper", seed: 65, variant: "long" }),
      v({ motif: "portrait", tone: "wax", seed: 66, variant: "short" }),
    ],
    facility: [
      v({ motif: "landscape", tone: "cream", seed: 71, variant: "village" }, "/photos/aerial"),
      v({ motif: "machine", tone: "rind", seed: 72 }),
      v({ motif: "rings", tone: "paper", seed: 73 }),
      v({ motif: "arches", tone: "cave", seed: 74 }),
      v({ motif: "arches", tone: "wax", seed: 75, variant: "table" }),
    ],
    map: v({ motif: "topo", tone: "cream", seed: 81 }),
  },
  technologies: {
    hero: v({ motif: "curd", tone: "paper", seed: 91 }),
    /** by feature id */
    features: {
      milk: {
        main: v({ motif: "machine", tone: "paper", seed: 101 }, "/photos/tech-milk"),
        detail: v({ motif: "rings", tone: "wax", seed: 102, variant: "membrane" }),
      },
      cultures: {
        main: v({ motif: "portrait", tone: "mold", seed: 103, variant: "cap" }, "/photos/tech-cultures"),
        detail: v({ motif: "rings", tone: "paper", seed: 104 }),
      },
      robotics: {
        main: v({ motif: "machine", tone: "cave", seed: 105, variant: "robot" }, "/photos/tech-robotics"),
        detail: v({ motif: "rind", tone: "rind", seed: 106 }),
      },
      climate: {
        main: v({ motif: "shelves", tone: "cave", seed: 107 }, "/photos/tech-climate"),
        detail: v({ motif: "chart", tone: "cave", seed: 108 }),
      },
      model: {
        main: v({ motif: "chart", tone: "cream", seed: 109 }, "/photos/tech-model"),
        detail: v({ motif: "chart", tone: "wax", seed: 110 }),
      },
      whey: {
        main: v({ motif: "landscape", tone: "wax", seed: 111, variant: "domes" }, "/photos/tech-whey"),
        detail: v({ motif: "curd", tone: "paper", seed: 112 }),
      },
    } as Record<string, { main: Visual; detail: Visual }>,
  },
  careers: {
    hero: [
      v({ motif: "portrait", tone: "cave", seed: 121, variant: "cap" }, "/photos/careers-affineur"),
      v({ motif: "landscape", tone: "cream", seed: 122 }),
    ],
    perks: v({ motif: "landscape", tone: "paper", seed: 131, variant: "village" }, "/photos/staff-village"),
    contact: v({ motif: "portrait", tone: "rind", seed: 141, variant: "long" }),
  },
} as const
