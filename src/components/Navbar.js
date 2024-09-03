import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">MonitoringApp</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Dashboard</Link></li>
        <li><Link to="/report">Report</Link></li>
        <li><Link to="/analytics">Analytics</Link></li>
        <li><Link to="/users">User Management</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;