import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import ItemCard from './ItemCard';
import ItemDetailsModal from './ItemDetailsModal';
import SellItemModal from './SellItemModal';
import './FinalBoard.css';
import TableauEmbed from './TableauEmbed';

const FinalBoard = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showSellModal, setShowSellModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loadItems = async () => {
      const availableItems = await fetchAvailableItems();
      setItems(availableItems);
    };
    loadItems();
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleCloseModal = () => {
    setSelectedItem(null);
  };

  const handleBuyItem = (item) => {
    handleCloseModal();
    navigate('/checkout'); // Navigate to the checkout page after purchase
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/'); // Redirect to login page
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const handleAddItem = (newItem) => {
    setItems(prevItems => [...prevItems, newItem]);
    setShowSellModal(false);
  };

  return (
    <div className="final-board">
      <header className="board-header">
        <h1>mrktmind</h1>
        <div className="header-buttons">
          <button className="sell-button" onClick={() => setShowSellModal(true)}>sell</button>
          <button className="logout-button" onClick={handleLogout}>logout</button>
        </div>
      </header>
      <div className="grid-container">
        {items.map(item => (
          <ItemCard key={item.id} item={item} onClick={() => handleItemClick(item)} />
        ))}
      </div>
      {selectedItem && (
        <ItemDetailsModal
          item={selectedItem}
          onClose={handleCloseModal}
          onBuy={handleBuyItem}
        />
      )}
      {showSellModal && (
        <SellItemModal
          onClose={() => setShowSellModal(false)}
          onSubmit={handleAddItem}
        />
      )}
      <div className="App">
        <TableauEmbed />
      </div>
    </div>
  );
};

export default FinalBoard;
