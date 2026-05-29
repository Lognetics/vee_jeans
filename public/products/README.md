# Vee_jeans Product Photos

Drop your product photos in this folder using the exact filenames below.
Until you do, the site falls back to safe Unsplash placeholders so nothing
breaks.

## Image map (from the photos you shared)

Save each photo with the filename listed. The order matches the order you
shared them.

| # | Filename                  | What's in the photo                                 |
|---|---------------------------|-----------------------------------------------------|
| 1 | `stack-ck-blue.jpg`       | Calvin Klein stacked jeans (blue → black → grey)    |
| 2 | `dark-denim-armful.jpg`   | Person holding armful of dark + light denim         |
| 3 | `store-shelf.jpg`         | Store shelves with folded stacks + hanger rack      |
| 4 | `stool-stack.jpg`         | Stacked jeans on a wooden stool                     |
| 5 | `levis-chair.jpg`         | Levi's jeans draped on wooden chair                 |
| 6 | `chair-cascade.jpg`       | Many jeans cascading from a metal chair             |
| 7 | `wide-leg-light-side.jpg` | Light blue wide-leg jeans (side view, model)        |
| 8 | `wide-leg-mid-side.jpg`   | Mid blue wide-leg jeans (side view, model)          |
| 9 | `wide-leg-mid-front.jpg`  | Mid blue wide-leg jeans (front view, model)         |
| 10| `light-flare-back.jpg`    | Light blue flare jeans (back view)                  |
| 11| `pencil-skirt-front.jpg`  | Mid blue denim pencil skirt with slit (front)       |
| 12| `pencil-skirt-back.jpg`   | Light blue denim pencil skirt (back view)           |
| 13| `kult-skinny-back.jpg`    | KULT skinny jeans back/curve detail                 |
| 14| `fan-stack-greys.jpg`     | Fanned stack — blues, navy, grey, black             |
| 15| `wide-leg-walk.jpg`       | Black-tee model walking in wide-leg blue jeans      |
| 16| `skinny-detail-waist.jpg` | Light blue skinny waist + button detail             |
| 17| `mirror-flare-tan.jpg`    | Tan-tee mirror selfie in wide flare jeans           |
| 18| `ripped-baggy-bag.jpg`    | Ripped baggy jeans with side bag                    |
| 19| `wide-faded-green.jpg`    | Wide-leg jeans + green sweater (waist down)         |
| 20| `tinted-baggy-side.jpg`   | Tinted/yellow-wash baggy jeans (side view)          |
| 21| `black-wide-flat.jpg`     | Black wide-leg jeans laid flat on cushion           |
| 22| `denim-shorts-mid.jpg`    | Mid blue denim shorts (waist down)                  |
| 23| `wide-ripped-knee.jpg`    | Mid blue wide-leg jeans with ripped knees           |
| 24| `levis-flatlay-trio.jpg`  | Three Levi's jeans laid flat (light/dark/grey)      |
| 25| `wooden-shelf-stacks.jpg` | Tall stacks of folded blue jeans on wood shelves    |
| 26| `hanger-trio-blue.jpg`    | Three jeans on wooden hangers (dark to light)       |
| 27| `flatlay-celine-book.jpg` | Three jeans flat with vase + Céline book            |
| 28| `dark-folded-stack.jpg`   | Stack of dark folded jeans with leather tab         |
| 29| `stool-h-and-m-stack.jpg` | Stack of jeans on light wooden stool                |
| 30| `vintage-crate-styled.jpg`| Styled crate scene with jeans of various washes     |
| 31| `kids-denim-bundle.jpg`   | Bundled stack of light + dark denim                 |
| 32| `denim-jacket-roses.jpg`  | Light denim jacket with rose embroidery (man)       |
| 33| `brick-wall-hangers.jpg`  | Jeans on hangers against brick wall                 |
| 34| `pencil-button-skirt.jpg` | Pencil skirt with button-front (front + back)       |
| 35| `wide-elevator.jpg`       | Wide-leg jeans, model in elevator (mid blue)        |
| 36| `wide-ripped-walk.jpg`    | Wide-leg ripped jeans, full-body walking shot       |
| 37| `stack-jean-tower.jpg`    | Tall stack of folded jeans (multi-wash)             |
| 38| `nature-flatlay-4.jpg`    | Four jeans flat on green moss / stones              |
| 39| `cargo-shorts-blue.jpg`   | Mid blue cargo denim shorts                         |
| 40| `outdoor-hanger-rack.jpg` | Outdoor rack of hanging blue jeans                  |
| 41| `dark-baggy-front.jpg`    | Dark navy baggy jeans (front view, model)           |
| 42| `mid-straight-walk.jpg`   | Mid blue straight jeans, walking model              |

## How to save

1. Right-click any image in the chat → **Save image as…**
2. Rename to the filename in column 2
3. Drop into this folder (`/public/products/`)

## After dropping files

The site is already wired to look for these paths. Each filename appears in
`lib/images.ts` next to a fallback Unsplash URL — once your local file
exists, Next.js serves it instead. No code changes needed on your end.

If you want to remove the Unsplash fallbacks entirely after dropping all
files, open `lib/images.ts` and delete the `?? '…'` portions.
