import React from "react";
import "./DataTable.css";
import { useSelector, useDispatch } from "react-redux";
import SearchBar from "../components/SearchBar";

const DataTable = () => {
  const dispatch = useDispatch();
  const { filteredData, searchTerm } = useSelector((state) => state.activity);

  const handleSearch = (term) => {
    dispatch({ type: "SET_SEARCH_TERM", payload: term });
  };

  return (
    <div className="data-table">
      <h2 className="table-title">Data Table</h2>
      <SearchBar searchTerm={searchTerm} setSearchTerm={handleSearch} />
      <table className="table">
        <thead>
          <tr>
            <th>Date</th>
            <th>Steps</th>
            <th>Distance (km)</th>
            <th>Active Minutes</th>
          </tr>
        </thead>
        <tbody>
          {filteredData.map((entry, index) => (
            <tr key={index}>
              <td>{entry.date}</td>
              <td>{entry.steps}</td>
              <td>{entry.distance}</td>
              <td>{entry.activeMinutes}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DataTable;
