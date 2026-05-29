'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';
import { Heart, Menu, Search, ShoppingBag, User, X } from 'lucide-react';
import { useCart } from './CartContext';
import { STYLE_TILES } from '@/lib/products';
import { CATEGORY_IMG } from '@/lib/images';

interface MegaLink {
  label: string;
  href: string;
}
interface MegaGroup {
  title: string;
  links: MegaLink[];
}
interface NavItem {
  label: string;
  href: string;
  mega?: 'new' | 'jeans' | 'tops' | 'collections' | 'body';
}

const NAV: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'New In', href: '/shop?collection=new-arrivals', mega: 'new' },
  { label: 'Jeans', href: '/shop', mega: 'jeans' },
  { label: 'Denim Tops', href: '/shop?category=denim-jacket', mega: 'tops' },
  { label: 'Collections', href: '/shop?collection=premium-turkish', mega: 'collections' },
  { label: 'Shop by Body', href: '/shop?body=curvy', mega: 'body' },
  { label: 'Wholesale', href: '/wholesale' },
  { label: 'Blog', href: '/blog' },
];

const MEGA_JEANS: MegaGroup[] = [
  {
    title: 'By Style',
    links: [
      { label: 'Mom Jeans', href: '/shop?category=mom-jeans' },
      { label: 'Baggy Jeans', href: '/shop?category=baggy-jeans' },
      { label: 'Palazzo Jeans', href: '/shop?category=palazzo-jeans' },
      { label: 'Skinny Fit', href: '/shop?category=skinny-jeans' },
      { label: 'Wide Leg', href: '/shop?category=wide-leg-jeans' },
      { label: 'Flare', href: '/shop?category=flare-jeans' },
      { label: 'Ripped', href: '/shop?category=ripped-jeans' },
      { label: 'Cargo', href: '/shop?category=cargo-jeans' },
    ],
  },
  {
    title: 'By Fit',
    links: [
      { label: 'Skinny', href: '/shop?fit=skinny' },
      { label: 'Slim', href: '/shop?fit=slim' },
      { label: 'Relaxed', href: '/shop?fit=relaxed' },
      { label: 'Loose', href: '/shop?fit=loose' },
      { label: 'Oversized', href: '/shop?fit=oversized' },
      { label: 'Curvy', href: '/shop?fit=curvy' },
      { label: 'Petite', href: '/shop?fit=petite' },
      { label: 'Tall', href: '/shop?fit=tall' },
      { label: 'Stretch', href: '/shop?fit=stretch' },
    ],
  },
  {
    title: 'By Wash',
    links: [
      { label: 'Dark Blue', href: '/shop?wash=dark-blue' },
      { label: 'Light Blue', href: '/shop?wash=light-blue' },
      { label: 'Black Denim', href: '/shop?wash=black' },
      { label: 'Vintage', href: '/shop?wash=vintage' },
      { label: 'Acid Wash', href: '/shop?wash=acid-wash' },
      { label: 'Stone Wash', href: '/shop?wash=stone' },
      { label: 'Grey Denim', href: '/shop?wash=grey' },
    ],
  },
  {
    title: 'By Waist',
    links: [
      { label: 'High Waist', href: '/shop?waist=high' },
      { label: 'Super High', href: '/shop?waist=super-high' },
      { label: 'Mid Waist', href: '/shop?waist=mid' },
      { label: 'Low Waist', href: '/shop?waist=low' },
      { label: 'Corset Waist', href: '/shop?waist=corset' },
    ],
  },
];

const MEGA_TOPS: MegaGroup[] = [
  {
    title: 'Denim Tops',
    links: [
      { label: 'Denim Jackets', href: '/shop?category=denim-jacket' },
      { label: 'Denim Shirts', href: '/shop?category=denim-jacket' },
      { label: 'Denim Corsets', href: '/shop?category=denim-corset' },
    ],
  },
  {
    title: 'Bottoms',
    links: [
      { label: 'Denim Skirts', href: '/shop?category=denim-skirt' },
      { label: 'Denim Shorts', href: '/shop?category=denim-shorts' },
    ],
  },
  {
    title: 'Full Pieces',
    links: [
      { label: 'Jumpsuits', href: '/shop?category=denim-jumpsuit' },
      { label: 'Denim Gowns', href: '/shop?category=denim-gown' },
      { label: 'Two-Piece Sets', href: '/shop?collection=luxury' },
    ],
  },
];

