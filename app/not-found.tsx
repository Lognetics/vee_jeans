import Link from 'next/link';

export default function NotFound() {
  return (
    <section className="container-luxe py-32 text-center">
      <p className="text-[11px] tracking-[0.3em] uppercase text-clay-500">404</p>
      <h1 className="font-display text-6xl md:text-8xl text-denim-900 mt-4 leading-none">
        Lost a jean.
      </h1>
      <p className="mt-4 text-ink-soft max-w-md mx-auto">
        The page you're looking for doesn't exist — but our denim drops every Friday.
      </p>
      <div className="mt-10 flex gap-3 justify-center">
        <Link href="/" className="btn-primary">Back to home</Link>
        <Link href="/shop" className="btn-outline">Shop denim</Link>
      </div>
    </section>
  );
}
