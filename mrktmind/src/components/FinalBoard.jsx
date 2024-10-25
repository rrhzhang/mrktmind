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
  // Prepopulate the board with some sample items
  const [items, setItems] = useState([
    {
      id: 1,
      title: 'Vintage Hoodie',
      description: 'A comfy vintage hoodie with a retro design.',
      price: '$45.00',
      imageUrl: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTrMRjfXeTyG4Pf0SrswCC1qifyRaK0KzUxlOfH2kCwPygbx6wk8IHz6LpKT6lkfBtnia0tV35QrsBLpsih_LEyWcE3moB4UtcYG7VnMOVcB4u2guBOyqCsmYDnQmHKX3svyrCKT5G4oJk&usqp=CAc' 
    },
    {
      id: 2,
      title: 'Denim Jacket',
      description: 'Classic denim jacket for casual wear.',
      price: '$60.00',
      imageUrl: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcQsyJSXNkeu60S6zPARytyi495yk4z4Xuz2i7wz5e1Cb20b0tQTxG8ceOfeuyKVjw5gebiW9b0ahMm3FeFj4LUAD9N6sE8s19ZtEbZWlBSsHJa2TOVttKlMqJLeQPHflXOOptLpUQ&usqp=CAc'
    },
    {
      id: 3,
      title: 'New Balance 530',
      description: 'High-performance running shoes for athletes.',
      price: '$85.00',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRuoHGCseTu0uo_IQpodb-q5viTJmM0F4WGM2qOokJM8gyTblYJBiirDHHjLk1hYOg8Kqev8HWK1dvN2e9MA05gGRTjYr38jc6vom_fmE7wP1O6AhMY8DgVcYfrnhV8BxrCf_PzuMA&usqp=CAc'
    },
    {
      id: 4,
      title: 'Black School backpack',
      description: 'A comfy backpack for school or work.',
      price: '$35.00',
      imageUrl: 'https://m.media-amazon.com/images/I/71hd9quLPZL._AC_SY145_.jpg' 
    },
    {
      id: 5,
      title: 'Dyson Air Straightener',
      description: 'Air technology for heat damage protection.',
      price: '$25.00',
      imageUrl: 'https://m.media-amazon.com/images/I/31bdqKQeeML._SR480,440_.jpg' 
    },
    {
      id: 6,
      title: 'Laneige Lip Mask',
      description: 'Softening skin care.',
      price: '$25.00',
      imageUrl: 'https://m.media-amazon.com/images/I/4146li-3ZLL._SR480,440_.jpg' 
    }
  ]);

  const [selectedItem, setSelectedItem] = useState(null);
  const [showSellModal, setShowSellModal] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

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
    item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    item.description?.toLowerCase().includes(searchQuery.toLowerCase()) 
  );

  // Handle pressing "Enter" in search field
  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSearch(); // Trigger search on Enter
    }
  };

  const handleSearch = () => {
    console.log("Search initiated for:", searchQuery);
  };

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
            onKeyPress={handleKeyPress}
          />
          <button className="search-button" onClick={handleSearch}>Search</button>
        </div>
        <div className="header-buttons">
          <button className="sell-button" onClick={() => setShowSellModal(true)}>sell</button>
          <button className="logout-button" onClick={handleLogout}>logout</button>
        </div>
      </header>

      <div className="main-content">
        <div className="grid-container">
          {filteredItems.length > 0 ? (
            filteredItems.map(item => (
              <ItemCard key={item.id} item={item} onClick={() => handleItemClick(item)} />
            ))
          ) : (
            <p>No items match your search.</p>
          )}
        </div>

        <div className="tableau-container">
          <TableauEmbed />
        </div>
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
    </div>
  );
};

export default FinalBoard;
