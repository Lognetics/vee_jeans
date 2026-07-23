'use client';

import { useState } from 'react';
import { Phone, Mail, MapPin, MessageCircle, Instagram, CheckCircle2, ChevronDown } from 'lucide-react';

const FAQS = [
  {
    q: 'How long does delivery take?',
    a: 'Same-day or next-day in Abuja. 2–4 working days nationwide. 5–10 working days for international orders.',
  },
  {
    q: 'What sizes do you carry?',
    a: 'We carry sizes 6 through 24 across most of our denim. Tops are sized XS through XXL. See our Size Guide for measurements.',
  },
  {
    q: 'Can I return or exchange?',
    a: 'Yes — 7-day return window. The item must be unworn with original tags attached. Wholesale orders are non-returnable except for manufacturing defects.',
  },
  {
    q: 'Do you ship internationally?',
    a: 'Yes, we ship globally. Shipping fees are calculated at checkout based on destination and weight.',
  },
  {
    q: 'What payment methods do you accept?',
    a: 'We accept all major cards, bank transfers, Paystack, Flutterwave, Apple Pay, and Google Pay. WhatsApp checkout also available.',
  },
  {
    q: 'How do I become a wholesale partner?',
    a: 'Visit our Wholesale page and submit an application. We review within 24 hours and reach out via WhatsApp.',
  },
  {
    q: 'Are the jeans true to size?',
    a: 'Yes — our denim runs true to size. If you\'re between sizes, size down for stretch fits and up for rigid fits. Try our AI size recommendation on any product page.',
  },
  {
    q: 'How do I track my order?',
    a: 'Tracking is sent via WhatsApp and email once your order is dispatched. You can also track from your account dashboard.',
  },
];

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <>
      {/* Hero */}
      <section className="container-luxe pt-16 pb-12">
        <p className="text-[11px] tracking-[0.3em] uppercase text-clay-500 mb-3">Get in touch</p>
        <h1 className="font-display text-5xl md:text-7xl text-denim-900 leading-[1.02] max-w-3xl">
          We're here to help.
        </h1>
        <p className="mt-5 text-ink-soft max-w-xl">
          From sizing questions to wholesale enquiries — our team is ready to support you on whichever channel works best.
        </p>
      </section>

      {/* Contact cards */}
      <section className="container-luxe pb-20">
        <div className="grid md:grid-cols-3 gap-4">
          {[
            {
              i: Phone,
              t: 'Call us',
              lines: ['0701 920 3787', '+234 810 048 4650'],
              cta: 'Tap to call',
              href: 'tel:+2348100484650',
            },
            {
              i: MessageCircle,
              t: 'WhatsApp',
              lines: ['Fastest response · 9am–8pm WAT'],
              cta: 'Open WhatsApp',
              href: 'https://wa.me/2348100484650',
            },
            {
              i: Mail,
              t: 'Email',
              lines: ['hello@veejeans.ng', 'wholesale@veejeans.ng'],
              cta: 'Send a message',
              href: 'mailto:hello@veejeans.ng',
            },
          ].map((c) => (
            <a
              key={c.t}
              href={c.href}
              className="group rounded-2xl border border-cream-300 p-6 hover:bg-denim-900 hover:text-cream-50 transition-colors"
            >
              <div className="grid place-items-center h-12 w-12 rounded-full bg-cream-100 group-hover:bg-clay-500 group-hover:text-white">
                <c.i className="h-5 w-5" />
              </div>
              <p className="mt-4 font-display text-2xl">{c.t}</p>
              <div className="mt-2 space-y-1 text-sm text-ink-soft group-hover:text-cream-200">
                {c.lines.map((l) => <p key={l}>{l}</p>)}
              </div>
              <p className="mt-6 text-xs uppercase tracking-wider">{c.cta} →</p>
            </a>
          ))}
        </div>
      </section>

      {/* Form + info */}
      <section className="bg-cream-100 py-20 md:py-28">
        <div className="container-luxe grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <h2 className="font-display text-3xl md:text-4xl text-denim-900 leading-tight">
              Send us a message.
            </h2>
            <p className="mt-3 text-ink-soft">
              For order help, sizing questions, partnerships, or anything else.
            </p>

            <div className="mt-10 space-y-5">
              <div>
                <p className="text-[11px] tracking-[0.3em] uppercase text-clay-500 mb-2">Visit</p>
                <p className="flex items-start gap-2 text-sm">
                  <MapPin className="h-4 w-4 mt-0.5 text-ink-muted" /> Abuja, Nigeria — Visit our showroom by appointment.
                </p>
              </div>
              <div>
                <p className="text-[11px] tracking-[0.3em] uppercase text-clay-500 mb-2">Follow</p>
                <div className="flex gap-3">
                  <a
                    href="https://instagram.com/Vee_jeans_backuppage"
                    target="_blank"
                    className="inline-flex items-center gap-2 text-sm hover:text-clay-500"
                  >
                    <Instagram className="h-4 w-4" /> @Vee_jeans_backuppage
                  </a>
                </div>
                <a
                  href="https://tiktok.com/@vee_jeans1"
                  target="_blank"
                  className="inline-flex items-center gap-2 text-sm mt-2 hover:text-clay-500"
                >
                  <span className="grid place-items-center h-4 w-4 rounded bg-denim-900 text-cream-50 text-[8px] font-bold">TT</span>
                  @Vee_jeans1
                </a>
              </div>
            </div>
          </div>

          <form
            className="lg:col-span-3 bg-cream-50 rounded-3xl p-8 border border-cream-300"
            onSubmit={(e) => {
              e.preventDefault();
              setSubmitted(true);
            }}
          >
            {submitted ? (
              <div className="text-center py-10">
                <div className="grid place-items-center h-16 w-16 rounded-full bg-clay-500 text-white mx-auto">
                  <CheckCircle2 className="h-8 w-8" />
                </div>
                <p className="font-display text-3xl mt-6 text-denim-900">Message sent.</p>
                <p className="mt-3 text-ink-soft">We typically reply within a few hours during business hours.</p>
              </div>
            ) : (
              <>
                <div className="grid sm:grid-cols-2 gap-4">
                  <label className="block">
                    <span className="text-xs font-medium text-ink-soft">Full name</span>
                    <input required type="text" className="mt-1.5 w-full rounded-lg border border-cream-300 px-4 py-3 text-sm" />
                  </label>
                  <label className="block">
                    <span className="text-xs font-medium text-ink-soft">Phone number</span>
                    <input required type="tel" className="mt-1.5 w-full rounded-lg border border-cream-300 px-4 py-3 text-sm" />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="text-xs font-medium text-ink-soft">Email</span>
                    <input required type="email" className="mt-1.5 w-full rounded-lg border border-cream-300 px-4 py-3 text-sm" />
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="text-xs font-medium text-ink-soft">Inquiry type</span>
                    <select className="mt-1.5 w-full rounded-lg border border-cream-300 px-4 py-3 text-sm bg-white">
                      <option>Retail order question</option>
                      <option>Wholesale inquiry</option>
                      <option>Partnership / Collaboration</option>
                      <option>Delivery support</option>
                      <option>Product question</option>
                      <option>Returns / Exchanges</option>
                      <option>Other</option>
                    </select>
                  </label>
                  <label className="block sm:col-span-2">
                    <span className="text-xs font-medium text-ink-soft">Message</span>
                    <textarea required rows={5} className="mt-1.5 w-full rounded-lg border border-cream-300 px-4 py-3 text-sm" />
                  </label>
                </div>
                <button type="submit" className="btn-primary w-full mt-6">Send message</button>
              </>
            )}
          </form>
        </div>
      </section>

      {/* FAQ */}
      <section className="container-luxe py-24">
        <div className="text-center max-w-xl mx-auto mb-12">
          <p className="text-[11px] tracking-[0.3em] uppercase text-clay-500 mb-3">FAQ</p>
          <h2 className="font-display text-4xl md:text-5xl text-denim-900 leading-tight">
            Questions, answered.
          </h2>
        </div>
        <div className="max-w-3xl mx-auto">
          {FAQS.map((faq, i) => (
            <div key={i} className="border-b border-cream-300">
              <button
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
                className="flex w-full items-center justify-between py-5 text-left"
              >
                <span className="font-medium text-denim-900 pr-4">{faq.q}</span>
                <ChevronDown
                  className={`h-5 w-5 flex-shrink-0 transition-transform ${openFaq === i ? 'rotate-180' : ''}`}
                />
              </button>
              {openFaq === i && <p className="pb-5 text-ink-soft text-sm leading-relaxed">{faq.a}</p>}
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
