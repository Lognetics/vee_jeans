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
  womanDenim1:  C(46),  // denim jumpsuit, on-model
  womanDenim2:  C(30),  // wide-leg, on-model
  womanDenim3:  C(45),  // grey wide-leg, on-model
  womanDenim4:  C(27),  // maxi skirt, on-model
  womanDenim5:  C(29),  // denim skort, on-model
  womanDenim6:  C(21),  // denim jumpsuit, on-model
  womanDenim7:  C(49),  // denim jumpsuit, on-model
  womanDenim8:  C(15),  // dungaree shorts, on-model
  womanDenim9:  C(40),  // light-blue jeans, on-model
  womanDenim10: C(22),  // combat / cargo, on-model
  womanDenim11: C(43),  // light-blue jeans, on-model
  womanDenim12: C(7),   // ripped grey jeans
  womanDenim13: C(4),   // denim corset
  womanDenim14: C(48),  // rhinestone denim jacket
  womanDenim15: C(19),  // plus-size jeans
  womanDenim16: C(5),   // light-blue jeans, on-model
  womanDenim17: C(37),  // midi denim skirt
  womanDenim18: C(39),  // plus-size jeans
  womanDenim19: C(2),   // black wide-leg, on-model
  womanDenim20: C(20),  // maxi skirt

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

// Category tile images — each tile shows the matching product
export const CATEGORY_IMG = {
  momJeans:       C(30),
  baggyJeans:     C(40),
  palazzoJeans:   C(30),
  barrelJeans:    C(3),
  skinnyJeans:    C(19),
  wideLeg:        C(30),
  straightLeg:    C(35),
  boyfriendJeans: C(16),
  combatJeans:    C(22),
  flare:          C(45),
  ripped:         C(7),
  cargo:          C(22),
  denimJacket:    C(48),
  denimSkirt:     C(23),
  miniSkirt:      C(23),
  midiSkirt:      C(37),
  maxiSkirt:      C(27),
  denimShorts:    C(6),
  dungareeShorts: C(15),
  denimJumpsuit:  C(46),
  denimCorset:    C(4),
  denimGown:      C(27),
};
