import React from 'react';
import './Loader.css'; // Add CSS file for styling

const Loader = () => {
  return (
    <div className="loader-container">
      <div className="loader">
        <div className="loader-inner"></div>
        <div className="loader-inner"></div>
        <div className="loader-inner"></div>
      </div>
    </div>
  );
};

export default Loader;
