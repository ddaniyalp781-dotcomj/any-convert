import type { Metadata } from 'next';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://www.anyconvert.app'),
  title: { default: 'AnyConvert', template: 'AnyConvert: %s' },
  description: 'A document conversion API. Send a file, get the result delivered to your webhook.',
  icons: {
    icon: '/favicon.png',
    apple: '/apple-touch-icon.png',
  },
  openGraph: {
    title: 'AnyConvert',
    description: 'A document conversion API. Send a file, get the result delivered to your webhook.',
    url: 'https://www.anyconvert.app',
    siteName: 'AnyConvert',
    images: ['/logo.png'],
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: 'AnyConvert',
    description: 'A document conversion API. Send a file, get the result delivered to your webhook.',
    images: ['/logo.png'],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400;9..144,600;9..144,700&family=IBM+Plex+Sans:wght@400;500;600;700&family=IBM+Plex+Mono:wght@400;500&display=swap"
        />
      </head>
      <body style={{ width: '100%', minHeight: '100vh', boxSizing: 'border-box', display: 'flex', flexDirection: 'column', margin: 0 }}>
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
