import React from 'react';
import './ItemDetailsModal.css'; // Add appropriate CSS

const ItemDetailsModal = ({ item, onClose, onBuy }) => {
  return (
    <div className="modal-overlay">
      <div className="modal-content">
        <button className="close-button" onClick={onClose}>X</button>
        <img src={item.imageUrl} alt={item.title} className="modal-image" />
        <h2>{item.title}</h2>
        <p>{item.description}</p>
        <p><strong>Price:</strong> {item.price}</p>
        <p><strong>Seller:</strong> {item.seller}</p>
        <div className="modal-actions">
          <button className="buy-button" onClick={() => onBuy(item)}>Buy Now</button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailsModal;
