import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/login';
import FinalBoard from './components/FinalBoard';
import PinterestLayout from './components/PinterestLayout';
import Checkout from './components/Checkout'; 
import OrderConfirmation from './components/OrderConfirmation';

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/final-board" element={<FinalBoard />} />
        <Route path="/home-page" element={<div>This is the home page! <PinterestLayout /></div>} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/order-confirmation" element={<OrderConfirmation />} />
        <Route path="*" element={<div>404 Not Found</div>} />
      </Routes>
    </div>
  );
}

export default App;
