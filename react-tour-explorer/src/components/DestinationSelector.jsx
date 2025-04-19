import React from 'react';

const DestinationSelector = ({ tours, selected, onChange }) => {
  // Customized saucey names
  const destinations = ['All Destinations', ...new Set(tours.map((tour) => tour.name))];

  return (
    <div className="destination-selector">
      <label htmlFor="destination">Choose a destination:</label>
      <select
        id="destination"
        value={selected}
        onChange={(e) => onChange(e.target.value)}
      >
        {destinations.map((name) => (
          <option key={name} value={name}>
            {name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DestinationSelector;
