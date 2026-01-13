import { MetadataRoute } from 'next';

export const dynamic = 'force-static';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://semlohsolutions.com';
  
  const routes = [
    '',
    '/about',
    '/software',
    '/consulting',
    '/consulting/our-work',
    '/investing',
    '/leadership',
    '/company',
    '/contact',
    '/investors',
    '/newsroom',
    '/legal',
    '/privacy',
    '/terms',
    '/news/expansion-technical-consulting',
    '/news/wetrade-private-beta',
    '/news/ai-infrastructure-investment',
  ];

  return routes.map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));
}
