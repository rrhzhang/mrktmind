import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { signOut } from 'firebase/auth'; // Importing signOut function
import { auth } from '../firebase'; // Import Firebase authentication
import ItemCard from './ItemCard';
import ItemDetailsModal from './ItemDetailsModal';
import SellItemModal from './SellItemModal'; // Modal for selling items
import './FinalBoard.css';

// Mock function to simulate fetching available items (replace with real API call or Firebase call)
const fetchAvailableItems = async () => {
  return [
    {
      id: 1,
      title: "Vintage Lamp",
      description: "A beautiful vintage lamp in great condition.",
      price: "$50",
      imageUrl: "/assets/imgs/lamp.jpg", // replace with actual image path
      seller: "John Doe",
    },
    {
      id: 2,
      title: "Designer Chair",
      description: "Comfortable and stylish chair, perfect for any room.",
      price: "$120",
      imageUrl: "/assets/imgs/chair.jpg", // replace with actual image path
      seller: "Jane Smith",
    },
  ];
};

const FinalBoard = () => {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState(null);
  const [showSellModal, setShowSellModal] = useState(false); // Control visibility of the Sell Modal
  const navigate = useNavigate();

  useEffect(() => {
    const loadItems = async () => {
      const availableItems = await fetchAvailableItems();
      setItems(availableItems);
    };
    loadItems();
  }, []);

  const handleItemClick = (item) => {
    setSelectedItem(item); // Open item details modal
  };

  const handleCloseModal = () => {
    setSelectedItem(null); // Close modal
  };

  const handleBuyItem = (item) => {
    alert(`You have purchased: ${item.title} for ${item.price}`);
    handleCloseModal(); // Close the modal after purchase
  };

  const handleLogout = async () => {
    try {
      await signOut(auth); // Sign out the user
      navigate('/'); // Redirect to login page
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // Handle adding a new product
  const handleAddItem = (newItem) => {
    setItems((prevItems) => [...prevItems, newItem]); // Add new item to the list
    setShowSellModal(false); // Close the Sell Modal
  };

  return (
    <div className="final-board">
      <header className="board-header">
        <h1>Your Smart Market</h1>
        <div className="header-buttons">
          <button className="sell-button" onClick={() => setShowSellModal(true)}>Sell</button>
          <button className="logout-button" onClick={handleLogout}>Logout</button>
        </div>
      </header>
      <div className="grid-container">
        {items.map((item) => (
          <ItemCard key={item.id} item={item} onClick={handleItemClick} />
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
          onSubmit={handleAddItem} // Function to add new item
        />
      )}
    </div>
  );
};

export default FinalBoard;
