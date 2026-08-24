'use client';

import Link from 'next/link';
import { useState } from 'react';
import { CheckCircle2, CreditCard, Truck, ShieldCheck, X, MessageCircle } from 'lucide-react';
import { useCart } from '@/components/CartContext';
import { formatNaira } from '@/lib/format';

const SHIPPING_OPTIONS = [
  { id: 'store-pickup', name: 'Store Pickup (Abuja)', price: 0, eta: 'Collect from our studio · ready in 24 hrs' },
  { id: 'guo-pickup', name: 'GUO Pickup (Nationwide Standard)', price: 5500, eta: '2–3 days · 0.1–1.0kg' },
  { id: 'guo-express', name: 'GUO Home Delivery / Express', price: 11000, eta: '2–3 days · delivery or pickup' },
];

const PAYMENT_METHODS = [
  { id: 'bank', name: 'Direct Bank Transfer', desc: 'Pay to our Flutterwave MFB account' },
];

const WHATSAPP_NUMBER = '2348100484650';
const NOTIFY_EMAIL = 'Okekevivian85@gmail.com';

// Client-side email delivery via FormSubmit (no server / API key required).
async function notify(subject: string, payload: Record<string, string>) {
  try {
    await fetch(`https://formsubmit.co/ajax/${NOTIFY_EMAIL}`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
      body: JSON.stringify({ _subject: subject, _template: 'table', _captcha: 'false', ...payload }),
    });
  } catch {
    /* never block checkout on a mail failure */
  }
}

