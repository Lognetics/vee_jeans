// ─────────────────────────────────────────────────────────────────────────────
// FACES OF VEE_JEANS
//
// These are the only places on the site that feature human faces — the
// Community section on the homepage. Product cards remain jeans-only.
//
// To swap any face for an actual photo from @Vee_jeans_backuppage:
//   1. Download the image from Instagram
//   2. Drop it into `/public/instagram/` with the filename below
//   3. Change the `image` URL here to e.g. `/instagram/founder.jpg`
// ─────────────────────────────────────────────────────────────────────────────

export interface Face {
  name: string;
  handle?: string;
  location: string;
  note: string;
  image: string;
  link?: string;
  filename: string; // suggested filename when dropped into /public/instagram/
}

export const VEE_FACES: Face[] = [
  {
    name: 'Vivian Okeke',
    handle: '@vee_jeans_backuppage',
    location: 'Founder · Abuja',
    note: 'Curating premium Turkish denim for the everyday Nigerian woman.',
    image: '/instagram/founder.jpg',
    filename: 'founder.jpg',
    link: 'https://instagram.com/vee_jeans_backuppage',
  },
  {
    name: 'Adaeze O.',
    handle: '@dazey_lifestyle',
    location: 'Lagos',
    note: 'The high-waist mom jeans — I have them in every wash.',
    image: '/instagram/face-1.jpg',
    filename: 'face-1.jpg',
  },
  {
    name: 'Chiamaka E.',
    handle: '@chichi.styles',
    location: 'Abuja',
    note: 'Baggy denim + corset = my Friday night uniform.',
    image: '/instagram/face-2.jpg',
    filename: 'face-2.jpg',
  },
  {
    name: 'Ngozi K.',
    handle: '@nk_couture_lagos',
    location: 'Surulere · Boutique partner',
    note: 'My customers ask for Vee_jeans by name now.',
    image: '/instagram/face-3.jpg',
    filename: 'face-3.jpg',
  },
  {
    name: 'Funmi B.',
    handle: '@funmi.b',
    location: 'Ibadan',
    note: 'Plus-size denim that actually fits — finally.',
    image: '/instagram/face-4.jpg',
    filename: 'face-4.jpg',
  },
  {
    name: 'Zainab M.',
    handle: '@zainabwears',
    location: 'Kano',
    note: 'The palazzo silhouette is genuinely office-to-evening.',
    image: '/instagram/face-5.jpg',
    filename: 'face-5.jpg',
  },
  {
    name: 'Tomi A.',
    handle: '@tomi.styles',
    location: 'Port Harcourt',
    note: 'Curve Sculpt skinny is the only skinny I wear now.',
    image: '/instagram/face-6.jpg',
    filename: 'face-6.jpg',
  },
  {
    name: 'Bisi O.',
    handle: '@bisi_closet',
    location: 'Abuja · Boutique partner',
    note: 'Boutique partner since the Curvy collection dropped.',
    image: '/instagram/face-7.jpg',
    filename: 'face-7.jpg',
  },
];
