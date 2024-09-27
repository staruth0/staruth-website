import React from 'react';

function Card({ data }) {
  return (
    <div className="pf_card">
      <h2>{data.pf_name}</h2>
      <p>{data.pf}</p>
      <img src={data.image} alt={data.title} />
    </div>
  );
}

export default Card;