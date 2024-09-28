import React, { useState } from 'react';
import Pin from './Pin';
import '../styles/pinterest_layout.css';

// Example preloaded pins data
const preloadedPins = [
  {
    id: 1,
    title: "Sunset",
    description: "Beautiful sunset over the hills",
    imageUrl: "./images/test.png",
    size: "small"
  },
  {
    id: 2,
    title: "Ocean View",
    description: "Clear blue ocean waves",
    imageUrl: "./images/test.png",
    size: "medium"
  },
  {
    id: 3,
    title: "Mountain",
    description: "Snowy mountain peaks",
    imageUrl: "./images/test.png",
    size: "large"
  },
];

const PinterestLayout = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value.toLowerCase());
  };

  const filteredPins = preloadedPins.filter((pin) =>
    pin.title.toLowerCase().includes(searchQuery) || pin.description.toLowerCase().includes(searchQuery)
  );

  return (
    <div>
      {/* Search bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search pins..."
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>

      {/* Pinterest board */}
      <div className="pin-container">
        {filteredPins.length > 0 ? (
          filteredPins.map((pin) => (
            <Pin
              key={pin.id}
              title={pin.title}
              description={pin.description}
              imageUrl={pin.imageUrl}
              size={pin.size}
            />
          ))
        ) : (
          <p>No pins match your search.</p>
        )}
      </div>
    </div>
  );
};

export default PinterestLayout;
