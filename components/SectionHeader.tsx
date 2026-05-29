import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

interface Props {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  cta?: { label: string; href: string };
  align?: 'left' | 'center';
}

export default function SectionHeader({ eyebrow, title, subtitle, cta, align = 'left' }: Props) {
  return (
    <div
      className={`flex flex-col gap-4 ${
        align === 'center'
          ? 'items-center text-center max-w-2xl mx-auto'
          : 'md:flex-row md:items-end md:justify-between'
      }`}
    >
      <div className={align === 'center' ? '' : 'max-w-xl'}>
        {eyebrow && (
          <p className="text-[11px] tracking-[0.3em] uppercase text-clay-500 mb-3">{eyebrow}</p>
        )}
        <h2 className="font-display text-3xl md:text-5xl leading-[1.05] text-denim-900">
          {title}
        </h2>
        {subtitle && <p className="mt-4 text-ink-soft max-w-xl">{subtitle}</p>}
      </div>
      {cta && (
        <Link href={cta.href} className="inline-flex items-center gap-2 text-sm font-medium text-denim-900 link-underline">
          {cta.label} <ArrowRight className="h-4 w-4" />
        </Link>
      )}
    </div>
  );
}
