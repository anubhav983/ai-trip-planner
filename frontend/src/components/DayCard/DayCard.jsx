import { useState, useEffect } from "react";
import {
  FaCalendarDay,
  FaMapMarkerAlt,
  FaRedo,
} from "react-icons/fa";

import StopCard from "../StopCard/StopCard";
import "./DayCard.css";

function DayCard({ day, onRegenerate }) {

  const [activities, setActivities] = useState(day.activities);
  const [expanded, setExpanded] = useState(true);

  // Update activities whenever a regenerated day is received
  useEffect(() => {
    setActivities(day.activities);
  }, [day]);

  // Delete Activity
  const deleteStop = (index) => {

    setActivities(
      activities.filter((_, i) => i !== index)
    );

  };

  // Move Activity Up
  const moveUp = (index) => {

    if (index === 0) return;

    const updated = [...activities];

    [updated[index], updated[index - 1]] = [
      updated[index - 1],
      updated[index],
    ];

    setActivities(updated);

  };

  // Move Activity Down
  const moveDown = (index) => {

    if (index === activities.length - 1) return;

    const updated = [...activities];

    [updated[index], updated[index + 1]] = [
      updated[index + 1],
      updated[index],
    ];

    setActivities(updated);

  };

  return (

    <div className="day-card">

      {/* Header */}

      <div
        className="day-header"
        onClick={() => setExpanded(!expanded)}
      >

        <div className="day-number">
          <FaCalendarDay />
        </div>

        <div className="day-title">

          <h2>Day {day.day}</h2>

          <p>
            <FaMapMarkerAlt />
            {day.city}
          </p>

        </div>

        <div className="expand-icon">
          {expanded ? "▲" : "▼"}
        </div>

      </div>

      {/* Regenerate Button */}

      <div className="day-actions">

        <button
          className="regenerate-btn"
          onClick={() => onRegenerate(day.day)}
        >
          <FaRedo />
          Regenerate Day
        </button>

      </div>

      {/* Timeline */}

      {expanded && (

        <div className="timeline">

          {activities.map((activity, index) => (

            <div
              className="timeline-row"
              key={index}
            >

              <div className="timeline-left">

                <div className="dot"></div>

                {index !== activities.length - 1 && (
                  <div className="line"></div>
                )}

              </div>

              <div className="timeline-right">

                <StopCard
                  activity={activity}
                  index={index}
                  total={activities.length}
                  onDelete={deleteStop}
                  onMoveUp={moveUp}
                  onMoveDown={moveDown}
                />

              </div>

            </div>

          ))}

        </div>

      )}

    </div>

  );
}

export default DayCard;