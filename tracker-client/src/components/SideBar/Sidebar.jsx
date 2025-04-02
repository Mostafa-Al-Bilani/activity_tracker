import React from "react";
import { NavLink } from "react-router-dom";
import "./SideBar.css";

const SideBar = () => {
  return (
    <nav className="sidebar">
      <h2 className="sidebar-title">Navigation</h2>
      <ul className="sidebar-menu">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Dashboard
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/history"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            History
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/data-table"
            className={({ isActive }) => (isActive ? "active" : "")}
          >
            Data Table
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default SideBar;
