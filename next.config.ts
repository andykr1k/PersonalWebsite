import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: '/blog', destination: '/', permanent: true },
      {
        source: '/:path(about|activity|contact|journey|privacypolicy|quotes|recommends|snippets|stats|tags|uses)',
        destination: '/',
        permanent: true,
      },
      { source: '/static/Resume.pdf', destination: '/Resume.pdf', permanent: true },
    ]
  },
}

export default nextConfig
