import React, { useState } from 'react';
import './ReportForm.css';

function ReportForm() {
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');
  const [photos, setPhotos] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., POST to an API)
    console.log({ location, description, photos });
  };

  return (
    <form className="report-form" onSubmit={handleSubmit}>
      <div className="form-group">
        <label>Location</label>
        <input type="text" value={location} onChange={(e) => setLocation(e.target.value)} required />
      </div>
      <div className="form-group">
        <label>Description</label>
        <textarea value={description} onChange={(e) => setDescription(e.target.value)} required></textarea>
      </div>
      <div className="form-group">
        <label>Upload Photos</label>
        <input type="file" onChange={(e) => setPhotos(e.target.files[0])} />
      </div>
      <button type="submit">Submit Report</button>
    </form>
  );
}

export default ReportForm;