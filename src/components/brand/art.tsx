import { useId, type ReactNode } from "react"

/**
 * Generative brand illustrations used in image slots until (or instead of)
 * real photography. Every motif is a deterministic SVG drawn in a 400×400
 * box and rendered with `slice`, so it fills any aspect ratio. Colours come
 * from the brand tokens, so art always sits inside the palette.
 */

export type Motif =
  | "holes" // emmental eyes
  | "shelves" // cave shelves with wheels
  | "curd" // curd grains / texture
  | "veins" // blue mould
  | "rind" // washed / brushed rind
  | "waves" // milk, brine, liquids
  | "rings" // petri dish, membrane cross-section
  | "topo" // map with contour lines
  | "chart" // flavour curve, dashboards
  | "arches" // cave corridor, doors, rooms
  | "portrait" // cut-paper bust
  | "landscape" // meadow, dawn, dusk
  | "machine" // tanks, robots, sensors
  | "wheel" // cut cheese wheel (product shot)

export type Tone = "cream" | "paper" | "wax" | "rind" | "cave" | "mold"

export type ArtSpec = {
  motif: Motif
  tone?: Tone
  seed?: number
  /** motif-specific flavour, e.g. landscape "domes" | "road" | "barn", portrait "bun" | "cap" | "short" */
  variant?: string
}

const C = {
  cream: "var(--brand-cream)",
  paper: "var(--brand-paper)",
  cave: "var(--brand-cave)",
  caveSoft: "var(--brand-cave-soft)",
  rind: "var(--brand-rind)",
  rindDeep: "var(--brand-rind-deep)",
  wax: "var(--brand-wax)",
  mold: "var(--brand-mold)",
}

type Palette = { bg: string; fg: string; mid: string; accent: string; soft: string }

const palettes: Record<Tone, Palette> = {
  cream: { bg: C.cream, fg: C.cave, mid: C.wax, accent: C.rind, soft: C.paper },
  paper: { bg: C.paper, fg: C.mold, mid: C.cream, accent: C.rind, soft: C.wax },
  wax: { bg: C.wax, fg: C.rindDeep, mid: C.paper, accent: C.cave, soft: C.cream },
  rind: { bg: C.rind, fg: C.rindDeep, mid: C.wax, accent: C.cream, soft: C.cave },
  cave: { bg: C.cave, fg: C.caveSoft, mid: C.wax, accent: C.rind, soft: C.cream },
  mold: { bg: C.mold, fg: C.cave, mid: C.cream, accent: C.wax, soft: C.paper },
}

/** Small deterministic PRNG (mulberry32). */
function rng(seed: number) {
  let a = seed >>> 0
  return () => {
    a = (a + 0x6d2b79f5) >>> 0
    let t = a
    t = Math.imul(t ^ (t >>> 15), t | 1)
    t ^= t + Math.imul(t ^ (t >>> 7), t | 61)
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296
  }
}

const r1 = (n: number) => Math.round(n * 10) / 10

type Draw = (p: Palette, rand: () => number, variant?: string, uid?: string) => ReactNode

/* ---------------------------------------------------------------- motifs */

const holes: Draw = (p, rand) => {
  const placed: [number, number, number][] = []
  for (let tries = 0; tries < 400 && placed.length < 16; tries++) {
    const r = 10 + rand() ** 2 * 62
    const x = -20 + rand() * 440
    const y = -20 + rand() * 440
    if (placed.every(([px, py, pr]) => Math.hypot(px - x, py - y) > pr + r + 10)) placed.push([x, y, r])
  }
  return (
    <>
      <rect width="400" height="400" style={{ fill: p.bg }} />
      {placed.map(([x, y, r], i) => (
        <g key={i}>
          <circle cx={r1(x)} cy={r1(y)} r={r1(r)} style={{ fill: p.fg, opacity: 0.55 }} />
          <circle cx={r1(x + r * 0.16)} cy={r1(y + r * 0.2)} r={r1(r * 0.86)} style={{ fill: p.fg, opacity: 0.35 }} />
          <path
            d={`M ${r1(x - r * 0.7)} ${r1(y - r * 0.3)} A ${r1(r * 0.8)} ${r1(r * 0.8)} 0 0 1 ${r1(x + r * 0.2)} ${r1(y - r * 0.78)}`}
            style={{ fill: "none", stroke: p.soft, strokeWidth: Math.max(1.5, r * 0.07), strokeLinecap: "round", opacity: 0.6 }}
          />
        </g>
      ))}
    </>
  )
}

