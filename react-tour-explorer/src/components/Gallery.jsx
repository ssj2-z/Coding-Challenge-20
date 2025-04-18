import React from 'react';
import TourCard from './TourCard';

const Gallery = ({ tours, loading, error }) => {
  if (loading) return <p>Loading tours...</p>;
  if (error) return <p>Error: {error}</p>;
  if (tours.length === 0) return <p>No tours left.</p>;

  return (
    <section className="gallery">
      {tours.map((tour) => (
        <TourCard key={tour.id} tour={tour} />
      ))}
    </section>
  );
};

export default Gallery;
