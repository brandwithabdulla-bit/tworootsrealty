import localFont from 'next/font/local';
import { Cormorant_Garamond } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const bdoGrotesk = localFont({
  src: [
    {
      path: '../../public/fonts/BDOGrotesk-Light.woff2',
      weight: '300',
      style: 'normal',
    },
    {
      path: '../../public/fonts/BDOGrotesk-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../../public/fonts/BDOGrotesk-Medium.woff2',
      weight: '500',
      style: 'normal',
    },
    {
      path: '../../public/fonts/BDOGrotesk-DemiBold.woff2',
      weight: '600',
      style: 'normal',
    }
  ],
  variable: '--font-bdo',
});

const cormorant = Cormorant_Garamond({ 
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
});

import FloatingContact from '@/components/FloatingContact';

export const metadata = {
  title: 'Two Roots Realty | Dubai Luxury Real Estate',
  description: 'Premium international real estate advisory in Dubai.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bdoGrotesk.variable} ${cormorant.variable}`}>
        <Navbar />
        {children}
        <Footer />
        <FloatingContact />
      </body>
    </html>
  );
}
