import express from "express";

import {
  generateTrip,
  regenerateDay,
} from "../controllers/tripController.js";

const router = express.Router();

// Generate Complete Trip
router.post("/", generateTrip);

// Regenerate Only One Day
router.post("/regenerate-day", regenerateDay);

export default router;