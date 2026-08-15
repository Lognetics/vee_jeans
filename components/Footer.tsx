import Link from 'next/link';
import { Instagram, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-denim-950 text-cream-100 mt-24">
      <div className="container-luxe pt-20 pb-10">
        {/* Newsletter */}
        <div className="grid lg:grid-cols-2 gap-10 pb-14 border-b border-denim-700">
          <div>
            <p className="text-[11px] uppercase tracking-[0.3em] text-clay-300">Stay close</p>
            <h3 className="font-display text-3xl md:text-5xl mt-3 leading-tight">
              Be the first to wear it.
            </h3>
            <p className="mt-4 text-cream-200/80 max-w-md">
              Subscribe for new drops and styling inspiration straight to your inbox.
            </p>
          </div>
          <form className="flex flex-col justify-center gap-3">
            <div className="flex border border-cream-100/30 rounded-full overflow-hidden bg-denim-900/50">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 bg-transparent px-5 py-4 outline-none placeholder:text-cream-200/50 text-sm"
              />
              <button className="bg-clay-500 hover:bg-clay-600 transition-colors px-6 text-sm font-medium">
                Subscribe
              </button>
            </div>
            <p className="text-[11px] text-cream-200/60 px-2">
              By subscribing you agree to our Privacy Policy. Unsubscribe anytime.
            </p>
          </form>
        </div>

        {/* Footer grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-10 py-14">
          <div className="col-span-2 lg:col-span-1">
            <p className="font-display text-2xl text-cream-50">Vee<span className="text-clay-400">_</span>jeans</p>
            <p className="text-xs uppercase tracking-[0.25em] text-cream-200/60 mt-1">Enterprises Ltd</p>
            <p className="mt-5 text-sm text-cream-200/80 max-w-xs">
              Luxury female denim fashion for every woman. Premium Turkish denim, inclusive sizing, made for confidence.
            </p>
            <div className="mt-6 space-y-2 text-sm">
              <a href="tel:07019203787" className="flex items-center gap-2 text-cream-200/80 hover:text-clay-300">
                <Phone className="h-4 w-4" /> 0701 920 3787
              </a>
              <a href="tel:+2348100484650" className="flex items-center gap-2 text-cream-200/80 hover:text-clay-300">
                <Phone className="h-4 w-4" /> +234 810 048 4650
              </a>
              <a href="mailto:info@veejeans.com" className="flex items-center gap-2 text-cream-200/80 hover:text-clay-300">
                <Mail className="h-4 w-4" /> info@veejeans.com
              </a>
              <p className="flex items-center gap-2 text-cream-200/80">
                <MapPin className="h-4 w-4" /> Abuja, Nigeria
              </p>
            </div>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-clay-300 mb-4">Shop</h4>
            <ul className="space-y-2 text-sm text-cream-200/80">
              <li><Link href="/shop?collection=new-arrivals" className="hover:text-clay-300">New Arrivals</Link></li>
              <li><Link href="/shop?collection=best-sellers" className="hover:text-clay-300">Best Sellers</Link></li>
              <li><Link href="/shop?collection=premium-turkish" className="hover:text-clay-300">Turkish Denim</Link></li>
              <li><Link href="/shop?collection=curvy" className="hover:text-clay-300">Curvy Collection</Link></li>
              <li><Link href="/shop?collection=tiktok-viral" className="hover:text-clay-300">TikTok Viral</Link></li>
              <li><Link href="/shop?collection=limited-edition" className="hover:text-clay-300">Limited Edition</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-clay-300 mb-4">Help</h4>
            <ul className="space-y-2 text-sm text-cream-200/80">
              <li><Link href="/size-guide" className="hover:text-clay-300">Size Guide</Link></li>
              <li><Link href="/contact" className="hover:text-clay-300">Delivery Info</Link></li>
              <li><Link href="/contact" className="hover:text-clay-300">Returns</Link></li>
              <li><Link href="/contact" className="hover:text-clay-300">Track Order</Link></li>
              <li><Link href="/contact" className="hover:text-clay-300">FAQ</Link></li>
              <li><Link href="/contact" className="hover:text-clay-300">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-clay-300 mb-4">Wholesale</h4>
            <ul className="space-y-2 text-sm text-cream-200/80">
              <li><Link href="/wholesale" className="hover:text-clay-300">Bulk Pricing</Link></li>
              <li><Link href="/wholesale#apply" className="hover:text-clay-300">Become a Partner</Link></li>
              <li><Link href="/wholesale" className="hover:text-clay-300">Reseller Program</Link></li>
              <li><Link href="/wholesale" className="hover:text-clay-300">Boutique Support</Link></li>
              <li><Link href="/wholesale" className="hover:text-clay-300">Wholesale Catalog</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[11px] uppercase tracking-[0.25em] text-clay-300 mb-4">Brand</h4>
            <ul className="space-y-2 text-sm text-cream-200/80">
              <li><Link href="/about" className="hover:text-clay-300">Our Story</Link></li>
              <li><Link href="/blog" className="hover:text-clay-300">Denim Journal</Link></li>
              <li><Link href="/about#sustainability" className="hover:text-clay-300">Sustainability</Link></li>
              <li><Link href="/contact" className="hover:text-clay-300">Press</Link></li>
            </ul>
            <div className="mt-6 flex gap-3">
              <a href="https://instagram.com/Vee_jeans_backuppage" target="_blank" rel="noopener" className="grid place-items-center h-9 w-9 rounded-full border border-cream-100/30 hover:bg-clay-500 hover:border-clay-500 transition-colors">
                <Instagram className="h-4 w-4" />
              </a>
              <a href="https://tiktok.com/@vee_jeans1" target="_blank" rel="noopener" className="grid place-items-center h-9 w-9 rounded-full border border-cream-100/30 hover:bg-clay-500 hover:border-clay-500 transition-colors text-xs font-bold">
                TT
              </a>
              <a href="https://wa.me/2348100484650" target="_blank" rel="noopener" className="grid place-items-center h-9 w-9 rounded-full border border-cream-100/30 hover:bg-clay-500 hover:border-clay-500 transition-colors text-xs font-bold">
                WA
              </a>
            </div>
          </div>
        </div>

        {/* Trust strip */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 py-10 border-t border-denim-700">
          {[
            { t: 'Secure Payments', s: 'Direct bank transfer' },
            { t: 'Nationwide Delivery', s: 'Same-day in Abuja' },
            { t: 'Easy Returns', s: '7-day return window' },
            { t: 'Verified Reviews', s: '12,000+ happy customers' },
          ].map((x) => (
            <div key={x.t}>
              <p className="text-sm font-medium text-cream-50">{x.t}</p>
              <p className="text-xs text-cream-200/60 mt-1">{x.s}</p>
            </div>
          ))}
        </div>

        <div className="flex flex-col md:flex-row gap-4 justify-between items-start md:items-center pt-8 text-xs text-cream-200/60">
          <p>© {new Date().getFullYear()} Vee_jeans Enterprises Limited. Luxury Female Denim Fashion for Every Woman.</p>
          <div className="flex gap-6">
            <Link href="/privacy" className="hover:text-clay-300">Privacy</Link>
            <Link href="/terms" className="hover:text-clay-300">Terms</Link>
            <Link href="/contact" className="hover:text-clay-300">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
