import { CartProvider } from '../components/CartProvider';
import { site } from '../data/site';
import './globals.css';

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: site.title,
    template: `%s | ${site.name}`,
  },
  description: site.description,
  keywords: ['tof.aaaaa', 'tof aaaaa', '톺아', '핸드메이드 액세서리', '비즈 목걸이', '비즈 팔찌', '키링', '참 액세서리'],
  applicationName: site.name,
  authors: [{ name: site.name }],
  creator: site.name,
  publisher: site.name,
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    siteName: site.name,
    locale: site.locale,
    title: site.title,
    description: site.description,
    url: '/',
    images: [{ url: site.image, width: 1200, height: 1600, alt: 'tof.aaaaa handmade accessory' }],
  },
  twitter: {
    card: 'summary_large_image',
    title: site.title,
    description: site.description,
    images: [site.image],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: '/images/favicon.svg',
    apple: '/images/logo.png',
  },
  manifest: '/site.webmanifest',
};

export const viewport = {
  themeColor: '#efe7d7',
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body><CartProvider>{children}</CartProvider></body>
    </html>
  );
}
