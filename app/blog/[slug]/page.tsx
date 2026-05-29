import { notFound } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { BLOG_POSTS, getBlogPost } from '@/lib/blog';

export function generateStaticParams() {
  return BLOG_POSTS.map((p) => ({ slug: p.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  return { title: post ? `${post.title} — Vee_jeans Journal` : 'Article not found' };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getBlogPost(params.slug);
  if (!post) notFound();
  const others = BLOG_POSTS.filter((p) => p.slug !== post.slug).slice(0, 3);

  return (
    <>
      <article className="container-luxe py-16 max-w-3xl">
        <Link href="/blog" className="inline-flex items-center gap-2 text-xs text-ink-muted hover:text-denim-900">
          <ArrowLeft className="h-3.5 w-3.5" /> Back to journal
        </Link>
        <div className="flex items-center gap-2 text-[11px] uppercase tracking-[0.2em] text-clay-500 mt-8">
          <span>{post.category}</span>
          <span>·</span>
          <span>{post.readTime}</span>
        </div>
        <h1 className="font-display text-4xl md:text-6xl mt-4 text-denim-900 leading-[1.05]">
          {post.title}
        </h1>
        <div className="flex items-center gap-3 mt-6 text-sm text-ink-muted">
          <span>By {post.author}</span>
          <span>·</span>
          <span>{post.date}</span>
        </div>

        <div className="mt-10 aspect-[3/2] rounded-3xl overflow-hidden">
          <img src={post.cover} alt={post.title} className="h-full w-full object-cover" />
        </div>

        <div className="mt-12 prose max-w-none text-lg leading-relaxed text-ink-soft space-y-6">
          <p className="text-2xl text-denim-900 font-display leading-snug">{post.excerpt}</p>
          <p>
            There's a reason the denim renaissance is happening in 2026. After years of skinny dominance, the runway and the street finally agree: relaxed wins. And no fabric tells that story like denim does.
          </p>
          <p>
            At Vee_jeans, we approach every drop with one question in mind — does this make her feel like the best version of herself? Because that's what good denim does. It doesn't ask you to shrink. It asks you to show up.
          </p>
          <h2 className="font-display text-3xl text-denim-900 pt-4">The five rules</h2>
          <p>
            We talk about this constantly with our boutique partners. Here's what we tell them, and what we tell anyone curating their own denim wardrobe.
          </p>
          <ol className="list-decimal pl-5 space-y-3">
            <li><strong className="text-denim-900">Fit before fashion.</strong> A trend looks good on you when the fit is right. Start with what works for your body, then add trend.</li>
            <li><strong className="text-denim-900">Quality compounds.</strong> Premium denim wears better with time. A ₦25,000 pair lasts five times longer than a ₦5,000 pair.</li>
            <li><strong className="text-denim-900">Three rises, three legs.</strong> A complete wardrobe has high, mid, and low-rise — and skinny, straight, and wide. You're set.</li>
            <li><strong className="text-denim-900">Wash less.</strong> Spot clean. Air them out. Wash inside out, cold. Air dry. Your jeans will last years.</li>
            <li><strong className="text-denim-900">Buy your size.</strong> The jeans that fit are always the jeans that flatter. Take your measurements.</li>
          </ol>
          <h2 className="font-display text-3xl text-denim-900 pt-4">In closing</h2>
          <p>
            The right denim is the most worn item in your wardrobe. Make it count. Make it premium. Make it Vee_jeans.
          </p>
        </div>

        <div className="mt-12 pt-8 border-t border-cream-300 flex items-center justify-between">
          <p className="text-sm text-ink-muted">Share this article</p>
          <div className="flex gap-2">
            {['IG', 'TT', 'WA', 'X'].map((s) => (
              <button key={s} className="grid place-items-center h-9 w-9 rounded-full border border-cream-300 text-xs hover:bg-denim-900 hover:text-cream-50 hover:border-denim-900 transition-colors">
                {s}
              </button>
            ))}
          </div>
        </div>
      </article>

      {/* Related */}
      <section className="bg-cream-100 py-20">
        <div className="container-luxe">
          <h2 className="font-display text-3xl md:text-4xl text-denim-900 mb-10">More to read.</h2>
          <div className="grid md:grid-cols-3 gap-6">
            {others.map((p) => (
              <Link key={p.id} href={`/blog/${p.slug}`} className="group">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <img src={p.cover} alt={p.title} className="h-full w-full object-cover transition-transform group-hover:scale-105 duration-700" />
                </div>
                <p className="text-[11px] tracking-[0.2em] uppercase text-clay-500 mt-4">{p.category}</p>
                <h3 className="font-display text-xl mt-2 text-denim-900 group-hover:text-clay-500 transition-colors leading-tight">
                  {p.title}
                </h3>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
