'use client';

import Link from 'next/link';
import { useState } from 'react';
import { CheckCircle2, CreditCard, Truck, MessageCircle, ShieldCheck } from 'lucide-react';
import { useCart } from '@/components/CartContext';
import { formatNaira } from '@/lib/format';

const SHIPPING_OPTIONS = [
  { id: 'abuja', name: 'Abuja Same-Day', price: 3500, eta: 'Today, by 9pm' },
  { id: 'standard', name: 'Nationwide Standard', price: 4500, eta: '2–4 working days' },
  { id: 'express', name: 'Nationwide Express', price: 8500, eta: '1–2 working days' },
  { id: 'pickup', name: 'Pickup Station', price: 1500, eta: '1–3 working days' },
];

const PAYMENT_METHODS = [
  { id: 'paystack', name: 'Paystack', desc: 'Card, USSD, bank transfer' },
  { id: 'flutterwave', name: 'Flutterwave', desc: 'Card, mobile money, Apple Pay' },
  { id: 'bank', name: 'Direct Bank Transfer', desc: 'Manual confirmation' },
  { id: 'whatsapp', name: 'WhatsApp Checkout', desc: 'Pay via WhatsApp' },
];

export default function CheckoutPage() {
  const { items, subtotal, clear } = useCart();
  const [shipping, setShipping] = useState(SHIPPING_OPTIONS[1]);
  const [payment, setPayment] = useState(PAYMENT_METHODS[0]);
  const [placed, setPlaced] = useState(false);

  const total = subtotal + shipping.price;

  if (placed) {
    return (
      <section className="container-luxe py-24">
        <div className="max-w-xl mx-auto text-center">
          <div className="grid place-items-center h-20 w-20 rounded-full bg-clay-500 text-white mx-auto">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <p className="text-[11px] tracking-[0.3em] uppercase text-clay-500 mt-8">Order #VJ-{Math.floor(Math.random() * 90000 + 10000)}</p>
          <h1 className="font-display text-5xl text-denim-900 mt-3 leading-tight">
            Thank you, gorgeous.
          </h1>
          <p className="mt-5 text-ink-soft">
            Your order is confirmed. We've sent details to your email and WhatsApp. We'll ping you again when it's dispatched.
          </p>
          <div className="mt-10 flex gap-3 justify-center">
            <Link href="/account" className="btn-primary">Track order</Link>
            <Link href="/shop" className="btn-outline">Continue shopping</Link>
          </div>
        </div>
      </section>
    );
  }

  if (items.length === 0) {
    return (
      <section className="container-luxe py-24 text-center">
        <p className="font-display text-3xl text-denim-900">Your bag is empty.</p>
        <Link href="/shop" className="btn-primary mt-6 inline-flex">Continue shopping</Link>
      </section>
    );
  }

  return (
    <section className="container-luxe py-12">
      <h1 className="font-display text-4xl md:text-5xl text-denim-900 leading-tight">
        Checkout
      </h1>
      <p className="text-ink-soft mt-2">
        Secure one-page checkout. Encrypted end-to-end.
      </p>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          setPlaced(true);
          clear();
        }}
        className="mt-10 grid lg:grid-cols-3 gap-10"
      >
        {/* Form */}
        <div className="lg:col-span-2 space-y-8">
          {/* Contact */}
          <div className="rounded-2xl border border-cream-300 p-6 bg-cream-50">
            <div className="flex items-center justify-between mb-4">
              <p className="font-display text-xl text-denim-900">Contact</p>
              <Link href="/account" className="text-xs text-ink-muted underline">Have an account? Sign in</Link>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-xs font-medium text-ink-soft">Email</span>
                <input required type="email" className="mt-1 w-full rounded-lg border border-cream-300 px-4 py-3 text-sm" />
              </label>
              <label className="block">
                <span className="text-xs font-medium text-ink-soft">WhatsApp number</span>
                <input required type="tel" className="mt-1 w-full rounded-lg border border-cream-300 px-4 py-3 text-sm" placeholder="+234..." />
              </label>
            </div>
            <label className="flex items-center gap-2 mt-4 text-sm">
              <input type="checkbox" defaultChecked className="h-4 w-4 accent-clay-500" />
              <span>Email me with news and offers</span>
            </label>
          </div>

          {/* Delivery */}
          <div className="rounded-2xl border border-cream-300 p-6 bg-cream-50">
            <p className="font-display text-xl text-denim-900 mb-4">Delivery</p>
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block sm:col-span-2">
                <span className="text-xs font-medium text-ink-soft">Country / Region</span>
                <select className="mt-1 w-full rounded-lg border border-cream-300 px-4 py-3 text-sm bg-white">
                  <option>Nigeria</option>
                  <option>Ghana</option>
                  <option>Kenya</option>
                  <option>United Kingdom</option>
                  <option>United States</option>
                </select>
              </label>
              <label className="block">
                <span className="text-xs font-medium text-ink-soft">First name</span>
                <input required type="text" className="mt-1 w-full rounded-lg border border-cream-300 px-4 py-3 text-sm" />
              </label>
              <label className="block">
                <span className="text-xs font-medium text-ink-soft">Last name</span>
                <input required type="text" className="mt-1 w-full rounded-lg border border-cream-300 px-4 py-3 text-sm" />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-xs font-medium text-ink-soft">Street address</span>
                <input required type="text" className="mt-1 w-full rounded-lg border border-cream-300 px-4 py-3 text-sm" />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-xs font-medium text-ink-soft">Apartment / Suite (optional)</span>
                <input type="text" className="mt-1 w-full rounded-lg border border-cream-300 px-4 py-3 text-sm" />
              </label>
              <label className="block">
                <span className="text-xs font-medium text-ink-soft">City</span>
                <input required type="text" className="mt-1 w-full rounded-lg border border-cream-300 px-4 py-3 text-sm" />
              </label>
              <label className="block">
                <span className="text-xs font-medium text-ink-soft">State</span>
                <select required className="mt-1 w-full rounded-lg border border-cream-300 px-4 py-3 text-sm bg-white">
                  <option>Abuja</option>
                  <option>Rivers</option>
                  <option>Oyo</option>
                  <option>Kano</option>
                  <option>Other</option>
                </select>
              </label>
            </div>
          </div>

          {/* Shipping method */}
          <div className="rounded-2xl border border-cream-300 p-6 bg-cream-50">
            <p className="font-display text-xl text-denim-900 mb-4">Shipping method</p>
            <div className="space-y-2.5">
              {SHIPPING_OPTIONS.map((o) => (
                <label
                  key={o.id}
                  className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-colors ${
                    shipping.id === o.id ? 'border-denim-900 bg-denim-50' : 'border-cream-300 hover:border-denim-900'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="shipping"
                      checked={shipping.id === o.id}
                      onChange={() => setShipping(o)}
                      className="h-4 w-4 accent-clay-500"
                    />
                    <div>
                      <p className="text-sm font-medium">{o.name}</p>
                      <p className="text-xs text-ink-muted">{o.eta}</p>
                    </div>
                  </div>
                  <p className="text-sm font-semibold">{formatNaira(o.price)}</p>
                </label>
              ))}
            </div>
          </div>

          {/* Payment */}
          <div className="rounded-2xl border border-cream-300 p-6 bg-cream-50">
            <p className="font-display text-xl text-denim-900 mb-4">Payment</p>
            <div className="space-y-2.5">
              {PAYMENT_METHODS.map((m) => (
                <label
                  key={m.id}
                  className={`flex items-center justify-between p-4 rounded-xl border cursor-pointer transition-colors ${
                    payment.id === m.id ? 'border-denim-900 bg-denim-50' : 'border-cream-300 hover:border-denim-900'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <input
                      type="radio"
                      name="payment"
                      checked={payment.id === m.id}
                      onChange={() => setPayment(m)}
                      className="h-4 w-4 accent-clay-500"
                    />
                    <div>
                      <p className="text-sm font-medium">{m.name}</p>
                      <p className="text-xs text-ink-muted">{m.desc}</p>
                    </div>
                  </div>
                  {m.id === 'paystack' && <CreditCard className="h-4 w-4 text-ink-muted" />}
                  {m.id === 'whatsapp' && <MessageCircle className="h-4 w-4 text-[#25D366]" />}
                </label>
              ))}
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs text-ink-muted">
              <ShieldCheck className="h-3.5 w-3.5" /> Your payment information is encrypted and never stored.
            </div>
          </div>
        </div>

        {/* Summary */}
        <aside>
          <div className="rounded-2xl bg-denim-950 text-cream-50 p-6 sticky top-28">
            <p className="font-display text-2xl">Order summary</p>

            <div className="mt-6 space-y-4 max-h-64 overflow-y-auto">
              {items.map((i) => (
                <div key={`${i.productId}-${i.size}-${i.color}`} className="flex gap-3">
                  <div className="relative h-16 w-14 rounded-md overflow-hidden bg-denim-800 flex-shrink-0">
                    <img src={i.image} alt="" className="h-full w-full object-cover" />
                    <span className="absolute -top-1 -right-1 grid place-items-center h-5 w-5 rounded-full bg-clay-500 text-[10px] font-medium">
                      {i.quantity}
                    </span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-xs font-medium line-clamp-2">{i.name}</p>
                    <p className="text-[10px] text-cream-200/70 mt-1">{i.color} · {i.size}</p>
                  </div>
                  <p className="text-xs font-medium">{formatNaira(i.price * i.quantity)}</p>
                </div>
              ))}
            </div>

            <div className="mt-5 pt-5 border-t border-cream-50/20 space-y-2 text-sm">
              <div className="flex justify-between"><span className="text-cream-200/80">Subtotal</span><span>{formatNaira(subtotal)}</span></div>
              <div className="flex justify-between"><span className="text-cream-200/80">{shipping.name}</span><span>{formatNaira(shipping.price)}</span></div>
            </div>

            <div className="mt-4 pt-4 border-t border-cream-50/20 flex justify-between text-lg font-semibold">
              <span>Total</span><span>{formatNaira(total)}</span>
            </div>

            <button type="submit" className="btn bg-clay-500 hover:bg-clay-600 text-white w-full mt-6">
              Place order · {formatNaira(total)}
            </button>

            <div className="mt-4 flex items-center justify-center gap-3 text-xs text-cream-200/70">
              <Truck className="h-3 w-3" /> Dispatched within 48 hours
            </div>
          </div>
        </aside>
      </form>
    </section>
  );
}