const shelves: Draw = (p, rand, _v, uid) => {
  const rows = [70, 170, 270, 370]
  return (
    <>
      <rect width="400" height="400" style={{ fill: p.bg }} />
      {rows.map((y, ri) => {
        const wheels: ReactNode[] = []
        let x = -30 + rand() * 30
        let i = 0
        while (x < 420) {
          const w = 62 + rand() * 26
          const h = 30 + rand() * 14
          wheels.push(
            <g key={i++}>
              <rect x={r1(x)} y={r1(y - h)} width={r1(w)} height={r1(h)} rx="6" style={{ fill: p.mid, opacity: 0.8 + rand() * 0.2 }} />
              <rect x={r1(x)} y={r1(y - h)} width={r1(w)} height={r1(h)} rx="6" style={{ fill: C.cave, opacity: 0.25 }} />
              <ellipse cx={r1(x + w / 2)} cy={r1(y - h)} rx={r1(w / 2)} ry="9" style={{ fill: p.mid }} />
              <ellipse cx={r1(x + w / 2)} cy={r1(y - h)} rx={r1(w / 2 - 6)} ry="5.5" style={{ fill: p.soft, opacity: 0.35 }} />
              {rand() > 0.55 && <rect x={r1(x + w / 2 - 9)} y={r1(y - h / 2 - 3)} width="18" height="11" rx="2" style={{ fill: p.soft, opacity: 0.8 }} />}
            </g>
          )
          x += w + 8 + rand() * 10
        }
        return (
          <g key={ri}>
            {wheels}
            <rect x="-10" y={y} width="420" height="9" style={{ fill: p.accent, opacity: 0.8 }} />
          </g>
        )
      })}
      <rect width="400" height="400" fill={`url(#${uid})`} />
    </>
  )
}

const curd: Draw = (p, rand) => {
  const grains: ReactNode[] = []
  for (let gy = -1; gy < 11; gy++) {
    for (let gx = -1; gx < 11; gx++) {
      const x = gx * 40 + 20 + (rand() - 0.5) * 18
      const y = gy * 40 + 20 + (rand() - 0.5) * 18
      const w = 26 + rand() * 18
      const h = 22 + rand() * 14
      grains.push(
        <rect
          key={`${gx}-${gy}`}
          x={r1(x - w / 2)}
          y={r1(y - h / 2)}
          width={r1(w)}
          height={r1(h)}
          rx={r1(Math.min(w, h) * 0.45)}
          transform={`rotate(${Math.round(rand() * 180)} ${r1(x)} ${r1(y)})`}
          style={{ fill: rand() > 0.5 ? p.mid : p.soft, stroke: p.fg, strokeOpacity: 0.25, strokeWidth: 1.5 }}
        />
      )
    }
  }
  return (
    <>
      <rect width="400" height="400" style={{ fill: p.bg }} />
      {grains}
    </>
  )
}

