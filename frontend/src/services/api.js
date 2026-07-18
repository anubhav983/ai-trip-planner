import axios from "axios";

const API = axios.create({
  baseURL: "https://ai-trip-planner-2-mcnp.onrender.com/api",
});

// Generate Complete Trip
export const generateTrip = async (prompt) => {
  const response = await API.post("/trip", {
    prompt,
  });

  return response.data;
};

// Regenerate Only One Day
export const regenerateDay = async (prompt, dayNumber) => {
  const response = await API.post("/trip/regenerate-day", {
    prompt,
    day: dayNumber,
  });

  return response.data;
};