import React, { useState, useEffect } from 'react';
import axios from 'axios';
import SearchBar from './components/SearchBar';
import PlaceCard from './components/PlaceCard';

function App() {
  const [places, setPlaces] = useState([]);
  const [city, setCity] = useState('');
  const [type, setType] = useState('');

  const fetchPlaces = async () => {
    let url = 'http://localhost:8080/places';
    if (city) url += `/by-city?city=${city}`;
    else if (type) url += `/by-type?type=${type}`;
    const response = await axios.get(url);
    setPlaces(response.data);
  };

  useEffect(() => {
    fetchPlaces();
  }, [city, type]);

  return (
    <div>
      <h2>Tourist Explorer</h2>
      <SearchBar setCity={setCity} setType={setType} />
      {places.map((place) => (
        <PlaceCard key={place.id} place={place} />
      ))}
    </div>
  );
}

export default App;