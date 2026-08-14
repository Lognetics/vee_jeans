'use client';

import { useMemo, useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { SlidersHorizontal, Grid3x3, LayoutGrid, X } from 'lucide-react';
import ProductCard from '@/components/ProductCard';
import ShopFilters, { DEFAULT_FILTERS, FilterState } from '@/components/ShopFilters';
import { PRODUCTS } from '@/lib/products';

type SortKey = 'featured' | 'price-asc' | 'price-desc' | 'newest' | 'rating';

const SORT_LABELS: Record<SortKey, string> = {
  featured: 'Featured',
  newest: 'Newest',
  'price-asc': 'Price: Low → High',
  'price-desc': 'Price: High → Low',
  rating: 'Highest Rated',
};

function ShopInner() {
  const sp = useSearchParams();
  const initialCategory = sp.get('category');
  const initialCollection = sp.get('collection');
  const initialBody = sp.get('body');
  const initialFit = sp.get('fit');
  const initialWash = sp.get('wash');
  const initialWaist = sp.get('waist');

  const [filters, setFilters] = useState<FilterState>(() => ({
    ...DEFAULT_FILTERS,
    styles: initialCategory ? [initialCategory] : [],
    bodyTypes: initialBody ? [initialBody] : [],
    fits: initialFit ? [initialFit] : [],
    washes: initialWash ? [initialWash] : [],
    waistTypes: initialWaist ? [initialWaist] : [],
  }));

  const [sort, setSort] = useState<SortKey>('featured');
  const [columns, setColumns] = useState<3 | 4>(4);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  // Re-sync if URL params change
  useEffect(() => {
    setFilters((f) => ({
      ...f,
      styles: initialCategory ? [initialCategory] : f.styles,
      bodyTypes: initialBody ? [initialBody] : f.bodyTypes,
      fits: initialFit ? [initialFit] : f.fits,
      washes: initialWash ? [initialWash] : f.washes,
      waistTypes: initialWaist ? [initialWaist] : f.waistTypes,
    }));
  }, [initialCategory, initialBody, initialFit, initialWash, initialWaist]);

  const filtered = useMemo(() => {
    let result = PRODUCTS;

    if (initialCollection) {
      result = result.filter((p) => p.collection.includes(initialCollection));
    }
    if (filters.styles.length) {
      result = result.filter((p) => filters.styles.includes(p.category));
    }
    if (filters.fits.length) {
      result = result.filter((p) => filters.fits.includes(p.fit));
    }
    if (filters.washes.length) {
      result = result.filter((p) => p.wash && filters.washes.includes(p.wash));
    }
    if (filters.bodyTypes.length) {
      result = result.filter((p) => p.bodyTypes.some((b) => filters.bodyTypes.includes(b)));
    }
    if (filters.sizes.length) {
      result = result.filter((p) => p.sizes.some((s) => filters.sizes.includes(s)));
    }
    if (filters.waistTypes.length) {
      result = result.filter((p) => p.waist && filters.waistTypes.includes(p.waist));
    }
    result = result.filter((p) => p.price <= filters.priceMax && p.price >= filters.priceMin);
    if (filters.onlyNew) result = result.filter((p) => p.isNew);
    if (filters.onlyTrending) result = result.filter((p) => p.isTrending);
    if (filters.onlyWholesale) result = result.filter((p) => p.isWholesaleEligible);

    switch (sort) {
      case 'price-asc':
        result = [...result].sort((a, b) => a.price - b.price);
        break;
      case 'price-desc':
        result = [...result].sort((a, b) => b.price - a.price);
        break;
      case 'newest':
        result = [...result].sort((a, b) => (b.isNew ? 1 : 0) - (a.isNew ? 1 : 0));
        break;
      case 'rating':
        result = [...result].sort((a, b) => b.rating - a.rating);
        break;
    }
    return result;
  }, [filters, sort, initialCollection]);

  const titleize = (s: string) =>
    s.replace(/-/g, ' ').replace(/\b\w/g, (c) => c.toUpperCase());

  const headerTitle = useMemo(() => {
    if (initialCollection) return titleize(initialCollection);
    if (initialCategory) return titleize(initialCategory);
    if (initialBody) return `${titleize(initialBody)} Edit`;
    if (initialFit) return `${titleize(initialFit)} Fit`;
    if (initialWash) return `${titleize(initialWash)} Denim`;
    if (initialWaist) return `${titleize(initialWaist)} Waist`;
    return 'All Denim';
  }, [initialCollection, initialCategory, initialBody, initialFit, initialWash, initialWaist]);

  return (
    <>
      {/* Page header */}
      <section className="bg-cream-100 pt-10 pb-12">
        <div className="container-luxe">
          <p className="text-[11px] tracking-[0.3em] uppercase text-ink-muted">Shop</p>
          <h1 className="font-display text-4xl md:text-6xl mt-3 text-denim-900 leading-[1.05]">
            {headerTitle}
          </h1>
          <p className="mt-3 text-ink-soft max-w-xl">
            {filtered.length} styles · Premium Turkish denim · Sizes 4 to 22
          </p>

          {/* Collection tabs */}
          <div className="mt-8 flex gap-2 overflow-x-auto no-scrollbar pb-2">
            {[
              { l: 'All', q: '' },
              { l: 'New', q: '?collection=new-arrivals' },
              { l: 'Trending', q: '?collection=trending' },
              { l: 'Best Sellers', q: '?collection=best-sellers' },
              { l: 'Turkish Edit', q: '?collection=premium-turkish' },
              { l: 'Curvy', q: '?body=curvy' },
              { l: 'Petite', q: '?body=petite' },
              { l: 'Plus Size', q: '?body=plus-size' },
              { l: 'Limited Edition', q: '?collection=limited-edition' },
              { l: 'TikTok Viral', q: '?collection=tiktok-viral' },
            ].map((t) => (
              <a
                key={t.l}
                href={`/shop${t.q}`}
                className={`px-4 py-2 rounded-full text-xs whitespace-nowrap transition-colors ${
                  (t.q.includes(initialCollection || 'none-x') ||
                    t.q.includes(initialBody || 'none-y') ||
                    (t.q === '' && !initialCollection && !initialBody && !initialCategory))
                    ? 'bg-denim-900 text-cream-50'
                    : 'bg-cream-50 border border-cream-300 hover:border-denim-900'
                }`}
              >
                {t.l}
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="container-luxe py-10">
        <div className="flex gap-10">
          {/* Sidebar */}
          <aside className="hidden lg:block w-72 flex-shrink-0">
            <ShopFilters
              filters={filters}
              onChange={setFilters}
              onReset={() => setFilters(DEFAULT_FILTERS)}
            />
          </aside>

          {/* Grid */}
          <div className="flex-1">
            {/* Sort bar */}
            <div className="flex items-center justify-between mb-6 gap-3">
              <button
                onClick={() => setMobileFiltersOpen(true)}
                className="lg:hidden inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-full border border-cream-300"
              >
                <SlidersHorizontal className="h-4 w-4" /> Filters
              </button>
              <p className="text-sm text-ink-muted hidden md:block">
                Showing <span className="text-denim-900 font-medium">{filtered.length}</span> products
              </p>
              <div className="flex items-center gap-3 ml-auto">
                <div className="hidden md:flex gap-1 border border-cream-300 rounded-full p-1">
                  <button
                    onClick={() => setColumns(3)}
                    className={`grid place-items-center h-7 w-7 rounded-full ${
                      columns === 3 ? 'bg-denim-900 text-cream-50' : ''
                    }`}
                  >
                    <LayoutGrid className="h-3.5 w-3.5" />
                  </button>
                  <button
                    onClick={() => setColumns(4)}
                    className={`grid place-items-center h-7 w-7 rounded-full ${
                      columns === 4 ? 'bg-denim-900 text-cream-50' : ''
                    }`}
                  >
                    <Grid3x3 className="h-3.5 w-3.5" />
                  </button>
                </div>
                <select
                  value={sort}
                  onChange={(e) => setSort(e.target.value as SortKey)}
                  className="border border-cream-300 rounded-full px-4 py-2 text-sm bg-cream-50"
                >
                  {(Object.keys(SORT_LABELS) as SortKey[]).map((k) => (
                    <option key={k} value={k}>{SORT_LABELS[k]}</option>
                  ))}
                </select>
              </div>
            </div>

            {/* Empty state */}
            {filtered.length === 0 ? (
              <div className="grid place-items-center py-24 text-center">
                <p className="font-display text-3xl text-denim-900">No matches.</p>
                <p className="mt-2 text-ink-muted">Try adjusting your filters or browse all denim.</p>
                <button
                  onClick={() => setFilters(DEFAULT_FILTERS)}
                  className="btn-primary mt-6"
                >
                  Reset filters
                </button>
              </div>
            ) : (
              <div
                className={`grid gap-5 md:gap-6 grid-cols-2 ${
                  columns === 4 ? 'lg:grid-cols-3 xl:grid-cols-4' : 'lg:grid-cols-3'
                }`}
              >
                {filtered.map((p) => (
                  <ProductCard key={p.id} product={p} />
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Mobile filters */}
      {mobileFiltersOpen && (
        <div className="fixed inset-0 z-50 lg:hidden">
          <div className="absolute inset-0 bg-black/40" onClick={() => setMobileFiltersOpen(false)} />
          <aside className="absolute right-0 top-0 h-full w-[90%] max-w-sm bg-cream-50 p-6 overflow-y-auto animate-fade-in">
            <div className="flex items-center justify-between mb-4">
              <p className="font-display text-2xl">Filters</p>
              <button onClick={() => setMobileFiltersOpen(false)}><X className="h-5 w-5" /></button>
            </div>
            <ShopFilters
              filters={filters}
              onChange={setFilters}
              onReset={() => setFilters(DEFAULT_FILTERS)}
            />
            <button
              onClick={() => setMobileFiltersOpen(false)}
              className="btn-primary w-full mt-6"
            >
              Show {filtered.length} results
            </button>
          </aside>
        </div>
      )}
    </>
  );
}

export default function ShopPage() {
  return (
    <Suspense fallback={<div className="container-luxe py-32 text-center">Loading…</div>}>
      <ShopInner />
    </Suspense>
  );
}
