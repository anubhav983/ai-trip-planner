# 🌍 AI Trip Planner

An AI-powered travel itinerary generator that creates personalized travel plans from natural language prompts. Users simply describe their trip requirements, and the application generates a complete itinerary including destination details, day-wise schedules, travel tips, estimated expenses, and more.

The application is built using the **MERN-style architecture (React + Node.js + Express)** and uses the **Groq Llama 3.3 70B Versatile** model to generate structured travel plans in JSON format.

---

# ✨ Current Features

## 🤖 AI Trip Generation

- Generate personalized travel itineraries using AI.
- Accepts natural language prompts.
- Produces structured JSON responses.
- Fast itinerary generation using Groq API.

---

## 🗓️ Day-wise Itinerary

- Complete itinerary divided into individual days.
- Every day contains:
  - City
  - Timeline
  - Multiple activities
  - Place descriptions

---

## 🔄 Regenerate Individual Day

- Regenerate only a selected day.
- Remaining itinerary remains unchanged.
- AI creates a completely new schedule for that day.
- Automatically updates the interface.

---

## 📍 Destination Information

Displays:

- Trip title
- Destination
- Destination image
- Trip summary
- Best time to visit
- Weather information

---

## 💰 Cost Estimation

Provides estimated expenses for:

- Hotel
- Food
- Transport
- Activities

---

## ✈ Flight Suggestion

Shows:

- Suggested route
- Approximate airfare

---

## 🏨 Hotel Recommendation

Displays:

- Hotel name
- Price per night
- Rating

---

## 🍽 Restaurant Recommendations

Suggests popular restaurants at the destination.

---

## 🎒 Packing Checklist

Automatically generates a packing list based on the destination and travel conditions.

---

## 💡 Travel Tips

AI provides useful travel tips including:

- Safety
- Transportation
- Local customs
- Travel recommendations

---

## 📄 PDF Download

Users can download the generated itinerary as a PDF.

---

## 🎨 Modern Responsive UI

- Fully responsive design
- Interactive cards
- Timeline layout
- Attractive blue theme
- Mobile friendly

---

# 🛠 Tech Stack

## Frontend

- React.js
- Axios
- React Icons
- CSS3

---

## Backend

- Node.js
- Express.js

---

## AI Model

- Groq API
- Llama 3.3 70B Versatile

---

# 📂 Project Structure

```
AI-Trip-Planner
│
├── backend
│   │
│   ├── controllers
│   │     └── tripController.js
│   │
│   ├── routes
│   │     └── tripRoutes.js
│   │
│   ├── services
│   │     └── geminiService.js
│   │
│   ├── utils
│   │     └── validateResponse.js
│   │
│   ├── .env
│   ├── package.json
│   ├── package-lock.json
│   └── server.js
│
├── frontend
│   │
│   ├── public
│   │
│   ├── src
│   │   │
│   │   ├── components
│   │   │
│   │   │   ├── TripInput
│   │   │   ├── Itinerary
│   │   │   ├── DayCard
│   │   │   ├── StopCard
│   │   │   ├── Loading
│   │   │   └── EmptyState
│   │   │
│   │   ├── services
│   │   │     └── api.js
│   │   │
│   │   ├── App.jsx
│   │   ├── index.js
│   │   └── index.css
│   │
│   ├── package.json
│   └── package-lock.json
│
├── .gitignore
└── README.md
```

---

# ⚙ Backend Architecture

```
React Frontend
        │
        │ HTTP Request
        ▼
Express API
        │
        ▼
Trip Controller
        │
        ▼
AI Service
        │
        ▼
Groq API
        │
        ▼
JSON Validation
        │
        ▼
Frontend Response
```

---

# 🚀 Installation

## Clone Repository

```bash
git clone https://github.com/anubhav983/ai-trip-planner.git

cd ai-trip-planner
```

---

# Backend Setup

```bash
cd backend
```

Install packages

```bash
npm install
```

Create

```
.env
```

```
GROQ_API_KEY=YOUR_API_KEY
```

Run server

```bash
npm start
```

Backend

```
http://localhost:5000
```

---

# Frontend Setup

```bash
cd frontend
```

Install packages

```bash
npm install
```

Run project

```bash
npm start
```

Frontend

```
http://localhost:3000
```

---

# API Endpoints

## Generate Complete Trip

```
POST /api/trip
```

Example

```json
{
  "prompt": "Plan a 5 day trip to Goa under ₹30000"
}
```

---

## Regenerate Single Day

```
POST /api/trip/regenerate-day
```

Example

```json
{
  "prompt": "Plan a 5 day Goa trip",
  "day": 2
}
```

---

# Workflow

```
User Prompt
      │
      ▼
React Frontend
      │
      ▼
Express Backend
      │
      ▼
Groq AI Model
      │
      ▼
Structured JSON
      │
      ▼
Response Validation
      │
      ▼
Interactive Itinerary UI
```

---

# Current Functionality

✔ AI Trip Generation

✔ Destination Overview

✔ Trip Summary

✔ Weather Information

✔ Estimated Cost

✔ Flight Suggestion

✔ Hotel Recommendation

✔ Restaurant Recommendation

✔ Packing Checklist

✔ Travel Tips

✔ Day-wise Timeline

✔ Regenerate Individual Day

✔ PDF Download

✔ Responsive UI

---

# Deployment

### Frontend

Vercel

### Backend

Render

---

# Author

**Anubhav Tiwari**

- GitHub: https://github.com/anubhav983

---

# License

This project is licensed under the MIT License.
