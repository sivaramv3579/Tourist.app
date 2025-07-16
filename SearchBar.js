import React from 'react';

const SearchBar = ({ setCity, setType }) => {
  return (
    <div style={{ marginBottom: '20px' }}>
      <input
        type="text"
        placeholder="Search by city..."
        onChange={(e) => {
          setType('');
          setCity(e.target.value);
        }}
      />
      <select
        onChange={(e) => {
          setCity('');
          setType(e.target.value);
        }}
        defaultValue=""
      >
        <option value="" disabled>Select Type</option>
        <option value="temple">Temple</option>
        <option value="beach">Beach</option>
        <option value="hill">Hill Station</option>
      </select>
    </div>
  );
};

export default SearchBar;