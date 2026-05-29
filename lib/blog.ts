import type { BlogPost } from './types';
import { IMG } from './images';

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'b1',
    slug: 'how-to-style-baggy-jeans-2026',
    title: 'How to Style Baggy Jeans in 2026',
    excerpt:
      'Five ways to wear the season’s most-wanted silhouette — from streetwear to elevated date-night.',
    category: 'Styling Tips',
    author: 'Vee_jeans Editorial',
    date: '2026-05-22',
    readTime: '6 min read',
    cover: IMG.womanDenim2,
  },
  {
    id: 'b2',
    slug: 'finding-jeans-for-curvy-bodies',
    title: 'A Curvy Girl’s Guide to Jeans That Actually Fit',
    excerpt:
      'No more waist gap, no more thigh squeeze. The denim cuts engineered for curves — and how to know which is yours.',
    category: 'Body Type Guides',
    author: 'Sandra Okonkwo',
    date: '2026-05-15',
    readTime: '9 min read',
    cover: IMG.womanDenim4,
  },
  {
    id: 'b3',
    slug: 'why-turkish-denim',
    title: 'Why We Source From Turkey',
    excerpt:
      'Behind the mill. The story of why Turkish denim is considered the gold standard — and why we won’t source anywhere else.',
    category: 'Behind the Brand',
    author: 'Vee_jeans Editorial',
    date: '2026-05-08',
    readTime: '5 min read',
    cover: IMG.womanDenim7,
  },
  {
    id: 'b4',
    slug: 'denim-care-101',
    title: 'Denim Care 101 — Make Your Jeans Last',
    excerpt:
      'How to wash, dry, store, and revive your denim. Yes, washing them less is actually the answer.',
    category: 'Denim Care',
    author: 'Vee_jeans Editorial',
    date: '2026-04-30',
    readTime: '4 min read',
    cover: IMG.womanDenim5,
  },
  {
    id: 'b5',
    slug: 'tiktok-denim-trends',
    title: 'Every Denim Trend Going Viral Right Now',
    excerpt:
      'Barrel jeans, oversized boyfriend jackets, denim corsets. Here’s what’s topping our TikTok algorithm in 2026.',
    category: 'Trends',
    author: 'Vee_jeans Editorial',
    date: '2026-04-18',
    readTime: '7 min read',
    cover: IMG.womanDenim11,
  },
  {
    id: 'b6',
    slug: 'building-denim-wardrobe',
    title: 'The 7-Piece Denim Wardrobe Every Woman Needs',
    excerpt:
      'Build your foundation. The seven Vee_jeans pieces that work in endless combinations.',
    category: 'Styling Tips',
    author: 'Vee_jeans Editorial',
    date: '2026-04-10',
    readTime: '8 min read',
    cover: IMG.womanDenim6,
  },
];

export function getBlogPost(slug: string) {
  return BLOG_POSTS.find((p) => p.slug === slug);
}
