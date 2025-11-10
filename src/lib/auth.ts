import { checkout, polar, portal, usage } from '@polar-sh/better-auth'
import { betterAuth } from 'better-auth'
import { drizzleAdapter } from 'better-auth/adapters/drizzle'
import {
  admin,
  apiKey,
  openAPI,
  organization,
  twoFactor,
  username
} from 'better-auth/plugins'

import { db } from '~/db'
import * as schema from '~/db/schema'

import { polarClient } from './polar-client'

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'pg',
    schema: schema
  }),
  appName: 'Cake Budget',
  emailAndPassword: {
    enabled: true,
    maxPasswordLength: 128,
    minPasswordLength: 10,
    resetPasswordURL: `${process.env.NEXT_PUBLIC_APP_URL}/auth/reset-password`,
    verifyEmailURL: `${process.env.NEXT_PUBLIC_APP_URL}/auth/verify-email`,
    fromEmail: 'Cake Budget <noreply@cakebudget.com>',
    authSecret: process.env.BETTER_AUTH_SECRET
  },
  socialProviders: {
    google: {
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET
    },
    apple: {
      clientId: process.env.APPLE_CLIENT_ID,
      clientSecret: process.env.APPLE_CLIENT_SECRET
    }
  },
  trustedOrigins: [process.env.APPLE_DOMAIN_URL],
  plugins: [
    twoFactor(),
    username(),
    admin(),
    apiKey(),
    organization(),
    openAPI(),
    polar({
      client: polarClient,
      createCustomerOnSignUp: true,
      use: [
        checkout({
          products: [],
          successUrl: '/success?checkout_id={CHECKOUT_ID}',
          authenticatedUsersOnly: true
        }),
        portal(),
        usage()
      ]
    })
  ]
})