const veins: Draw = (p, rand) => {
  const paths: ReactNode[] = []
  const walk = (x: number, y: number, a: number, len: number, w: number, depth: number, key: string) => {
    let d = `M ${r1(x)} ${r1(y)}`
    for (let i = 0; i < len; i++) {
      a += (rand() - 0.5) * 0.9
      x += Math.cos(a) * 12
      y += Math.sin(a) * 12
      d += ` L ${r1(x)} ${r1(y)}`
      if (depth < 2 && rand() > 0.82) walk(x, y, a + (rand() > 0.5 ? 0.9 : -0.9), Math.floor(len / 2), w * 0.6, depth + 1, `${key}-${i}`)
    }
    paths.push(
      <path key={key} d={d} style={{ fill: "none", stroke: p.fg, strokeWidth: r1(w), strokeLinecap: "round", strokeLinejoin: "round", opacity: 0.75 }} />
    )
  }
  for (let i = 0; i < 6; i++) walk(rand() * 400, rand() * 400, rand() * Math.PI * 2, 14 + Math.floor(rand() * 12), 4 + rand() * 7, 0, `v${i}`)
  const specks = Array.from({ length: 70 }, (_, i) => (
    <circle key={i} cx={r1(rand() * 400)} cy={r1(rand() * 400)} r={r1(1 + rand() * 4)} style={{ fill: p.fg, opacity: 0.5 }} />
  ))
  return (
    <>
      <rect width="400" height="400" style={{ fill: p.bg }} />
      {paths}
      {specks}
    </>
  )
}

const rind: Draw = (p, rand) => {
  const lines = Array.from({ length: 22 }, (_, i) => {
    const y0 = i * 20 - 10
    const amp = 3 + rand() * 6
    const freq = 0.02 + rand() * 0.02
    const ph = rand() * 6
    let d = `M -10 ${y0}`
    for (let x = 0; x <= 420; x += 20) d += ` L ${x} ${r1(y0 + Math.sin(x * freq + ph) * amp)}`
    return <path key={i} d={d} style={{ fill: "none", stroke: i % 3 ? p.fg : p.mid, strokeWidth: i % 3 ? 3 : 1.5, opacity: 0.55 }} />
  })
  const specks = Array.from({ length: 50 }, (_, i) => (
    <ellipse key={i} cx={r1(rand() * 400)} cy={r1(rand() * 400)} rx={r1(2 + rand() * 6)} ry={r1(1 + rand() * 3)} style={{ fill: p.mid, opacity: 0.55 }} />
  ))
  return (
    <>
      <rect width="400" height="400" style={{ fill: p.bg }} />
      {lines}
      {specks}
    </>
  )
}

const waves: Draw = (p, rand, variant) => {
  const lines = Array.from({ length: 16 }, (_, i) => {
    const y0 = 40 + i * 24
    const amp = 6 + rand() * 10
    const len = 90 + rand() * 60
    let d = `M -20 ${y0}`
    for (let x = -20; x <= 420; x += 10) d += ` L ${x} ${r1(y0 + Math.sin((x / len) * Math.PI * 2 + i * 0.6) * amp)}`
    return <path key={i} d={d} style={{ fill: "none", stroke: i % 2 ? p.fg : p.mid, strokeWidth: i % 2 ? 2.5 : 5, strokeLinecap: "round", opacity: 0.7 }} />
  })
  const floaters =
    variant === "float"
      ? [70, 190, 310].map((x, i) => (
          <g key={i}>
            <ellipse cx={x} cy={150 + i * 60} rx="52" ry="20" style={{ fill: p.soft }} />
            <ellipse cx={x} cy={144 + i * 60} rx="52" ry="18" style={{ fill: p.accent, opacity: 0.4 }} />
          </g>
        ))
      : null
  return (
    <>
      <rect width="400" height="400" style={{ fill: p.bg }} />
      {lines}
      {floaters}
    </>
  )
}

