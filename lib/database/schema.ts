import { boolean, pgTable, timestamp, varchar } from 'drizzle-orm/pg-core';

// example first schema for your application

/*
  
*/

export const users = pgTable('users', {
  id: varchar('id').primaryKey(),
  email: varchar('email').notNull(),
  password: varchar('password').notNull(),
  emailVerified: boolean('email_verified').default(false),
  createdAt: timestamp('created_at', {
    mode: 'date',
    withTimezone: true,
  }).defaultNow(),
  updatedAt: timestamp('updated_at', {
    mode: 'date',
    withTimezone: true,
  }),
});

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;
