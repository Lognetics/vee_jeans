'use client';

import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, CheckCircle2, Download, MessageCircle, Phone, Truck, Award, Users } from 'lucide-react';
import { IMG } from '@/lib/images';

const TIERS = [
  {
    name: 'Reseller',
    moq: '12+ pieces',
    discount: '25% off retail',
    perks: ['Standard wholesale pricing', 'Restock notifications', 'WhatsApp support'],
    cta: 'Apply now',
    featured: false,
  },
  {
    name: 'Boutique Partner',
    moq: '50+ pieces',
    discount: '32% off retail',
    perks: [
      'Priority bulk pricing',
      'Dedicated account manager',
      'Quarterly lookbooks',
      'Early access to drops',
      'Co-marketing opportunities',
    ],
    cta: 'Apply now',
    featured: true,
  },
  {
    name: 'Distributor',
    moq: '200+ pieces',
    discount: '40% off retail',
    perks: [
      'Best wholesale pricing',
      'Regional exclusivity available',
      'White-label fulfillment',
      'Direct mill access',
      'Custom packaging',
    ],
    cta: 'Contact sales',
    featured: false,
  },
];

export default function WholesalePage() {
  const [submitted, setSubmitted] = useState(false);

  return (
    <>
      {/* Hero */}
      <section className="relative bg-denim-950 text-cream-50 overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <img
            src={IMG.editorial5}
            alt="Wholesale partner showcase"
            className="h-full w-full object-cover"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-denim-950 via-denim-950/80 to-denim-950/30" />
        <div className="relative container-luxe py-24 md:py-32">
          <p className="text-[11px] tracking-[0.3em] uppercase text-clay-300">For Boutiques · Resellers · Distributors</p>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.02] mt-5 max-w-3xl">
            Stock your store with the denim everyone wants.
          </h1>
          <p className="mt-6 max-w-xl text-cream-200/85 text-lg">
            Premium Turkish denim at wholesale pricing. Fast nationwide delivery. Personal account support.
          </p>
          <div className="mt-10 flex flex-wrap gap-3">
            <a href="#apply" className="btn-accent">
              Apply now <ArrowRight className="h-4 w-4" />
            </a>
            <a
              href="https://wa.me/2348100484650?text=Hi%2C%20I'd%20like%20wholesale%20pricing"
              target="_blank"
              className="btn border border-cream-50/30 text-cream-50 hover:bg-cream-50 hover:text-denim-900"
            >
              <MessageCircle className="h-4 w-4" /> WhatsApp Sales
            </a>
            <button className="btn border border-cream-50/30 text-cream-50 hover:bg-cream-50 hover:text-denim-900">
              <Download className="h-4 w-4" /> Download Catalog
            </button>
          </div>

          {/* Stats */}
          <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
            {[
              { v: '350+', l: 'Active partners' },
              { v: '40%', l: 'Avg reseller margin' },
              { v: '48h', l: 'Order to dispatch' },
              { v: '36', l: 'States delivered' },
            ].map((s) => (
              <div key={s.l}>
                <p className="font-display text-4xl md:text-5xl text-cream-50">{s.v}</p>
                <p className="text-xs text-cream-200/70 mt-1 uppercase tracking-wider">{s.l}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="container-luxe py-20 md:py-28">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-[11px] tracking-[0.3em] uppercase text-clay-500 mb-3">Why Vee_jeans</p>
          <h2 className="font-display text-4xl md:text-5xl text-denim-900 leading-tight">
            Built for sellers who care about quality.
          </h2>
          <p className="mt-4 text-ink-soft">
            We don't just supply denim. We support your business — with quality your customers will come back for, and the operational backing to scale.
          </p>
        </div>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { i: Award, t: 'Premium Turkish quality', d: 'Mill-sourced denim that holds up wash after wash. Your customers will notice.', href: '/shop?collection=premium-turkish' },
            { i: Truck, t: 'Fast nationwide delivery', d: 'Dispatched within 48 hours. Same-day option in Lagos for urgent restocks.', href: '#apply' },
            { i: Users, t: 'Personal account manager', d: 'Direct WhatsApp line. Lookbooks. Restock alerts. Real support.', href: 'https://wa.me/2348100484650' },
            { i: CheckCircle2, t: 'Easy returns & swaps', d: 'Faulty piece? Swapped, no questions. We back our product.', href: '/contact' },
          ].map((b) => (
            <Link
              key={b.t}
              href={b.href}
              className="rounded-2xl border border-cream-300 p-6 hover:shadow-card hover:border-denim-900 hover:-translate-y-0.5 transition-all block"
            >
              <div className="grid place-items-center h-12 w-12 rounded-full bg-denim-900 text-cream-50 mb-4">
                <b.i className="h-5 w-5" />
              </div>
              <p className="font-display text-xl text-denim-900">{b.t}</p>
              <p className="mt-2 text-sm text-ink-soft leading-relaxed">{b.d}</p>
            </Link>
          ))}
        </div>
      </section>

      {/* Pricing tiers */}
      <section className="bg-cream-100 py-20 md:py-28">
        <div className="container-luxe">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <p className="text-[11px] tracking-[0.3em] uppercase text-clay-500 mb-3">Pricing Tiers</p>
            <h2 className="font-display text-4xl md:text-5xl text-denim-900 leading-tight">
              Pricing that scales with you.
            </h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {TIERS.map((t) => (
              <div
                key={t.name}
                className={`relative rounded-3xl p-8 transition-transform hover:-translate-y-1 ${
                  t.featured
                    ? 'bg-denim-950 text-cream-50 shadow-luxe'
                    : 'bg-cream-50 border border-cream-300'
                }`}
              >
                {t.featured && (
                  <span className="absolute -top-3 left-8 chip bg-clay-500 text-white">
                    Most popular
                  </span>
                )}
                <p
                  className={`text-[11px] tracking-[0.3em] uppercase mb-2 ${
                    t.featured ? 'text-clay-300' : 'text-clay-500'
                  }`}
                >
                  {t.name}
                </p>
                <p className="font-display text-4xl leading-tight">
                  {t.discount}
                </p>
                <p className={`text-sm mt-2 ${t.featured ? 'text-cream-200/80' : 'text-ink-muted'}`}>
                  MOQ: {t.moq}
                </p>
                <ul className="mt-6 space-y-2">
                  {t.perks.map((p) => (
                    <li key={p} className="flex items-start gap-2 text-sm">
                      <CheckCircle2
                        className={`h-4 w-4 flex-shrink-0 mt-0.5 ${
                          t.featured ? 'text-clay-300' : 'text-clay-500'
                        }`}
                      />
                      <span className={t.featured ? 'text-cream-100' : 'text-ink-soft'}>{p}</span>
                    </li>
                  ))}
                </ul>
                <a
                  href="#apply"
                  className={`btn w-full mt-8 ${
                    t.featured
                      ? 'bg-clay-500 text-white hover:bg-clay-600'
                      : 'bg-denim-900 text-cream-50 hover:bg-denim-800'
                  }`}
                >
                  {t.cta} <ArrowRight className="h-4 w-4" />
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How it works */}
      <section className="container-luxe py-20 md:py-28">
        <div className="grid lg:grid-cols-2 gap-14 items-start">
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-clay-500 mb-3">How it works</p>
            <h2 className="font-display text-4xl md:text-5xl text-denim-900 leading-tight">
              From application to first restock — in 5 days.
            </h2>
          </div>
          <div className="space-y-6">
            {[
              { n: '01', t: 'Apply', d: 'Fill out the application below. We review within 24 hours.' },
              { n: '02', t: 'Verification call', d: 'Quick WhatsApp video call with your dedicated account manager.' },
              { n: '03', t: 'Place your first order', d: 'Browse the wholesale catalog or build a custom order list.' },
              { n: '04', t: 'Receive & restock', d: 'Dispatched within 48 hours. Tracking sent to your WhatsApp.' },
              { n: '05', t: 'Scale', d: 'Move up to higher tiers as you order more. Better margins, more perks.' },
            ].map((s) => (
              <div key={s.n} className="flex gap-5">
                <span className="font-display text-2xl text-clay-500 flex-shrink-0">{s.n}</span>
                <div>
                  <p className="font-medium text-denim-900">{s.t}</p>
                  <p className="text-sm text-ink-soft mt-1">{s.d}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Application form */}
      <section id="apply" className="bg-denim-950 text-cream-50 py-20 md:py-28">
        <div className="container-luxe grid lg:grid-cols-2 gap-14">
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-clay-300 mb-3">Apply</p>
            <h2 className="font-display text-4xl md:text-5xl leading-tight">
              Become a wholesale partner.
            </h2>
            <p className="mt-5 text-cream-200/80 max-w-md">
              Tell us about your business. We'll review your application and respond within 24 hours via WhatsApp.
            </p>
            <div className="mt-10 space-y-3">
              <a href="tel:+2348100484650" className="flex items-center gap-3 text-cream-100 hover:text-clay-300">
                <Phone className="h-4 w-4 text-clay-300" />
                <span>+234 810 048 4650 (Wholesale)</span>
              </a>
              <a
                href="https://wa.me/2348100484650"
                target="_blank"
                className="flex items-center gap-3 text-cream-100 hover:text-clay-300"
              >
                <MessageCircle className="h-4 w-4 text-clay-300" />
                <span>Chat on WhatsApp</span>
              </a>
            </div>
          </div>

          <form
            className="rounded-3xl bg-cream-50 text-ink p-8"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            {submitted ? (
              <div className="text-center py-10">
                <div className="grid place-items-center h-16 w-16 rounded-full bg-clay-500 text-white mx-auto">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <p className="font-display text-3xl mt-6 text-denim-900">Application received!</p>
                <p className="mt-3 text-ink-soft">
                  We'll be in touch on WhatsApp within 24 hours. Welcome to the Vee_jeans family.
                </p>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-xs font-medium text-ink-soft">Full name</span>
                    <input required type="text" className="mt-1.5 w-full rounded-lg border border-cream-300 px-4 py-3 text-sm" />
                  </label>
                  <label className="block">
                    <span className="text-xs font-medium text-ink-soft">Business name</span>
                    <input required type="text" className="mt-1.5 w-full rounded-lg border border-cream-300 px-4 py-3 text-sm" />
                  </label>
                  <label className="block">
                    <span className="text-xs font-medium text-ink-soft">WhatsApp number</span>
                    <input required type="tel" className="mt-1.5 w-full rounded-lg border border-cream-300 px-4 py-3 text-sm" />
                  </label>
                  <label className="block">
                    <span className="text-xs font-medium text-ink-soft">Email</span>
                    <input required type="email" className="mt-1.5 w-full rounded-lg border border-cream-300 px-4 py-3 text-sm" />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="text-xs font-medium text-ink-soft">Business type</span>
                    <select className="mt-1.5 w-full rounded-lg border border-cream-300 px-4 py-3 text-sm bg-white">
                      <option>Boutique / Physical store</option>
                      <option>Online reseller (IG / TikTok)</option>
                      <option>Marketplace seller (Jumia / Konga)</option>
                      <option>Distributor</option>
                      <option>Stylist / Personal shopper</option>
                    </select>
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="text-xs font-medium text-ink-soft">Location (city, state)</span>
                    <input required type="text" className="mt-1.5 w-full rounded-lg border border-cream-300 px-4 py-3 text-sm" />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="text-xs font-medium text-ink-soft">Expected first order size</span>
                    <select className="mt-1.5 w-full rounded-lg border border-cream-300 px-4 py-3 text-sm bg-white">
                      <option>12–24 pieces</option>
                      <option>25–49 pieces</option>
                      <option>50–99 pieces</option>
                      <option>100–199 pieces</option>
                      <option>200+ pieces</option>
                    </select>
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="text-xs font-medium text-ink-soft">Tell us about your business</span>
                    <textarea rows={4} className="mt-1.5 w-full rounded-lg border border-cream-300 px-4 py-3 text-sm" />
                  </label>
                </div>
                <button type="submit" className="btn-primary w-full mt-6">
                  Submit application <ArrowRight className="h-4 w-4" />
                </button>
                <p className="text-[11px] text-ink-muted text-center mt-3">
                  By submitting, you agree to be contacted by Vee_jeans Enterprises Ltd via WhatsApp and email.
                </p>
              </>
            )}
          </form>
        </div>
      </section>

      {/* Reseller testimonials */}
      <section className="container-luxe py-20 md:py-28">
        <div className="text-center max-w-xl mx-auto mb-14">
          <p className="text-[11px] tracking-[0.3em] uppercase text-clay-500 mb-3">Reseller Stories</p>
          <h2 className="font-display text-4xl md:text-5xl text-denim-900 leading-tight">
            Partners who scaled with us.
          </h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { name: 'Ngozi K.', store: 'NK Couture · Surulere', body: 'Vee_jeans has been my go-to denim supplier for two years. Their quality keeps customers coming back.' },
            { name: 'Aminat L.', store: 'IG: @aminatdenims', body: 'I started with 12 pieces. Now I move 80 a month. The margins are real.' },
            { name: 'Bisi O.', store: 'Bisi Closet · Abuja', body: 'The boutique partner tier changed my business. Early drops mean I always have what TikTok is wearing.' },
          ].map((t) => (
            <div key={t.name} className="rounded-2xl border border-cream-300 p-6 bg-cream-50">
              <div className="flex gap-1 text-clay-500 mb-4">{Array.from({ length: 5 }).map((_, i) => <span key={i}>★</span>)}</div>
              <p className="text-sm text-ink-soft leading-relaxed">"{t.body}"</p>
              <div className="mt-5 pt-4 border-t border-cream-300">
                <p className="text-sm font-medium text-denim-900">{t.name}</p>
                <p className="text-xs text-ink-muted mt-0.5">{t.store}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
