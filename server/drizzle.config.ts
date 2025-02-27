import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./src/models", // Path to your Drizzle schema
  driver: "pg",
  dbCredentials: {
    connectionString: process.env.DATABASE_URL,
  },
  out: "./migrations",
});
