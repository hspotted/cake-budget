namespace NodeJS {
  interface ProcessEnv {
    BETTER_AUTH_SECRET: string
    BETTER_AUTH_URL: string
    DB_DATABASE_URL: string
    GOOGLE_CLIENT_ID: string
    GOOGLE_CLIENT_SECRET: string
    APPLE_CLIENT_ID: string
    APPLE_CLIENT_SECRET: string
    APPLE_DOMAIN_URL: string
    POLAR_ACCESS_TOKEN: string
    POLAR_ENVIRONMENT: 'sandbox' | 'production'
  }
}
