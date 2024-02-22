import type { Metadata } from 'next';

import { CONTACT_EMAIL } from '@/utils/constant';
import './globals.css';

export const metadata: Metadata = {
  title: 'Portfolio | Vignesh Gupta',
  verification: {
    google: 'CMGvGxmKn2AHfQJX0pLgJHDEDjXT7xYWgX8J0Crz_xs',
  },
  description:
    'Experienced fullstack developer specializing in frontend technologies. Explore my portfolio for a showcase of projects and skills.',
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
    'Fullstack Developer',
    'Frontend',
    'React JS',
    'Node JS',
    'Express JS',
    'Spring Boot',
    'PostgreSQL',
    'AWS',
    'Git',
    'MongoDB',
    'MySQL',
  ],
  openGraph: {
    type: 'website',
    url: 'https://vigneshgupta.tech/',
    title: 'Portfolio | Vignesh Gupta',
    description:
      'Experienced fullstack developer specializing in frontend technologies. Explore my portfolio for a showcase of projects and skills.',
    siteName: 'Vignesh Gupta Portfolio',
    emails: [CONTACT_EMAIL],
    locale: 'en_US',
    images: [
      {
        url: '/thumbnail.png',
        alt: "Hey there, I'm Vignesh Gupta",
      },
    ],
  },
  twitter: {
    creator: '@vigneshfixes',
    creatorId: 'twitter.com/vigneshfixes',
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
