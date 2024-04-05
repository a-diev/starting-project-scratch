import type { Config } from 'drizzle-kit';

export default {
  schema: './lib/schema.ts',
  out: './lib/database/migration',
  driver: 'pg',
  dbCredentials: {
    connectionString: process.env.DATABASE_URL!,
  },
} satisfies Config;
