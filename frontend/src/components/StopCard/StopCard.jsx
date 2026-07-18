import {
  FaClock,
  FaMapMarkerAlt,
  FaArrowUp,
  FaArrowDown,
  FaTrash,
} from "react-icons/fa";

import "./StopCard.css";

function StopCard({
  activity,
  index,
  total,
  onDelete,
  onMoveUp,
  onMoveDown,
}) {
  return (
    <div className="stop-card">

      <div className="stop-top">

        <div className="time-badge">
          <FaClock />
          <span>{activity.time}</span>
        </div>

      </div>

      <h3>
        <FaMapMarkerAlt />
        {activity.place}
      </h3>

      <p>{activity.description}</p>

      <div className="actions">

        <button
          className="move-btn"
          disabled={index === 0}
          onClick={() => onMoveUp(index)}
        >
          <FaArrowUp />
        </button>

        <button
          className="move-btn"
          disabled={index === total - 1}
          onClick={() => onMoveDown(index)}
        >
          <FaArrowDown />
        </button>

        <button
          className="delete-btn"
          onClick={() => onDelete(index)}
        >
          <FaTrash />
        </button>

      </div>

    </div>
  );
}

export default StopCard;