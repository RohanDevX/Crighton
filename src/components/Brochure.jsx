import React from 'react';
import './Brochure.css';
import BrochureImage from '../assets/Brochure.png';

const Brochure = () => {
  return (
    <div className="brochure-outer">
      <div className="brochure-inner">
        <div className="brochure-image">
          <img src={BrochureImage} alt="Brochure" />
        </div>
        <div className="brochure-content">
          <h2>
            <span className="line1">THE CRIGHTON CR700W</span><br />
            <span className="line2">BROCHURE IS HERE</span>
          </h2>
          <a href="/" className="download-btn">Download PDF</a>
        </div>
      </div>
    </div>
  );
};

export default Brochure;
