import React, { useEffect, useState } from 'react';
import Gallery from './components/Gallery';
import DestinationSelector from './components/DestinationSelector';

const API_URL = 'https://course-api.com/react-tours-project';

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState('All Destinations');

  useEffect(() => {
    const fetchTours = async () => {
      try {
        const response = await fetch(API_URL);
        if (!response.ok) throw new Error('Failed to fetch tours');
        const data = await response.json();
        setTours(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTours();
  }, []);

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  const filteredTours =
    selectedDestination === 'All Destinations'
      ? tours
      : tours.filter((tour) => tour.name === selectedDestination);

  return (
    <main>
      <h1>Tour Explorer</h1>
      <DestinationSelector
        tours={tours}
        selected={selectedDestination}
        onChange={setSelectedDestination}
      />
      <Gallery
        tours={filteredTours}
        loading={loading}
        error={error}
        removeTour={removeTour}
      />
    </main>
  );
};

export default App;