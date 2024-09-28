import React, { useState } from 'react';
import './SellItemModal.css'; // Add styling here

const SellItemModal = ({ onClose, onSubmit }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [imageUrl, setImageUrl] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const newItem = {
      id: Math.random(), // Temporary ID; you can replace this with an actual unique ID generation
      title,
      description,
      price: `$${price}`,
      imageUrl,
      seller: "You", // Since the logged-in user is selling it
    };
    onSubmit(newItem); // Send the new item back to FinalBoard
  };

  return (
    <div className="modal-overlay">
      <div className="page-header">
        <h2>Sell an Item</h2>
        <div className="action-buttons">
          <button onClick={() => { /* Add functionality for sell button */ }}>Sell</button>
          <button onClick={onClose}>Logout</button>
        </div>
      </div>

      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <textarea
            placeholder="Description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
          <input
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Image URL"
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
          <button type="submit">List Item for Sale</button>
        </form>
      </div>
    </div>
  );
};

export default SellItemModal;
