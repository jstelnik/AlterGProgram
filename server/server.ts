import express from "express";
import dotenv from "dotenv";
import workoutRoutes from "./routes/workoutRoutes";

dotenv.config();

const app = express();
app.use(express.json());

// Routes
app.use("/api/workouts", workoutRoutes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
