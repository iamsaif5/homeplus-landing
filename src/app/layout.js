import { Geist, Geist_Mono, Manrope, Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import Navbar from '@/component/Navbar';
import Footer from '@/component/Footer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

const manRope = Manrope({
  variable: '--font-manrope',
  subsets: ['latin'],
});

const cormorantGaramond = Cormorant_Garamond({
  variable: '--font-cormorant-garamond',
  subsets: ['latin'],
});

export const metadata = {
  title: 'Home+ - Your home runs better with Home + ',
  description: 'Your complete home management system. Maintenance, trades, documents - all sorted. Forever free.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${manRope.variable} ${geistMono.variable} ${cormorantGaramond.variable} antialiased`}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
