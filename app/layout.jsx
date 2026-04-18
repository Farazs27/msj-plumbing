import { Fraunces, Geist, JetBrains_Mono } from 'next/font/google';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import FloatPhone from '@/components/FloatPhone';
import Loader from '@/components/Loader';
import './globals.css';

const fraunces = Fraunces({
  subsets: ['latin'],
  variable: '--font-display',
  weight: ['300', '400', '500', '600'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const geist = Geist({
  subsets: ['latin'],
  variable: '--font-body',
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

const jetbrains = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-mono',
  weight: ['400', '500'],
  display: 'swap',
});

export const metadata = {
  title: 'MSJ Plumbing & Drainage — Emergency Plumbers in Dorset, Poole & Bournemouth',
  description:
    '24/7 emergency plumbing and drainage across Dorset, Poole and Bournemouth. 45-minute response, a decade of craft, spotless finish. Call 01202 080 151.',
  keywords: ['plumber Poole', 'plumber Bournemouth', 'emergency plumber Dorset', 'drain unblocking', 'leak detection'],
  openGraph: {
    title: 'MSJ Plumbing & Drainage',
    description: 'Emergency plumbing in Dorset, Poole & Bournemouth. 45-minute response, 24/7.',
    type: 'website',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${fraunces.variable} ${geist.variable} ${jetbrains.variable}`}>
      <body>
        <Loader />
        <div className="noise" />
        <Header />
        {children}
        <Footer />
        <FloatPhone />
      </body>
    </html>
  );
}
