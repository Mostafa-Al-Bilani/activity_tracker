import React from "react";
import "./ChartComponent.css";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, LineElement, CategoryScale, LinearScale, PointElement } from "chart.js";

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);

const ChartComponent = ({ data, label }) => {
  const chartData = {
    labels: data.map((d) => d.date),
    datasets: [
      {
        label: label,
        data: data.map((d) => d.value),
        borderColor: "#007bff",
        backgroundColor: "rgba(0, 123, 255, 0.5)",
      },
    ],
  };

  return (
    <div className="chart-container">
      <Line data={chartData} />
    </div>
  );
};

export default ChartComponent;
