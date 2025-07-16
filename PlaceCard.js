import React from 'react';

const PlaceCard = ({ place }) => {
  return (
    <div style={{ border: '1px solid gray', padding: '10px', margin: '10px' }}>
      <h3>{place.name} ({place.city})</h3>
      <p><strong>Type:</strong> {place.type}</p>
      <p><strong>Fee:</strong> ₹{place.entryFee}</p>
      <p>{place.description}</p>
    </div>
  );
};

export default PlaceCard;