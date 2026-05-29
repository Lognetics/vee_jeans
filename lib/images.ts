// ─────────────────────────────────────────────────────────────────────────────
// CENTRAL IMAGE BANK
//
// Each image key points to a local file in `/public/products/` (the photos
// you shared in chat). Until the local files exist, a temporary Unsplash
// URL keeps the site working — so layout never breaks.
//
// To use your real photos:
//   1. Save them into /public/products/ with the filenames in the README.
//   2. That's it. Next.js serves them automatically.
// ─────────────────────────────────────────────────────────────────────────────

// Quick switch — set to `true` to use Unsplash fallbacks while you drop
// in your real photos. Set to `false` once your photos are in place.
const USE_FALLBACK = false;

const FB = (id: string, w = 1200) =>
  `https://images.unsplash.com/${id}?w=${w}&q=85&auto=format&fit=crop`;

const img = (filename: string, fallbackId: string) =>
  USE_FALLBACK ? FB(fallbackId) : `/products/${filename}`;

// ─── The image bank ───
// Each key references a local product photo. Variable names retain the
// `womanDenim*` prefix for backwards compatibility with existing code.

export const IMG = {
  // Stacks, flat-lays, hangers (great for editorial banners + category tiles)
  womanDenim1:  img('stack-ck-blue.jpg',       'photo-1582418702059-97ebafb35d09'),
  womanDenim2:  img('store-shelf.jpg',         'photo-1604176354204-9268737828e4'),
  womanDenim3:  img('stool-stack.jpg',         'photo-1542406775-ade58c52d2e4'),
  womanDenim4:  img('levis-flatlay-trio.jpg',  'photo-1604644401890-0bd678c83788'),
  womanDenim5:  img('wooden-shelf-stacks.jpg', 'photo-1565084888279-aca607ecce0c'),
  womanDenim6:  img('dark-folded-stack.jpg',   'photo-1576995853123-5a10305d93c0'),
  womanDenim7:  img('flatlay-celine-book.jpg', 'photo-1594633312681-425c7b97ccd1'),
  womanDenim8:  img('stool-h-and-m-stack.jpg', 'photo-1551803091-e20673f15770'),
  womanDenim9:  img('hanger-trio-blue.jpg',    'photo-1473445730015-841f29a9490b'),
  womanDenim10: img('vintage-crate-styled.jpg','photo-1438461875332-3b16ea93a936'),

  // Model-worn shots (jeans on women, lower body / detail only)
  womanDenim11: img('wide-leg-walk.jpg',       'photo-1591047139829-d91aecb6caea'),
  womanDenim12: img('mirror-flare-tan.jpg',    'photo-1541099649105-f69ad21f3246'),
  womanDenim13: img('wide-leg-light-side.jpg', 'photo-1584370848010-d7fe6bc767ec'),
  womanDenim14: img('wide-leg-mid-front.jpg',  'photo-1610799073055-3793cdc97fd5'),
  womanDenim15: img('denim-shorts-mid.jpg',    'photo-1593726891832-77e0ef98a1a8'),
  womanDenim16: img('denim-jacket-roses.jpg',  'photo-1606744837616-56c9a5c6a6eb'),
  womanDenim17: img('pencil-skirt-front.jpg',  'photo-1601333144130-8cbb312386b6'),
  womanDenim18: img('cargo-shorts-blue.jpg',   'photo-1594938298603-c8148c4dae35'),
  womanDenim19: img('tinted-baggy-side.jpg',   'photo-1542272604-787c3835535d'),
  womanDenim20: img('black-wide-flat.jpg',     'photo-1582552938357-32b906df40cb'),

  // Editorial banners (large hero crops)
  editorial1: img('wooden-shelf-stacks.jpg',  'photo-1582418702059-97ebafb35d09'),
  editorial2: img('chair-cascade.jpg',        'photo-1604176354204-9268737828e4'),
  editorial3: img('brick-wall-hangers.jpg',   'photo-1565084888279-aca607ecce0c'),
  editorial4: img('store-shelf.jpg',          'photo-1591047139829-d91aecb6caea'),
  editorial5: img('outdoor-hanger-rack.jpg',  'photo-1542272604-787c3835535d'),
  editorial6: img('stack-jean-tower.jpg',     'photo-1542406775-ade58c52d2e4'),
};

// `thumb` kept for API compatibility — local SVG/JPG paths don't need it
export const thumb = (url: string, w = 400) =>
  url.startsWith('http') ? url.replace(/w=\d+/, `w=${w}`) : url;

// Category tile images — each tile shows a representative denim shot
export const CATEGORY_IMG = {
  momJeans:       IMG.womanDenim2,
  baggyJeans:     IMG.womanDenim19,
  palazzoJeans:   IMG.womanDenim11,
  skinnyJeans:    IMG.womanDenim14,
  wideLeg:        IMG.womanDenim20,
  flare:          IMG.womanDenim12,
  ripped:         IMG.womanDenim15,
  cargo:          IMG.womanDenim18,
  denimJacket:    IMG.womanDenim16,
  denimSkirt:     IMG.womanDenim17,
  denimShorts:    IMG.womanDenim18,
  denimJumpsuit:  IMG.womanDenim6,
  denimCorset:    IMG.womanDenim13,
  denimGown:      IMG.womanDenim10,
};
