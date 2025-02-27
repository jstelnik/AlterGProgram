import { pgTable, serial, integer, text, timestamp } from "drizzle-orm/pg-core";

// Define the "workouts" table
export const workouts = pgTable("workouts", {
  id: serial("id").primaryKey(),
  name: text("name").notNull(),
  createdAt: timestamp("created_at").defaultNow().notNull(),
});

// Define the "stages" table
export const stages = pgTable("stages", {
  id: serial("id").primaryKey(),
  workoutId: integer("workout_id")
    .notNull()
    .references(() => workouts.id),
  duration: integer("duration").notNull(),
  percent_body_weight: integer("percent_body_weight").notNull(),
  treadmill_inclination: integer("treadmill_inclination").notNull(),
  treadmill_speed: integer("treadmill_speed").notNull(),
  order: integer("order").notNull(),
});
