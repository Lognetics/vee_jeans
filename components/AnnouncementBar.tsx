'use client';

import { useEffect, useState } from 'react';

const MESSAGES = [
  '✦ Free nationwide delivery on orders over ₦80,000',
  '✦ Wholesale pricing — 12+ pieces · WhatsApp +234 810 048 4650',
  '✦ New Turkish denim drops every Friday',
  '✦ Sizes 6–24 in every fit — denim for every body',
];

export default function AnnouncementBar() {
  const [i, setI] = useState(0);
  useEffect(() => {
    const t = setInterval(() => setI((x) => (x + 1) % MESSAGES.length), 4000);
    return () => clearInterval(t);
  }, []);
  return (
    <div className="bg-denim-900 text-cream-50">
      <div className="container-luxe flex h-9 items-center justify-center overflow-hidden text-[12px] tracking-wider">
        <span key={i} className="animate-fade-in">
          {MESSAGES[i]}
        </span>
      </div>
    </div>
  );
}
