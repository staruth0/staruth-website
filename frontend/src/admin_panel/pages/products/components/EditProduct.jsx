import React from 'react';
import Header from '../../../commons/Header';
import { useParams } from 'react-router-dom';

const EditProduct = () => {
  const { id } = useParams();
  return (
    <div>
      <Header text="Edit Product" />
      <div className="container">
        <p>{id} specs to be edited will display here</p>
      </div>
    </div>
  );
};

export default EditProduct;
