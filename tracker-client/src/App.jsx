import { useSelector } from "react-redux";
import Dashboard from "./pages/DashBoard/DashBoard";
import History from "./pages/History/History";
import DataTable from "./pages/DataTable/DataTable";
import SideBar from "./components/SideBar/Sidebar";
import StatCard from "./components/StatCard/StatCard";
import Chart from "./components/ChartComponent/Chart";

function App() {
  const { totalSteps, totalDistance, activeMinutes } = useSelector(
    (state) => state.activityData
  );

  return (
    <Router>
      <div className="flex h-screen">
        <SideBar />

        <div className="flex-1 p-6 overflow-auto">
          <div className="flex flex-wrap justify-between mb-6">
            <StatCard title="Total Steps" value={totalSteps} />
            <StatCard title="Total Distance" value={`${totalDistance} km`} />
            <StatCard title="Active Minutes" value={`${activeMinutes} min`} />
          </div>

          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/history" element={<History />} />
            <Route path="/data-table" element={<DataTable />} />
          </Routes>

          <Chart />
        </div>
      </div>
    </Router>
  );
}

export default App;
