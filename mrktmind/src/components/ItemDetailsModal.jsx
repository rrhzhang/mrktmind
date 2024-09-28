import React from 'react';
import './ItemDetailsModal.css'; // Create custom CSS for styling

const ItemDetailsModal = ({ item, onClose }) => {
  const handleBuy = () => {
    alert(`Buying ${item.title} from ${item.seller}!`);
    onClose(); // Close modal after purchase action
  };

  const handleSell = () => {
    alert(`Selling ${item.title}!`);
    onClose(); // Close modal after sell action
  };

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
          <button className="buy-button" onClick={handleBuy}>Buy Now</button>
          <button className="sell-button" onClick={handleSell}>Sell</button>
        </div>
      </div>
    </div>
  );
};

export default ItemDetailsModal;
