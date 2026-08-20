'use client';

import Link from 'next/link';
import { Heart, Eye, ShoppingBag } from 'lucide-react';
import { useState } from 'react';
import type { Product } from '@/lib/types';
import { formatNaira } from '@/lib/format';
import { useCart } from './CartContext';

export default function ProductCard({ product }: { product: Product }) {
  const [hovered, setHovered] = useState(false);
  const [colorIdx, setColorIdx] = useState(0);
  const { addItem, wishlist, toggleWishlist } = useCart();
  const isWishlisted = wishlist.includes(product.id);

  // Primary image = the one matching the selected color (falls back to first image)
  const primaryImage = product.images[colorIdx] ?? product.images[0];
  // Hover image = the next image after the color match (or first image if we're already on it)
  const hoverImage =
    product.images[colorIdx + 1] ??
    (product.images[0] !== primaryImage ? product.images[0] : product.images[1]);

  const quickAdd = () => {
    addItem(
      product,
      product.sizes[Math.floor(product.sizes.length / 2)],
      product.colorLabels[colorIdx] ?? product.colorLabels[0]
    );
  };

  return (
    <div
      className="group relative"
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      <Link href={`/product/${product.slug}`} className="block">
        <div className="relative aspect-[3/4] overflow-hidden rounded-2xl bg-cream-200">
          <img
            key={`primary-${colorIdx}`}
            src={primaryImage}
            alt={`${product.name} — ${product.colorLabels[colorIdx] ?? ''}`}
            className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 animate-fade-in ${
              hovered && hoverImage ? 'opacity-0 scale-105' : 'opacity-100'
            }`}
          />
          {hoverImage && (
            <img
              key={`hover-${colorIdx}`}
              src={hoverImage}
              alt=""
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                hovered ? 'opacity-100 scale-105' : 'opacity-0'
              }`}
            />
          )}

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-1.5">
            {product.comparePrice && product.comparePrice > product.price && (
              <span className="pill bg-clay-600 text-white border-clay-600">
                -{Math.round((1 - product.price / product.comparePrice) * 100)}%
              </span>
            )}
            {product.isNew && <span className="pill bg-clay-500/95 text-white border-clay-500">New</span>}
            {product.isLimited && (
              <span className="pill bg-cream-50/95 border-gold-500 text-gold-600">Limited</span>
            )}
            {product.isBestSeller && !product.isNew && (
              <span className="pill">Best Seller</span>
            )}
          </div>

          {/* Wishlist */}
          <button
            onClick={(e) => {
              e.preventDefault();
              toggleWishlist(product.id);
            }}
            className={`absolute top-3 right-3 grid place-items-center h-9 w-9 rounded-full backdrop-blur transition-all ${
              isWishlisted
                ? 'bg-clay-500 text-white'
                : 'bg-cream-50/80 hover:bg-cream-50 text-ink'
            }`}
          >
            <Heart className={`h-4 w-4 ${isWishlisted ? 'fill-current' : ''}`} />
          </button>

          {/* Hover quick actions */}
          <div
            className={`absolute inset-x-3 bottom-3 flex gap-2 transition-all duration-300 ${
              hovered
                ? 'translate-y-0 opacity-100'
                : 'translate-y-3 opacity-0'
            }`}
          >
            <button
              onClick={(e) => {
                e.preventDefault();
                quickAdd();
              }}
              className="flex-1 inline-flex items-center justify-center gap-2 rounded-full bg-denim-900 text-cream-50 py-2.5 text-xs font-medium hover:bg-clay-500 transition-colors"
            >
              <ShoppingBag className="h-3.5 w-3.5" />
              Quick Add
            </button>
            <button
              onClick={(e) => e.preventDefault()}
              className="grid place-items-center h-10 w-10 rounded-full bg-cream-50/95 hover:bg-cream-50"
              aria-label="Quick view"
            >
              <Eye className="h-4 w-4" />
            </button>
          </div>

        </div>
      </Link>

      {/* Meta */}
      <div className="mt-4 px-1">
        <p className="text-[11px] uppercase tracking-[0.15em] text-ink-muted">{product.categoryLabel}</p>
        <Link href={`/product/${product.slug}`}>
          <h3 className="mt-1 font-medium text-sm text-ink leading-tight line-clamp-2 hover:text-clay-500 transition-colors">
            {product.name}
          </h3>
        </Link>

        <div className="mt-2 flex items-baseline gap-2">
          <span className="text-base font-semibold text-clay-600">{formatNaira(product.price)}</span>
          {product.comparePrice && product.comparePrice > product.price && (
            <span className="text-xs line-through text-ink-muted">{formatNaira(product.comparePrice)}</span>
          )}
        </div>

        {/* Color swatches */}
        {product.colors.length > 1 && (
          <div className="mt-3 flex items-center gap-1.5">
            {product.colors.slice(0, 5).map((c, i) => (
              <button
                key={c + i}
                onClick={() => setColorIdx(i)}
                className={`h-4 w-4 rounded-full border transition-all ${
                  colorIdx === i ? 'ring-2 ring-offset-2 ring-denim-900 border-cream-50' : 'border-cream-300'
                }`}
                style={{ background: c }}
                aria-label={product.colorLabels[i]}
              />
            ))}
            {product.colors.length > 5 && (
              <span className="text-[11px] text-ink-muted">+{product.colors.length - 5}</span>
            )}
          </div>
        )}

        <div className="mt-2 flex items-center gap-1 text-[11px] text-ink-muted">
          <span className="text-clay-500">★</span>
          {product.rating.toFixed(1)}
          <span>· {product.reviewCount} reviews</span>
        </div>
      </div>
    </div>
  );
}
