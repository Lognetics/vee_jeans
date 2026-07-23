import Link from 'next/link';
import { ArrowRight, Sparkles, Truck, Shield, Award, Heart } from 'lucide-react';
import Hero from '@/components/Hero';
import SectionHeader from '@/components/SectionHeader';
import ProductCard from '@/components/ProductCard';
import CountdownTimer from '@/components/CountdownTimer';
import CommunitySection from '@/components/CommunitySection';
import {
  PRODUCTS,
  STYLE_TILES,
  BODY_TYPE_TILES,
  COLLECTIONS,
  getProductsByCollection,
} from '@/lib/products';
import { REVIEWS } from '@/lib/reviews';
import { BLOG_POSTS } from '@/lib/blog';
import { IMG } from '@/lib/images';

export default function HomePage() {
  const newArrivals = getProductsByCollection('new-arrivals', 8);
  const trending = getProductsByCollection('trending', 4);
  const bestSellers = getProductsByCollection('best-sellers', 4);
  const turkishCollection = getProductsByCollection('premium-turkish', 6);
  const tiktokViral = getProductsByCollection('tiktok-viral', 4);
  const limited = PRODUCTS.filter((p) => p.isLimited).slice(0, 3);

  return (
    <>
      <Hero />

      {/* SHOP BY STYLE */}
      <section className="container-luxe py-20 md:py-28">
        <SectionHeader
          eyebrow="Shop by Style"
          title="Find your perfect denim style."
          subtitle="From relaxed mom jeans to wide-leg palazzos, every cut crafted from premium Turkish denim."
          cta={{ label: 'See all jeans', href: '/shop' }}
        />
        <div className="mt-12 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-5">
          {STYLE_TILES.map((s) => (
            <Link
              key={s.slug}
              href={`/shop?category=${s.slug}`}
              className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-cream-200"
            >
              <img
                src={s.image}
                alt={s.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-denim-950/80 via-denim-950/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-4">
                <p className="text-cream-50 font-display text-lg leading-tight">{s.name}</p>
                <p className="text-cream-200/80 text-xs mt-1 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Shop now <ArrowRight className="h-3 w-3" />
                </p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* NEW ARRIVALS */}
      <section className="container-luxe py-12">
        <SectionHeader
          eyebrow="Fresh Denim Drops"
          title="New arrivals."
          subtitle="Stay ahead of fashion trends with our latest Turkish denim arrivals. Carefully selected for comfort, elegance, and modern streetwear appeal."
          cta={{ label: 'Shop all new', href: '/shop?collection=new-arrivals' }}
        />
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {newArrivals.slice(0, 8).map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* PREMIUM TURKISH BANNER */}
      <section className="container-luxe py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
          <Link
            href="/shop?collection=premium-turkish"
            className="group relative aspect-[4/5] lg:aspect-auto rounded-3xl overflow-hidden bg-cream-200 order-2 lg:order-1"
            aria-label="Shop Premium Turkish Denim"
          >
            <img
              src={IMG.editorial4}
              alt="Premium Turkish Denim"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute top-5 left-5 pill bg-cream-50/90">
              <Award className="h-3 w-3 text-gold-500" /> Mill-sourced quality
            </div>
            <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-denim-950/70 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
              <p className="text-cream-50 text-sm font-medium inline-flex items-center gap-1.5">
                Shop the collection <ArrowRight className="h-4 w-4" />
              </p>
            </div>
          </Link>
          <div className="flex flex-col justify-center order-1 lg:order-2">
            <p className="text-[11px] tracking-[0.3em] uppercase text-clay-500 mb-3">
              The Vee_jeans Standard
            </p>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-denim-900">
              Luxury Turkish denim craftsmanship.
            </h2>
            <p className="mt-6 text-ink-soft max-w-lg">
              Our collections are crafted from premium Turkish denim fabrics known for their durability, flexibility, softness, and premium finishing. Every piece is tailored to deliver long-lasting quality and luxury fashion appeal.
            </p>
            <ul className="mt-8 grid grid-cols-2 gap-3">
              {[
                'Durable 12oz fabric',
                'Premium 4-way stretch',
                'Soft hand-feel finish',
                'Fade-resistant indigo',
                'Reinforced rivets',
                'Hand-finished hems',
              ].map((f) => (
                <li key={f} className="flex items-center gap-2 text-sm text-ink-soft">
                  <span className="h-1.5 w-1.5 rounded-full bg-clay-500" />
                  {f}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/shop?collection=premium-turkish" className="btn-primary">
                Shop the collection <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/about" className="btn-ghost">Read our story</Link>
            </div>
          </div>
        </div>
      </section>

      {/* SHOP BY BODY TYPE */}
      <section className="bg-cream-100 py-20 md:py-28">
        <div className="container-luxe">
          <SectionHeader
            eyebrow="Denim Made for Every Body"
            title="Made for your shape."
            subtitle="At Vee_jeans, inclusivity is part of our identity. Every woman deserves denim that fits beautifully — explore by body type."
            cta={{ label: 'Smart size guide', href: '/size-guide' }}
          />
          <div className="mt-12 grid grid-cols-2 lg:grid-cols-3 gap-5">
            {BODY_TYPE_TILES.map((b) => (
              <Link
                key={b.slug}
                href={`/shop?body=${b.slug}`}
                className="group relative aspect-[5/6] overflow-hidden rounded-3xl bg-cream-200"
              >
                <img
                  src={b.image}
                  alt={b.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-denim-950/85 via-denim-950/30 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6">
                  <p className="text-[10px] tracking-[0.3em] uppercase text-clay-300 mb-2">Shop by Body</p>
                  <p className="text-cream-50 font-display text-3xl leading-tight">{b.name}</p>
                  <p className="text-cream-200/85 text-sm mt-2">{b.blurb}</p>
                  <p className="text-cream-50 text-xs mt-4 flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                    Shop now <ArrowRight className="h-3 w-3" />
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FLASH SALE */}
      <section className="container-luxe py-20 md:py-28">
        <div className="relative overflow-hidden rounded-3xl bg-denim-950 text-cream-50 p-8 md:p-14">
          <div className="absolute -right-20 -top-20 h-80 w-80 rounded-full bg-clay-500/30 blur-3xl" />
          <div className="absolute -left-10 bottom-0 h-72 w-72 rounded-full bg-denim-700/40 blur-3xl" />
          <div className="relative grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-clay-300">
                ✦ Flash Sale — Members Only
              </p>
              <h2 className="font-display text-4xl md:text-6xl leading-[1.05] mt-4">
                Up to 30% off select Turkish denim.
              </h2>
              <p className="mt-5 text-cream-200/85 max-w-lg">
                Our biggest seasonal mark-down. Curvy fits, mom jeans, palazzos and more — while stocks last.
              </p>
              <div className="mt-8">
                <CountdownTimer hours={36} />
              </div>
              <div className="mt-8 flex flex-wrap gap-3">
                <Link href="/shop" className="btn-accent">
                  Shop the sale <ArrowRight className="h-4 w-4" />
                </Link>
                <Link href="/account" className="btn border border-cream-50/30 text-cream-50 hover:bg-cream-50 hover:text-denim-900">
                  Become a member
                </Link>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              {trending.slice(0, 4).map((p) => (
                <Link key={p.id} href={`/product/${p.slug}`} className="group relative aspect-[3/4] overflow-hidden rounded-2xl bg-denim-800">
                  <img src={p.images[0]} alt={p.name} className="h-full w-full object-cover transition-transform group-hover:scale-110 duration-700" />
                  <div className="absolute bottom-2 left-2 pill bg-clay-500 border-clay-500 text-white">-30%</div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* TRENDING / TIKTOK */}
      <section className="container-luxe py-12">
        <SectionHeader
          eyebrow="✦ TikTok Viral Fits"
          title="What's everyone wearing."
          subtitle="The denim pieces breaking the FYP — straight off the algorithm, into your wardrobe."
          cta={{ label: 'Shop trending', href: '/shop?collection=trending' }}
        />
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {tiktokViral.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* CURVY SPOTLIGHT (editorial) */}
      <section className="container-luxe py-20 md:py-28">
        <div className="grid lg:grid-cols-12 gap-6 lg:gap-10">
          <Link
            href="/shop?body=curvy"
            className="group lg:col-span-7 relative aspect-[4/5] lg:aspect-auto rounded-3xl overflow-hidden"
            aria-label="Shop the Curvy Collection"
          >
            <img src={IMG.editorial2} alt="Curvy collection" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-tr from-denim-950/70 via-transparent to-transparent" />
            <div className="absolute bottom-0 left-0 p-8 md:p-12 text-cream-50 max-w-md">
              <p className="text-[11px] tracking-[0.3em] uppercase text-clay-300 mb-3">Curvy Collection</p>
              <h3 className="font-display text-4xl md:text-5xl leading-tight">No more waist gap. Ever.</h3>
              <p className="mt-4 text-sm inline-flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-opacity">
                Shop the edit <ArrowRight className="h-4 w-4" />
              </p>
            </div>
          </Link>
          <div className="lg:col-span-5 flex flex-col justify-center">
            <p className="text-ink-soft text-lg leading-relaxed">
              Engineered with a contoured waistband that hugs the small of your back. Sculpt panels through the seat. Generous through the thigh. Sizes 14 through 24.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                { t: 'Anti-gap waistband', d: 'Contoured to fit the small of your back.' },
                { t: 'Lift & sculpt panels', d: 'Internal panels lift and define without compressing.' },
                { t: 'Generous thigh room', d: 'No more sausage-leg jeans.' },
              ].map((x) => (
                <li key={x.t} className="flex gap-4">
                  <div className="grid place-items-center h-10 w-10 rounded-full bg-denim-900 text-cream-50 flex-shrink-0">
                    <Heart className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium text-denim-900">{x.t}</p>
                    <p className="text-sm text-ink-muted mt-0.5">{x.d}</p>
                  </div>
                </li>
              ))}
            </ul>
            <Link href="/shop?body=curvy" className="btn-primary mt-10 self-start">
              Shop the curvy edit <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* BEST SELLERS */}
      <section className="container-luxe py-12">
        <SectionHeader
          eyebrow="Loved by thousands"
          title="Best sellers."
          subtitle="The denim that keeps selling out. Restocked weekly."
          cta={{ label: 'Shop best sellers', href: '/shop?collection=best-sellers' }}
        />
        <div className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {bestSellers.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>

      {/* LIMITED EDITION */}
      <section className="bg-denim-950 text-cream-50 py-20 md:py-28 mt-20">
        <div className="container-luxe">
          <div className="flex items-end justify-between flex-col md:flex-row gap-4 mb-12">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-gold-400 mb-3">Limited Capsule</p>
              <h2 className="font-display text-4xl md:text-6xl leading-[1.05]">
                When they're gone, they're gone.
              </h2>
              <p className="mt-4 text-cream-200/80 max-w-lg">
                Small-batch luxury denim. Numbered drops, no restocks. For the woman who wants what no one else has.
              </p>
            </div>
            <Link href="/shop?collection=limited-edition" className="btn border border-cream-50/30 text-cream-50 hover:bg-clay-500 hover:border-clay-500">
              See the capsule <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {limited.map((p) => (
              <Link key={p.id} href={`/product/${p.slug}`} className="group">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-denim-800">
                  <img src={p.images[0]} alt={p.name} className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute top-3 left-3 pill bg-gold-500/90 border-gold-500 text-denim-950">
                    Limited
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
                    <div>
                      <p className="text-xs text-cream-200/80">{p.categoryLabel}</p>
                      <p className="font-display text-xl leading-tight mt-1">{p.name}</p>
                    </div>
                    <p className="text-sm font-semibold">₦{p.price.toLocaleString()}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* WHOLESALE CTA */}
      <section className="container-luxe py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-10 items-center">
          <div className="order-2 lg:order-1">
            <p className="text-[11px] tracking-[0.3em] uppercase text-clay-500 mb-3">For Boutiques & Resellers</p>
            <h2 className="font-display text-4xl md:text-6xl leading-[1.05] text-denim-900">
              Stock your store with the denim everyone wants.
            </h2>
            <p className="mt-6 text-ink-soft max-w-lg">
              Whether you run a boutique, an online store, or sell from your IG — our wholesale program gets you premium Turkish denim at distributor pricing, with fast nationwide delivery.
            </p>
            <ul className="mt-8 space-y-3">
              {[
                { t: 'Bulk pricing from 12 units', d: 'Up to 35% off retail per piece' },
                { t: 'MOQ as low as 6 pieces', d: 'On select capsule items' },
                { t: 'Dedicated WhatsApp account', d: 'Direct line to wholesale support' },
                { t: 'Wholesale catalog download', d: 'Latest pricing & inventory PDFs' },
              ].map((b) => (
                <li key={b.t} className="flex gap-3">
                  <span className="grid place-items-center h-6 w-6 rounded-full bg-clay-500 text-white text-xs flex-shrink-0 mt-0.5">✓</span>
                  <div>
                    <p className="font-medium text-denim-900">{b.t}</p>
                    <p className="text-sm text-ink-muted">{b.d}</p>
                  </div>
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-wrap gap-3">
              <Link href="/wholesale" className="btn-primary">
                Become a partner <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href="https://wa.me/2348100484650?text=Hi,%20I'd%20like%20wholesale%20pricing"
                target="_blank"
                className="btn border border-denim-900 text-denim-900 hover:bg-denim-900 hover:text-cream-50"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
          <Link href="/wholesale" aria-label="Become a wholesale partner" className="order-1 lg:order-2 grid grid-cols-2 gap-4 group">
            <div className="space-y-4">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-cream-200">
                <img src={IMG.womanDenim5} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
              <div className="aspect-square rounded-2xl bg-clay-500 text-white p-6 flex flex-col justify-end">
                <p className="font-display text-4xl">35%</p>
                <p className="text-xs mt-1 opacity-90">Average margin for resellers</p>
              </div>
            </div>
            <div className="space-y-4 pt-10">
              <div className="aspect-square rounded-2xl bg-denim-900 text-cream-50 p-6 flex flex-col justify-end">
                <p className="font-display text-4xl">12+</p>
                <p className="text-xs mt-1 opacity-80">Pieces minimum order</p>
              </div>
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-cream-200">
                <img src={IMG.womanDenim2} alt="" className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105" />
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* AI RECOMMENDATIONS */}
      <section className="bg-cream-100 py-20 md:py-28">
        <div className="container-luxe">
          <div className="flex items-end justify-between flex-col md:flex-row gap-4 mb-12">
            <div className="max-w-xl">
              <p className="text-[11px] tracking-[0.3em] uppercase text-clay-500 mb-3 flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5" /> Powered by AI
              </p>
              <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-denim-900">
                Build your denim wardrobe.
              </h2>
              <p className="mt-4 text-ink-soft">
                Our smart stylist learns what you love and curates picks that work for your body and your aesthetic.
              </p>
            </div>
            <Link href="/account" className="btn-primary">
              Try the AI stylist <Sparkles className="h-4 w-4" />
            </Link>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-6 gap-4">
            {turkishCollection.slice(0, 6).map((p) => (
              <Link key={p.id} href={`/product/${p.slug}`} className="group">
                <div className="aspect-[3/4] overflow-hidden rounded-xl bg-cream-200">
                  <img src={p.images[0]} alt={p.name} className="h-full w-full object-cover transition-transform group-hover:scale-105 duration-700" />
                </div>
                <p className="mt-2 text-xs font-medium line-clamp-1">{p.name}</p>
                <p className="text-xs text-ink-muted">₦{p.price.toLocaleString()}</p>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CUSTOMER REVIEWS */}
      <section className="container-luxe py-20 md:py-28">
        <SectionHeader
          eyebrow="The Reviews"
          title="What our women are saying."
          cta={{ label: 'Read all reviews', href: '/shop?collection=best-sellers' }}
          align="center"
        />
        <div className="mt-14 grid md:grid-cols-3 gap-6">
          {REVIEWS.slice(0, 3).map((r) => {
            const product = PRODUCTS.find((p) => p.id === r.productId);
            const href = product ? `/product/${product.slug}` : '/shop';
            return (
              <Link
                key={r.id}
                href={href}
                className="rounded-2xl border border-cream-300 p-6 bg-cream-50 hover:shadow-card hover:border-denim-900 transition-all block"
              >
                <div className="flex items-center gap-1 text-clay-500">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>{i < r.rating ? '★' : '☆'}</span>
                  ))}
                  {r.verified && (
                    <span className="ml-2 text-[10px] uppercase tracking-wider text-ink-muted bg-cream-200 px-2 py-0.5 rounded-full">
                      Verified
                    </span>
                  )}
                </div>
                <p className="font-medium mt-4 text-denim-900">{r.title}</p>
                <p className="text-sm text-ink-soft mt-2 leading-relaxed">"{r.body}"</p>
                <div className="flex items-center justify-between mt-6 pt-4 border-t border-cream-300">
                  <div>
                    <p className="text-sm font-medium">{r.author}</p>
                    <p className="text-xs text-ink-muted">{r.location}</p>
                  </div>
                  {r.sizeBought && (
                    <p className="text-[11px] text-ink-muted">
                      {r.bodyType ? `${r.bodyType} · ` : ''}Size {r.sizeBought}
                    </p>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* COMMUNITY — Faces of Vee_jeans */}
      <CommunitySection />

      {/* BLOG PREVIEW */}
      <section className="bg-cream-100 py-20 md:py-28">
        <div className="container-luxe">
          <SectionHeader
            eyebrow="Denim Journal"
            title="Style notes from the editor."
            cta={{ label: 'All articles', href: '/blog' }}
          />
          <div className="mt-12 grid md:grid-cols-3 gap-6">
            {BLOG_POSTS.slice(0, 3).map((post) => (
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
        </div>
      </section>

      {/* TRUST FOOTER */}
      <section className="container-luxe py-20">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[
            { i: Truck, t: 'Nationwide Delivery', d: 'Same-day in Abuja · 2–4 days elsewhere', href: '/contact' },
            { i: Shield, t: 'Secure Payments', d: 'Paystack · Flutterwave · Bank transfer', href: '/checkout' },
            { i: Award, t: 'Premium Turkish Denim', d: 'Mill-sourced quality, every piece', href: '/shop?collection=premium-turkish' },
            { i: Heart, t: 'Easy Returns', d: '7-day return window, no questions', href: '/contact' },
          ].map((x) => (
            <Link
              key={x.t}
              href={x.href}
              className="flex items-start gap-4 p-6 rounded-2xl border border-cream-300 bg-cream-50 hover:bg-denim-900 hover:text-cream-50 hover:border-denim-900 transition-colors group"
            >
              <div className="grid place-items-center h-12 w-12 rounded-full bg-denim-900 text-cream-50 group-hover:bg-clay-500 flex-shrink-0 transition-colors">
                <x.i className="h-5 w-5" />
              </div>
              <div>
                <p className="font-medium text-denim-900 group-hover:text-cream-50 transition-colors">{x.t}</p>
                <p className="text-xs text-ink-muted group-hover:text-cream-200/80 mt-1 transition-colors">{x.d}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
