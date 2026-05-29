import Link from 'next/link';
import { ArrowRight, Award, Heart, Sparkles, Users } from 'lucide-react';
import { IMG } from '@/lib/images';

export const metadata = {
  title: 'Our Story — Vee_jeans Enterprises Ltd',
  description: 'The story of Vee_jeans — premium Turkish denim for every woman.',
};

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <section className="relative min-h-[60vh] flex items-end overflow-hidden">
        <img
          src={IMG.editorial1}
          alt="Vee_jeans premium denim editorial"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-denim-950 via-denim-950/60 to-denim-950/10" />
        <div className="relative container-luxe py-20 text-cream-50">
          <p className="text-[11px] tracking-[0.3em] uppercase text-clay-300">Our Story</p>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl mt-4 leading-[0.95] max-w-4xl">
            Premium denim. <br />
            For every body. <br />
            From Lagos to the world.
          </h1>
        </div>
      </section>

      {/* Intro */}
      <section className="container-luxe py-24">
        <div className="grid lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="text-[11px] tracking-[0.3em] uppercase text-clay-500 mb-3">Who we are</p>
            <h2 className="font-display text-4xl md:text-5xl text-denim-900 leading-tight">
              A Nigerian denim house built on confidence.
            </h2>
          </div>
          <div className="lg:col-span-7 text-lg text-ink-soft leading-relaxed space-y-5">
            <p>
              Vee_jeans Enterprises Limited is a premium female denim fashion brand dedicated to producing stylish, comfortable, and high-quality Turkish denim wear for women of all sizes and body types.
            </p>
            <p>
              We believe denim is more than fashion — it is confidence, identity, comfort, and self-expression. Our collections are carefully curated to combine modern fashion trends with timeless elegance, ensuring every woman feels stylish and empowered.
            </p>
            <p>
              From trendy baggy jeans to elegant denim gowns and oversized jackets, our mission is to redefine female denim fashion in Africa and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Vision / Mission */}
      <section className="bg-denim-950 text-cream-50 py-24">
        <div className="container-luxe grid md:grid-cols-2 gap-12">
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-clay-300 mb-3">Our Vision</p>
            <p className="font-display text-3xl md:text-4xl leading-tight">
              To become one of Africa's leading female denim fashion brands — recognized globally for quality, inclusivity, and trend-setting designs.
            </p>
          </div>
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-clay-300 mb-3">Our Mission</p>
            <p className="font-display text-3xl md:text-4xl leading-tight">
              To provide premium denim fashion that empowers women through confidence, comfort, and style — at every size.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="container-luxe py-24">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="text-[11px] tracking-[0.3em] uppercase text-clay-500 mb-3">What we stand for</p>
          <h2 className="font-display text-4xl md:text-5xl text-denim-900 leading-tight">
            Four values, in every stitch.
          </h2>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { i: Award, t: 'Quality first', d: 'Premium Turkish denim. Mill-sourced. Built to last.', href: '/shop?collection=premium-turkish' },
            { i: Heart, t: 'Inclusive sizing', d: 'Designed for size 6 through 24. Petite to tall. Every body welcome.', href: '/size-guide' },
            { i: Sparkles, t: 'Trend-aware design', d: 'On-pulse silhouettes — without sacrificing timeless wearability.', href: '/shop?collection=trending' },
            { i: Users, t: 'Community-led', d: 'Our customers shape our collections. Feedback in, design out.', href: '/contact' },
          ].map((v) => (
            <Link
              key={v.t}
              href={v.href}
              className="p-6 rounded-3xl border border-cream-300 bg-cream-50 hover:bg-denim-900 hover:text-cream-50 hover:border-denim-900 transition-colors group"
            >
              <div className="grid place-items-center h-12 w-12 rounded-full bg-clay-500 text-white mb-5 group-hover:bg-clay-400 transition-colors">
                <v.i className="h-5 w-5" />
              </div>
              <p className="font-display text-2xl text-denim-900 group-hover:text-cream-50 transition-colors">{v.t}</p>
              <p className="text-sm text-ink-soft group-hover:text-cream-200/80 mt-2 transition-colors">{v.d}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Journey */}
      <section className="bg-cream-100 py-24">
        <div className="container-luxe">
          <div className="text-center max-w-xl mx-auto mb-16">
            <p className="text-[11px] tracking-[0.3em] uppercase text-clay-500 mb-3">The Journey</p>
            <h2 className="font-display text-4xl md:text-5xl text-denim-900 leading-tight">
              From a single denim line to a national label.
            </h2>
          </div>
          <div className="relative max-w-3xl mx-auto">
            {[
              { y: '2022', t: 'The beginning', d: 'Founded in Lagos with a single Turkish denim line and an Instagram store.' },
              { y: '2023', t: 'Sizes 6–24', d: 'Launched our extended sizing range. Inclusivity became core to who we are.' },
              { y: '2024', t: 'Wholesale program', d: 'Opened our doors to boutiques and resellers. 100+ partners by year-end.' },
              { y: '2025', t: 'TikTok takeover', d: 'Our baggy and palazzo silhouettes went viral. Curvy collection launched.' },
              { y: '2026', t: 'Going national', d: 'Nationwide delivery, international shipping, full ecommerce experience.' },
            ].map((m, i) => (
              <div key={m.y} className="flex gap-6 pb-10 relative">
                {i < 4 && (
                  <span className="absolute left-[15px] top-8 bottom-0 w-px bg-cream-300" />
                )}
                <span className="grid place-items-center h-8 w-8 rounded-full bg-clay-500 text-white text-xs font-medium flex-shrink-0 z-10">
                  ●
                </span>
                <div>
                  <p className="text-[11px] tracking-[0.3em] uppercase text-clay-500">{m.y}</p>
                  <p className="font-display text-2xl text-denim-900 mt-1">{m.t}</p>
                  <p className="text-sm text-ink-soft mt-2 max-w-md">{m.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="container-luxe py-24">
        <div className="text-center max-w-2xl mx-auto">
          <h2 className="font-display text-4xl md:text-5xl text-denim-900 leading-tight">
            Join the movement.
          </h2>
          <p className="mt-5 text-ink-soft">
            Whether you're shopping for yourself, restocking your boutique, or building a community — we'd love to have you.
          </p>
          <div className="mt-8 flex flex-wrap gap-3 justify-center">
            <Link href="/shop" className="btn-primary">
              Shop the collection <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/wholesale" className="btn-outline">
              Wholesale inquiries
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
