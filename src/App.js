import React from 'react';
import Navbar from './components/Navbar';
import Slider from './components/Slider';
import './App.css';
import Brochure from './components/Brochure';
import EngineSection from './components/EngineSection';


function App() {
  return (
    <>
      <div className="app-container">
      <Navbar />
      <Slider /> 
      <Brochure />
      <EngineSection />
      
    </div>
      
    </>
  );
}

export default App;

