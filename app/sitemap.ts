import type { MetadataRoute } from 'next'
import { getPosts } from '@/lib/posts'
import { site } from '@/lib/site'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: site.url },
    { url: `${site.url}/projects` },
    { url: `${site.url}/publications` },
    ...getPosts().map((p) => ({ url: `${site.url}/blog/${p.slug}`, lastModified: p.date })),
  ]
}
