# Photo prompts

Every image slot shows a generated illustration by default (`src/components/brand/art.tsx`).
The slots below can also take a real photo. Generate one and save it under
`public/photos/` with the given name. The extension can be `.jpg`, `.png`, `.webp` or `.avif`.
The photo replaces the illustration on the next page load in dev, or after the next build in production.
To go back to the illustration, delete the file.

## Shared style

Add this to the end of every prompt, so the photos look like one series:

> Editorial documentary photograph, shot on 35mm film (Kodak Portra 400), warm natural light,
> muted palette of cream, amber, rust and deep brown, soft film grain, shallow depth of field,
> calm premium mood. No text, no logos, no watermark.

## Prompts

| File | Ratio | Where it appears | Prompt |
| --- | --- | --- | --- |
| `cave` | 5:4 | Home: "Inside the cave" | Endless wooden shelves stacked with large round wheels of aged alpine cheese inside a dim, vaulted sandstone cave, warm lamps glowing along the aisle, slight haze, deep perspective |
| `product-alpine` | 1:1 | Home: collection, "Hochalm 24" | Studio product shot of a large wheel of aged alpine hard cheese with one wedge cut out, golden paste with tiny crystals, natural brown rind, on a cream linen background |
| `product-soft` | 1:1 | Home: collection, "Weißer Mond" | Studio product shot of a small round bloomy-rind soft cheese cut open, creamy interior gently oozing, snow-white rind, on a muted slate-blue background |
| `product-blue` | 1:1 | Home: collection, "Blaue Stunde" | Studio product shot of a blue-veined cheese, a broken piece showing marbled blue-green veins in ivory paste, on a warm amber background |
| `product-washed` | 1:1 | Home: collection, "Glutrinde" | Studio product shot of an orange washed-rind cheese with a sticky, slightly wrinkled rind, one slice cut, on a very dark brown background with soft side light |
| `founder` | 4:5 | About: hero (arch) | Portrait of a woman in her early sixties, grey hair in a bun, linen apron, standing between cheese shelves in a sandstone cave, gentle confident smile, looking at camera |
| `aerial` | 4:3 | About: facility, large tile | Aerial drone view of a small modern dairy with timber roofs next to green alpine meadows and a winding road, early morning mist, Allgäu mountains in the distance |
| `tech-milk` | 4:5 | Technologies: 01 Milk treatment | Clean stainless-steel microfiltration unit with ceramic membrane housings and pipes in a bright dairy hall, a worker in white coat checking a gauge, soft daylight |
| `tech-cultures` | 4:5 | Technologies: 02 Cultures | Microbiologist in a white coat and hairnet working at a laminar-flow bench, holding a petri dish up to the light, glass flasks and pipettes around |
| `tech-robotics` | 4:5 | Technologies: 03 Robotics | Compact autonomous robot shuttle lifting a large cheese wheel between tall oak shelves in a cheese cave, subtle orange status light, warm dim light |
| `tech-climate` | 4:5 | Technologies: 04 Cave climate | Close-up of a small wireless sensor box mounted on an oak shelf next to aged cheese wheels in a cave, tiny green LED, shallow depth of field |
| `tech-model` | 4:5 | Technologies: 05 Ripening model | Cheese affineur in a cave holding a cheese iron next to a wheel, looking at a tablet showing a smooth curve chart, warm lamp light |
| `tech-whey` | 4:5 | Technologies: 06 Whey cycle | Two white biogas domes next to a small timber dairy at dusk, alpine meadow, warm orange sky, gentle evening light |
| `careers-affineur` | 3:4 | Careers: hero (tall pill) | Young cheese affineur in a white cap and apron tapping a large cheese wheel with a small hammer to listen, inside a sandstone cave, focused expression |
| `staff-village` | 4:3 | Careers: perks, large tile | Small alpine village with wooden chalet houses with flower boxes on a green slope, a few bicycles, warm late-afternoon sun |

## Tips

- Images should be at least 1600 px on the long side. WebP or JPG at 80 % quality is enough.
- The frames crop the photo (arches, pills, rounded corners), so keep the subject near the centre.
- If the generator lets you, pick the aspect ratio from the table. Otherwise generate a square image; the frame crops it.
