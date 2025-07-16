import React, { useState } from 'react';

const TripPlanner = () => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const [options, setOptions] = useState([]);

  const handlePlan = async () => {
    // Simulated response
    const response = {
      source,
      destination,
      options: [
        { mode: 'bus', cost: 500, duration: '12h' },
        { mode: 'train', cost: 350, duration: '10h' },
        { mode: 'flight', cost: 2100, duration: '1h 10m' }
      ]
    };
    setOptions(response.options);
  };

  return (
    <div>
      <h3>Trip Cost Planner</h3>
      <input placeholder="From" value={source} onChange={(e) => setSource(e.target.value)} />
      <input placeholder="To" value={destination} onChange={(e) => setDestination(e.target.value)} />
      <button onClick={handlePlan}>Plan Trip</button>

      {options.length > 0 && (
        <div>
          <h4>Options:</h4>
          {options.map((opt, idx) => (
            <div key={idx}>
              {opt.mode.toUpperCase()}: ₹{opt.cost} - {opt.duration}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default TripPlanner;