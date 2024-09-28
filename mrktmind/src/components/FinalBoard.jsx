// import React, { useState, useEffect } from 'react';
// import Pin from './Pin';
// import Modal from './Modal';
// import "../styles/final_board_styles.css"

// function FinalBoard() {
//     const [pins, setPins] = useState([]);
//     const [showModal, setShowModal] = useState(false);

//     // Load pins when the component mounts
//     useEffect(() => {
//         const loadedPins = localStorage.getItem('pins');
//         if (loadedPins) {
//             setPins(JSON.parse(loadedPins));
//         }
//     }, []);

//     // Save pins to local storage on change
//     useEffect(() => {
//         localStorage.setItem('pins', JSON.stringify(pins));
//     }, [pins]);

//     const addPin = pinDetails => {
//         const newPins = [...pins, pinDetails];
//         setPins(newPins);
//         setShowModal(false);
//     };

//     return (
//         <div>
//             <div className="navigation_bar">
//                 <div onClick={() => setShowModal(true)} className="pint_mock_icon_container add_pin">
//                     <img src="./images/add.png" alt="add_pin" className="pint_mock_icon" />
//                 </div>
//             </div>
    
//             <div className="pin_container">
//                 {pins.map((pin, index) => (
//                     <Pin key={index} pinDetails={pin} />
//                 ))}
//             </div>
    
//             <div onClick={event => event.target.className.includes('add_pin_modal') ? setShowModal(false) : null}
//                  className="add_pin_modal_container"
//             >
//                 {showModal && <Modal addPin={addPin} />}
//             </div>
//         </div>
//     );    
// }

// export default FinalBoard;
import React, { useState } from 'react';
import ItemCard from './ItemCard'; // Reuse the ItemCard component from before
import ItemDetailsModal from './ItemDetailsModal'; // Modal for item details
import './FinalBoard.css'; // Make sure you add your custom CSS here

// Sample data, you can replace this with API fetched data
const sampleItems = [
  {
    id: 1,
    title: "Vintage Lamp",
    description: "A beautiful vintage lamp in great condition.",
    price: "$50",
    imageUrl: "/assets/imgs/lamp.jpg", // replace with actual image path
    seller: "John Doe"
  },
  {
    id: 2,
    title: "Designer Chair",
    description: "Comfortable and stylish chair, perfect for any room.",
    price: "$120",
    imageUrl: "/assets/imgs/chair.jpg", // replace with actual image path
    seller: "Jane Smith"
  },
  // Add more items here...
];

const FinalBoard = () => {
  const [selectedItem, setSelectedItem] = useState(null); // For tracking selected item for modal

  const handleItemClick = (item) => {
    setSelectedItem(item); // Open the item in a modal when clicked
  };

  const handleCloseModal = () => {
    setSelectedItem(null); // Close the modal
  };

  return (
    <div className="final-board">
      <h1>Your Smart Market</h1>
      <div className="grid-container">
        {sampleItems.map((item) => (
          <ItemCard key={item.id} item={item} onClick={handleItemClick} />
        ))}
      </div>

      {selectedItem && (
        <ItemDetailsModal item={selectedItem} onClose={handleCloseModal} />
      )}
    </div>
  );
};

export default FinalBoard;