const rings: Draw = (p, rand, variant) => {
  const cx = 200
  const cy = 200
  const colonies = Array.from({ length: variant === "membrane" ? 0 : 26 }, (_, i) => {
    const a = rand() * Math.PI * 2
    const d = Math.sqrt(rand()) * 135
    const r = 3 + rand() ** 2 * 22
    return (
      <g key={i}>
        <circle cx={r1(cx + Math.cos(a) * d)} cy={r1(cy + Math.sin(a) * d)} r={r1(r)} style={{ fill: rand() > 0.6 ? p.accent : p.fg, opacity: 0.75 }} />
        {r > 12 && <circle cx={r1(cx + Math.cos(a) * d)} cy={r1(cy + Math.sin(a) * d)} r={r1(r * 0.5)} style={{ fill: p.mid, opacity: 0.6 }} />}
      </g>
    )
  })
  const channels =
    variant === "membrane"
      ? Array.from({ length: 19 }, (_, i) => {
          const ring = i === 0 ? 0 : i < 7 ? 1 : 2
          const k = ring === 0 ? 0 : ring === 1 ? i - 1 : i - 7
          const n = ring === 1 ? 6 : 12
          const a = (k / n) * Math.PI * 2
          const d = ring * 58
          return <circle key={i} cx={r1(cx + Math.cos(a) * d)} cy={r1(cy + Math.sin(a) * d)} r="18" style={{ fill: p.bg, stroke: p.fg, strokeWidth: 3 }} />
        })
      : null
  return (
    <>
      <rect width="400" height="400" style={{ fill: p.soft }} />
      <circle cx={cx} cy={cy} r="178" style={{ fill: p.bg }} />
      {[178, 168, 156].map((r) => (
        <circle key={r} cx={cx} cy={cy} r={r} style={{ fill: "none", stroke: p.fg, strokeWidth: r === 178 ? 6 : 1.5, opacity: 0.5 }} />
      ))}
      {colonies}
      {channels}
    </>
  )
}

const topo: Draw = (p, rand) => {
  const centers = [
    [140 + rand() * 40, 150 + rand() * 40],
    [290 + rand() * 40, 270 + rand() * 40],
  ]
  const contours: ReactNode[] = []
  centers.forEach(([cx, cy], ci) => {
    const h = [rand() * 6, rand() * 6, rand() * 6]
    for (let k = 1; k <= 9; k++) {
      let d = ""
      for (let s = 0; s <= 48; s++) {
        const a = (s / 48) * Math.PI * 2
        const r = k * 22 * (1 + 0.16 * Math.sin(a * 2 + h[0]) + 0.1 * Math.sin(a * 3 + h[1]) + 0.05 * Math.sin(a * 5 + h[2]))
        d += `${s ? "L" : "M"} ${r1(cx + Math.cos(a) * r)} ${r1(cy + Math.sin(a) * r)} `
      }
      contours.push(<path key={`${ci}-${k}`} d={d + "Z"} style={{ fill: "none", stroke: p.fg, strokeWidth: k % 3 ? 1.2 : 2.4, opacity: 0.45 }} />)
    }
  })
  const [pcx, pcy] = centers[0]
  return (
    <>
      <rect width="400" height="400" style={{ fill: p.bg }} />
      {contours}
      <path
        d={`M -10 ${r1(330 + rand() * 30)} C 120 300, 80 ${r1(pcy + 60)}, ${r1(pcx)} ${r1(pcy + 4)} S 330 60, 420 ${r1(40 + rand() * 30)}`}
        style={{ fill: "none", stroke: p.accent, strokeWidth: 4, strokeDasharray: "10 8", strokeLinecap: "round" }}
      />
      <g transform={`translate(${r1(pcx)} ${r1(pcy)})`}>
        <circle r="22" style={{ fill: p.accent, opacity: 0.25 }} />
        <path d="M 0 0 C -14 -16 -14 -38 0 -40 C 14 -38 14 -16 0 0 Z" style={{ fill: p.accent }} />
        <circle cy="-26" r="6" style={{ fill: p.bg }} />
      </g>
    </>
  )
}

