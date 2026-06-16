'use client';

import { useState } from 'react';
import { ChevronDown, X } from 'lucide-react';

export interface FilterState {
  styles: string[];
  fits: string[];
  washes: string[];
  bodyTypes: string[];
  sizes: string[];
  waistTypes: string[];
  priceMin: number;
  priceMax: number;
  onlyNew: boolean;
  onlyTrending: boolean;
  onlyWholesale: boolean;
}

export const DEFAULT_FILTERS: FilterState = {
  styles: [],
  fits: [],
  washes: [],
  bodyTypes: [],
  sizes: [],
  waistTypes: [],
  priceMin: 0,
  priceMax: 60000,
  onlyNew: false,
  onlyTrending: false,
  onlyWholesale: false,
};

const STYLES = [
  ['wide-leg-jeans', 'Wide Leg'],
  ['barrel-jeans', 'Barrel Jeans'],
  ['combat-jeans', 'Combat Jeans'],
  ['straight-leg-jeans', 'Straight Leg'],
  ['boyfriend-jeans', 'Boyfriend Jeans'],
  ['skinny-jeans', 'Skinny Jeans'],
  ['ripped-jeans', 'Ripped'],
  ['denim-jacket', 'Denim Jacket'],
  ['denim-skirt', 'Denim Skirt'],
  ['denim-shorts', 'Shorts'],
  ['denim-jumpsuit', 'Jumpsuit'],
  ['denim-corset', 'Corset'],
] as const;

const FITS = [
  ['skinny', 'Skinny'],
  ['slim', 'Slim'],
  ['relaxed', 'Relaxed'],
  ['loose', 'Loose'],
  ['oversized', 'Oversized'],
  ['curvy', 'Curvy'],
  ['petite', 'Petite'],
  ['tall', 'Tall'],
  ['stretch', 'Stretch'],
] as const;

const WASHES = [
  ['dark-blue', 'Dark Blue', '#14213d'],
  ['light-blue', 'Light Blue', '#90b1d4'],
  ['black', 'Black', '#1a1a1a'],
  ['vintage', 'Vintage', '#5d8bbb'],
  ['stone', 'Stone Wash', '#c0d2e8'],
  ['acid-wash', 'Acid Wash', '#e3ecf6'],
  ['grey', 'Grey', '#6b6b6b'],
  ['white', 'White', '#faf7f2'],
] as const;

const BODY_TYPES = [
  ['curvy', 'Curvy'],
  ['petite', 'Petite'],
  ['tall', 'Tall'],
  ['plus-size', 'Plus Size'],
  ['hourglass', 'Hourglass'],
  ['pear', 'Pear'],
  ['athletic', 'Athletic'],
  ['rectangle', 'Rectangle'],
] as const;

const SIZES = ['6', '7', '8', '9', '10', '12', '14', '16', '18', '20', '22', '24', '26', '27', '28', '29', '30', '32', '34', '36', 'XS', 'S', 'M', 'L', 'XL', 'XXL'];

const WAIST_TYPES = [
  ['high', 'High Waist'],
  ['super-high', 'Super High'],
  ['mid', 'Mid Waist'],
  ['low', 'Low Waist'],
  ['corset', 'Corset Waist'],
] as const;

interface AccordionProps {
  title: string;
  defaultOpen?: boolean;
  count?: number;
  children: React.ReactNode;
}
function Accordion({ title, defaultOpen = true, count, children }: AccordionProps) {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <div className="border-b border-cream-300 py-5">
      <button
        onClick={() => setOpen((o) => !o)}
        className="flex w-full items-center justify-between text-left"
      >
        <span className="text-sm font-medium text-denim-900">
          {title}
          {count !== undefined && count > 0 && (
            <span className="ml-2 text-xs text-clay-500">({count})</span>
          )}
        </span>
        <ChevronDown
          className={`h-4 w-4 transition-transform ${open ? 'rotate-180' : ''}`}
        />
      </button>
      {open && <div className="mt-4">{children}</div>}
    </div>
  );
}

interface Props {
  filters: FilterState;
  onChange: (f: FilterState) => void;
  onReset: () => void;
}

