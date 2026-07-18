import {
  FaHotel,
  FaUtensils,
  FaBus,
  FaTicketAlt
} from "react-icons/fa";

import "./CostBreakdown.css";

function CostBreakdown({ cost }) {

  return (

    <div className="cost-card">

      <h2>💰 Estimated Cost</h2>

      <div className="cost-grid">

        <div className="cost-item">
          <FaHotel />
          <span>Hotel</span>
          <h3>{cost.hotel}</h3>
        </div>

        <div className="cost-item">
          <FaUtensils />
          <span>Food</span>
          <h3>{cost.food}</h3>
        </div>

        <div className="cost-item">
          <FaBus />
          <span>Transport</span>
          <h3>{cost.transport}</h3>
        </div>

        <div className="cost-item">
          <FaTicketAlt />
          <span>Activities</span>
          <h3>{cost.activities}</h3>
        </div>

      </div>

    </div>

  );

}

export default CostBreakdown;