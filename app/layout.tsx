import './globals.css';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Portfolio | Vignesh Gupta',
  verification: {
    google: 'CMGvGxmKn2AHfQJX0pLgJHDEDjXT7xYWgX8J0Crz_xs',
  },
  description: "Vignesh Gupta's Portfolio",
  authors: {
    name: 'Vignesh Gupta',
    url: 'https://vigneshgupta.tech/',
  },
  creator: 'Vignesh Gupta',
  publisher: 'Vignesh Gupta',
  keywords: [
    'vignesh',
    'gupta',
    'hcl',
    'front end developer',
    'react developer',
    'full stack',
    'product developer',
    'software project',
    'full stack developer',
    'developer',
    'software engineer',
    'software developer',
    'react create app',
    'web developer',
  ],
  openGraph: {
    type: 'website',
    url: 'https://vigneshgupta.tech/',
    title: 'Portfolio | Vignesh Gupta',
    description: "Vignesh Gupta's Portfolio",
    siteName: 'Vignesh Gupta Portfolio',
    emails: ['vighneshgupta32@gmail.com'],
    locale: 'en_US',
    images: [
      {
        url: '/thumbnail.png',
        alt: "Hey there, I'm Vignesh Gupta",
      },
    ],
  },
  twitter: {
    creator: '@VighneshGupta9',
    creatorId: 'twitter.com/VighneshGupta9',
    site: 'https://vigneshgupta.tech/',
    title: 'Portfolio | Vignesh Gupta',
    images: [
      {
        url: '/thumbnail.png',
        alt: "Hey there, I'm Vignesh Gupta",
      },
    ],
  },
  metadataBase: new URL('https://vigneshgupta.tech'),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <html lang='en'>{children}</html>;
}
