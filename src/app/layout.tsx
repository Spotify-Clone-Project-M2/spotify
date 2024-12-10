import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Spotify Clone',
  description: 'A modern web music player application built with Next.js',
  keywords: ['music', 'streaming', 'player', 'spotify', 'clone', 'next.js'],
  authors: [{ name: 'Your Name' }],
  colorScheme: 'dark',
  themeColor: '#1DB954', // Spotify's brand green
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
  },
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
  manifest: '/manifest.json',
  openGraph: {
    type: 'website',
    title: 'Spotify Clone',
    description: 'A modern web music player application built with Next.js',
    siteName: 'Spotify Clone',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Spotify Clone',
    description: 'A modern web music player application built with Next.js',
    images: ['/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
