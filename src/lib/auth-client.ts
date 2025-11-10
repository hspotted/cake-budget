import { polarClient } from '@polar-sh/better-auth'
import {
  adminClient,
  apiKeyClient,
  organizationClient,
  usernameClient
} from 'better-auth/client/plugins'
import { twoFactorClient } from 'better-auth/plugins'
import { createAuthClient } from 'better-auth/react'

export const authClient = createAuthClient({
  baseURL: process.env.BETTER_AUTH_URL,
  plugins: [
    twoFactorClient(),
    usernameClient(),
    adminClient(),
    apiKeyClient(),
    organizationClient(),
    polarClient()
  ]
})

export const { signIn, signOut, getSession, useSession } = authClient