const chart: Draw = (p, rand) => {
  const pts = Array.from({ length: 8 }, (_, i) => {
    const t = i / 7
    return [20 + t * 360, 320 - (Math.sin(t * Math.PI * 0.9) * 190 + rand() * 30)] as const
  })
  let d = `M ${r1(pts[0][0])} ${r1(pts[0][1])}`
  for (let i = 1; i < pts.length; i++) {
    const [x0, y0] = pts[i - 1]
    const [x1, y1] = pts[i]
    const mx = (x0 + x1) / 2
    d += ` C ${r1(mx)} ${r1(y0)}, ${r1(mx)} ${r1(y1)}, ${r1(x1)} ${r1(y1)}`
  }
  const today = pts[4][0]
  return (
    <>
      <rect width="400" height="400" style={{ fill: p.bg }} />
      {Array.from({ length: 9 }, (_, i) => (
        <g key={i} style={{ stroke: p.fg, strokeWidth: 1, opacity: 0.18 }}>
          <line x1="0" x2="400" y1={i * 50} y2={i * 50} />
          <line y1="0" y2="400" x1={i * 50} x2={i * 50} />
        </g>
      ))}
      <path d={`${d} L 380 400 L 20 400 Z`} style={{ fill: p.mid, opacity: 0.35 }} />
      <path d={d} style={{ fill: "none", stroke: p.accent, strokeWidth: 5, strokeLinecap: "round" }} />
      <line x1={r1(today)} x2={r1(today)} y1="20" y2="380" style={{ stroke: p.fg, strokeWidth: 2, strokeDasharray: "6 6", opacity: 0.7 }} />
      {pts.map(([x, y], i) => (
        <circle key={i} cx={r1(x)} cy={r1(y)} r={i === 4 ? 11 : 6} style={{ fill: i === 4 ? p.accent : p.bg, stroke: p.accent, strokeWidth: 3 }} />
      ))}
    </>
  )
}

const arches: Draw = (p, rand, variant) => {
  const steps = 8
  const vx = 200 + (rand() - 0.5) * 40
  return (
    <>
      <rect width="400" height="400" style={{ fill: p.bg }} />
      {Array.from({ length: steps }, (_, i) => {
        const t = 1 - i / steps
        const w = 30 + t * 400
        const h = 50 + t * 470
        const x = vx - w / 2
        const yb = 330 + t * 120
        const yt = yb - h
        return (
          <path
            key={i}
            d={`M ${r1(x)} ${r1(yb)} L ${r1(x)} ${r1(yt + w / 2)} A ${r1(w / 2)} ${r1(w / 2)} 0 0 1 ${r1(x + w)} ${r1(yt + w / 2)} L ${r1(x + w)} ${r1(yb)} Z`}
            style={{ fill: i % 2 ? p.fg : p.bg, stroke: p.mid, strokeOpacity: 0.25, strokeWidth: 1.5 }}
          />
        )
      })}
      <circle cx={r1(vx)} cy="318" r="10" style={{ fill: p.mid }} />
      <circle cx={r1(vx)} cy="318" r="34" style={{ fill: p.mid, opacity: 0.18 }} />
      {variant === "table" && <rect x="40" y="350" width="320" height="16" rx="4" style={{ fill: p.accent }} />}
      {variant === "door" && <rect x={r1(vx - 70)} y="150" width="140" height="260" rx="70" style={{ fill: p.accent, opacity: 0.9 }} />}
    </>
  )
}

