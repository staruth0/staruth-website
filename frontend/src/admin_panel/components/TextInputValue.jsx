import React from 'react';

const TextInputValue = ({ label, name, placeholder, value, change }) => {
  return (
    <label className="input-component" htmlFor={name}>
      <span>{label}:</span>
      <input
        type="text"
        id={name}
        placeholder={placeholder}
        value={value}
        required
        onChange={change}
      />
    </label>
  );
};

export default TextInputValue;
