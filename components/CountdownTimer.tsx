'use client';

import { useEffect, useState } from 'react';

export default function CountdownTimer({ hours = 36 }: { hours?: number }) {
  const [target] = useState(() => Date.now() + hours * 60 * 60 * 1000);
  const [now, setNow] = useState(Date.now());

  useEffect(() => {
    const t = setInterval(() => setNow(Date.now()), 1000);
    return () => clearInterval(t);
  }, []);

  const ms = Math.max(0, target - now);
  const h = Math.floor(ms / 3600000);
  const m = Math.floor((ms % 3600000) / 60000);
  const s = Math.floor((ms % 60000) / 1000);

  return (
    <div className="flex gap-3">
      {[
        { v: h, l: 'Hours' },
        { v: m, l: 'Mins' },
        { v: s, l: 'Secs' },
      ].map((x) => (
        <div key={x.l} className="bg-cream-50 text-denim-900 rounded-xl px-4 py-3 min-w-[72px] text-center">
          <p className="font-display text-3xl leading-none tabular-nums">
            {String(x.v).padStart(2, '0')}
          </p>
          <p className="text-[10px] uppercase tracking-[0.2em] mt-1 text-ink-muted">{x.l}</p>
        </div>
      ))}
    </div>
  );
}
