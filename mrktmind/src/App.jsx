import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login'; // Make sure this path is correct
import FinalBoard from './components/FinalBoard'; // Make sure this path is correct
import PinterestLayout from './components/PinterestLayout.jsx'; // If this is a separate route

function App() {
  return (
    <div>
      <Routes>
        {/* Default route for login */}
        <Route path="/" element={<Login />} />
        
        {/* Route for final board after login */}
        <Route path="/final-board" element={<FinalBoard />} />
        
        {/* Example of another route if you want PinterestLayout to be separate */}
        <Route path="/home-page" element={<PinterestLayout />} />

        {/* Add a fallback route */}
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
