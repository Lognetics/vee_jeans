'use client';

import Link from 'next/link';
import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import {
  User,
  Package,
  Heart,
  MapPin,
  CreditCard,
  Award,
  Settings,
  Gift,
  TrendingUp,
  LogOut,
  Sparkles,
} from 'lucide-react';
import { useCart } from '@/components/CartContext';
import { PRODUCTS } from '@/lib/products';
import ProductCard from '@/components/ProductCard';
import { formatNaira } from '@/lib/format';

const TABS = [
  { id: 'overview', label: 'Overview', icon: TrendingUp },
  { id: 'orders', label: 'Orders', icon: Package },
  { id: 'wishlist', label: 'Wishlist', icon: Heart },
  { id: 'addresses', label: 'Addresses', icon: MapPin },
  { id: 'payment', label: 'Payment', icon: CreditCard },
  { id: 'rewards', label: 'Rewards', icon: Award },
  { id: 'settings', label: 'Settings', icon: Settings },
];

const MOCK_ORDERS = [
  { id: 'VJ-87421', date: '2026-05-18', items: 3, total: 78500, status: 'Delivered' },
  { id: 'VJ-86103', date: '2026-04-22', items: 1, total: 24500, status: 'Delivered' },
  { id: 'VJ-84907', date: '2026-03-14', items: 2, total: 56000, status: 'Delivered' },
];

