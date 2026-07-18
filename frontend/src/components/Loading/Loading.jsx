import { FaRobot, FaPlaneDeparture } from "react-icons/fa";
import "./Loading.css";

function Loading() {
  return (
    <div className="loading-container">

      <div className="loading-card">

        <div className="robot">
          <FaRobot />
        </div>

        <h2>AI is Planning Your Perfect Trip</h2>

        <p>
          Finding attractions, planning routes and creating the best itinerary...
        </p>

        <div className="spinner"></div>

        <div className="steps">

          <div className="step">
            <FaPlaneDeparture />
            <span>Analyzing your destination</span>
          </div>

          <div className="step">
            📍
            <span>Selecting top attractions</span>
          </div>

          <div className="step">
            🗓
            <span>Building day-wise itinerary</span>
          </div>

          <div className="step">
            🎉
            <span>Almost Ready...</span>
          </div>

        </div>

      </div>

    </div>
  );
}

export default Loading;