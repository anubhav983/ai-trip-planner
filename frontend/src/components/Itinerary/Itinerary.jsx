import {
  FaMapMarkedAlt,
  FaCalendarAlt,
  FaMagic,
  FaCloudSun,
  FaMoneyBillWave,
  FaClock,
  FaLightbulb,
  FaDownload,
  FaRedo,
} from "react-icons/fa";

import DayCard from "../DayCard/DayCard";
import "./Itinerary.css";

function Itinerary({ trip,
  onRegenerateDay,
 }) {
  return (
    <div className="itinerary-page">

      {/* ================= HERO ================= */}

      <section
        className="hero-card"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1600&q=80')",
        }}
      >
        <div className="hero-overlay">

          <span className="badge">
            <FaMagic />
            AI Generated Itinerary
          </span>

          <h1>{trip.tripTitle}</h1>

          <p className="hero-subtitle">
            A personalized travel plan created especially for you.
          </p>

          <div className="trip-info">

            <div className="info-box">
              <FaCalendarAlt />
              <div>
                <small>Duration</small>
                <h4>{trip.days.length} Days</h4>
              </div>
            </div>

            <div className="info-box">
              <FaMapMarkedAlt />
              <div>
                <small>Destination</small>
                <h4>{trip.destination || trip.days[0]?.city}</h4>
              </div>
            </div>

            <div className="info-box">
              <FaCloudSun />
              <div>
                <small>Weather</small>
                <h4>{trip.weather}</h4>
              </div>
            </div>

            <div className="info-box">
              <FaMoneyBillWave />
              <div>
                <small>Budget</small>
                <h4>{trip.budget}</h4>
              </div>
            </div>

            <div className="info-box">
              <FaClock />
              <div>
                <small>Best Time</small>
                <h4>{trip.bestTimeToVisit}</h4>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ================= SUMMARY ================= */}

      <section className="summary-card">

        <h2>
          ✨ AI Trip Summary
        </h2>

        <p>
          {trip.tripSummary}
        </p>

      </section>

      {/* ================= TRAVEL TIPS ================= */}

      <section className="tips-card">

        <h2>
          <FaLightbulb />
          Travel Tips
        </h2>

        <div className="tips-grid">

          {trip.travelTips?.map((tip, index) => (

            <div
              className="tip"
              key={index}
            >

              ✅ {tip}

            </div>

          ))}

        </div>

      </section>

      {/* ================= COST ================= */}

      {trip.estimatedCost && (

        <section className="cost-card">

          <h2>💰 Estimated Cost</h2>

          <div className="cost-grid">

            <div className="cost-item">
              🏨
              <h4>Hotel</h4>
              <span>{trip.estimatedCost.hotel}</span>
            </div>

            <div className="cost-item">
              🍽
              <h4>Food</h4>
              <span>{trip.estimatedCost.food}</span>
            </div>

            <div className="cost-item">
              🚌
              <h4>Transport</h4>
              <span>{trip.estimatedCost.transport}</span>
            </div>

            <div className="cost-item">
              🎟
              <h4>Activities</h4>
              <span>{trip.estimatedCost.activities}</span>
            </div>

          </div>

        </section>

      )}

            {/* ================= PACKING LIST ================= */}

      {trip.packingList && trip.packingList.length > 0 && (

        <section className="packing-card">

          <h2>🎒 Packing Checklist</h2>

          <div className="packing-grid">

            {trip.packingList.map((item, index) => (

              <div
                className="packing-item"
                key={index}
              >
                ✅ {item}
              </div>

            ))}

          </div>

        </section>

      )}

      {/* ================= MUST VISIT ================= */}

      {trip.mustVisit && trip.mustVisit.length > 0 && (

        <section className="visit-card">

          <h2>⭐ Must Visit Places</h2>

          <div className="visit-grid">

            {trip.mustVisit.map((place, index) => (

              <div
                className="visit-item"
                key={index}
              >
                📍 {place}
              </div>

            ))}

          </div>

        </section>

      )}

      {/* ================= LOCAL FOOD ================= */}

      {trip.localFood && trip.localFood.length > 0 && (

        <section className="food-card">

          <h2>🍜 Local Food to Try</h2>

          <div className="food-grid">

            {trip.localFood.map((food, index) => (

              <div
                className="food-item"
                key={index}
              >
                🍽 {food}
              </div>

            ))}

          </div>

        </section>

      )}

      {/* ================= IMPORTANT NOTES ================= */}

      {trip.importantNotes && trip.importantNotes.length > 0 && (

        <section className="notes-card">

          <h2>⚠ Important Notes</h2>

          <ul>

            {trip.importantNotes.map((note, index) => (

              <li key={index}>{note}</li>

            ))}

          </ul>

        </section>

      )}

      {/* ================= TIMELINE ================= */}

      <section className="timeline-section">

        <h2>🗓 Day-by-Day Itinerary</h2>

        <div className="timeline">


            {trip.days.map((day) => (

  <DayCard
    key={day.day}
    day={day}
    onRegenerate={onRegenerateDay}
  />

))}



        </div>

      </section>

      {/* ================= ACTION BUTTONS ================= */}

      <section className="bottom-actions">

        <button
         className="action-btn pdf-btn"
  onClick={() => window.print()}
        >
         
          <FaDownload />
          Download PDF
        </button>

        <button
          className="action-btn regenerate-btn"
          onClick={() => window.location.reload()}
        >
          <FaRedo />
          Generate New Trip
        </button>

      </section>

    </div>

  );
}

export default Itinerary;