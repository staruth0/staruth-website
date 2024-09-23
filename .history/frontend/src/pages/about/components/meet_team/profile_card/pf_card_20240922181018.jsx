import React from 'react';

function Card({ data }) {
  return (
    <div className="card">
      {/* Render card content based on data */      <h2>{data.title}</h2>
      <p>{data.description}</p>
      <img src={data.image} alt={data.title} />
    </div>
  );
}

export default Card;