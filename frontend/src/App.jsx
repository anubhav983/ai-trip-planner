import { useState } from "react";

import "./App.css";

import Navbar from "./components/Navbar/Navbar";
import TripInput from "./components/TripInput/TripInput";
import EmptyState from "./components/EmptyState/EmptyState";
import Footer from "./components/Footer/Footer";

import Loading from "./components/Loading/Loading";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import Itinerary from "./components/Itinerary/Itinerary";

import {
  generateTrip,
  regenerateDay,
} from "./services/api";

function App() {
  const [prompt, setPrompt] = useState("");
  const [trip, setTrip] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  // Generate Complete Trip
  const handleGenerate = async () => {
    if (!prompt.trim()) {
      alert("Please enter your trip details.");
      return;
    }

    setLoading(true);
    setTrip(null);
    setError("");

    try {
      const data = await generateTrip(prompt);

      // Loading animation
      setTimeout(() => {
        setTrip(data);
        setLoading(false);
      }, 2500);

    } catch (err) {
      console.error(err);
      setLoading(false);
      setError("Failed to generate itinerary.");
    }
  };

  // Regenerate Only One Day
  const handleRegenerateDay = async (dayNumber) => {
  try {
    setLoading(true);

    const newDay = await regenerateDay(prompt, dayNumber);

    setTrip((prev) => {
      const updatedDays = prev.days.map((d) =>
        Number(d.day) === Number(dayNumber) ? newDay : d
      );

      return {
        ...prev,
        days: updatedDays,
      };
    });

  } catch (err) {
    console.error(err);
    alert("Failed to regenerate this day.");
  } finally {
    setLoading(false);
  }
};
  // Loading Screen
  if (loading) {
    return (
      <div className="loading-page">
        <Loading />
      </div>
    );
  }

  // Itinerary Screen
  if (trip) {
    return (
      <div className="itinerary-page">
        <Itinerary
          trip={trip}
          onRegenerateDay={handleRegenerateDay}
        />
      </div>
    );
  }

  // Home Screen
  return (
    <div className="App">

      <Navbar />

      <TripInput
        prompt={prompt}
        setPrompt={setPrompt}
        onGenerate={handleGenerate}
      />

      {error && <ErrorMessage message={error} />}

      {!error && <EmptyState />}

      <Footer />

    </div>
  );
}

export default App;