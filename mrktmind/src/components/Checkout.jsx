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
  const [errors, setErrors] = useState({});

  const validateCardNumber = (number) => {
    const regex = new RegExp("^[0-9]{16}$");
    return regex.test(number.replace(/\s+/g, '')); // removes spaces and checks if there are 16 digits
  };

  const validateExpiryDate = (date) => {
    const regex = new RegExp("^(0[1-9]|1[0-2])\/?([0-9]{2})$");
    if (!regex.test(date)) return false;
  
    const today = new Date();
    const month = today.getMonth() + 1; // getMonth() returns month from 0-11
    const year = today.getFullYear() % 100; // get last two digits of the year
  
    const [expMonth, expYear] = date.split('/').map(Number);
    
    // Check if the year is less than the current year or if it's the same year but the month is less or equal
    if (expYear < year || (expYear === year && expMonth < month)) {
      return false;
    }
  
    return true;
  };
  

  const validateCVV = (cvv) => {
    const regex = new RegExp("^[0-9]{3,4}$");
    return regex.test(cvv);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Validate all fields here
    const { cardNumber, expiryDate, cvv } = formData;
    const newErrors = {};

    if (!validateCardNumber(cardNumber)) {
      newErrors.cardNumber = 'Invalid card number';
    }

    if (!validateExpiryDate(expiryDate)) {
      newErrors.expiryDate = 'Invalid expiry date';
    }

    if (!validateCVV(cvv)) {
      newErrors.cvv = 'Invalid CVV';
    }

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    // If no errors, proceed
    onConfirm(formData);
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
        {errors.cardNumber && <div className="error">{errors.cardNumber}</div>}
        <input type="text" name="expiryDate" placeholder="Expiry Date (MM/YY)" value={formData.expiryDate} onChange={handleChange} required />
        {errors.expiryDate && <div className="error">{errors.expiryDate}</div>}
        <input type="text" name="cvv" placeholder="CVV" value={formData.cvv} onChange={handleChange} required />
        {errors.cvv && <div className="error">{errors.cvv}</div>}
        <button type="submit">Confirm Purchase</button>
      </form>
    </div>
  );
};

export default Checkout;
