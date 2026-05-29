'use client';

import { useEffect, useState } from 'react';
import { MessageCircle, X } from 'lucide-react';

export default function WhatsAppFloat() {
  const [open, setOpen] = useState(false);
  const [show, setShow] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setShow(true), 1200);
    return () => clearTimeout(t);
  }, []);

  if (!show) return null;

  return (
    <div className="fixed bottom-5 right-5 z-30">
      {open && (
        <div className="mb-3 w-72 rounded-2xl bg-cream-50 shadow-luxe overflow-hidden animate-fade-in">
          <div className="bg-[#25D366] px-4 py-3 flex items-center justify-between text-white">
            <div>
              <p className="text-sm font-medium">Vee_jeans Support</p>
              <p className="text-[11px] opacity-90">Replies within minutes</p>
            </div>
            <button onClick={() => setOpen(false)}><X className="h-4 w-4" /></button>
          </div>
          <div className="p-4 text-sm text-ink-soft">
            <p>👋 Hi gorgeous! How can we help you find your perfect denim today?</p>
            <div className="mt-3 space-y-2">
              {[
                { l: 'Help with my order', m: 'Hi Vee_jeans, I need help with my order.' },
                { l: 'Sizing question', m: 'Hi, I need help with sizing.' },
                { l: 'Wholesale inquiry', m: 'Hi, I would like to inquire about wholesale pricing.' },
              ].map((c) => (
                <a
                  key={c.l}
                  href={`https://wa.me/2348100484650?text=${encodeURIComponent(c.m)}`}
                  target="_blank"
                  rel="noopener"
                  className="block rounded-xl border border-cream-300 px-3 py-2 text-xs hover:bg-denim-900 hover:text-cream-50 hover:border-denim-900 transition-colors"
                >
                  {c.l}
                </a>
              ))}
            </div>
          </div>
        </div>
      )}
      <button
        onClick={() => setOpen((o) => !o)}
        className="relative grid place-items-center h-14 w-14 rounded-full bg-[#25D366] text-white shadow-luxe hover:scale-105 transition-transform"
        aria-label="WhatsApp"
      >
        <MessageCircle className="h-6 w-6" />
        <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-30" />
      </button>
    </div>
  );
}
