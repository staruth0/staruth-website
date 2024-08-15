import React from 'react';
import Header from '../commons/Header';
import { Link } from 'react-router-dom';

const NotFound = () => {
  return (
    <>
      <Header text="Not Found Page" />
      <div className="container">
        <Link
          style={{ color: '#4169e1', textDecoration: 'underline' }}
          to="/admin/"
        >
          Back to Home Page
        </Link>
      </div>
    </>
  );
};

export default NotFound;
