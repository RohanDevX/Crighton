import React from 'react';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import './App.css';
import Brochure from './components/Brochure';
import EngineSection from './components/EngineSection';
import SuperbikeStats from './components/SuperbikeStats';
import HeedSection from './components/heed';
// import CR700W from './components/CR700W';


function App() {
  return (
    <>
      <div className="app-container">
      <Navbar />
      <Slider /> 
      <Brochure />
      <EngineSection />
      <SuperbikeStats/>
      <HeedSection/>
      {/* <CR700W/> */}
      
    </div>
      
    </>
  );
}

export default App;

