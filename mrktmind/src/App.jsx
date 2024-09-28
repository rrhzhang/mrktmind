// App.js
import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login';
import FinalBoard from './components/FinalBoard';
import PinterestLayout from './components/PinterestLayout';
import { GlobalStateProvider } from './components/GlobalStateContext'; // Import the global state provider

function App() {
  return (
    <GlobalStateProvider>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/final-board" element={<FinalBoard />} />
        <Route path="/home-page" element={<PinterestLayout />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </GlobalStateProvider>
  );
}

export default App;