export default function ShopFilters({ filters, onChange, onReset }: Props) {
  const toggle = (key: keyof FilterState, value: string) => {
    const arr = filters[key] as string[];
    if (Array.isArray(arr)) {
      onChange({
        ...filters,
        [key]: arr.includes(value) ? arr.filter((v) => v !== value) : [...arr, value],
      });
    }
  };

  const activeCount =
    filters.styles.length +
    filters.fits.length +
    filters.washes.length +
    filters.bodyTypes.length +
    filters.sizes.length +
    filters.waistTypes.length +
    (filters.onlyNew ? 1 : 0) +
    (filters.onlyTrending ? 1 : 0) +
    (filters.onlyWholesale ? 1 : 0);

  return (
    <div className="text-ink">
      <div className="flex items-center justify-between mb-2">
        <p className="text-xs uppercase tracking-[0.25em] text-ink-muted">Filters</p>
        {activeCount > 0 && (
          <button onClick={onReset} className="text-xs text-clay-500 hover:underline">
            Clear ({activeCount})
          </button>
        )}
      </div>

      <Accordion title="Quick Filters" defaultOpen>
        <div className="space-y-2.5">
          {[
            { k: 'onlyNew' as const, l: 'New Arrivals only' },
            { k: 'onlyTrending' as const, l: 'Trending now' },
            { k: 'onlyWholesale' as const, l: 'Wholesale eligible' },
          ].map((x) => (
            <label key={x.k} className="flex items-center gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={filters[x.k]}
                onChange={() => onChange({ ...filters, [x.k]: !filters[x.k] })}
                className="h-4 w-4 accent-clay-500"
              />
              <span className="text-sm">{x.l}</span>
            </label>
          ))}
        </div>
      </Accordion>

      <Accordion title="Style" count={filters.styles.length}>
        <div className="space-y-2 max-h-64 overflow-y-auto pr-2">
          {STYLES.map(([v, l]) => (
            <label key={v} className="flex items-center gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={filters.styles.includes(v)}
                onChange={() => toggle('styles', v)}
                className="h-4 w-4 accent-clay-500"
              />
              <span className="text-sm">{l}</span>
            </label>
          ))}
        </div>
      </Accordion>

      <Accordion title="Fit" count={filters.fits.length}>
        <div className="flex flex-wrap gap-2">
          {FITS.map(([v, l]) => (
            <button
              key={v}
              onClick={() => toggle('fits', v)}
              className={`px-3 py-1.5 rounded-full text-xs border transition-colors ${
                filters.fits.includes(v)
                  ? 'bg-denim-900 text-cream-50 border-denim-900'
                  : 'border-cream-300 hover:border-denim-900'
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </Accordion>

      <Accordion title="Color / Wash" count={filters.washes.length}>
        <div className="flex flex-wrap gap-2">
          {WASHES.map(([v, l, hex]) => (
            <button
              key={v}
              onClick={() => toggle('washes', v)}
              className={`flex items-center gap-2 px-3 py-1.5 rounded-full text-xs border transition-colors ${
                filters.washes.includes(v)
                  ? 'bg-denim-900 text-cream-50 border-denim-900'
                  : 'border-cream-300 hover:border-denim-900'
              }`}
            >
              <span
                className="h-3 w-3 rounded-full border border-cream-300"
                style={{ background: hex }}
              />
              {l}
            </button>
          ))}
        </div>
      </Accordion>

      <Accordion title="Size" count={filters.sizes.length}>
        <div className="grid grid-cols-4 gap-1.5">
          {SIZES.map((s) => (
            <button
              key={s}
              onClick={() => toggle('sizes', s)}
              className={`py-2 rounded-md text-xs border transition-colors ${
                filters.sizes.includes(s)
                  ? 'bg-denim-900 text-cream-50 border-denim-900'
                  : 'border-cream-300 hover:border-denim-900'
              }`}
            >
              {s}
            </button>
          ))}
        </div>
      </Accordion>

      <Accordion title="Body Type" count={filters.bodyTypes.length}>
        <div className="flex flex-wrap gap-2">
          {BODY_TYPES.map(([v, l]) => (
            <button
              key={v}
              onClick={() => toggle('bodyTypes', v)}
              className={`px-3 py-1.5 rounded-full text-xs border transition-colors ${
                filters.bodyTypes.includes(v)
                  ? 'bg-denim-900 text-cream-50 border-denim-900'
                  : 'border-cream-300 hover:border-denim-900'
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </Accordion>

      <Accordion title="Waist" count={filters.waistTypes.length}>
        <div className="flex flex-wrap gap-2">
          {WAIST_TYPES.map(([v, l]) => (
            <button
              key={v}
              onClick={() => toggle('waistTypes', v)}
              className={`px-3 py-1.5 rounded-full text-xs border transition-colors ${
                filters.waistTypes.includes(v)
                  ? 'bg-denim-900 text-cream-50 border-denim-900'
                  : 'border-cream-300 hover:border-denim-900'
              }`}
            >
              {l}
            </button>
          ))}
        </div>
      </Accordion>

      <Accordion title="Price">
        <div>
          <input
            type="range"
            min={0}
            max={60000}
            step={1000}
            value={filters.priceMax}
            onChange={(e) => onChange({ ...filters, priceMax: parseInt(e.target.value) })}
            className="w-full accent-clay-500"
          />
          <div className="flex justify-between text-xs text-ink-muted mt-2">
            <span>₦{filters.priceMin.toLocaleString()}</span>
            <span>Up to ₦{filters.priceMax.toLocaleString()}</span>
          </div>
        </div>
      </Accordion>
    </div>
  );
}
