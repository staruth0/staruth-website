import React from 'react';

// function Card({ data }) {
  return (
    <div className="pf_card">
      {/* <h2>{data.pf_name}</h2> */}
      {/* <p>{data.pf_role}</p> */}
      <img src={data.pf_image} alt={data.pf_name} />
    </div>
  );
// }

export default Card;