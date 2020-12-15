import React from 'react';
import './dropdown.css';

const Dropdown = ({ showDropdown }) => {
  if (showDropdown) {
    return <div className="dropdown-container"></div>;
  }

  return null;
};

export default Dropdown;