function AccountInner() {
  const sp = useSearchParams();
  const initialTab = sp.get('tab') ?? 'overview';
  const [activeTab, setActiveTab] = useState(initialTab);
  const { wishlist } = useCart();
  const wishlistProducts = PRODUCTS.filter((p) => wishlist.includes(p.id));

  return (
    <section className="container-luxe py-12">
      <div className="flex items-center justify-between flex-wrap gap-4">
        <div>
          <p className="text-[11px] tracking-[0.3em] uppercase text-clay-500">My Account</p>
          <h1 className="font-display text-4xl md:text-5xl text-denim-900 leading-tight mt-2">
            Hi Adaeze 👋
          </h1>
        </div>
        <Link href="/" className="text-sm text-ink-muted hover:text-clay-500 inline-flex items-center gap-1.5">
          <LogOut className="h-3.5 w-3.5" /> Sign out
        </Link>
      </div>

      <div className="mt-10 grid lg:grid-cols-12 gap-10">
        {/* Sidebar */}
        <aside className="lg:col-span-3">
          <nav className="space-y-1">
            {TABS.map((t) => (
              <button
                key={t.id}
                onClick={() => setActiveTab(t.id)}
                className={`flex w-full items-center gap-3 px-4 py-3 rounded-lg text-sm transition-colors ${
                  activeTab === t.id
                    ? 'bg-denim-900 text-cream-50'
                    : 'hover:bg-cream-100'
                }`}
              >
                <t.icon className="h-4 w-4" /> {t.label}
              </button>
            ))}
          </nav>

          <div className="mt-8 p-5 rounded-2xl bg-clay-50 border border-clay-200">
            <div className="flex items-center gap-2 text-clay-700">
              <Gift className="h-4 w-4" />
              <p className="text-xs uppercase tracking-wider">Refer & earn</p>
            </div>
            <p className="font-display text-lg mt-2 text-denim-900">Give 10%, get ₦5,000.</p>
            <p className="text-xs text-ink-muted mt-2">Share your code with friends.</p>
            <button className="btn-primary mt-4 w-full text-xs py-2">Get your code</button>
          </div>
        </aside>

        {/* Content */}
        <div className="lg:col-span-9">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              {/* Stats */}
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { l: 'Total orders', v: '14', d: 'across 8 months', tab: 'orders' },
                  { l: 'Reward points', v: '2,840', d: '= ₦2,840 to spend', tab: 'rewards' },
                  { l: 'Member status', v: 'Gold', d: 'Next: Platinum at 5,000 pts', tab: 'rewards' },
                ].map((s) => (
                  <button
                    key={s.l}
                    onClick={() => setActiveTab(s.tab)}
                    className="text-left p-6 rounded-2xl border border-cream-300 bg-cream-50 hover:border-denim-900 hover:shadow-card transition-all"
                  >
                    <p className="text-xs uppercase tracking-wider text-ink-muted">{s.l}</p>
                    <p className="font-display text-3xl mt-2 text-denim-900">{s.v}</p>
                    <p className="text-xs text-ink-muted mt-1">{s.d}</p>
                  </button>
                ))}
              </div>

              {/* AI stylist */}
              <div className="rounded-2xl bg-denim-950 text-cream-50 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="grid place-items-center h-14 w-14 rounded-full bg-clay-500 flex-shrink-0">
                  <Sparkles className="h-6 w-6" />
                </div>
                <div className="flex-1">
                  <p className="font-display text-2xl">Your AI stylist is ready.</p>
                  <p className="text-sm text-cream-200/80 mt-1">
                    Based on your previous orders, we've curated this week's picks for you.
                  </p>
                </div>
                <button className="btn-accent">View picks</button>
              </div>

              {/* Recent orders */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <p className="font-display text-2xl text-denim-900">Recent orders</p>
                  <button onClick={() => setActiveTab('orders')} className="text-sm text-clay-500 underline">View all</button>
                </div>
                <div className="space-y-3">
                  {MOCK_ORDERS.slice(0, 2).map((o) => (
                    <div key={o.id} className="flex items-center justify-between p-5 rounded-2xl border border-cream-300 bg-cream-50">
                      <div>
                        <p className="font-medium text-denim-900">{o.id}</p>
                        <p className="text-xs text-ink-muted mt-0.5">{o.date} · {o.items} items</p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold">{formatNaira(o.total)}</p>
                        <span className="chip bg-clay-100 text-clay-700 mt-1">{o.status}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div>
              <p className="font-display text-2xl text-denim-900 mb-6">All orders</p>
              <div className="rounded-2xl border border-cream-300 overflow-hidden bg-cream-50">
                {MOCK_ORDERS.map((o, i) => (
                  <div key={o.id} className={`flex items-center justify-between p-5 ${i ? 'border-t border-cream-300' : ''}`}>
                    <div>
                      <p className="font-medium text-denim-900">{o.id}</p>
                      <p className="text-xs text-ink-muted mt-0.5">{o.date} · {o.items} items</p>
                    </div>
                    <div className="text-right">
                      <p className="font-semibold">{formatNaira(o.total)}</p>
                      <span className="chip bg-clay-100 text-clay-700 mt-1">{o.status}</span>
                    </div>
                    <button className="ml-4 text-xs underline text-ink-muted hover:text-denim-900">View</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'wishlist' && (
            <div>
              <p className="font-display text-2xl text-denim-900 mb-6">My wishlist ({wishlistProducts.length})</p>
              {wishlistProducts.length === 0 ? (
                <div className="rounded-2xl border border-cream-300 p-12 text-center bg-cream-50">
                  <Heart className="h-10 w-10 mx-auto text-ink-muted" />
                  <p className="font-display text-2xl text-denim-900 mt-4">No saved items yet.</p>
                  <p className="text-sm text-ink-muted mt-2">Tap the heart on any product to save it here.</p>
                  <Link href="/shop" className="btn-primary mt-6 inline-flex">Browse denim</Link>
                </div>
              ) : (
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
                  {wishlistProducts.map((p) => (
                    <ProductCard key={p.id} product={p} />
                  ))}
                </div>
              )}
            </div>
          )}

          {activeTab === 'addresses' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <p className="font-display text-2xl text-denim-900">Saved addresses</p>
                <button className="btn-outline text-xs py-2">+ Add new</button>
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  { label: 'Home', name: 'Adaeze O.', addr: '14 Admiralty Way, Lekki Phase 1, Abuja', primary: true },
                  { label: 'Office', name: 'Adaeze O.', addr: 'Civic Towers, Ozumba Mbadiwe Avenue, V.I., Abuja' },
                ].map((a, i) => (
                  <div key={i} className="p-5 rounded-2xl border border-cream-300 bg-cream-50">
                    <div className="flex items-center justify-between">
                      <span className="chip">{a.label}</span>
                      {a.primary && <span className="text-[11px] text-clay-500">Default</span>}
                    </div>
                    <p className="mt-3 font-medium text-denim-900">{a.name}</p>
                    <p className="text-sm text-ink-muted mt-1">{a.addr}</p>
                    <div className="flex gap-3 mt-4 text-xs">
                      <button className="underline">Edit</button>
                      <button className="underline text-clay-500">Remove</button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'payment' && (
            <div>
              <div className="flex items-center justify-between mb-6">
                <p className="font-display text-2xl text-denim-900">Saved payment methods</p>
                <button className="btn-outline text-xs py-2">+ Add card</button>
              </div>
              <div className="space-y-3">
                {[
                  { brand: 'Visa', last: '4242', exp: '08/28' },
                ].map((c, i) => (
                  <div key={i} className="p-5 rounded-2xl border border-cream-300 bg-cream-50 flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <div className="grid place-items-center h-10 w-14 rounded bg-denim-900 text-cream-50 text-xs font-bold">{c.brand}</div>
                      <div>
                        <p className="text-sm font-medium">•••• {c.last}</p>
                        <p className="text-xs text-ink-muted">Expires {c.exp}</p>
                      </div>
                    </div>
                    <button className="text-xs underline text-clay-500">Remove</button>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'rewards' && (
            <div className="space-y-6">
              <div className="rounded-3xl bg-denim-950 text-cream-50 p-8">
                <p className="text-[11px] tracking-[0.3em] uppercase text-clay-300">Gold member</p>
                <p className="font-display text-5xl mt-3">2,840 pts</p>
                <p className="text-cream-200/80 mt-2 text-sm">Worth ₦2,840 to spend</p>
                <div className="mt-6">
                  <div className="flex justify-between text-xs text-cream-200/70 mb-2">
                    <span>Gold</span>
                    <span>Platinum at 5,000 pts</span>
                  </div>
                  <div className="h-1.5 rounded-full bg-cream-50/10 overflow-hidden">
                    <div className="h-full bg-clay-500" style={{ width: '57%' }} />
                  </div>
                </div>
              </div>
              <div className="grid sm:grid-cols-3 gap-4">
                {[
                  { v: '1 pt', l: 'Per ₦100 spent' },
                  { v: '500 pts', l: '= ₦500 off' },
                  { v: '+10%', l: 'Birthday bonus' },
                ].map((r) => (
                  <div key={r.l} className="p-5 rounded-2xl border border-cream-300 bg-cream-50">
                    <p className="font-display text-2xl text-denim-900">{r.v}</p>
                    <p className="text-xs text-ink-muted mt-1">{r.l}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'settings' && (
            <div>
              <p className="font-display text-2xl text-denim-900 mb-6">Account settings</p>
              <div className="rounded-2xl border border-cream-300 p-6 bg-cream-50 space-y-4">
                <label className="block">
                  <span className="text-xs font-medium text-ink-soft">Name</span>
                  <input defaultValue="Adaeze Okeke" className="mt-1 w-full rounded-lg border border-cream-300 px-4 py-3 text-sm" />
                </label>
                <label className="block">
                  <span className="text-xs font-medium text-ink-soft">Email</span>
                  <input defaultValue="adaeze@example.com" className="mt-1 w-full rounded-lg border border-cream-300 px-4 py-3 text-sm" />
                </label>
                <label className="block">
                  <span className="text-xs font-medium text-ink-soft">WhatsApp number</span>
                  <input defaultValue="+234 803 000 0000" className="mt-1 w-full rounded-lg border border-cream-300 px-4 py-3 text-sm" />
                </label>
                <button className="btn-primary">Save changes</button>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

export default function AccountPage() {
  return (
    <Suspense fallback={<div className="container-luxe py-32 text-center">Loading…</div>}>
      <AccountInner />
    </Suspense>
  );
}
