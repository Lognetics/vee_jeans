import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AnnouncementBar from '@/components/AnnouncementBar';
import WhatsAppFloat from '@/components/WhatsAppFloat';
import CartDrawer from '@/components/CartDrawer';
import { CartProvider } from '@/components/CartContext';

const sans = Inter({
  subsets: ['latin'],
  variable: '--font-sans',
  display: 'swap',
});

const display = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-display',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://veejeans.com'),
  alternates: { canonical: '/' },
  title: 'Vee_jeans Enterprises Ltd — Premium Turkish Denim for Every Woman',
  description:
    'Luxury female denim fashion. Premium Turkish denim, inclusive sizing 6–24, nationwide delivery. Wholesale & retail. Made for confidence.',
  keywords: [
    'Vee_jeans',
    'female denim Nigeria',
    'Turkish jeans',
    'mom jeans',
    'baggy jeans',
    'plus size denim',
    'wholesale jeans Nigeria',
  ],
  openGraph: {
    title: 'Vee_jeans Enterprises Ltd',
    description: 'Premium Turkish denim for every woman.',
    type: 'website',
    url: 'https://veejeans.com',
    siteName: 'Vee_jeans Enterprises Ltd',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body>
        <CartProvider>
          <AnnouncementBar />
          <Header />
          <main>{children}</main>
          <Footer />
          <CartDrawer />
          <WhatsAppFloat />
        </CartProvider>
      </body>
    </html>
  );
}
