import React, { useState } from 'react';
import './Checkout.css';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
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
    const navigate = useNavigate();

    const validateCardNumber = (number) => {
        const cleanedNumber = number.replace(/\s+/g, '');
        const regex = new RegExp("^[0-9]{13,19}$");
        return regex.test(cleanedNumber);
    };

    const validateExpiryDate = (date) => {
        const regex = new RegExp("^(0[1-9]|1[0-2])\/?([0-9]{2})$");
        if (!regex.test(date)) return false;

        const today = new Date();
        const month = today.getMonth() + 1;
        const year = today.getFullYear() % 100;

        const [expMonth, expYear] = date.split('/').map(Number);
        return !(expYear < year || (expYear === year && expMonth < month));
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
        const newErrors = {};
        
        if (!validateCardNumber(formData.cardNumber)) {
            newErrors.cardNumber = 'Invalid card number';
        }

        if (!validateExpiryDate(formData.expiryDate)) {
            newErrors.expiryDate = 'Invalid expiry date';
        }

        if (!validateCVV(formData.cvv)) {
            newErrors.cvv = 'Invalid CVV';
        }

        if (Object.keys(newErrors).length > 0) {
            setErrors(newErrors);
        } else {
            // Assume the data is processed here
            console.log("Form data is valid:", formData);
            navigate('/order-confirmation'); // Redirect to confirmation page
        }
    };

    return (
        <div className="checkout-container">
            <div className="image-container">
                <img src="https://digitalmarketingphilippines.com/wp-content/uploads/2014/11/ecommerce-SEO.jpg" alt="Checkout Image" />
            </div>
            <form onSubmit={handleSubmit} className="checkout-form">
                <h2>Checkout</h2>
                <input type="text" name="fullName" placeholder="Full name" value={formData.fullName} onChange={handleChange} required />
                <input type="text" name="address" placeholder="Address" value={formData.address} onChange={handleChange} required />
                <input type="text" name="city" placeholder="City" value={formData.city} onChange={handleChange} required />
                <input type="text" name="state" placeholder="State" value={formData.state} onChange={handleChange} required />
                <input type="text" name="zip" placeholder="Zip code" value={formData.zip} onChange={handleChange} required />
                <input type="text" name="cardNumber" placeholder="Card number" value={formData.cardNumber} onChange={handleChange} required />
                {errors.cardNumber && <div className="error">{errors.cardNumber}</div>}
                <input type="text" name="expiryDate" placeholder="Expiry date (MM/YY)" value={formData.expiryDate} onChange={handleChange} required />
                {errors.expiryDate && <div className="error">{errors.expiryDate}</div>}
                <input type="text" name="cvv" placeholder="CVV" value={formData.cvv} onChange={handleChange} required />
                {errors.cvv && <div className="error">{errors.cvv}</div>}
                <button type="submit">Confirm Purchase</button>
            </form>
        </div>
    );
};

export default Checkout;
