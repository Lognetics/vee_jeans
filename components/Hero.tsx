'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { IMG } from '@/lib/images';

const SLIDES = [
  {
    eyebrow: 'Premium Turkish Denim · SS26',
    title: 'Denim built for every body.',
    subtitle:
      'Turkish craftsmanship. Inclusive sizing 6–24. Engineered for confidence, made for everyday luxury.',
    cta1: { label: 'Shop New Arrivals', href: '/shop?collection=new-arrivals' },
    cta2: { label: 'Wholesale Inquiry', href: '/wholesale' },
    href: '/shop?collection=new-arrivals',
    image: IMG.editorial1,
    accent: 'clay',
  },
  {
    eyebrow: 'New Drop — Friday',
    title: 'The Baggy. The Mom. The Palazzo.',
    subtitle: 'Three silhouettes that defined fashion in 2026. Restocked weekly.',
    cta1: { label: 'Explore the drop', href: '/shop?collection=trending' },
    cta2: { label: 'Shop by Fit', href: '/shop' },
    href: '/shop?collection=trending',
    image: IMG.editorial2,
    accent: 'denim',
  },
  {
    eyebrow: 'Curvy Collection',
    title: 'Made for the curves you have.',
    subtitle:
      'Sculpting waistbands, generous through the thigh, never gappy at the back. From a size 14 to a 24.',
    cta1: { label: 'Shop Curvy', href: '/shop?body=curvy' },
    cta2: { label: 'Size Guide', href: '/size-guide' },
    href: '/shop?body=curvy',
    image: IMG.editorial3,
    accent: 'gold',
  },
];

const HIGHLIGHT_LINKS: { label: string; href: string }[] = [
  { label: 'Premium Turkish Denim', href: '/shop?collection=premium-turkish' },
  { label: 'Inclusive Sizing 6–24', href: '/size-guide' },
  { label: 'Nationwide Delivery', href: '/contact' },
  { label: 'Wholesale & Retail', href: '/wholesale' },
  { label: 'Free Returns 7 Days', href: '/contact' },
];

export default function Hero() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % SLIDES.length), 6000);
    return () => clearInterval(t);
  }, []);

  const slide = SLIDES[i];

  return (
    <section className="relative overflow-hidden bg-cream-100">
      <div className="relative h-[640px] md:h-[760px]">
        {SLIDES.map((s, idx) => (
          <Link
            key={idx}
            href={s.href}
            aria-label={s.title}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === i ? 'opacity-100' : 'opacity-0 pointer-events-none'
            }`}
          >
            <img
              src={s.image}
              alt={s.title}
              className="absolute inset-0 h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-denim-950/55 via-denim-950/20 to-transparent" />
          </Link>
        ))}

        <div className="relative container-luxe h-full flex flex-col justify-end pb-20 md:pb-24">
          <div className="max-w-2xl text-cream-50">
            <p
              key={`eb-${i}`}
              className="text-[11px] tracking-[0.3em] uppercase text-clay-300 animate-fade-up"
            >
              {slide.eyebrow}
            </p>
            <h1
              key={`t-${i}`}
              className="font-display text-5xl md:text-7xl lg:text-[88px] leading-[0.95] mt-5 animate-fade-up"
              style={{ animationDelay: '0.1s', animationFillMode: 'both' }}
            >
              {slide.title}
            </h1>
            <p
              key={`s-${i}`}
              className="mt-6 max-w-xl text-base md:text-lg text-cream-100/85 animate-fade-up"
              style={{ animationDelay: '0.2s', animationFillMode: 'both' }}
            >
              {slide.subtitle}
            </p>
            <div
              key={`b-${i}`}
              className="mt-8 flex flex-wrap gap-3 animate-fade-up"
              style={{ animationDelay: '0.3s', animationFillMode: 'both' }}
            >
              <Link href={slide.cta1.href} className="btn-accent">
                {slide.cta1.label} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={slide.cta2.href}
                className="btn border border-cream-50/40 text-cream-50 hover:bg-cream-50 hover:text-denim-900"
              >
                {slide.cta2.label}
              </Link>
            </div>
          </div>

          {/* Slide controls */}
          <div className="absolute bottom-20 md:bottom-24 right-5 md:right-10 flex items-center gap-2 text-cream-50">
            <button
              onClick={() => setI((x) => (x - 1 + SLIDES.length) % SLIDES.length)}
              className="grid place-items-center h-10 w-10 rounded-full border border-cream-50/30 hover:bg-cream-50 hover:text-denim-900 transition-colors"
              aria-label="Previous"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <span className="text-xs tabular-nums w-12 text-center">
              {String(i + 1).padStart(2, '0')} / {String(SLIDES.length).padStart(2, '0')}
            </span>
            <button
              onClick={() => setI((x) => (x + 1) % SLIDES.length)}
              className="grid place-items-center h-10 w-10 rounded-full border border-cream-50/30 hover:bg-cream-50 hover:text-denim-900 transition-colors"
              aria-label="Next"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* Hero highlights bar */}
      <div className="border-t border-cream-300 bg-cream-50">
        <div className="container-luxe grid grid-cols-2 md:grid-cols-5 divide-x divide-cream-300">
          {HIGHLIGHT_LINKS.map((t) => (
            <Link
              key={t.label}
              href={t.href}
              className="px-4 py-4 text-center text-[11px] md:text-xs tracking-wider uppercase text-ink-soft hover:bg-cream-100 hover:text-clay-500 transition-colors"
            >
              {t.label}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
