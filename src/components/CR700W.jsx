import React from 'react';
import './CR700W.css';

const CR700W = () => {
  return (
    <div className="crighton-banner">
      <div className="banner-content">
        <h1 className="brand-name">
          THE CRIGHTON <span>CR700W</span>
        </h1>
        
        <h2 className="tagline">THE ULTIMATE TRACK BIKE</h2>
        
        <p className="description">
          Designed and made by the creator of the world's most successful rotary-powered race bikes – <strong>Brian Crighton</strong>. The CR700W encapsulates all Brian's vision, knowledge and technical successes attained over his 40-year career in developing, tuning and racing rotary-powered bikes.
        </p>

        <p className="limited-edition">THERE WILL BE ONLY 25</p>

        <p className="production-info">
          Each CR700W will be hand-built by Brian Crighton at state-of-the-art Rotron Power aero-engine facility in Wiltshire, UK.
        </p>

        <p className="pricing">
          PRICES FROM £145,000 <span>+VAT</span>
        </p>
        
        <p className="option">
          (road registered option available)
        </p>

        <a 
          href="mailto:info@rotron.co.uk?subject=I%20am%20interested%20in%20purchasing%20a%20Crighton%20CR700W" 
          className="register-button"
        >
          REGISTER YOUR INTEREST
        </a>
      </div>
    </div>
  );
};

export default CR700W;