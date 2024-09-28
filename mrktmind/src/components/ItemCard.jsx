import React from 'react';
import './ItemCard.css'; // Add custom styling here

const ItemCard = ({ item, onClick }) => {
  return (
    <div className="item-card" onClick={() => onClick(item)}>
      <img src={item.imageUrl} alt={item.title} className="item-image" />
      <div className="item-info">
        <h3>{item.title}</h3>
        <p>{item.price}</p>
      </div>
    </div>
  );
};

export default ItemCard;
