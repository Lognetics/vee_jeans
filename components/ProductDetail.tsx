'use client';

import Link from 'next/link';
import { useState } from 'react';
import {
  Heart,
  Share2,
  ShoppingBag,
  Truck,
  Shield,
  RotateCcw,
  ChevronDown,
  Plus,
  Minus,
  Sparkles,
  MessageCircle,
} from 'lucide-react';
import type { Product, Review } from '@/lib/types';
import { formatNaira } from '@/lib/format';
import { useCart } from './CartContext';
import ProductCard from './ProductCard';

interface Props {
  product: Product;
  related: Product[];
  reviews: Review[];
}

const STRETCH_LABELS = ['Rigid', 'Slight', 'Stretch', 'High Stretch', 'Super Stretch'];

export default function ProductDetail({ product, related, reviews }: Props) {
  const [imgIdx, setImgIdx] = useState(0);
  const [colorIdx, setColorIdx] = useState(0);
  const [size, setSize] = useState(product.sizes[Math.floor(product.sizes.length / 2)]);
  const [qty, setQty] = useState(1);
  const [openSection, setOpenSection] = useState<string | null>('details');
  const { addItem, wishlist, toggleWishlist, open } = useCart();

  // Color picker → gallery image swap.
  // If there's a dedicated image at the color's index, jump the gallery to it.
  const pickColor = (idx: number) => {
    setColorIdx(idx);
    if (product.images[idx]) {
      setImgIdx(idx);
    }
  };

  const isWishlisted = wishlist.includes(product.id);

  const onAdd = () => {
    addItem(product, size, product.colorLabels[colorIdx], qty);
  };

  const onBuyNow = () => {
    addItem(product, size, product.colorLabels[colorIdx], qty);
    open();
  };

  const avgRating =
    reviews.length === 0
      ? product.rating
      : reviews.reduce((s, r) => s + r.rating, 0) / reviews.length;

  return (
    <>
      {/* Breadcrumb */}
      <div className="container-luxe pt-6 pb-2">
        <nav className="text-xs text-ink-muted flex items-center gap-1.5">
          <Link href="/" className="hover:text-denim-900">Home</Link>
          <span>/</span>
          <Link href="/shop" className="hover:text-denim-900">Shop</Link>
          <span>/</span>
          <Link href={`/shop?category=${product.category}`} className="hover:text-denim-900">
            {product.categoryLabel}
          </Link>
          <span>/</span>
          <span className="text-denim-900 truncate">{product.name}</span>
        </nav>
      </div>

      <section className="container-luxe pb-16">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-14">
          {/* Gallery */}
          <div className="flex gap-3">
            {/* Thumbs */}
            <div className="hidden md:flex flex-col gap-2 w-20 flex-shrink-0">
              {product.images.map((src, i) => (
                <button
                  key={i}
                  onClick={() => setImgIdx(i)}
                  className={`aspect-[3/4] overflow-hidden rounded-lg border-2 transition-all ${
                    imgIdx === i ? 'border-denim-900' : 'border-transparent opacity-70 hover:opacity-100'
                  }`}
                >
                  <img src={src} alt="" className="h-full w-full object-cover" />
                </button>
              ))}
            </div>

            {/* Main image */}
            <div className="flex-1">
              <div className="relative aspect-[3/4] overflow-hidden rounded-3xl bg-cream-200 group">
                <img
                  key={imgIdx}
                  src={product.images[imgIdx]}
                  alt={`${product.name} — ${product.colorLabels[colorIdx] ?? ''}`}
                  className="absolute inset-0 h-full w-full object-cover animate-fade-in"
                />
                <div className="absolute top-4 left-4 flex flex-col gap-2">
                  {product.isNew && <span className="pill bg-clay-500 text-white border-clay-500">New</span>}
                  {product.isLimited && (
                    <span className="pill bg-cream-50 border-gold-500 text-gold-600">Limited Edition</span>
                  )}
                </div>
                <button
                  onClick={() => toggleWishlist(product.id)}
                  className={`absolute top-4 right-4 grid place-items-center h-11 w-11 rounded-full backdrop-blur transition-colors ${
                    isWishlisted ? 'bg-clay-500 text-white' : 'bg-cream-50/90 hover:bg-cream-50'
                  }`}
                >
                  <Heart className={`h-5 w-5 ${isWishlisted ? 'fill-current' : ''}`} />
                </button>
              </div>

              {/* Mobile dots */}
              <div className="md:hidden mt-3 flex justify-center gap-1.5">
                {product.images.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setImgIdx(i)}
                    className={`h-1.5 rounded-full transition-all ${
                      imgIdx === i ? 'bg-denim-900 w-6' : 'bg-cream-300 w-1.5'
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Info */}
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-clay-500">
              {product.categoryLabel}
            </p>
            <h1 className="font-display text-3xl md:text-5xl leading-tight mt-3 text-denim-900">
              {product.name}
            </h1>

            <div className="flex items-center gap-3 mt-3 text-sm">
              <div className="flex items-center gap-1 text-clay-500">
                {Array.from({ length: 5 }).map((_, i) => (
                  <span key={i}>{i < Math.round(avgRating) ? '★' : '☆'}</span>
                ))}
              </div>
              <span className="text-ink-muted">
                {avgRating.toFixed(1)} ({product.reviewCount} reviews)
              </span>
              {product.tags?.length ? (
                <span className="hidden md:flex chip">{product.tags[0]}</span>
              ) : null}
            </div>

            <div className="flex items-baseline gap-3 mt-6">
              <span className="font-display text-3xl text-denim-900">
                {formatNaira(product.price)}
              </span>
            </div>

            {/* Color picker */}
            <div className="mt-8">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">
                  Color: <span className="text-ink-muted font-normal">{product.colorLabels[colorIdx]}</span>
                </p>
              </div>
              <div className="mt-3 flex gap-2.5">
                {product.colors.map((c, i) => (
                  <button
                    key={i}
                    onClick={() => pickColor(i)}
                    className={`h-9 w-9 rounded-full border-2 transition-all ${
                      colorIdx === i
                        ? 'border-denim-900 ring-2 ring-offset-2 ring-clay-500'
                        : 'border-cream-300 hover:border-denim-900'
                    }`}
                    style={{ background: c }}
                    aria-label={product.colorLabels[i]}
                    title={product.colorLabels[i]}
                  />
                ))}
              </div>
            </div>

            {/* Size picker */}
            <div className="mt-8">
              <div className="flex items-center justify-between">
                <p className="text-sm font-medium">Size</p>
                <Link href="/size-guide" className="text-xs underline text-ink-muted hover:text-denim-900">
                  Size guide →
                </Link>
              </div>
              <div className="mt-3 grid grid-cols-5 sm:grid-cols-7 md:grid-cols-9 gap-2">
                {product.sizes.map((s) => (
                  <button
                    key={s}
                    onClick={() => setSize(s)}
                    className={`py-2.5 rounded-lg text-sm border transition-colors ${
                      size === s
                        ? 'bg-denim-900 text-cream-50 border-denim-900'
                        : 'border-cream-300 hover:border-denim-900'
                    }`}
                  >
                    {s}
                  </button>
                ))}
              </div>

              {/* AI size recommendation */}
              <button className="mt-3 inline-flex items-center gap-2 text-xs text-clay-500 hover:underline">
                <Sparkles className="h-3.5 w-3.5" />
                Find my size with AI
              </button>
            </div>

            {/* Stretch level indicator */}
            <div className="mt-8">
              <div className="flex items-center justify-between mb-2">
                <p className="text-sm font-medium">Stretch</p>
                <span className="text-xs text-ink-muted">{STRETCH_LABELS[product.stretchLevel - 1]}</span>
              </div>
              <div className="flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <div
                    key={i}
                    className={`h-1 flex-1 rounded ${
                      i < product.stretchLevel ? 'bg-clay-500' : 'bg-cream-300'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Qty + Add */}
            <div className="mt-8 flex flex-wrap gap-3">
              <div className="flex items-center border border-cream-300 rounded-full">
                <button onClick={() => setQty((q) => Math.max(1, q - 1))} className="grid place-items-center h-12 w-12"><Minus className="h-4 w-4" /></button>
                <span className="px-4 font-medium">{qty}</span>
                <button onClick={() => setQty((q) => q + 1)} className="grid place-items-center h-12 w-12"><Plus className="h-4 w-4" /></button>
              </div>
              <button onClick={onAdd} className="btn-primary flex-1 min-w-[200px]">
                <ShoppingBag className="h-4 w-4" /> Add to bag · {formatNaira(product.price * qty)}
              </button>
            </div>
            <button onClick={onBuyNow} className="btn-accent w-full mt-3">
              Buy now
            </button>

            {/* Share + WhatsApp */}
            <div className="mt-4 flex items-center gap-4 text-xs text-ink-muted">
              <a
                href={`https://wa.me/2348100484650?text=Hi,%20I'm%20interested%20in%20${encodeURIComponent(product.name)}`}
                target="_blank"
                className="inline-flex items-center gap-1.5 hover:text-denim-900"
              >
                <MessageCircle className="h-3.5 w-3.5" /> Order via WhatsApp
              </a>
              <button className="inline-flex items-center gap-1.5 hover:text-denim-900">
                <Share2 className="h-3.5 w-3.5" /> Share
              </button>
            </div>

            {/* Trust strip */}
            <div className="mt-8 grid grid-cols-3 gap-3">
              {[
                { i: Truck, t: 'Fast delivery' },
                { i: Shield, t: 'Secure payment' },
                { i: RotateCcw, t: '7-day returns' },
              ].map((x) => (
                <div key={x.t} className="text-center p-3 rounded-xl border border-cream-300">
                  <x.i className="h-4 w-4 mx-auto text-clay-500" />
                  <p className="text-[11px] mt-1.5 text-ink-soft">{x.t}</p>
                </div>
              ))}
            </div>

            {/* Accordions */}
            <div className="mt-10 border-t border-cream-300">
              {[
                {
                  k: 'details',
                  label: 'Details & Description',
                  content: (
                    <div className="text-sm text-ink-soft leading-relaxed space-y-3">
                      <p>{product.description}</p>
                      <ul className="space-y-1.5">
                        {product.features.map((f) => (
                          <li key={f} className="flex items-start gap-2">
                            <span className="text-clay-500 mt-1">▸</span>
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ),
                },
                {
                  k: 'fabric',
                  label: 'Fabric & Care',
                  content: (
                    <div className="text-sm text-ink-soft space-y-2">
                      <p><strong className="text-denim-900">Fabric:</strong> {product.fabric}</p>
                      <p><strong className="text-denim-900">Care:</strong> Cold machine wash inside-out. Hang dry. Iron on reverse. Do not bleach.</p>
                    </div>
                  ),
                },
                {
                  k: 'delivery',
                  label: 'Delivery & Returns',
                  content: (
                    <div className="text-sm text-ink-soft space-y-2">
                      <p>📦 <strong className="text-denim-900">Abuja:</strong> Same-day or next-day delivery</p>
                      <p>🇳🇬 <strong className="text-denim-900">Nationwide:</strong> 2–4 working days</p>
                      <p>🌍 <strong className="text-denim-900">International:</strong> 5–10 working days</p>
                      <p>↩️ 7-day return window. Item must be unworn with tags attached.</p>
                    </div>
                  ),
                },
                {
                  k: 'styling',
                  label: 'Styling Suggestions',
                  content: (
                    <div className="text-sm text-ink-soft space-y-2">
                      <p>Pair with our Cropped Denim Jacket and a fitted white tee for off-duty cool.</p>
                      <p>Style with the Denim Corset Top and gold accessories for evening.</p>
                      <p>Tuck into our Oversized Boyfriend Jacket for a Y2K-inspired look.</p>
                    </div>
                  ),
                },
              ].map((s) => (
                <div key={s.k} className="border-b border-cream-300">
                  <button
                    onClick={() => setOpenSection(openSection === s.k ? null : s.k)}
                    className="flex w-full items-center justify-between py-5 text-left"
                  >
                    <span className="text-sm font-medium text-denim-900">{s.label}</span>
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${openSection === s.k ? 'rotate-180' : ''}`}
                    />
                  </button>
                  {openSection === s.k && <div className="pb-5">{s.content}</div>}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="bg-cream-100 py-16">
        <div className="container-luxe">
          <div className="flex items-end justify-between flex-col md:flex-row gap-4 mb-10">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-clay-500 mb-2">Reviews</p>
              <h2 className="font-display text-3xl md:text-4xl text-denim-900">
                {avgRating.toFixed(1)} · {product.reviewCount} customer reviews
              </h2>
            </div>
            <button className="btn-outline">Write a review</button>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {reviews.slice(0, 6).map((r) => (
              <div key={r.id} className="bg-cream-50 rounded-2xl p-6 border border-cream-300">
                <div className="flex items-center gap-1 text-clay-500 mb-3">
                  {Array.from({ length: 5 }).map((_, i) => (
                    <span key={i}>{i < r.rating ? '★' : '☆'}</span>
                  ))}
                </div>
                <p className="font-medium text-denim-900">{r.title}</p>
                <p className="text-sm text-ink-soft mt-2 leading-relaxed">"{r.body}"</p>
                <div className="flex items-center justify-between mt-5 pt-4 border-t border-cream-300 text-xs">
                  <div>
                    <p className="font-medium text-denim-900">{r.author}</p>
                    <p className="text-ink-muted">{r.location}</p>
                  </div>
                  {r.sizeBought && (
                    <p className="text-ink-muted">
                      {r.bodyType ? `${r.bodyType} · ` : ''}Size {r.sizeBought}
                    </p>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Related */}
      <section className="container-luxe py-16 md:py-24">
        <h2 className="font-display text-3xl md:text-4xl text-denim-900 mb-10">
          Complete the look.
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
          {related.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </section>
    </>
  );
}
