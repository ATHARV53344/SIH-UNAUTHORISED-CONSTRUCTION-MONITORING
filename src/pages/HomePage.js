import React from 'react';
import Dashboard from '../components/Dashboard';
import MapView from '../components/MapView';
import './HomePage.css';

function HomePage() {
  return (
    <div className="home-page">
      <Dashboard />
      <MapView />
    </div>
  );
}

export default HomePage;