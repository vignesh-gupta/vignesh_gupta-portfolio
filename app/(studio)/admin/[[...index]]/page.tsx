'use client';

import { NextStudio } from 'next-sanity/studio';
import config from '@/sanity.config';

export default function AdminPage() {
  return (
    <body>
      <NextStudio config={config} />
    </body>
  );
}
