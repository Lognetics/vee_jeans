// ─────────────────────────────────────────────────────────────────────────────
// CENTRAL IMAGE BANK
//
// Every key points to a real Vee_jeans product photo in `/public/catalog/`
// (img-01.jpg … img-50.jpg). These are the only images used across the site.
// ─────────────────────────────────────────────────────────────────────────────

// Catalog photo by number — `/public/catalog/img-NN.jpg`
export const C = (n: number) => `/catalog/img-${n.toString().padStart(2, '0')}.jpg`;

// ─── The image bank ───
// Variable names keep the `womanDenim*` prefix for backwards compatibility.
// These feed collection covers, body-type tiles, blog covers and reviews.
export const IMG = {
  womanDenim1:  C(5),   // straight-leg, on-model
  womanDenim2:  C(30),  // wide-leg, on-model
  womanDenim3:  C(43),  // wide-leg, on-model
  womanDenim4:  C(40),  // wide-leg, on-model
  womanDenim5:  C(27),  // maxi skirt, on-model
  womanDenim6:  C(21),  // denim jumpsuit, on-model
  womanDenim7:  C(46),  // denim jumpsuit, on-model
  womanDenim8:  C(1),   // denim skirt, on-model
  womanDenim9:  C(45),  // grey wide-leg, on-model
  womanDenim10: C(48),  // wide-leg, on-model
  womanDenim11: C(22),  // combat / cargo, on-model
  womanDenim12: C(39),  // ripped jeans, on-model
  womanDenim13: C(29),  // wrap mini skirt, on-model
  womanDenim14: C(15),  // dungaree shorts, on-model
  womanDenim15: C(36),  // denim shorts, on-model
  womanDenim16: C(49),  // denim jumpsuit, on-model
  womanDenim17: C(14),  // midi skirt, on-model
  womanDenim18: C(19),  // wide-leg, plus size
  womanDenim19: C(7),   // grey distressed wide-leg
  womanDenim20: C(4),   // black wide-leg, on-model

  // Editorial banners (large hero crops) — boutique + on-model
  editorial1: C(33),
  editorial2: C(32),
  editorial3: C(34),
  editorial4: C(27),
  editorial5: C(45),
  editorial6: C(30),
};

// `thumb` kept for API compatibility — local paths don't need resizing
export const thumb = (url: string, w = 400) =>
  url.startsWith('http') ? url.replace(/w=\d+/, `w=${w}`) : url;

// Category tile images — each tile shows a representative denim shot
export const CATEGORY_IMG = {
  momJeans:       C(5),
  baggyJeans:     C(30),
  palazzoJeans:   C(43),
  barrelJeans:    C(3),
  skinnyJeans:    C(17),
  wideLeg:        C(40),
  straightLeg:    C(10),
  boyfriendJeans: C(11),
  combatJeans:    C(22),
  flare:          C(48),
  ripped:         C(39),
  cargo:          C(22),
  denimJacket:    C(32),
  denimSkirt:     C(1),
  miniSkirt:      C(29),
  midiSkirt:      C(14),
  maxiSkirt:      C(27),
  denimShorts:    C(36),
  dungareeShorts: C(15),
  denimJumpsuit:  C(46),
  denimCorset:    C(29),
  denimGown:      C(27),
};
