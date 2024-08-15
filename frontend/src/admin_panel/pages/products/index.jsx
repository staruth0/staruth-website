import React from 'react';
import { Outlet } from 'react-router-dom';

const Products = () => {
  return (
    <div className="jim">
      <Outlet />
    </div>
  );
};

export default Products;
