import React, { useState } from 'react';
import Pin from './Pin';

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


// const styles = {
//     pin_container: {
//         margin: 0,
//         padding: 0,
//         width: '80vw',
//         backgroundColor: 'black',
//         position: 'absolute',
//         left: '50%',
//         transform: 'translateX(-50%)',
//         display: 'grid',
//         gridTemplateColumns: 'repeat(auto-fill, 250px)',
//         gridAutoRows: '10px',
//         justifyContent: 'center'
//     }
// }
export default PinterestLayout;