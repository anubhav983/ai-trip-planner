import axios from "axios";

export async function generateTripFromAI(prompt) {
 const fullPrompt = `
You are an expert AI Travel Planner.

Return ONLY valid JSON.

Do NOT use markdown.
Do NOT use backticks.
Do NOT explain anything.

Return EXACTLY this JSON structure:

{
  "tripTitle": "",
  "destination": "",
  "destinationImage": "",
  "budget": "",
  "bestTimeToVisit": "",
  "weather": "",
  "tripSummary": "",
  "travelTips": [
    "",
    "",
    ""
  ],
  "estimatedCost": {
    "hotel": "",
    "food": "",
    "transport": "",
    "activities": ""
  },
  "packingList": [],
  "flightSuggestion": {
    "route": "",
    "price": ""
  },
  "hotelSuggestion": {
    "name": "",
    "pricePerNight": "",
    "rating": ""
  },
  "restaurantSuggestion": [
    "",
    "",
    ""
  ],
  "days": [
    {
      "day": 1,
      "city": "",
      "activities": [
        {
          "time": "",
          "place": "",
          "description": ""
        }
      ]
    }
  ]
}

Rules:

- destinationImage should be a short search query only.
  Example:
  "Goa beach aerial view"

- budget should be realistic.

- weather should include temperature.

Example:

Sunny (24°C - 31°C)

- travelTips should contain exactly 3 tips.

- estimatedCost must include:

Hotel

Food

Transport

Activities

- packingList should contain at least 6 items.

- restaurantSuggestion should contain 3 famous restaurants.

- hotelSuggestion should contain one good hotel.

- flightSuggestion should contain one route.

- Every day must contain at least 3 activities.

Return ONLY JSON.

User Request:

${prompt}
`;

  const response = await axios.post(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: fullPrompt,
        },
      ],
      temperature: 0.4,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );

  return response.data.choices[0].message.content;
}
export async function regenerateDayFromAI(prompt, day) {

  const regeneratePrompt = `
You are an expert AI Travel Planner.

A user already has a complete itinerary.

Regenerate ONLY Day ${day}.

Rules:

- Keep the SAME destination.
- Keep the SAME budget.
- Keep the SAME travel style.
- Do NOT repeat attractions already likely used.
- Generate 4-6 completely new activities.
- Activities should be realistic.
- Include proper times.

Return ONLY valid JSON.

{
  "day": ${day},
  "city": "",
  "activities": [
    {
      "time": "",
      "place": "",
      "description": ""
    }
  ]
}

User Request:

${prompt}
`;

  const response = await axios.post(
    "https://api.groq.com/openai/v1/chat/completions",
    {
      model: "llama-3.3-70b-versatile",
      messages: [
        {
          role: "user",
          content: regeneratePrompt,
        },
      ],
      temperature: 0.7,
    },
    {
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
    }
  );
let content = response.data.choices[0].message.content;

// Remove markdown code fences
content = content
  .replace(/```json/gi, "")
  .replace(/```/g, "")
  .trim();


try {
  return JSON.parse(content);
} catch (err) {
  console.error("Invalid JSON returned by AI:");
  console.error(content);
  throw new Error("AI returned invalid JSON");
}

}