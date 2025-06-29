import React from 'react';
import './SuperbikeStats.css';
import Superstate from '../assets/Superstats.jpeg';

const SuperbikeStats = () => {
  return (
    <div className="superbike-layout">
      <div className="image-container">
        <img src={Superstate} alt="Superbike" className="superbike-image" />
      </div>
      
      <div className="stats-row">
        <div className="stat-block left-block">
          <h1 className="stat-large">220HP FOR <br /> 129.5KG DRY </h1>
          <p className="stat-description">The highest power-to-weight ratio superbike in the world</p>
        </div>

        <div className="stat-block middle-block">
          <h1 className="stat-large">319HP/LITRE AND <br /> 1.68HP PER KG</h1>
          <p className="stat-description">Housing one of the most powerful relative to cubic capacity – normally aspirated engines ever created</p>
        </div>

        <div className="stat-block right-block">
          <h1 className="stat-large">105FT/LBS AT <br /> 9,500RPM</h1>
          <p className="stat-description">More torque across its rev range than any other motorcycle</p>
        </div>
      </div>
    </div>
  );
};

export default SuperbikeStats;