const portrait: Draw = (p, rand, variant) => {
  const shirt = rand() > 0.5 ? p.accent : p.fg
  const skins = [C.wax, C.paper, C.cream, C.rind].filter((c) => c !== p.bg && c !== shirt)
  const skin = skins[Math.floor(rand() * skins.length)]
  const hairs = [C.cave, C.rindDeep, p.fg].filter((c) => c !== p.bg && c !== skin)
  const hair = hairs[Math.floor(rand() * hairs.length)]
  const v = variant ?? ["short", "bun", "cap", "long"][Math.floor(rand() * 4)]
  return (
    <>
      <rect width="400" height="400" style={{ fill: p.bg }} />
      <circle cx={r1(60 + rand() * 280)} cy={r1(40 + rand() * 80)} r={r1(20 + rand() * 30)} style={{ fill: p.mid, opacity: 0.45 }} />
      <circle cx={r1(40 + rand() * 60)} cy={r1(250 + rand() * 60)} r={r1(8 + rand() * 14)} style={{ fill: p.mid, opacity: 0.45 }} />
      {/* hair behind the head */}
      {v === "long" && <rect x="128" y="150" width="144" height="170" rx="40" style={{ fill: hair }} />}
      {v === "bun" && <circle cx="200" cy="100" r="32" style={{ fill: hair }} />}
      {v !== "cap" && <circle cx="200" cy="178" r="74" style={{ fill: hair }} />}
      <path d="M 60 420 C 60 320, 120 292, 200 292 C 280 292, 340 320, 340 420 Z" style={{ fill: shirt }} />
      <rect x="176" y="236" width="48" height="70" rx="20" style={{ fill: skin }} />
      <ellipse cx="200" cy="204" rx="62" ry="66" style={{ fill: skin }} />
      {/* fringe */}
      {v === "short" && <path d="M 134 196 C 134 150, 170 128, 214 134 C 196 150, 160 160, 134 196 Z" style={{ fill: hair }} />}
      {v === "long" && <path d="M 138 200 C 140 150, 180 132, 200 138 C 220 132, 260 150, 262 200 C 240 166, 160 166, 138 200 Z" style={{ fill: hair }} />}
      {v === "cap" && (
        <>
          <path d="M 128 176 C 128 96, 272 96, 272 176 Z" style={{ fill: C.paper }} />
          <rect x="122" y="168" width="156" height="16" rx="8" style={{ fill: p.mid === C.paper ? p.accent : p.mid }} />
        </>
      )}
    </>
  )
}

const landscape: Draw = (p, rand, variant) => {
  const layers = [C.wax, C.rind, C.rindDeep, C.cave]
  const hill = (base: number, amp: number, ph: number) => {
    let d = `M -10 400 L -10 ${base}`
    for (let x = 0; x <= 420; x += 20) d += ` L ${x} ${r1(base - Math.sin(x / 90 + ph) * amp - Math.sin(x / 37 + ph * 2) * amp * 0.25)}`
    return d + " L 420 400 Z"
  }
  return (
    <>
      <rect width="400" height="400" style={{ fill: p.bg }} />
      <circle cx={r1(100 + rand() * 200)} cy={r1(110 + rand() * 40)} r="58" style={{ fill: p.mid }} />
      {layers.map((fill, i) => (
        <path key={i} d={hill(200 + i * 50, 26 - i * 3, rand() * 6)} style={{ fill, opacity: 0.85 + i * 0.05 }} />
      ))}
      {variant === "domes" &&
        [120, 230].map((x, i) => (
          <g key={i}>
            <path d={`M ${x - 54} 300 A 54 54 0 0 1 ${x + 54} 300 Z`} style={{ fill: C.paper }} />
            <path d={`M ${x - 54} 300 A 54 54 0 0 1 ${x + 54} 300`} style={{ fill: "none", stroke: C.cave, strokeWidth: 3 }} />
          </g>
        ))}
      {variant === "barn" && (
        <g transform="translate(150 230)">
          <path d="M 0 60 L 0 20 L 50 -14 L 100 20 L 100 60 Z" style={{ fill: C.paper }} />
          <path d="M -8 24 L 50 -20 L 108 24" style={{ fill: "none", stroke: C.cave, strokeWidth: 8, strokeLinejoin: "round" }} />
          <rect x="38" y="26" width="24" height="34" rx="12" style={{ fill: C.cave }} />
        </g>
      )}
      {variant === "road" && (
        <path d="M 230 400 C 220 330, 150 320, 190 270 S 260 220, 240 196" style={{ fill: "none", stroke: C.paper, strokeWidth: 9, strokeLinecap: "round", strokeDasharray: "1 16", opacity: 0.9 }} />
      )}
      {variant === "village" &&
        [70, 140, 210, 280].map((x, i) => (
          <g key={i} transform={`translate(${x} ${262 + (i % 2) * 18})`}>
            <path d="M 0 40 L 0 12 L 24 -8 L 48 12 L 48 40 Z" style={{ fill: C.paper }} />
            <rect x="18" y="20" width="12" height="20" rx="6" style={{ fill: C.rindDeep }} />
          </g>
        ))}
    </>
  )
}

