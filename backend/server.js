import "dotenv/config";

import express from "express";
import cors from "cors";

import tripRoutes from "./routes/tripRoutes.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use("/api/trip", tripRoutes);

const PORT = process.env.PORT || 5000;

console.log("API KEY:", process.env.Groq_API_KEY);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});