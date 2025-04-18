import React, { useEffect, useState } from 'react';
import Gallery from './components/Gallery';

const API_URL = 'https://course-api.com/react-tours-project';

const App = () => {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

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

  return (
    <main>
      <h1>Tour Explorer</h1>
      <Gallery tours={tours} loading={loading} error={error} />
    </main>
  );
};

export default App;