const machine: Draw = (p, rand, variant) => {
  if (variant === "robot") {
    return (
      <>
        <rect width="400" height="400" style={{ fill: p.bg }} />
        {[90, 210, 330].map((y) => (
          <rect key={y} x="-10" y={y} width="420" height="10" style={{ fill: p.accent, opacity: 0.7 }} />
        ))}
        {[40, 290].map((x, i) =>
          [90, 210, 330].map((y) => <rect key={`${i}-${y}`} x={x} y={y - 46} width="72" height="44" rx="10" style={{ fill: p.mid, opacity: 0.8 }} />)
        )}
        <rect x="150" y="40" width="16" height="320" rx="8" style={{ fill: p.soft, opacity: 0.6 }} />
        <rect x="234" y="40" width="16" height="320" rx="8" style={{ fill: p.soft, opacity: 0.6 }} />
        <rect x="132" y="168" width="136" height="64" rx="16" style={{ fill: p.accent }} />
        <circle cx="200" cy="200" r="16" style={{ fill: p.bg }} />
        <circle cx="200" cy="200" r="6" style={{ fill: p.mid }} />
        <rect x="164" y="236" width="72" height="44" rx="10" style={{ fill: p.mid }} />
      </>
    )
  }
  const n = 4
  return (
    <>
      <rect width="400" height="400" style={{ fill: p.bg }} />
      <rect x="-10" y="330" width="420" height="80" style={{ fill: p.fg, opacity: 0.4 }} />
      {Array.from({ length: n }, (_, i) => {
        const x = 30 + i * 90
        const h = 210 + rand() * 60
        return (
          <g key={i}>
            <rect x={x} y={330 - h} width="70" height={r1(h)} rx="35" style={{ fill: p.mid }} />
            <rect x={x + 12} y={r1(346 - h)} width="10" height={r1(h - 40)} rx="5" style={{ fill: p.soft, opacity: 0.55 }} />
            <circle cx={x + 35} cy={r1(330 - h * 0.62)} r="14" style={{ fill: p.bg, stroke: p.accent, strokeWidth: 4 }} />
            <line x1={x + 35} y1={r1(330 - h * 0.62)} x2={r1(x + 35 + 8 * Math.cos(rand() * 6))} y2={r1(330 - h * 0.62 - 8)} style={{ stroke: p.accent, strokeWidth: 3, strokeLinecap: "round" }} />
          </g>
        )
      })}
      <path d="M 20 70 H 380" style={{ stroke: p.accent, strokeWidth: 8, strokeLinecap: "round", opacity: 0.8 }} />
      {Array.from({ length: n }, (_, i) => (
        <rect key={i} x={61 + i * 90} y="70" width="8" height="30" style={{ fill: p.accent, opacity: 0.8 }} />
      ))}
    </>
  )
}

