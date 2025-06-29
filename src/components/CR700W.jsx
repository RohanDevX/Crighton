// CR700W.jsx
import React from 'react';
import './CR700W.css';

const CR700W = () => {
  return (
    <div className="crighton-banner">
      <div className="banner-content">
        <h1 className="brand-name">THE CRIGHTON <span>CR700W</span></h1>
        
        <h2 className="tagline">THE ULTIMATE TRACK BIKE</h2>
        
        <div className="divider"></div>
        
        <p className="description">
          Designed and made by the creator of the world's most successful rotary-powered race bikes - Brian Crighton. The<br />
          CR700W encapsulates all Brian's vision, knowledge and technical successes attained over his 40-year career in<br />
          developing, tuning and racing rotary-powered bikes.
        </p>
        
        <p className="limited-edition">THERE WILL BE ONLY 25</p>
        
        <p className="production-info">
          Each CR700W will be hand-built by Brian Crighton at state-of-the-art<br />
          Rotron Power aero engine facility in Wiltshire, UK
        </p>
        
        <p className="pricing">PRICES FROM £145,000 +VAT</p>
        <p className="option">(road registered option available)</p>
        
        <button className="register-button">REGISTER YOUR INTEREST</button>
      </div>
    </div>
  );
};

export default CR700W;