import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactCompiler: true,
  experimental: {
    authInterrupts: true
  },
  cacheComponents: true
}

export default nextConfig
