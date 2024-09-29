import React, { useState } from 'react';
import './Checkout.css'; // Make sure you create and link a Checkout.css file

const Checkout = ({ onConfirm }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    cardNumber: '',
    expiryDate: '',
    cvv: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic here
    onConfirm(formData); // Pass the formData up to the parent component or handle it here
    console.log(formData); // For demonstration purposes
  };

  return (
    <div className="checkout-container">
      <form onSubmit={handleSubmit} className="checkout-form">
        <h2>Checkout</h2>
        <input type="text" name="fullName" placeholder="Full Name" value={formData.fullName} onChange={handleChange} required />
        <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
        <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required />
        <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} required />
        <input type="text" name="zip" placeholder="ZIP Code" value={formData.zip} onChange={handleChange} required />
        <input type="text" name="cardNumber" placeholder="Card Number" value={formData.cardNumber} onChange={handleChange} required />
        <input type="text" name="expiryDate" placeholder="Expiry Date (MM/YY)" value={formData.expiryDate} onChange={handleChange} required />
        <input type="text" name="cvv" placeholder="CVV" value={formData.cvv} onChange={handleChange} required />
        <button type="submit">Confirm Purchase</button>
      </form>
    </div>
  );
};

export default Checkout;
