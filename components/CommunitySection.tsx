import Link from 'next/link';
import { ArrowRight, Instagram } from 'lucide-react';
import { VEE_FACES } from '@/lib/faces';
import SectionHeader from './SectionHeader';

export default function CommunitySection() {
  const [founder, ...community] = VEE_FACES;

  return (
    <section className="container-luxe py-20 md:py-28">
      <SectionHeader
        eyebrow="✦ The Vee_jeans Community"
        title="Faces of Vee_jeans."
        subtitle="The women who wear, sell, and shape our denim — from Lagos to Abuja, Port Harcourt to Kano. Follow @Vee_jeans_backuppage and tag us to be featured."
        cta={{ label: 'Follow on Instagram', href: 'https://instagram.com/vee_jeans_backuppage' }}
      />

      {/* Editorial: founder hero + grid of community */}
      <div className="mt-14 grid lg:grid-cols-12 gap-5 md:gap-6">
        {/* Founder */}
        <Link
          href={founder.link ?? 'https://instagram.com/vee_jeans_backuppage'}
          target="_blank"
          rel="noopener"
          className="group lg:col-span-5 relative aspect-[4/5] rounded-3xl overflow-hidden bg-cream-200"
        >
          <img
            src={founder.image}
            alt={founder.name}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-denim-950/85 via-denim-950/30 to-transparent" />
          <div className="absolute inset-x-0 bottom-0 p-6 md:p-8 text-cream-50">
            <div className="flex items-center gap-2 text-[11px] tracking-[0.3em] uppercase text-clay-300 mb-3">
              <Instagram className="h-3.5 w-3.5" />
              {founder.handle}
            </div>
            <p className="font-display text-3xl md:text-4xl leading-tight">{founder.name}</p>
            <p className="mt-1 text-xs text-cream-200/80">{founder.location}</p>
            <p className="mt-4 text-sm text-cream-100/90 max-w-md">"{founder.note}"</p>
            <p className="mt-5 inline-flex items-center gap-1.5 text-xs underline opacity-0 group-hover:opacity-100 transition-opacity">
              View on Instagram <ArrowRight className="h-3 w-3" />
            </p>
          </div>
        </Link>

        {/* Community grid */}
        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-5">
          {community.map((f) => (
            <Link
              key={f.name}
              href={f.link ?? 'https://instagram.com/vee_jeans_backuppage'}
              target="_blank"
              rel="noopener"
              className="group relative aspect-[3/4] rounded-2xl overflow-hidden bg-cream-200"
            >
              <img
                src={f.image}
                alt={f.name}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-denim-950/80 via-denim-950/10 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-3 md:p-4 text-cream-50">
                <p className="font-medium text-sm leading-tight">{f.name}</p>
                <p className="text-[10px] text-cream-200/80 mt-0.5 truncate">{f.location}</p>
                {f.handle && (
                  <p className="text-[10px] text-clay-300 mt-1 flex items-center gap-1">
                    <Instagram className="h-2.5 w-2.5" />
                    {f.handle}
                  </p>
                )}
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Community CTA strip */}
      <div className="mt-14 rounded-2xl bg-cream-100 p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-5">
        <div>
          <p className="font-display text-2xl md:text-3xl text-denim-900 leading-tight">
            Wear it? Tag it. #VeeJeansFit
          </p>
          <p className="text-sm text-ink-soft mt-2 max-w-xl">
            We feature a new community look every week on @Vee_jeans_backuppage and right here on this page.
          </p>
        </div>
        <a
          href="https://instagram.com/vee_jeans_backuppage"
          target="_blank"
          rel="noopener"
          className="btn-primary flex-shrink-0"
        >
          <Instagram className="h-4 w-4" /> Follow & tag us
        </a>
      </div>
    </section>
  );
}
