import React from "react";
import "./History.css";
import { useSelector } from "react-redux";

const History = () => {
  const historyData = useSelector((state) => state.activity.history);

  return (
    <div className="history">
      <h2 className="history-title">Activity History</h2>
      <ul className="history-list">
        {historyData.map((entry, index) => (
          <li key={index} className="history-item">
            {entry.date} - {entry.steps} steps, {entry.distance} km,{" "}
            {entry.activeMinutes} min
          </li>
        ))}
      </ul>
    </div>
  );
};

export default History;
