import {
  FaMagic,
  FaArrowRight,
  FaUmbrellaBeach,
  FaMountain,
  FaGlobeAsia,
  FaMapMarkedAlt,
} from "react-icons/fa";

import "./TripInput.css";

function TripInput({ prompt, setPrompt, onGenerate }) {

  const suggestions = [
    {
      title: "Goa",
      icon: <FaUmbrellaBeach />,
      value:
        "Plan a 4-day trip to Goa under ₹20,000. Include beaches, nightlife, seafood and water sports.",
    },
    {
      title: "Manali",
      icon: <FaMountain />,
      value:
        "Plan a 5-day trip to Manali under ₹30,000. Include adventure sports, cafés and sightseeing.",
    },
    {
      title: "Japan",
      icon: <FaGlobeAsia />,
      value:
        "Plan a 7-day trip to Japan. I love anime, temples, sushi and shopping.",
    },
    {
      title: "Paris",
      icon: <FaMapMarkedAlt />,
      value:
        "Plan a romantic 5-day trip to Paris with museums, cafés and the Eiffel Tower.",
    },
  ];

  return (
    <section className="trip-section">

      <div className="trip-card">

        <div className="trip-header">

          <div className="ai-badge">
            <FaMagic />
            AI Powered Travel Planner
          </div>

          <h2>Create Your Dream Journey</h2>

          <p>
            Tell AI where you want to travel, your budget,
            number of days and interests.
            We'll generate a complete itinerary instantly.
          </p>

        </div>

        <div className="chips">

          {suggestions.map((item, index) => (
            <button
              key={index}
              className="chip"
              onClick={() => setPrompt(item.value)}
            >
              {item.icon}
              <span>{item.title}</span>
            </button>
          ))}

        </div>

        <textarea
          value={prompt}
          onChange={(e) => setPrompt(e.target.value)}
          placeholder={`Example:

🌍 Destination : Bali

📅 Days : 5

💰 Budget : ₹40,000

❤️ Interests :

• Beaches
• Adventure
• Cafés
• Nightlife
• Shopping`}
        />

        <div className="bottom">

          <span>
            {prompt.length} Characters
          </span>

          <button
            className="generate-btn"
            onClick={onGenerate}
          >
            ✨ Generate Itinerary
            <FaArrowRight />
          </button>

        </div>

      </div>

    </section>
  );
}

export default TripInput;