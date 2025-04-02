import React from "react";
import "./Dashboard.css";
import { useSelector } from "react-redux";
import StatCard from "../../components/StatCard/StatCard";
import Chart from "../../components/ChartComponent/Chart";

const Dashboard = () => {
  const stats = useSelector((state) => state.activity.stats);
  const chartData = useSelector((state) => state.activity.chartData);

  return (
    <div className="dashboard">
      <h2 className="dashboard-title">Dashboard</h2>
      <div className="stats-container">
        <StatCard title="Total Steps" value={stats.totalSteps} />
        <StatCard title="Total Distance" value={`${stats.totalDistance} km`} />
        <StatCard
          title="Total Active Minutes"
          value={stats.totalActiveMinutes}
        />
      </div>
      <Chart data={chartData} label="Steps Over Time" />
    </div>
  );
};

export default Dashboard;
