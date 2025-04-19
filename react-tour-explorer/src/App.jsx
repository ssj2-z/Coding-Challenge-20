import React, { useEffect, useState } from 'react';
import Gallery from './components/Gallery';
import DestinationSelector from './components/DestinationSelector';

const API_URL = 'https://course-api.com/react-tours-project';

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedDestination, setSelectedDestination] = useState('All Destinations');

  const fetchTours = async () => {
    try {
      const response = await fetch(API_URL);
      if (!response.ok) throw new Error('Failed to fetch tours');
      const data = await response.json();
      setTours(data);
      setError(null);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchTours();
  }, []);

  const removeTour = (id) => {
    setTours(tours.filter((tour) => tour.id !== id));
  };

  const filteredTours =
    selectedDestination === 'All Destinations'
      ? tours
      : tours.filter((tour) => tour.name === selectedDestination);

  if (!loading && tours.length === 0) {
    return (
      <main>
        <h2>No tours left. </h2>
        <p>Please refresh to see the tours again.</p>
        <button
          onClick={() => {
            setLoading(true);
            fetchTours();
          }}
        >
          Pretty Please Refresh
        </button>
      </main>
    );
  }

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
