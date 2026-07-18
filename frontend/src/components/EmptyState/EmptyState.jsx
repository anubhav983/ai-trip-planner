import "./EmptyState.css";

function EmptyState() {
  return (
    <section className="features-section">

      <div className="features-header">

        <span className="section-badge">
          ✨ AI Powered Features
        </span>

        <h2>
          Everything You Need For The Perfect Journey
        </h2>

        <p>
          Plan smarter with AI-generated itineraries, travel insights,
          budgeting, weather forecasts, packing suggestions, and much more.
        </p>

      </div>

     <div className="features-grid">

  <div className="feature-card">
    <div className="feature-icon">🗺️</div>
    <h3>Smart Itinerary</h3>
    <p>
      AI creates a complete day-by-day travel itinerary based on your preferences.
    </p>
  </div>

  <div className="feature-card">
    <div className="feature-icon">💰</div>
    <h3>Budget Planner</h3>
    <p>
      Get an estimated travel budget including hotels, transport and activities.
    </p>
  </div>

  <div className="feature-card">
    <div className="feature-icon">☀️</div>
    <h3>Weather Insights</h3>
    <p>
      View expected weather conditions before planning your trip.
    </p>
  </div>

  <div className="feature-card">
    <div className="feature-icon">🎒</div>
    <h3>Packing Checklist</h3>
    <p>
      Never forget essentials with an automatically generated packing list.
    </p>
  </div>

  <div className="feature-card">
    <div className="feature-icon">🔄</div>
    <h3>Regenerate Day</h3>
    <p>
      Instantly regenerate any single day without changing the rest of your itinerary.
    </p>
  </div>

  <div className="feature-card">
    <div className="feature-icon">📅</div>
    <h3>Interactive Timeline</h3>
    <p>
      Expand or collapse each day for a clean and organized itinerary view.
    </p>
  </div>

  <div className="feature-card">
    <div className="feature-icon">🔀</div>
    <h3>Reorder Activities</h3>
    <p>
      Rearrange activities within a day using simple controls to customize your plan.
    </p>
  </div>

  <div className="feature-card">
    <div className="feature-icon">📄</div>
    <h3>Download PDF</h3>
    <p>
      Export your complete itinerary as a PDF and carry it anywhere.
    </p>
  </div>

</div>

    </section>
  );
}

export default EmptyState;