export default function CheckoutPage() {
  const { items, subtotal, clear } = useCart();
  const [shipping, setShipping] = useState(SHIPPING_OPTIONS[1]);
  const [payment, setPayment] = useState(PAYMENT_METHODS[0]);
  const [placed, setPlaced] = useState(false);
  const [showPay, setShowPay] = useState(false);
  const [order, setOrder] = useState<Record<string, string> | null>(null);

  const total = subtotal + shipping.price;
  const whatsappHref = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(
    `Hi Vee_jeans, I've placed an order (Total ${formatNaira(total)}). Here is my proof of payment to confirm my order.`
  )}`;

  if (placed) {
    return (
      <section className="container-luxe py-24">
        <div className="max-w-xl mx-auto text-center">
          <div className="grid place-items-center h-20 w-20 rounded-full bg-clay-500 text-white mx-auto">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <p className="text-[11px] tracking-[0.3em] uppercase text-clay-500 mt-8">Order #VJ-{Math.floor(Math.random() * 90000 + 10000)}</p>
          <h1 className="font-display text-4xl md:text-5xl text-denim-900 mt-3 leading-tight">
            Your order will be confirmed shortly via chat.
          </h1>
          <p className="mt-5 text-ink-soft">
            We'll ping you when it's set for delivery.
          </p>
          <div className="mt-10 flex gap-3 justify-center">
            <Link href="/shop" className="btn-primary">Continue shopping</Link>
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
          const f = new FormData(e.currentTarget);
          const g = (k: string) => (f.get(k) as string) || '';
          const itemLines = items
            .map((i) => `${i.name} (${i.color} / ${i.size}) x${i.quantity} — ${formatNaira(i.price * i.quantity)}`)
            .join('\n');
          const info: Record<string, string> = {
            Name: `${g('firstName')} ${g('lastName')}`.trim(),
            Email: g('email'),
            WhatsApp: g('whatsapp'),
            'Delivery / Pickup': shipping.name,
            Address: [g('street'), g('apartment'), g('city'), g('state'), g('country')]
              .filter(Boolean)
              .join(', '),
            Payment: payment.name,
            Items: itemLines,
            Subtotal: formatNaira(subtotal),
            Shipping: shipping.price === 0 ? 'Free' : formatNaira(shipping.price),
            'Order Total': formatNaira(total),
          };
          setOrder(info);
          notify('🛒 New checkout started — Vee Jeans', {
            Message: 'A client just filled the checkout form and clicked Place Order.',
            ...info,
          });
          setShowPay(true);
        }}
        className="mt-10 grid lg:grid-cols-3 gap-10"
      >
        {/* Form */}
        <div className="lg:col-span-2 space-y-8">
          {/* Contact */}
          <div className="rounded-2xl border border-cream-300 p-6 bg-cream-50">
            <div className="flex items-center justify-between mb-4">
              <p className="font-display text-xl text-denim-900">Contact</p>
            </div>
            <div className="grid sm:grid-cols-2 gap-4">
              <label className="block">
                <span className="text-xs font-medium text-ink-soft">Email</span>
                <input required name="email" type="email" className="mt-1 w-full rounded-lg border border-cream-300 px-4 py-3 text-sm" />
              </label>
              <label className="block">
                <span className="text-xs font-medium text-ink-soft">WhatsApp number</span>
                <input required name="whatsapp" type="tel" className="mt-1 w-full rounded-lg border border-cream-300 px-4 py-3 text-sm" placeholder="+234..." />
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
                <select name="country" className="mt-1 w-full rounded-lg border border-cream-300 px-4 py-3 text-sm bg-white">
                  <option>Nigeria</option>
                  <option>Ghana</option>
                  <option>Kenya</option>
                  <option>United Kingdom</option>
                  <option>United States</option>
                </select>
              </label>
              <label className="block">
                <span className="text-xs font-medium text-ink-soft">First name</span>
                <input required name="firstName" type="text" className="mt-1 w-full rounded-lg border border-cream-300 px-4 py-3 text-sm" />
              </label>
              <label className="block">
                <span className="text-xs font-medium text-ink-soft">Last name</span>
                <input required name="lastName" type="text" className="mt-1 w-full rounded-lg border border-cream-300 px-4 py-3 text-sm" />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-xs font-medium text-ink-soft">Street address</span>
                <input required name="street" type="text" className="mt-1 w-full rounded-lg border border-cream-300 px-4 py-3 text-sm" />
              </label>
              <label className="block sm:col-span-2">
                <span className="text-xs font-medium text-ink-soft">Apartment / Suite (optional)</span>
                <input name="apartment" type="text" className="mt-1 w-full rounded-lg border border-cream-300 px-4 py-3 text-sm" />
              </label>
              <label className="block">
                <span className="text-xs font-medium text-ink-soft">City</span>
                <input required name="city" type="text" className="mt-1 w-full rounded-lg border border-cream-300 px-4 py-3 text-sm" />
              </label>
              <label className="block">
                <span className="text-xs font-medium text-ink-soft">State</span>
                <select required name="state" className="mt-1 w-full rounded-lg border border-cream-300 px-4 py-3 text-sm bg-white">
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
                  <p className="text-sm font-semibold">{o.price === 0 ? 'Free' : formatNaira(o.price)}</p>
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
                  {m.id === 'bank' && <CreditCard className="h-4 w-4 text-ink-muted" />}
                </label>
              ))}
            </div>
            {payment.id === 'bank' && (
              <div className="mt-4 rounded-xl border border-denim-900 bg-denim-50 p-4 space-y-1.5">
                <p className="text-xs font-semibold uppercase tracking-wide text-ink-muted">Transfer to</p>
                <p className="text-sm"><span className="text-ink-muted">Bank:</span> <span className="font-medium">Flutterwave MFB</span></p>
                <p className="text-sm"><span className="text-ink-muted">Account Number:</span> <span className="font-semibold text-denim-900">9909906765</span></p>
                <p className="text-sm"><span className="text-ink-muted">Account Name:</span> <span className="font-medium">Vee_jeans Enterprises Limited</span></p>
                <p className="text-xs text-ink-muted pt-1">Use your full name as the transfer reference. Your order ships once payment is confirmed.</p>
              </div>
            )}
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
              <div className="flex justify-between"><span className="text-cream-200/80">{shipping.name}</span><span>{shipping.price === 0 ? 'Free' : formatNaira(shipping.price)}</span></div>
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

      {/* Pay & confirm modal */}
      {showPay && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center bg-denim-950/70 backdrop-blur-sm p-4"
          onClick={() => setShowPay(false)}
        >
          <div
            className="relative w-full max-w-md rounded-2xl bg-cream-50 p-6 shadow-2xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setShowPay(false)}
              className="absolute top-4 right-4 grid place-items-center h-8 w-8 rounded-full bg-cream-200 text-ink hover:bg-cream-300"
              aria-label="Close"
            >
              <X className="h-4 w-4" />
            </button>

            <p className="text-[11px] tracking-[0.3em] uppercase text-clay-500">Almost done</p>
            <h2 className="font-display text-2xl text-denim-900 mt-2">Pay &amp; confirm your order</h2>
            <p className="text-sm text-ink-soft mt-2">
              Transfer the total below to our account, then send your proof of payment on WhatsApp to confirm your order.
            </p>

            <div className="mt-4 rounded-xl border border-denim-900 bg-denim-50 p-4 space-y-1.5">
              <div className="flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-wide text-ink-muted">Amount to pay</span>
                <span className="font-display text-xl text-denim-900">{formatNaira(total)}</span>
              </div>
              <div className="pt-1 border-t border-denim-200 mt-1 space-y-1">
                <p className="text-sm"><span className="text-ink-muted">Bank:</span> <span className="font-medium">Flutterwave MFB</span></p>
                <p className="text-sm"><span className="text-ink-muted">Account Number:</span> <span className="font-semibold text-denim-900">9909906765</span></p>
                <p className="text-sm"><span className="text-ink-muted">Account Name:</span> <span className="font-medium">Vee_jeans Enterprises Limited</span></p>
              </div>
            </div>

            <a
              href={whatsappHref}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 flex w-full items-center justify-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 text-sm font-semibold text-white hover:bg-[#1ebe5b] transition-colors"
            >
              <MessageCircle className="h-4 w-4" /> Send proof of payment via WhatsApp to confirm order
            </a>

            <button
              type="button"
              onClick={() => {
                notify('💰 Payment claim — Vee Jeans order', {
                  Message:
                    `The client claims to have made a payment of ${formatNaira(total)} using the checkout ` +
                    `information and the "${shipping.name}" delivery/pickup detail they selected. ` +
                    `Kindly confirm on your bank app if you received this payment, and contact the client ` +
                    `with the information they have provided.`,
                  'Amount Paid (claimed)': formatNaira(total),
                  ...(order ?? {}),
                });
                setPlaced(true);
                clear();
                setShowPay(false);
              }}
              className="mt-3 w-full text-center text-xs text-ink-muted underline"
            >
              I&apos;ve sent my proof of payment
            </button>
          </div>
        </div>
      )}
    </section>
  );
}
