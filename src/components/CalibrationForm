// client/src/components/CalibrationForm.js
import React, { useState } from 'react';

const CalibrationForm = () => {
  const [equipment, setEquipment] = useState('');
  const [calibrationDate, setCalibrationDate] = useState('');
  const [calibrationResult, setCalibrationResult] = useState('');

  const submitCalibration = async () => {
    try {
      const response = await fetch('http://localhost:5000/submit_calibration', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ equipment, calibrationDate }),
      });

      const data = await response.json();
      setCalibrationResult(data.message);
    } catch (error) {
      console.error('Error submitting calibration:', error);
    }
  };

  return (
    <div>
      <label htmlFor="equipment">Equipment:</label>
      <input
        type="text"
        id="equipment"
        value={equipment}
        onChange={(e) => setEquipment(e.target.value)}
      />

      <label htmlFor="calibrationDate">Calibration Date:</label>
      <input
        type="date"
        id="calibrationDate"
        value={calibrationDate}
        onChange={(e) => setCalibrationDate(e.target.value)}
      />

      <button onClick={submitCalibration}>Submit Calibration</button>

      {calibrationResult && <p>{calibrationResult}</p>}
    </div>
  );
};

export default CalibrationForm;
