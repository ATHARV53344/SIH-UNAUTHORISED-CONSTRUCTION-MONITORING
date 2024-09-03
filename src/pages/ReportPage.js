import React from 'react';
import ReportForm from '../components/ReportForm';
import './ReportPage.css';

function ReportPage() {
  return (
    <div className="report-page">
      <h2>Report Unauthorized Construction</h2>
      <ReportForm />
    </div>
  );
}

export default ReportPage;