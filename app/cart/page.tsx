'use client';

import Link from 'next/link';
import { Minus, Plus, X, ShoppingBag, Truck, Shield, RotateCcw, ArrowRight } from 'lucide-react';
import { useCart } from '@/components/CartContext';
import { formatNaira } from '@/lib/format';
import { PRODUCTS } from '@/lib/products';
import ProductCard from '@/components/ProductCard';

const SHIPPING_FEE = 3500;

export default function CartPage() {
  const { items, removeItem, updateQty, subtotal } = useCart();
  const shipping = subtotal >= 80000 ? 0 : SHIPPING_FEE;
  const total = subtotal + shipping;
  const recommendations = PRODUCTS.filter((p) => p.isTrending).slice(0, 4);

  if (items.length === 0) {
    return (
      <section className="container-luxe py-24">
        <div className="text-center max-w-md mx-auto">
          <ShoppingBag className="h-12 w-12 mx-auto text-ink-muted" />
          <h1 className="font-display text-4xl text-denim-900 mt-6">Your bag is empty.</h1>
          <p className="mt-3 text-ink-soft">
            Discover our newest Turkish denim drops and start building your wardrobe.
          </p>
          <div className="mt-8 flex gap-3 justify-center">
            <Link href="/shop?collection=new-arrivals" className="btn-primary">
              Shop new arrivals <ArrowRight className="h-4 w-4" />
            </Link>
            <Link href="/shop" className="btn-outline">Browse all</Link>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="font-display text-2xl text-denim-900 mb-8 text-center">You might love</h2>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {recommendations.map((p) => (
              <ProductCard key={p.id} product={p} />
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="container-luxe py-12">
      <h1 className="font-display text-4xl md:text-5xl text-denim-900 leading-tight">
        Your bag
      </h1>
      <p className="text-ink-soft mt-2">
        {items.reduce((s, i) => s + i.quantity, 0)} {items.reduce((s, i) => s + i.quantity, 0) === 1 ? 'item' : 'items'}
      </p>

      <div className="mt-10 grid lg:grid-cols-3 gap-10">
        {/* Items */}
        <div className="lg:col-span-2 space-y-5">
          {items.map((item) => (
            <div key={`${item.productId}-${item.size}-${item.color}`} className="flex gap-5 p-5 rounded-2xl border border-cream-300 bg-cream-50">
              <Link href={`/product/${item.slug}`} className="block w-28 md:w-32 aspect-[3/4] rounded-xl overflow-hidden bg-cream-200 flex-shrink-0">
                <img src={item.image} alt="" className="h-full w-full object-cover" />
              </Link>
              <div className="flex-1 min-w-0">
                <div className="flex justify-between gap-3">
                  <Link href={`/product/${item.slug}`} className="font-medium text-denim-900 hover:text-clay-500">
                    {item.name}
                  </Link>
                  <button onClick={() => removeItem(item.productId, item.size, item.color)} className="text-ink-muted hover:text-clay-500"><X className="h-5 w-5" /></button>
                </div>
                <div className="mt-2 flex flex-wrap items-center gap-3 text-sm text-ink-muted">
                  <span>Color: {item.color}</span>
                  <span>·</span>
                  <span>Size: {item.size}</span>
                </div>
                <div className="mt-6 flex items-center justify-between">
                  <div className="flex items-center border border-cream-300 rounded-full bg-cream-50">
                    <button onClick={() => updateQty(item.productId, item.size, item.color, item.quantity - 1)} className="grid place-items-center h-9 w-9"><Minus className="h-3 w-3" /></button>
                    <span className="px-3 text-sm font-medium">{item.quantity}</span>
                    <button onClick={() => updateQty(item.productId, item.size, item.color, item.quantity + 1)} className="grid place-items-center h-9 w-9"><Plus className="h-3 w-3" /></button>
                  </div>
                  <p className="font-semibold text-denim-900">{formatNaira(item.price * item.quantity)}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Summary */}
        <aside className="lg:sticky lg:top-28 self-start">
          <div className="rounded-2xl bg-denim-950 text-cream-50 p-6">
            <p className="font-display text-2xl">Order summary</p>

            <div className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-cream-200/80">Subtotal</span>
                <span>{formatNaira(subtotal)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-cream-200/80">Shipping</span>
                <span>{shipping === 0 ? 'Free' : formatNaira(shipping)}</span>
              </div>
              {shipping === 0 && (
                <p className="text-xs text-clay-300">✓ Free shipping unlocked</p>
              )}
            </div>

            <div className="mt-5 pt-5 border-t border-cream-50/20 flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span>{formatNaira(total)}</span>
            </div>

            <Link href="/checkout" className="btn bg-clay-500 hover:bg-clay-600 text-white w-full mt-6">
              Checkout · {formatNaira(total)}
            </Link>

            <div className="mt-4">
              <label className="block">
                <span className="text-xs text-cream-200/80">Have a promo code?</span>
                <div className="flex mt-1.5 gap-2">
                  <input className="flex-1 rounded-lg bg-denim-900/50 border border-cream-50/20 px-3 py-2 text-sm" placeholder="VEEJEANS10" />
                  <button className="px-3 py-2 rounded-lg border border-cream-50/30 text-xs">Apply</button>
                </div>
              </label>
            </div>
          </div>

          <div className="mt-5 grid grid-cols-3 gap-2 text-center">
            {[
              { i: Truck, l: 'Fast delivery' },
              { i: Shield, l: 'Secure pay' },
              { i: RotateCcw, l: '7-day returns' },
            ].map((x) => (
              <div key={x.l} className="p-3 rounded-xl border border-cream-300">
                <x.i className="h-4 w-4 mx-auto text-clay-500" />
                <p className="text-[11px] mt-1 text-ink-soft">{x.l}</p>
              </div>
            ))}
          </div>
        </aside>
      </div>

      {/* Recs */}
      <div className="mt-24">
        <h2 className="font-display text-3xl text-denim-900 mb-8">Complete your order</h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
          {recommendations.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </div>
      </div>
    </section>
  );
}
