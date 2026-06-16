export type ProductCategory =
  | 'mom-jeans'
  | 'baggy-jeans'
  | 'palazzo-jeans'
  | 'barrel-jeans'
  | 'skinny-jeans'
  | 'wide-leg-jeans'
  | 'straight-leg-jeans'
  | 'boyfriend-jeans'
  | 'combat-jeans'
  | 'flare-jeans'
  | 'bootcut-jeans'
  | 'cargo-jeans'
  | 'ripped-jeans'
  | 'denim-jacket'
  | 'denim-skirt'
  | 'denim-shorts'
  | 'denim-jumpsuit'
  | 'denim-gown'
  | 'denim-corset'
  | 'denim-shirt';

export type ProductFit =
  | 'skinny'
  | 'slim'
  | 'relaxed'
  | 'loose'
  | 'oversized'
  | 'curvy'
  | 'petite'
  | 'tall'
  | 'stretch';

export type WaistType = 'high' | 'super-high' | 'mid' | 'low' | 'corset';

export type DenimWash =
  | 'dark-blue'
  | 'light-blue'
  | 'acid-wash'
  | 'black'
  | 'grey'
  | 'white'
  | 'vintage'
  | 'stone'
  | 'snow'
  | 'raw'
  | 'faded';

export type BodyType =
  | 'curvy'
  | 'slim'
  | 'petite'
  | 'tall'
  | 'plus-size'
  | 'athletic'
  | 'hourglass'
  | 'pear'
  | 'rectangle';

export interface Product {
  id: string;
  slug: string;
  name: string;
  category: ProductCategory;
  categoryLabel: string;
  collection: string[];
  fit: ProductFit;
  waist?: WaistType;
  wash?: DenimWash;
  colors: string[]; // hex
  colorLabels: string[];
  sizes: string[];
  bodyTypes: BodyType[];
  price: number; // NGN
  comparePrice?: number;
  wholesalePrice?: number;
  minWholesaleQty?: number;
  description: string;
  features: string[];
  fabric: string;
  stretchLevel: 1 | 2 | 3 | 4 | 5;
  images: string[];
  rating: number;
  reviewCount: number;
  stock: number;
  isNew?: boolean;
  isTrending?: boolean;
  isBestSeller?: boolean;
  isWholesaleEligible?: boolean;
  isLimited?: boolean;
  tags?: string[];
}

export interface Review {
  id: string;
  productId: string;
  author: string;
  location: string;
  rating: number;
  title: string;
  body: string;
  date: string;
  bodyType?: string;
  sizeBought?: string;
  verified: boolean;
  image?: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  cover: string;
}

export interface Collection {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  cover: string;
  productCount: number;
}
