import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://vigneshgupta.vercel.app',
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 1,
    },
    {
      url: 'https://vigneshgupta.vercel.app/about',
      lastModified: new Date(),
      changeFrequency: 'always',
    },
    {
      url: 'https://vigneshgupta.vercel.app/projects',
      lastModified: new Date(),
      changeFrequency: 'always',
    },
    {
      url: 'https://vigneshgupta.vercel.app/contact',
      lastModified: new Date(),
      changeFrequency: 'always',
    },
  ];
}
