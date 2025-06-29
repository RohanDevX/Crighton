import React from 'react';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import './App.css';
import Brochure from './components/Brochure';
import EngineSection from './components/EngineSection';
import SuperbikeStats from './components/SuperbikeStats';
import CR700W from './components/CR700W';
import HeedSection from './components/heed';

function App() {
  return (
    <>
      <div className="app-container">
      <Navbar />
      <Slider /> 
      <Brochure />
      <EngineSection />
      <SuperbikeStats/>
      <CR700W/>
      <HeedSection/>
      
    </div>
      
    </>
  );
}

export default App;

