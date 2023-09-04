import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://vigneshgupta.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 1,
    },
  ];
}
