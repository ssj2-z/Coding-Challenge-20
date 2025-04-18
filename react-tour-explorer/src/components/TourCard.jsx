import React from 'react';

const TourCard = ({ tour }) => {
  const { id, name, info, image, price } = tour;

  return (
    <article className="tour-card">
      <img src={image} alt={name} />
      <div className="tour-details">
        <h2>{name}</h2>
        <h4>${price}</h4>
        <p>{info}</p>
        <button>Not Interested</button>
      </div>
    </article>
  );
};

export default TourCard;
