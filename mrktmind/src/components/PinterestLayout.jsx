// import React, { useState } from 'react';
// import Pin from './Pin';
// import '../styles/pinterest_layout.css';

// const PinterestLayout = () => {
//   const [searchQuery, setSearchQuery] = useState('');

//   const preloadedPins = [
//     {
//       id: 1,
//       title: 'Beautiful Sunset',
//       description: 'A stunning view of the sunset over the ocean.',
//       imageUrl: 'https://example.com/sunset.jpg',
//       size: 'medium',
//     },
//     {
//       id: 2,
//       title: 'Mountain Adventure',
//       description: 'Hiking through the mountains.',
//       imageUrl: 'https://example.com/mountain.jpg',
//       size: 'large',
//     },
//     {
//       id: 3,
//       title: 'City Lights',
//       description: 'The city lights at night.',
//       imageUrl: 'https://example.com/city.jpg',
//       size: 'small',
//     },
//   ];

//   const handleSearchChange = (event) => {
//     setSearchQuery(event.target.value.toLowerCase());
//   };

//   const filteredPins = preloadedPins.filter((pin) =>
//     pin.title.toLowerCase().includes(searchQuery) || pin.description.toLowerCase().includes(searchQuery)
//   );

//   return (
//     <div>
//       {/* Search bar */}
//       <div className="search-bar">
//         <input
//           type="text"
//           placeholder="Search pins..."
//           value={searchQuery}
//           onChange={handleSearchChange}
//         />
//       </div>

//       {/* Pinterest board */}
//       <div className="pin-container">
//         {filteredPins.length > 0 ? (
//           filteredPins.map((pin) => (
//             <Pin
//               key={pin.id}
//               title={pin.title}
//               description={pin.description}
//               imageUrl={pin.imageUrl}
//               size={pin.size}
//             />
//           ))
//         ) : (
//           <p>No pins match your search.</p>
//         )}
//       </div>
//     </div>
//   );
// };


// // const styles = {
// //     pin_container: {
// //         margin: 0,
// //         padding: 0,
// //         width: '80vw',
// //         backgroundColor: 'black',
// //         position: 'absolute',
// //         left: '50%',
// //         transform: 'translateX(-50%)',
// //         display: 'grid',
// //         gridTemplateColumns: 'repeat(auto-fill, 250px)',
// //         gridAutoRows: '10px',
// //         justifyContent: 'center'
// //     }
// // }
// export default PinterestLayout;

import React, { useState } from 'react';
import Pin from './Pin';
import '../styles/pinterest_layout.css';

// Example preloaded pins data
const preloadedPins = [
  {
    id: 1,
    title: "Sunset",
    description: "Beautiful sunset over the hills",
    imageUrl: "https://example.com/sunset.jpg",
    size: "small"
  },
  {
    id: 2,
    title: "Ocean View",
    description: "Clear blue ocean waves",
    imageUrl: "https://example.com/ocean.jpg",
    size: "medium"
  },
  {
    id: 3,
    title: "Mountain",
    description: "Snowy mountain peaks",
    imageUrl: "https://example.com/mountain.jpg",
    size: "large"
  },
  // Add more preloaded pins here
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
