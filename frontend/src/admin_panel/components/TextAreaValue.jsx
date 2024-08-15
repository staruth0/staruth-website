import React from 'react';

const TextAreaValue = ({ label, name, placeholder, value, change }) => {
  return (
    <label className="textArea-component" htmlFor={name}>
      <span>{label}:</span>
      <textarea
        id={name}
        placeholder={placeholder}
        value={value}
        required
        onChange={change}
      ></textarea>
    </label>
  );
};

export default TextAreaValue;
