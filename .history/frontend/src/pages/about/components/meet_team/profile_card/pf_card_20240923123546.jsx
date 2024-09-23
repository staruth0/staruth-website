import React from 'react';

function Card({ data }) {
  return (
    <div className="pf_card">
      <h2>{data.ti}</h2>
      <p>{data.description}</p>
      <img src={data.image} alt={data.title} />
    </div>
  );
}

export default Card;