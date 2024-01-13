import { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://vigneshgupta.vigneshgupta.tech',
      lastModified: new Date(),
      changeFrequency: 'always',
      priority: 1,
    },
    {
      url: 'https://vigneshgupta.vigneshgupta.tech/about',
      lastModified: new Date(),
      changeFrequency: 'always',
    },
    {
      url: 'https://vigneshgupta.vigneshgupta.tech/projects',
      lastModified: new Date(),
      changeFrequency: 'always',
    },
    {
      url: 'https://vigneshgupta.vigneshgupta.tech/contact',
      lastModified: new Date(),
      changeFrequency: 'always',
    },
  ];
}
