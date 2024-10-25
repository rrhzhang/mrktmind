import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './OrderConfirmation.css';
import confetti from 'canvas-confetti';

const OrderConfirmation = () => {
  const location = useLocation();
  const { orderDetails } = location.state || {}; 

  useEffect(() => {
    // Function to trigger confetti
    const runConfetti = () => {
      const duration = 5 * 1000; 
      const animationEnd = Date.now() + duration;
      const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

      function randomInRange(min, max) {
        return Math.random() * (max - min) + min;
      }

      const interval = setInterval(function() {
        const timeLeft = animationEnd - Date.now();

        if (timeLeft <= 0) {
          return clearInterval(interval);
        }

        const particleCount = 50 * (timeLeft / duration);
        confetti(Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 }
        }));
        confetti(Object.assign({}, defaults, {
          particleCount,
          origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 }
        }));
      }, 250);
    };

    runConfetti(); 
  }, []);

  return (
    <div className="order-confirmation">
      <h1>Order Confirmation</h1>
      <div>
        <h2>Thank you for your purchase!</h2>
        <p>Your order has been confirmed and details are below:</p>
        <div>
          <strong>Order Number: 12345</strong> {orderDetails?.orderNumber}
        </div>
        <div>
          <strong>Total Amount: $100</strong> {orderDetails?.totalAmount}
        </div>
        {/* Add more order details as needed */}
      </div>
    </div>
  );
};

export default OrderConfirmation;
