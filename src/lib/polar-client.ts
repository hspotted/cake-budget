import { Polar } from '@polar-sh/sdk'

export const polarClient = new Polar({
  accessToken: process.env.POLAR_API_TOKEN,
  server: process.env.POLAR_ENVIRONMENT
})
