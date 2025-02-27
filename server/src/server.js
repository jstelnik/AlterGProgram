import express from "express";
import cors from "cors";
import morgan from "morgan";
import "dotenv/config";
import workoutRoutes from "./routes/workoutRoutes.js";

const app = express();

// Middleware
app.use(cors());
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/workouts", workoutRoutes);

// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
