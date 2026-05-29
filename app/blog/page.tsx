import Link from 'next/link';
import { BLOG_POSTS } from '@/lib/blog';

export const metadata = {
  title: 'Denim Journal — Vee_jeans',
  description: 'Styling tips, body type guides, denim care, and fashion trends from the Vee_jeans editorial team.',
};

const CATEGORIES = ['All', 'Styling Tips', 'Body Type Guides', 'Trends', 'Denim Care', 'Behind the Brand'];

export default function BlogPage() {
  const [hero, ...rest] = BLOG_POSTS;
  return (
    <>
      {/* Header */}
      <section className="container-luxe pt-16 pb-12">
        <p className="text-[11px] tracking-[0.3em] uppercase text-clay-500 mb-3">Denim Journal</p>
        <h1 className="font-display text-5xl md:text-7xl text-denim-900 leading-[1.02] max-w-3xl">
          Style notes from the editor.
        </h1>
        <p className="mt-5 text-ink-soft max-w-xl">
          Styling tips, body type guides, denim care, and the trends shaping how we wear denim now.
        </p>

        <div className="mt-10 flex flex-wrap gap-2">
          {CATEGORIES.map((c) => (
            <button
              key={c}
              className={`px-4 py-2 rounded-full text-xs transition-colors ${
                c === 'All' ? 'bg-denim-900 text-cream-50' : 'border border-cream-300 hover:border-denim-900'
              }`}
            >
              {c}
            </button>
          ))}
        </div>
      </section>

      {/* Featured post */}
      <section className="container-luxe pb-16">
        <Link href={`/blog/${hero.slug}`} className="group block">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-14 items-center">
            <div className="relative aspect-[4/3] overflow-hidden rounded-3xl bg-cream-200">
              <img src={hero.cover} alt={hero.title} className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              <div className="absolute top-5 left-5 pill bg-cream-50/90">Featured</div>
            </div>
            <div>
              <div className="flex items-center gap-2 text-[11px] tracking-[0.2em] uppercase text-clay-500">
                <span>{hero.category}</span>
                <span>·</span>
                <span>{hero.readTime}</span>
              </div>
              <h2 className="font-display text-4xl md:text-5xl mt-4 text-denim-900 leading-tight group-hover:text-clay-500 transition-colors">
                {hero.title}
              </h2>
              <p className="mt-5 text-ink-soft text-lg">{hero.excerpt}</p>
              <p className="mt-6 text-xs text-ink-muted">By {hero.author} · {hero.date}</p>
            </div>
          </div>
        </Link>
      </section>

      {/* Grid */}
      <section className="container-luxe pb-24">
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {rest.map((post) => (
            <Link key={post.id} href={`/blog/${post.slug}`} className="group">
              <div className="aspect-[4/3] overflow-hidden rounded-2xl bg-cream-200">
                <img src={post.cover} alt={post.title} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="mt-5">
                <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-ink-muted">
                  <span>{post.category}</span>
                  <span>·</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="font-display text-2xl mt-2 text-denim-900 group-hover:text-clay-500 transition-colors leading-tight">
                  {post.title}
                </h3>
                <p className="text-sm text-ink-soft mt-2">{post.excerpt}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="bg-denim-950 text-cream-50 py-20">
        <div className="container-luxe text-center max-w-2xl mx-auto">
          <p className="text-[11px] tracking-[0.3em] uppercase text-clay-300 mb-3">Stay close</p>
          <h2 className="font-display text-4xl md:text-5xl leading-tight">
            New articles. New drops. Straight to your inbox.
          </h2>
          <form className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Your email"
              className="flex-1 rounded-full bg-denim-900/50 border border-cream-50/30 px-5 py-3 text-sm outline-none placeholder:text-cream-200/50"
            />
            <button className="btn-accent">Subscribe</button>
          </form>
        </div>
      </section>
    </>
  );
}
