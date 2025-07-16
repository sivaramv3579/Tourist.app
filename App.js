import React, { useState } from 'react';
import VoiceSearch from './components/VoiceSearch';
import TripPlanner from './components/TripPlanner';

function App() {
  const [query, setQuery] = useState('');

  return (
    <div>
      <h2>Voice-Based Search + Trip Planner</h2>
      <VoiceSearch setQuery={setQuery} />
      <p>You said: <strong>{query}</strong></p>
      <TripPlanner />
    </div>
  );
}

export default App;