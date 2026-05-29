'use client';

import Link from 'next/link';
import { Minus, Plus, X, ShoppingBag } from 'lucide-react';
import { useCart } from './CartContext';
import { formatNaira } from '@/lib/format';

const FREE_SHIPPING_THRESHOLD = 80000;

export default function CartDrawer() {
  const { items, isOpen, close, removeItem, updateQty, subtotal } = useCart();
  const remaining = Math.max(0, FREE_SHIPPING_THRESHOLD - subtotal);
  const progress = Math.min(100, (subtotal / FREE_SHIPPING_THRESHOLD) * 100);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div
        className="absolute inset-0 bg-black/40 animate-fade-in"
        onClick={close}
      />
      <aside className="absolute right-0 top-0 h-full w-full max-w-md bg-cream-50 flex flex-col animate-fade-in shadow-luxe">
        <div className="flex items-center justify-between px-6 py-5 border-b border-cream-300">
          <h3 className="font-display text-xl">Your Bag</h3>
          <button onClick={close} className="p-2 -mr-2"><X className="h-5 w-5" /></button>
        </div>

        {/* Free shipping bar */}
        <div className="px-6 py-4 bg-cream-100 border-b border-cream-300">
          <p className="text-xs text-ink-soft">
            {remaining > 0
              ? <>You're <span className="font-semibold text-denim-900">{formatNaira(remaining)}</span> from free nationwide delivery</>
              : <>🎉 You've unlocked free delivery!</>}
          </p>
          <div className="mt-2 h-1 w-full bg-cream-300 rounded-full overflow-hidden">
            <div
              className="h-full bg-clay-500 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        {items.length === 0 ? (
          <div className="flex-1 grid place-items-center px-6">
            <div className="text-center">
              <ShoppingBag className="h-12 w-12 mx-auto text-ink-muted" />
              <p className="mt-4 font-display text-xl">Your bag is empty</p>
              <p className="mt-1 text-sm text-ink-muted">Add some denim to get started.</p>
              <button onClick={close} className="btn-primary mt-6">Continue shopping</button>
            </div>
          </div>
        ) : (
          <>
            <div className="flex-1 overflow-y-auto px-6 py-4 space-y-5">
              {items.map((item) => (
                <div key={`${item.productId}-${item.size}-${item.color}`} className="flex gap-4">
                  <Link href={`/product/${item.slug}`} onClick={close} className="block w-20 aspect-[3/4] rounded-lg overflow-hidden bg-cream-200 flex-shrink-0">
                    <img src={item.image} alt="" className="h-full w-full object-cover" />
                  </Link>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between gap-2">
                      <p className="text-sm font-medium leading-tight">{item.name}</p>
                      <button
                        onClick={() => removeItem(item.productId, item.size, item.color)}
                        className="text-ink-muted hover:text-clay-500"
                      >
                        <X className="h-4 w-4" />
                      </button>
                    </div>
                    <p className="text-xs text-ink-muted mt-1">
                      {item.color} · Size {item.size}
                    </p>
                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center border border-cream-300 rounded-full">
                        <button onClick={() => updateQty(item.productId, item.size, item.color, item.quantity - 1)} className="grid place-items-center h-7 w-7"><Minus className="h-3 w-3" /></button>
                        <span className="px-2 text-xs font-medium">{item.quantity}</span>
                        <button onClick={() => updateQty(item.productId, item.size, item.color, item.quantity + 1)} className="grid place-items-center h-7 w-7"><Plus className="h-3 w-3" /></button>
                      </div>
                      <p className="text-sm font-semibold">{formatNaira(item.price * item.quantity)}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-cream-300 px-6 py-5 space-y-4">
              <div className="flex justify-between text-sm">
                <span>Subtotal</span>
                <span className="font-semibold">{formatNaira(subtotal)}</span>
              </div>
              <p className="text-xs text-ink-muted">
                Shipping calculated at checkout. Taxes included where applicable.
              </p>
              <Link href="/checkout" onClick={close} className="btn-primary w-full">
                Checkout · {formatNaira(subtotal)}
              </Link>
              <Link href="/cart" onClick={close} className="btn-outline w-full">
                View bag
              </Link>
              <a
                href="https://wa.me/2348100484650"
                target="_blank"
                rel="noopener"
                className="block text-center text-xs text-ink-muted underline hover:text-clay-500"
              >
                Prefer to order on WhatsApp? Chat now →
              </a>
            </div>
          </>
        )}
      </aside>
    </div>
  );
}
