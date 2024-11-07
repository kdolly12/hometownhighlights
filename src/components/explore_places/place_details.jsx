import React, { useState } from 'react';
import './places.css';

// Importing all the images
import img1 from '../../Interactive/Amaravati/Amaravathi_Museum.jpg';
import img2 from '../../Interactive/Amaravati/Amaravathi_Stupa.jpg';
import img3 from '../../Interactive/Amaravati/AmaravatiStupa.avif';
import img4 from '../../Interactive/Amaravati/DhyanaBuddhaStatue.jpg';
import img5 from '../../Interactive/Amaravati/KondaveeduFort.jpg';
import img6 from '../../Interactive/Amaravati/amareshwara_tempe.jpg';

// Define extra places for each main location
const placesData = {
  amaravati: {
    name: "Amaravati",
    description: "Amaravati is known for its ancient Buddhist stupa and rich history.",
    extraPlaces: [
      {
        id: 1,
        name: "Bhattiprolu",
        description: "A historical site known for its archaeological significance.",
        image: img1, // Image for Bhattiprolu
      },
      {
        id: 2,
        name: "Kondaveedu Fort",
        description: "A majestic fort with a rich history.",
        image: img5,
      },
    ],
  },
  tirupati: {
    name: "Tirupati",
    description: "Tirupati is famous for its Venkateswara Temple.",
    extraPlaces: [
      {
        id: 3,
        name: "Sri Kalahasti",
        description: "Famous for the Kalahasteeswara Temple.",
        image: img2, // Image for Sri Kalahasti
      },
      {
        id: 4,
        name: "Chittoor",
        description: "Known for its rich heritage and temples.",
        image: img3, // Image for Chittoor
      },
    ],
  },
  // Add more places as needed...
};

const Places = ({ onBackClick }) => {
  const [selectedPlaceKey, setSelectedPlaceKey] = useState(null); // State to track the selected place key

  const images = [
    {
      key: 'amaravati',
      src: img1,
      description: "Amaravathi Museum: A glimpse into the rich history.",
    },
    {
      key: 'amaravati',
      src: img2,
      description: "Amaravathi Stupa: A magnificent historical site.",
    },
    {
      key: 'amaravati',
      src: img3,
      description: "Amaravati Stupa: A picturesque view.",
    },
    {
      key: 'amaravati',
      src: img4,
      description: "Dhyana Buddha Statue: A serene atmosphere.",
    },
    {
      key: 'amaravati',
      src: img5,
      description: "Kondaveedu Fort: A majestic fort with a rich history.",
    },
    {
      key: 'amaravati',
      src: img6,
      description: "Amareshwara Temple: A beautiful temple worth visiting.",
    },
  ];

  const handleImageClick = (key) => {
    setSelectedPlaceKey(key); // Set the selected place key
  };

  const handleCloseModal = () => {
    setSelectedPlaceKey(null); // Close the modal
  };

  const selectedPlace = selectedPlaceKey ? placesData[selectedPlaceKey] : null;

  return (
    <div className="gallery-container">
      <button onClick={onBackClick} className="back-button">Back to Home</button> {/* Back button */}
      <div className="image-gallery">
        {images.map((item, index) => (
          <div className="image-card" key={index} onClick={() => handleImageClick(item.key)}>
            <img src={item.src} alt={item.description} className="image" />
            <p className="description">{item.description}</p>
          </div>
        ))}
      </div>

      {/* Modal for displaying selected image details */}
      {selectedPlace && (
        <div className="modal">
          <div className="modal-content">
            <span className="close" onClick={handleCloseModal}>&times;</span>
            <h2>{selectedPlace.name}</h2>
            <p>{selectedPlace.description}</p>
            <h3>Extra Places</h3>
            <div className="extra-places">
              {selectedPlace.extraPlaces.map((place) => (
                <div className="extra-place-card" key={place.id}>
                  <img src={place.image} alt={place.name} className="extra-image" />
                  <p className="extra-description">{place.name}: {place.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Places;
