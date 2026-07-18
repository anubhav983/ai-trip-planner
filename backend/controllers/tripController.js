import {
  generateTripFromAI,
  regenerateDayFromAI,
} from "../services/geminiService.js";

import { validateTrip } from "../utils/validateResponse.js";

// Generate Complete Trip
export async function generateTrip(req, res) {
  try {
    const { prompt } = req.body;

    if (!prompt) {
      return res.status(400).json({
        error: "Prompt is required",
      });
    }

    const result = await generateTripFromAI(prompt);

    let trip;

    try {
      trip = JSON.parse(result);
    } catch {
      return res.status(500).json({
        error: "AI returned invalid JSON",
      });
    }

    if (!validateTrip(trip)) {
      return res.status(500).json({
        error: "Invalid trip format",
      });
    }

    res.json(trip);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      error: "Failed to generate trip",
    });

  }
}

// Regenerate Only One Day
export async function regenerateDay(req, res) {

  try {

    const { prompt, day } = req.body;

    if (!prompt || !day) {
      return res.status(400).json({
        error: "Prompt and day are required",
      });
    }

    const newDay = await regenerateDayFromAI(prompt, day);

    res.json(newDay);

  } catch (error) {

    console.error(error);

    res.status(500).json({
      error: "Failed to regenerate day",
    });

  }

}