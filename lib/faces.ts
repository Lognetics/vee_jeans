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

const U = (id: string, w = 800) =>
  `https://images.unsplash.com/${id}?w=${w}&q=85&auto=format&fit=crop`;

export const VEE_FACES: Face[] = [
  {
    name: 'Vivian Okeke',
    handle: '@vee_jeans_backuppage',
    location: 'Founder · Abuja',
    note: 'Curating premium Turkish denim for the everyday Nigerian woman.',
    image: U('photo-1611042553484-d61f84d22784'),
    filename: 'founder.jpg',
    link: 'https://instagram.com/vee_jeans_backuppage',
  },
  {
    name: 'Adaeze O.',
    handle: '@dazey_lifestyle',
    location: 'Lagos',
    note: 'The high-waist mom jeans — I have them in every wash.',
    image: U('photo-1605497788044-5a32c7078486'),
    filename: 'face-1.jpg',
  },
  {
    name: 'Chiamaka E.',
    handle: '@chichi.styles',
    location: 'Abuja',
    note: 'Baggy denim + corset = my Friday night uniform.',
    image: U('photo-1488207984690-c759b0b07d6f'),
    filename: 'face-2.jpg',
  },
  {
    name: 'Ngozi K.',
    handle: '@nk_couture_lagos',
    location: 'Surulere · Boutique partner',
    note: 'My customers ask for Vee_jeans by name now.',
    image: U('photo-1532074205216-d0e1f4b87368'),
    filename: 'face-3.jpg',
  },
  {
    name: 'Funmi B.',
    handle: '@funmi.b',
    location: 'Ibadan',
    note: 'Plus-size denim that actually fits — finally.',
    image: U('photo-1573496359142-b8d87734a5a2'),
    filename: 'face-4.jpg',
  },
  {
    name: 'Zainab M.',
    handle: '@zainabwears',
    location: 'Kano',
    note: 'The palazzo silhouette is genuinely office-to-evening.',
    image: U('photo-1601925260368-ae2f83cf8b7f'),
    filename: 'face-5.jpg',
  },
  {
    name: 'Tomi A.',
    handle: '@tomi.styles',
    location: 'Port Harcourt',
    note: 'Curve Sculpt skinny is the only skinny I wear now.',
    image: U('photo-1531123897727-8f129e1688ce'),
    filename: 'face-6.jpg',
  },
  {
    name: 'Bisi O.',
    handle: '@bisi_closet',
    location: 'Abuja · Boutique partner',
    note: 'Boutique partner since the Curvy collection dropped.',
    image: U('photo-1554232682-b9ef9c92f8de'),
    filename: 'face-7.jpg',
  },
];
