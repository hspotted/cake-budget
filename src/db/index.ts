import { neon } from '@neondatabase/serverless'
import { config } from 'dotenv'
import { drizzle } from 'drizzle-orm/neon-http'

config({ path: '.env.local' })

const connectionString = process.env.DB_DATABASE_URL
if (!connectionString && process.env.NODE_ENV !== 'test') {
  console.warn('DB_DATABASE_URL not found. Database will not be available.')
}

const sql = neon(
  connectionString || 'postgresql://temp:temp@localhost:5432/temp'
)
export const db = drizzle({ client: sql })