const MEGA_COLLECTIONS: MegaGroup[] = [
  {
    title: 'Featured',
    links: [
      { label: 'New Arrivals', href: '/shop?collection=new-arrivals' },
      { label: 'Best Sellers', href: '/shop?collection=best-sellers' },
      { label: 'Trending Now', href: '/shop?collection=trending' },
      { label: 'TikTok Viral', href: '/shop?collection=tiktok-viral' },
    ],
  },
  {
    title: 'Premium',
    links: [
      { label: 'Premium Turkish', href: '/shop?collection=premium-turkish' },
      { label: 'Luxury Capsule', href: '/shop?collection=luxury' },
      { label: 'Limited Edition', href: '/shop?collection=limited-edition' },
    ],
  },
  {
    title: 'Lifestyle',
    links: [
      { label: 'Office Denim', href: '/shop?collection=office' },
      { label: 'Streetwear', href: '/shop?collection=streetwear' },
      { label: 'Weekend Fits', href: '/shop?collection=weekend' },
      { label: 'Everyday Denim', href: '/shop?collection=everyday' },
    ],
  },
];

const MEGA_BODY: { label: string; href: string; image: string }[] = [
  { label: 'Curvy', href: '/shop?body=curvy', image: CATEGORY_IMG.momJeans },
  { label: 'Petite', href: '/shop?body=petite', image: CATEGORY_IMG.skinnyJeans },
  { label: 'Tall', href: '/shop?body=tall', image: CATEGORY_IMG.wideLeg },
  { label: 'Plus Size', href: '/shop?body=plus-size', image: CATEGORY_IMG.palazzoJeans },
  { label: 'Hourglass', href: '/shop?body=hourglass', image: CATEGORY_IMG.flare },
  { label: 'Pear', href: '/shop?body=pear', image: CATEGORY_IMG.momJeans },
];

