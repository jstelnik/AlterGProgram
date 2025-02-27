import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import * as schema from "./schema"; // Import all schema definitions (workouts, stages)

export const connection = new Database("sqlite.db");

export const db = drizzle(connection, { schema });
