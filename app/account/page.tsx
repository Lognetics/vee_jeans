'use client';

import Link from 'next/link';
import { Suspense } from 'react';
import { Heart } from 'lucide-react';
import { useCart } from '@/components/CartContext';
import { PRODUCTS } from '@/lib/products';
import ProductCard from '@/components/ProductCard';

function WishlistInner() {
  const { wishlist } = useCart();
  const wishlistProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <section className="container-luxe py-12">
      <p className="text-[11px] tracking-[0.3em] uppercase text-clay-500">Saved for later</p>
      <h1 className="font-display text-4xl md:text-5xl text-denim-900 leading-tight mt-2">
        My Wishlist ({wishlistProducts.length})
      </h1>

      <div className="mt-10">
        {wishlistProducts.length === 0 ? (
          <div className="rounded-2xl border border-cream-300 p-12 text-center bg-cream-50">
            <Heart className="h-10 w-10 mx-auto text-ink-muted" />
            <p className="font-display text-2xl text-denim-900 mt-4">No saved items yet.</p>
            <p className="text-sm text-ink-muted mt-2">Tap the heart on any product to save it here.</p>
            <Link href="/shop" className="btn-primary mt-6 inline-flex">Browse denim</Link>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {wishlistProducts.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default function AccountPage() {
  return (
    <Suspense fallback={<div className="container-luxe py-32 text-center">Loading…</div>}>
      <WishlistInner />
    </Suspense>
  );
}
