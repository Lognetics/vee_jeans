'use client';

import { useState } from 'react';
import { Sparkles, Ruler, CheckCircle2 } from 'lucide-react';
import { IMG } from '@/lib/images';

const SIZE_CHART = [
  { size: '6', waist: '24"', hip: '34"', inseam: '30"' },
  { size: '8', waist: '25"', hip: '35"', inseam: '30"' },
  { size: '10', waist: '26"', hip: '36"', inseam: '30"' },
  { size: '12', waist: '27"', hip: '38"', inseam: '30"' },
  { size: '14', waist: '29"', hip: '40"', inseam: '30"' },
  { size: '16', waist: '31"', hip: '42"', inseam: '30"' },
  { size: '18', waist: '33"', hip: '44"', inseam: '30"' },
  { size: '20', waist: '35"', hip: '46"', inseam: '30"' },
  { size: '22', waist: '37"', hip: '48"', inseam: '30"' },
  { size: '24', waist: '39"', hip: '50"', inseam: '30"' },
];

export default function SizeGuidePage() {
  const [waist, setWaist] = useState('');
  const [hip, setHip] = useState('');
  const [unit, setUnit] = useState<'in' | 'cm'>('in');
  const [recommendation, setRecommendation] = useState<string | null>(null);

  const calculate = () => {
    let w = parseFloat(waist);
    let h = parseFloat(hip);
    if (unit === 'cm') {
      w = w / 2.54;
      h = h / 2.54;
    }
    if (isNaN(w) || isNaN(h)) {
      setRecommendation(null);
      return;
    }
    const sized = SIZE_CHART.find((s) => parseFloat(s.waist) >= w && parseFloat(s.hip) >= h);
    setRecommendation(sized?.size ?? '24+');
  };

  return (
    <>
      {/* Hero */}
      <section className="container-luxe pt-16 pb-12">
        <p className="text-[11px] tracking-[0.3em] uppercase text-clay-500 mb-3">Size Guide</p>
        <h1 className="font-display text-5xl md:text-7xl text-denim-900 leading-[1.02] max-w-3xl">
          Find your perfect fit.
        </h1>
        <p className="mt-5 text-ink-soft max-w-xl">
          Premium denim is only premium when it fits. Use our charts, smart calculator, or AI recommendation to find your size.
        </p>
      </section>

      {/* Smart calculator */}
      <section className="container-luxe pb-16">
        <div className="rounded-3xl bg-denim-950 text-cream-50 p-8 md:p-12">
          <div className="grid lg:grid-cols-2 gap-12">
            <div>
              <p className="text-[11px] tracking-[0.3em] uppercase text-clay-300 mb-3 flex items-center gap-2">
                <Sparkles className="h-3.5 w-3.5" /> AI Size Recommendation
              </p>
              <h2 className="font-display text-3xl md:text-4xl leading-tight">
                Tell us your measurements. We'll do the rest.
              </h2>
              <p className="mt-4 text-cream-200/80">
                Most accurate when you measure over light clothing. We'll factor in stretch level and fit type for your perfect size.
              </p>
              <div className="mt-6 flex gap-2">
                <button
                  onClick={() => setUnit('in')}
                  className={`px-4 py-1.5 rounded-full text-xs ${
                    unit === 'in' ? 'bg-clay-500' : 'border border-cream-50/30'
                  }`}
                >
                  Inches
                </button>
                <button
                  onClick={() => setUnit('cm')}
                  className={`px-4 py-1.5 rounded-full text-xs ${
                    unit === 'cm' ? 'bg-clay-500' : 'border border-cream-50/30'
                  }`}
                >
                  Centimetres
                </button>
              </div>
            </div>
            <div className="bg-cream-50 text-ink rounded-2xl p-6">
              <div className="grid grid-cols-2 gap-4">
                <label className="block">
                  <span className="text-xs font-medium text-ink-soft">Waist ({unit})</span>
                  <input
                    type="number"
                    step="0.5"
                    value={waist}
                    onChange={(e) => setWaist(e.target.value)}
                    placeholder={unit === 'in' ? '28' : '71'}
                    className="mt-1.5 w-full rounded-lg border border-cream-300 px-4 py-3 text-sm"
                  />
                </label>
                <label className="block">
                  <span className="text-xs font-medium text-ink-soft">Hip ({unit})</span>
                  <input
                    type="number"
                    step="0.5"
                    value={hip}
                    onChange={(e) => setHip(e.target.value)}
                    placeholder={unit === 'in' ? '38' : '97'}
                    className="mt-1.5 w-full rounded-lg border border-cream-300 px-4 py-3 text-sm"
                  />
                </label>
              </div>
              <button onClick={calculate} className="btn-primary w-full mt-4">
                Calculate my size
              </button>
              {recommendation && (
                <div className="mt-4 p-4 rounded-xl bg-clay-50 border border-clay-200 text-center">
                  <p className="text-xs text-clay-700">Recommended size</p>
                  <p className="font-display text-5xl text-denim-900 mt-1">{recommendation}</p>
                  <p className="text-xs text-ink-muted mt-1">
                    Try the Curve Sculpt fit for the most comfort
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* How to measure */}
      <section className="container-luxe pb-20">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-[11px] tracking-[0.3em] uppercase text-clay-500 mb-3 flex items-center gap-2">
              <Ruler className="h-3.5 w-3.5" /> How to measure
            </p>
            <h2 className="font-display text-3xl md:text-4xl text-denim-900 leading-tight">
              Three measurements, two minutes.
            </h2>
            <ol className="mt-8 space-y-6">
              {[
                { n: '1', t: 'Waist', d: 'Measure around the narrowest part of your natural waist — usually just above the belly button.' },
                { n: '2', t: 'Hip', d: 'Measure around the fullest part of your hips and seat. Keep the tape parallel to the floor.' },
                { n: '3', t: 'Inseam', d: 'Measure from the inside top of your thigh down to your ankle bone. Most jeans are 30" inseam.' },
              ].map((s) => (
                <li key={s.n} className="flex gap-5">
                  <span className="grid place-items-center h-10 w-10 rounded-full bg-denim-900 text-cream-50 font-display flex-shrink-0">{s.n}</span>
                  <div>
                    <p className="font-medium text-denim-900">{s.t}</p>
                    <p className="text-sm text-ink-soft mt-1">{s.d}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
          <div className="aspect-[4/5] rounded-3xl overflow-hidden bg-cream-200">
            <img src={IMG.editorial2} alt="How to take denim measurements" className="h-full w-full object-cover" />
          </div>
        </div>
      </section>

      {/* Chart */}
      <section className="bg-cream-100 py-20">
        <div className="container-luxe">
          <h2 className="font-display text-3xl md:text-4xl text-denim-900 leading-tight">
            Vee_jeans size chart.
          </h2>
          <p className="mt-3 text-ink-soft">All measurements in inches. Jeans run true to size.</p>
          <div className="mt-10 overflow-x-auto rounded-2xl bg-cream-50">
            <table className="w-full text-sm">
              <thead className="bg-denim-900 text-cream-50">
                <tr>
                  <th className="text-left px-6 py-4 font-medium">Size</th>
                  <th className="text-left px-6 py-4 font-medium">Waist</th>
                  <th className="text-left px-6 py-4 font-medium">Hip</th>
                  <th className="text-left px-6 py-4 font-medium">Inseam</th>
                </tr>
              </thead>
              <tbody>
                {SIZE_CHART.map((s, i) => (
                  <tr key={s.size} className={i % 2 ? 'bg-cream-100' : ''}>
                    <td className="px-6 py-4 font-medium text-denim-900">{s.size}</td>
                    <td className="px-6 py-4">{s.waist}</td>
                    <td className="px-6 py-4">{s.hip}</td>
                    <td className="px-6 py-4">{s.inseam}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* Fit guides */}
      <section className="container-luxe py-20">
        <h2 className="font-display text-3xl md:text-4xl text-denim-900 leading-tight">
          Choose your fit type.
        </h2>
        <p className="mt-3 text-ink-soft max-w-xl">
          Our denim is designed for nine distinct body types. Choose the fit that's engineered for yours.
        </p>
        <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[
            { t: 'Curvy Fit', d: 'For a defined waist-to-hip ratio. Anti-gap waistband, generous through thigh.', f: ['No back gap', 'Sculpt panels', 'Sizes 8–24'] },
            { t: 'Petite Fit', d: 'For frames under 5\'4". Proportionate rise, 28" inseam.', f: ['Shorter inseam', 'Smaller rise', 'Sizes 6–18'] },
            { t: 'Tall Fit', d: 'For frames over 5\'8". Longer inseam, higher rise.', f: ['34" inseam', 'Extra-high rise option', 'Sizes 8–18'] },
            { t: 'Plus Size', d: 'Engineered from a 16+ block, not graded up from straight sizing.', f: ['True plus engineering', 'Premium stretch', 'Sizes 16–24'] },
            { t: 'Stretch Fit', d: 'For maximum comfort. 4-way stretch denim.', f: ['Recovery-knit denim', 'All-day comfort', 'Sizes 6–24'] },
            { t: 'Standard Fit', d: 'Our classic block. True to size, balanced rise.', f: ['Mid rise', 'True-to-size', 'Sizes 6–24'] },
          ].map((f) => (
            <div key={f.t} className="p-6 rounded-2xl border border-cream-300 bg-cream-50">
              <p className="font-display text-xl text-denim-900">{f.t}</p>
              <p className="text-sm text-ink-soft mt-2">{f.d}</p>
              <ul className="mt-4 space-y-1.5">
                {f.f.map((x) => (
                  <li key={x} className="flex items-center gap-2 text-xs text-ink-soft">
                    <CheckCircle2 className="h-3.5 w-3.5 text-clay-500 flex-shrink-0" />
                    {x}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
