import React from 'react';
import './assets/css/spinner.css';  // Make sure you have this CSS file in your project

const Spinner = () => {
    return (
        <div className="spinner-container">
            <div className="spinner"></div>
            <p className="spinner-text">Generating PDF... Please wait</p>
        </div>
    );
};

export default Spinner;
