import React from 'react';
import './Dashboard.css';

function Dashboard() {
  return (
    <div className="dashboard">
      <div className="metric-card">
        <h3>Total Reports</h3>
        <p>100</p>
      </div>
      <div className="metric-card">
        <h3>Verified Cases</h3>
        <p>60</p>
      </div>
      <div className="metric-card">
        <h3>Pending Actions</h3>
        <p>30</p>
      </div>
      <div className="metric-card">
        <h3>Resolved Cases</h3>
        <p>40</p>
      </div>
    </div>
  );
}

export default Dashboard;