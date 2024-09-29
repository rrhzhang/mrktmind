import React from 'react';
import { useLocation } from 'react-router-dom';

const OrderConfirmation = () => {
  const location = useLocation();
  const { orderDetails } = location.state || {}; // assuming you pass order details via state

  return (
    <div className="order-confirmation">
      <h1>Order Confirmation</h1>
      <div>
        <h2>Thank you for your purchase!</h2>
        <p>Your order has been confirmed and details are below:</p>
        <div>
          <strong>Order Number:</strong> {orderDetails?.orderNumber}
        </div>
        <div>
          <strong>Total Amount:</strong> {orderDetails?.totalAmount}
        </div>
        {/* Add more order details as needed */}
      </div>
    </div>
  );
};

export default OrderConfirmation;