const wheel: Draw = (p, rand, variant, uid) => {
  const cx = 200
  const cy = 210
  const R = 150
  const a0 = -0.35 - rand() * 0.3
  const a1 = a0 + 0.75
  const pt = (a: number, r = R) => `${r1(cx + Math.cos(a) * r)} ${r1(cy + Math.sin(a) * r)}`
  const body = `M ${cx} ${cy} L ${pt(a1)} A ${R} ${R} 0 1 1 ${pt(a0)} Z`
  const inner = `M ${cx} ${cy} L ${pt(a1, R - 16)} A ${R - 16} ${R - 16} 0 1 1 ${pt(a0, R - 16)} Z`
  const eyes =
    variant === "blue"
      ? null
      : Array.from({ length: variant === "soft" ? 0 : 9 }, (_, i) => {
          const a = a1 + 0.3 + rand() * (Math.PI * 2 - 1.4)
          const d = 30 + rand() * (R - 60)
          return <circle key={i} cx={r1(cx + Math.cos(a) * d)} cy={r1(cy + Math.sin(a) * d)} r={r1(5 + rand() * 12)} style={{ fill: p.bg, opacity: 0.7 }} />
        })
  const blue =
    variant === "blue"
      ? Array.from({ length: 40 }, (_, i) => {
          const a = a1 + 0.2 + rand() * (Math.PI * 2 - 1)
          const d = rand() * (R - 30)
          return <circle key={i} cx={r1(cx + Math.cos(a) * d)} cy={r1(cy + Math.sin(a) * d)} r={r1(2 + rand() * 7)} style={{ fill: C.mold, opacity: 0.85 }} />
        })
      : null
  const rindFill = variant === "soft" ? C.paper : variant === "washed" ? C.rind : C.rindDeep
  const paste = variant === "soft" || variant === "blue" ? C.cream : C.wax
  return (
    <>
      <rect width="400" height="400" style={{ fill: p.bg }} />
      <ellipse cx={cx} cy={cy + R + 14} rx={R * 0.9} ry="14" style={{ fill: C.cave, opacity: 0.18 }} />
      <path d={body} style={{ fill: rindFill }} />
      <path d={inner} style={{ fill: paste }} />
      <clipPath id={`${uid}-paste`}>
        <path d={inner} />
      </clipPath>
      <g clipPath={`url(#${uid}-paste)`}>
        {eyes}
        {blue}
      </g>
      <g transform={`translate(${r1(Math.cos((a0 + a1) / 2) * 40)} ${r1(Math.sin((a0 + a1) / 2) * 40)})`}>
        <path d={`M ${cx} ${cy} L ${pt(a0, R)} A ${R} ${R} 0 0 1 ${pt(a1, R)} Z`} style={{ fill: rindFill }} />
        <path d={`M ${cx} ${cy} L ${pt(a0 + 0.04, R - 16)} A ${R - 16} ${R - 16} 0 0 1 ${pt(a1 - 0.04, R - 16)} Z`} style={{ fill: paste }} />
      </g>
    </>
  )
}

const motifs: Record<Motif, { draw: Draw; tone: Tone }> = {
  holes: { draw: holes, tone: "wax" },
  shelves: { draw: shelves, tone: "cave" },
  curd: { draw: curd, tone: "cream" },
  veins: { draw: veins, tone: "paper" },
  rind: { draw: rind, tone: "rind" },
  waves: { draw: waves, tone: "paper" },
  rings: { draw: rings, tone: "paper" },
  topo: { draw: topo, tone: "cream" },
  chart: { draw: chart, tone: "cave" },
  arches: { draw: arches, tone: "cave" },
  portrait: { draw: portrait, tone: "cream" },
  landscape: { draw: landscape, tone: "cream" },
  machine: { draw: machine, tone: "paper" },
  wheel: { draw: wheel, tone: "cream" },
}

const allMotifs = Object.keys(motifs) as Motif[]

function hash(s: string) {
  let h = 2166136261
  for (let i = 0; i < s.length; i++) h = Math.imul(h ^ s.charCodeAt(i), 16777619)
  return h >>> 0
}

/** Picks a stable motif for slots that have no explicit art. */
export function artFromLabel(label: string): ArtSpec {
  const h = hash(label)
  return { motif: allMotifs[h % allMotifs.length], seed: h }
}

export function Art({ motif, tone, seed = 1, variant }: ArtSpec) {
  const uid = useId().replace(/:/g, "")
  const m = motifs[motif]
  const p = palettes[tone ?? m.tone]
  return (
    <svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid slice" className="absolute inset-0 size-full" aria-hidden focusable="false">
      <defs>
        <radialGradient id={uid} cx="50%" cy="50%" r="70%">
          <stop offset="55%" stopColor="black" stopOpacity="0" />
          <stop offset="100%" stopColor="black" stopOpacity="0.55" />
        </radialGradient>
      </defs>
      {m.draw(p, rng(seed), variant, uid)}
    </svg>
  )
}