export default function Header() {
  const { totalItems, open, wishlist } = useCart();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeMega, setActiveMega] = useState<string | null>(null);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Lock body scroll when mobile menu open
  useEffect(() => {
    document.body.style.overflow = mobileOpen || searchOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [mobileOpen, searchOpen]);

  const closeAll = () => {
    setMobileOpen(false);
    setActiveMega(null);
  };

  return (
    <header
      className={`sticky top-0 z-40 transition-all ${
        scrolled
          ? 'bg-cream-50/95 backdrop-blur border-b border-cream-300/60 shadow-card'
          : 'bg-cream-50'
      }`}
      onMouseLeave={() => setActiveMega(null)}
    >
      <div className="container-luxe flex h-16 items-center gap-4 md:h-20">
        <button
          aria-label="Menu"
          className="lg:hidden -ml-2 p-2"
          onClick={() => setMobileOpen(true)}
        >
          <Menu className="h-5 w-5" />
        </button>

        <Link href="/" className="flex flex-col leading-none" onClick={closeAll}>
          <span className="font-display text-2xl md:text-[28px] font-medium tracking-tight text-denim-900">
            Vee<span className="text-clay-500">_</span>jeans
          </span>
          <span className="hidden md:block text-[10px] tracking-[0.25em] text-ink-muted uppercase">
            Enterprises Ltd
          </span>
        </Link>

        <nav className="ml-8 hidden lg:flex items-center gap-1">
          {NAV.map((item) => (
            <div key={item.label} onMouseEnter={() => setActiveMega(item.mega ?? null)}>
              <Link
                href={item.href}
                className={`px-3 py-2 text-[13px] font-medium tracking-wide transition-colors ${
                  activeMega === item.mega ? 'text-clay-500' : 'text-ink hover:text-clay-500'
                }`}
              >
                {item.label}
              </Link>
            </div>
          ))}
        </nav>

        <div className="ml-auto flex items-center gap-1">
          <button aria-label="Search" className="p-2 hover:text-clay-500" onClick={() => setSearchOpen(true)}>
            <Search className="h-5 w-5" />
          </button>
          <Link href="/account" aria-label="Account" className="p-2 hover:text-clay-500 hidden md:inline-flex">
            <User className="h-5 w-5" />
          </Link>
          <Link href="/account?tab=wishlist" aria-label="Wishlist" className="relative p-2 hover:text-clay-500">
            <Heart className="h-5 w-5" />
            {wishlist.length > 0 && (
              <span className="absolute top-0 right-0 grid place-items-center h-4 w-4 rounded-full bg-clay-500 text-[10px] font-semibold text-white">
                {wishlist.length}
              </span>
            )}
          </Link>
          <button aria-label="Cart" onClick={open} className="relative p-2 hover:text-clay-500">
            <ShoppingBag className="h-5 w-5" />
            {totalItems > 0 && (
              <span className="absolute top-0 right-0 grid place-items-center h-4 w-4 rounded-full bg-denim-900 text-[10px] font-semibold text-cream-50">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </div>

      {/* Mega menu — desktop only */}
      {activeMega && (
        <div
          className="hidden lg:block absolute left-0 right-0 top-full bg-cream-50 border-t border-cream-300/60 shadow-luxe animate-fade-in"
          onMouseEnter={() => setActiveMega(activeMega)}
        >
          <div className="container-luxe py-10">
            {activeMega === 'new' && (
              <div className="grid grid-cols-4 gap-6">
                {STYLE_TILES.slice(0, 4).map((s) => (
                  <Link
                    key={s.slug}
                    href={`/shop?category=${s.slug}`}
                    onClick={() => setActiveMega(null)}
                    className="group"
                  >
                    <div className="aspect-[3/4] overflow-hidden rounded-xl bg-cream-200">
                      <img src={s.image} alt={s.name} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
                    </div>
                    <p className="mt-2 text-sm font-medium">{s.name}</p>
                  </Link>
                ))}
              </div>
            )}

            {activeMega === 'jeans' && (
              <div className="grid grid-cols-5 gap-8">
                {MEGA_JEANS.map((group) => (
                  <div key={group.title}>
                    <h4 className="text-[11px] uppercase tracking-[0.2em] text-ink-muted mb-4">
                      {group.title}
                    </h4>
                    <ul className="space-y-2">
                      {group.links.map((l) => (
                        <li key={l.href}>
                          <Link
                            href={l.href}
                            onClick={() => setActiveMega(null)}
                            className="text-sm link-underline hover:text-clay-500 transition-colors"
                          >
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <Link
                  href="/shop?collection=premium-turkish"
                  onClick={() => setActiveMega(null)}
                  className="relative block overflow-hidden rounded-2xl bg-denim-900 text-cream-50 p-6 hover:scale-[1.02] transition-transform group"
                >
                  <img
                    src={CATEGORY_IMG.momJeans}
                    alt=""
                    className="absolute inset-0 h-full w-full object-cover opacity-30 group-hover:opacity-40 transition-opacity"
                  />
                  <div className="relative">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-clay-300">Featured</p>
                    <p className="font-display text-2xl mt-2 leading-tight">Premium Turkish Denim</p>
                    <p className="text-xs mt-3 text-cream-200">Crafted at the mill</p>
                    <p className="mt-6 text-xs underline">Shop now →</p>
                  </div>
                </Link>
              </div>
            )}

            {activeMega === 'tops' && (
              <div className="grid grid-cols-4 gap-6">
                {MEGA_TOPS.map((group) => (
                  <div key={group.title}>
                    <h4 className="text-[11px] uppercase tracking-[0.2em] text-ink-muted mb-4">{group.title}</h4>
                    <ul className="space-y-2">
                      {group.links.map((l) => (
                        <li key={l.href}>
                          <Link
                            href={l.href}
                            onClick={() => setActiveMega(null)}
                            className="text-sm link-underline hover:text-clay-500 transition-colors"
                          >
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <Link
                  href="/shop?category=denim-jacket"
                  onClick={() => setActiveMega(null)}
                  className="aspect-square overflow-hidden rounded-2xl bg-cream-200 group relative"
                >
                  <img src={CATEGORY_IMG.denimJacket} alt="" className="h-full w-full object-cover transition-transform group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-denim-900/80 to-transparent p-4 flex items-end">
                    <p className="text-cream-50 font-display text-lg leading-tight">Denim Tops Edit →</p>
                  </div>
                </Link>
              </div>
            )}

            {activeMega === 'collections' && (
              <div className="grid grid-cols-4 gap-6">
                {MEGA_COLLECTIONS.map((group) => (
                  <div key={group.title}>
                    <h4 className="text-[11px] uppercase tracking-[0.2em] text-ink-muted mb-4">{group.title}</h4>
                    <ul className="space-y-2">
                      {group.links.map((l) => (
                        <li key={l.href}>
                          <Link
                            href={l.href}
                            onClick={() => setActiveMega(null)}
                            className="text-sm link-underline hover:text-clay-500 transition-colors"
                          >
                            {l.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <Link
                  href="/shop?collection=limited-edition"
                  onClick={() => setActiveMega(null)}
                  className="aspect-square overflow-hidden rounded-2xl bg-denim-950 text-cream-50 relative group"
                >
                  <img src={CATEGORY_IMG.denimGown} alt="" className="absolute inset-0 h-full w-full object-cover opacity-40 group-hover:opacity-50 transition-opacity" />
                  <div className="relative p-5 h-full flex flex-col justify-end">
                    <p className="text-[11px] uppercase tracking-[0.2em] text-gold-400">Limited</p>
                    <p className="font-display text-xl mt-2 leading-tight">Luxury Capsule Drop</p>
                  </div>
                </Link>
              </div>
            )}

            {activeMega === 'body' && (
              <div className="grid grid-cols-6 gap-4">
                {MEGA_BODY.map((b) => (
                  <Link
                    href={b.href}
                    key={b.label}
                    onClick={() => setActiveMega(null)}
                    className="group"
                  >
                    <div className="aspect-[3/4] overflow-hidden rounded-xl bg-cream-200">
                      <img src={b.image} alt={b.label} className="h-full w-full object-cover transition-transform group-hover:scale-105" />
                    </div>
                    <p className="mt-2 text-sm font-medium text-center">{b.label}</p>
                  </Link>
                ))}
              </div>
            )}
          </div>
        </div>
      )}

      {/* Mobile drawer */}
      {mobileOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={closeAll} />
          <aside className="absolute left-0 top-0 h-full w-[88%] max-w-sm bg-cream-50 flex flex-col animate-fade-in">
            <div className="flex items-center justify-between p-5 border-b border-cream-300">
              <span className="font-display text-2xl text-denim-900">
                Vee<span className="text-clay-500">_</span>jeans
              </span>
              <button onClick={closeAll} className="p-2">
                <X className="h-5 w-5" />
              </button>
            </div>

            <nav className="flex-1 overflow-y-auto">
              {NAV.map((item) => {
                const hasSubmenu =
                  item.mega === 'jeans' ||
                  item.mega === 'tops' ||
                  item.mega === 'collections' ||
                  item.mega === 'body' ||
                  item.mega === 'new';

                if (!hasSubmenu) {
                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={closeAll}
                      className="flex items-center justify-between px-5 py-4 border-b border-cream-300 text-base font-medium hover:bg-cream-100"
                    >
                      {item.label}
                    </Link>
                  );
                }

                // All submenus are always visible on mobile (no accordion).
                return (
                  <div key={item.label} className="border-b border-cream-300">
                    <Link
                      href={item.href}
                      onClick={closeAll}
                      className="flex items-center justify-between w-full px-5 py-4 text-base font-medium hover:bg-cream-100"
                    >
                      {item.label}
                    </Link>
                    <div className="bg-cream-100 px-5 py-3 space-y-3">
                      <Link
                        href={item.href}
                        onClick={closeAll}
                        className="block text-sm font-medium text-clay-500 underline"
                      >
                        View all {item.label.toLowerCase()} →
                      </Link>
                      {item.mega === 'jeans' && (
                        <MobileGroupSet groups={MEGA_JEANS} onSelect={closeAll} />
                      )}
                      {item.mega === 'tops' && (
                        <MobileGroupSet groups={MEGA_TOPS} onSelect={closeAll} />
                      )}
                      {item.mega === 'collections' && (
                        <MobileGroupSet groups={MEGA_COLLECTIONS} onSelect={closeAll} />
                      )}
                      {item.mega === 'body' && (
                        <div className="grid grid-cols-3 gap-3">
                          {MEGA_BODY.map((b) => (
                            <Link
                              key={b.label}
                              href={b.href}
                              onClick={closeAll}
                              className="group"
                            >
                              <div className="aspect-[3/4] overflow-hidden rounded-lg bg-cream-200">
                                <img src={b.image} alt={b.label} className="h-full w-full object-cover" />
                              </div>
                              <p className="mt-1.5 text-xs font-medium text-center">{b.label}</p>
                            </Link>
                          ))}
                        </div>
                      )}
                      {item.mega === 'new' && (
                        <div className="grid grid-cols-2 gap-3">
                          {STYLE_TILES.slice(0, 4).map((s) => (
                            <Link
                              key={s.slug}
                              href={`/shop?category=${s.slug}`}
                              onClick={closeAll}
                              className="group"
                            >
                              <div className="aspect-[3/4] overflow-hidden rounded-lg bg-cream-200">
                                <img src={s.image} alt={s.name} className="h-full w-full object-cover" />
                              </div>
                              <p className="mt-1.5 text-xs font-medium">{s.name}</p>
                            </Link>
                          ))}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}

              <Link href="/account" onClick={closeAll} className="block px-5 py-4 border-b border-cream-300 text-base font-medium hover:bg-cream-100">
                Account
              </Link>
              <Link href="/size-guide" onClick={closeAll} className="block px-5 py-4 border-b border-cream-300 text-base font-medium hover:bg-cream-100">
                Size Guide
              </Link>
              <Link href="/contact" onClick={closeAll} className="block px-5 py-4 border-b border-cream-300 text-base font-medium hover:bg-cream-100">
                Contact
              </Link>
            </nav>

            <div className="p-5 border-t border-cream-300">
              <div className="rounded-2xl bg-denim-900 text-cream-50 p-5">
                <p className="font-display text-lg leading-tight">Wholesale enquiry?</p>
                <p className="text-xs mt-2 text-cream-200">Direct support via WhatsApp.</p>
                <a
                  href="https://wa.me/2348100484650"
                  className="mt-4 inline-block text-xs underline"
                >
                  Chat now →
                </a>
              </div>
            </div>
          </aside>
        </div>
      )}

      {/* Search overlay */}
      {searchOpen && (
        <div className="fixed inset-0 z-50">
          <div className="absolute inset-0 bg-black/40" onClick={() => setSearchOpen(false)} />
          <div className="absolute inset-x-0 top-0 bg-cream-50 p-6 md:p-10 animate-fade-in">
            <div className="container-luxe">
              <div className="flex items-center gap-4">
                <Search className="h-5 w-5 text-ink-muted" />
                <input
                  autoFocus
                  placeholder="Search denim, fits, sizes..."
                  className="flex-1 bg-transparent outline-none text-lg md:text-2xl placeholder:text-ink-muted/60"
                />
                <button onClick={() => setSearchOpen(false)}>
                  <X className="h-5 w-5" />
                </button>
              </div>
              <div className="mt-8">
                <p className="text-[11px] uppercase tracking-[0.2em] text-ink-muted mb-3">Popular searches</p>
                <div className="flex flex-wrap gap-2">
                  {[
                    { l: 'Mom jeans', h: '/shop?category=mom-jeans' },
                    { l: 'Baggy jeans', h: '/shop?category=baggy-jeans' },
                    { l: 'Palazzo', h: '/shop?category=palazzo-jeans' },
                    { l: 'Curvy skinny', h: '/shop?body=curvy&fit=skinny' },
                    { l: 'Denim corset', h: '/shop?category=denim-corset' },
                    { l: 'Plus size', h: '/shop?body=plus-size' },
                    { l: 'Stone wash', h: '/shop?wash=stone' },
                    { l: 'Wholesale', h: '/wholesale' },
                  ].map((t) => (
                    <Link
                      key={t.l}
                      href={t.h}
                      onClick={() => setSearchOpen(false)}
                      className="chip hover:bg-denim-900 hover:text-cream-50 transition-colors"
                    >
                      {t.l}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}

function MobileGroupSet({
  groups,
  onSelect,
}: {
  groups: MegaGroup[];
  onSelect: () => void;
}) {
  return (
    <div className="space-y-4">
      {groups.map((g) => (
        <div key={g.title}>
          <p className="text-[10px] uppercase tracking-[0.25em] text-ink-muted mb-2">{g.title}</p>
          <div className="flex flex-wrap gap-1.5">
            {g.links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={onSelect}
                className="text-xs px-3 py-1.5 rounded-full border border-cream-300 bg-cream-50 hover:bg-denim-900 hover:text-cream-50 hover:border-denim-900 transition-colors"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}
