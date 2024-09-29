import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';
import ItemCard from './ItemCard';
import ItemDetailsModal from './ItemDetailsModal';
import SellItemModal from './SellItemModal';
import TableauEmbed from './TableauEmbed';
import './FinalBoard.css';

const FinalBoard = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showSellModal, setShowSellModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState(''); // State for search
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
    navigate('/checkout');
  };

  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigate('/');
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const handleAddItem = (newItem) => {
    setItems(prevItems => [...prevItems, newItem]);
    setShowSellModal(false);
  };

  // Filter items based on search query
  const filteredItems = items.filter(item =>
    item.title.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="final-board">
      <header className="board-header">
        <h1>mrktmind</h1>
        <div className="search-bar">
          <input
            type="text"
            placeholder="Search items..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
        <div className="header-buttons">
          <button className="sell-button" onClick={() => setShowSellModal(true)}>sell</button>
          <button className="logout-button" onClick={handleLogout}>logout</button>
        </div>
      </header>

      <div className="grid-container">
        {filteredItems.map(item => (
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
