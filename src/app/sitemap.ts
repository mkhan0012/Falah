import { MetadataRoute } from 'next'
import { projects } from '@/data/projects'
import { insights } from '@/data/insights'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://falahbrandhouse.com' // Replace with actual domain

  const staticRoutes = [
    '',
    '/work',
    '/services',
    '/personal-branding',
    '/about',
    '/insights',
    '/contact',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }))

  const projectRoutes = projects.map((project) => ({
    url: `${baseUrl}/work/${project.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.7,
  }))

  const insightRoutes = insights.map((insight) => ({
    url: `${baseUrl}/insights/${insight.slug}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }))

  return [...staticRoutes, ...projectRoutes, ...insightRoutes]
}