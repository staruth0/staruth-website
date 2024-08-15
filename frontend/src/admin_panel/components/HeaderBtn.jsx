import React from 'react';
import { Link } from 'react-router-dom';

const HeaderBtn = ({ text, urlText, url, className }) => {
  return (
    <header className={className ? (className = 'btw') : ''}>
      <h2>{text}</h2>
      <Link to={url} className="btn">
        {urlText}
      </Link>
    </header>
  );
};

export default HeaderBtn;
