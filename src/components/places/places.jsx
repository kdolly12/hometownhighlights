import React, { useState } from 'react';
import './places.css';
import { BsArrowLeftShort } from "react-icons/bs";  
import img1 from '../../Interactive/Amaravati/Amaravathi_Museum.jpg';
import img2 from '../../Interactive/Amaravati/Amaravathi_Stupa.jpg';
import img3 from '../../Interactive/Amaravati/AmaravatiStupa.avif'; 
import img4 from '../../Interactive/Amaravati/Dhyana BuddhaStatue.jpg'; 
import img5 from '../../Interactive/Amaravati/KondaveeduFort.jpg'; 
import img6 from '../../Interactive/Amaravati/amareshwara_tempe.jpg'; 

const Places = ({ onBackClick }) => { 
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [newReview, setNewReview] = useState({ user: '', comment: '', rating: 1 });
  const images = [
    {
      id: 1,
      src: img1, 
      title: "Amaravathi Museum",
      description: "Amaravathi Museum: A glimpse into the rich history.",
      location: "Amaravati Museum, Amaravati, Andhra Pradesh",
      reviews: [
        { id: 1, user: "John Doe", comment: "Very informative museum!", rating: 5 },
        { id: 2, user: "Jane Smith", comment: "A great place to learn about history.", rating: 4 }
      ]
    },
    {
      id: 2,
      src: img2, 
      title: "Amaravathi Stupa",
      description: "Amaravathi Stupa: A magnificent historical site.",
      location: "Amaravathi Stupa, Amaravati, Andhra Pradesh",
      reviews: [
        { id: 1, user: "Alice Brown", comment: "Beautiful architecture!", rating: 5 },
        { id: 2, user: "Bob White", comment: "A peaceful place to visit.", rating: 4 }
      ]
    },
    {
      id: 3,
      src: img3, 
      title: "Amaravati Stupa",
      description: "Amaravati Stupa: A picturesque view.",
      location: "Amaravati Stupa, Amaravati, Andhra Pradesh",
      reviews: []
    },
    {
      id: 4,
      src: img4, 
      title: "Dhyana Buddha Statue",
      description: "Dhyana Buddha Statue: A serene atmosphere.",
      location: "Dhyana Buddha Statue, Amaravati, Andhra Pradesh",
      reviews: [
        { id: 1, user: "Charlie Green", comment: "So peaceful and calming.", rating: 5 }
      ]
    },
    {
      id: 5,
      src: img5, 
      title: "Kondaveedu Fort",
      description: "Kondaveedu Fort: A majestic fort with a rich history.",
      location: "Kondaveedu Fort, Guntur, Andhra Pradesh",
      reviews: []
    },
    {
      id: 6,
      src: img6, 
      title: "Amareshwara Temple",
      description: "Amareshwara Temple: A beautiful temple worth visiting.",
      location: "Amareshwara Temple, Amaravati, Andhra Pradesh",
      reviews: [
        { id: 1, user: "David Black", comment: "A must-visit temple!", rating: 5 }
      ]
    }
  ];

  const handlePlaceClick = (place) => {
    setSelectedPlace(place);
  };

  const handleMapClick = (location) => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${location}`, '_blank');
  };

  const handleVehicleBookingClick = () => {
    window.open('https://www.uber.com', '_blank'); // Change this URL to the desired vehicle booking service
  };

  const handleReviewChange = (e) => {
    const { name, value } = e.target;
    setNewReview({ ...newReview, [name]: value });
  };

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    const updatedReviews = [
      ...selectedPlace.reviews,
      { id: selectedPlace.reviews.length + 1, ...newReview }
    ];
    const updatedPlace = { ...selectedPlace, reviews: updatedReviews };
    setSelectedPlace(updatedPlace);
    setNewReview({ user: '', comment: '', rating: 1 }); // Reset the form
  };

  return (
    <div className="gallery-container">
      <div className="back-button-container">
        <button onClick={onBackClick} className="back-button">
          <BsArrowLeftShort className='icon' /> 
        </button>
      </div> 

      {!selectedPlace ? (
        <div className="places-grid">
          {images.map((item) => (
            <div className="image-card" key={item.id} onClick={() => handlePlaceClick(item)}>
              <img src={item.src} alt={` ${item.id}`} className="image" />
              <p className="title">{item.title}</p>
            </div>
          ))}
        </div>
      ) : (
        <div className="place-details">
          <button onClick={() => setSelectedPlace(null)} className="back-button">
            <BsArrowLeftShort className='icon' /> Back to all places
          </button>
          <h2>{selectedPlace.title}</h2>
          <img src={selectedPlace.src} alt={selectedPlace.title} className="image" />
          <p className="description">{selectedPlace.description}</p>
          <h3>Reviews:</h3>
<div className="reviews-container">
  {selectedPlace.reviews.map((review) => (
    <div className="review-card" key={review.id}>
      <div className="review-header">
        <div className="review-user-icon">👤</div> {/* Add a user icon or use an actual icon */}
        <strong>{review.user}</strong>
      </div>
      <p className="review-comment">"{review.comment}"</p>
      <div className="review-rating">
        {Array.from({ length: review.rating }, (_, i) => (
          <span key={i}>⭐</span>  
        ))}
      </div>
    </div>
  ))}
</div>
<h3>Add Your Review:</h3>
          <form onSubmit={handleReviewSubmit} className="review-form">
            <input
              type="text"
              name="user"
              value={newReview.user}
              onChange={handleReviewChange}
              placeholder="Your Name"
              required
            />
            <textarea
              name="comment"
              value={newReview.comment}
              onChange={handleReviewChange}
              placeholder="Your Review"
              required
            />
            <select
              name="rating"
              value={newReview.rating}
              onChange={handleReviewChange}
            >
              <option value="1">1 Star</option>
              <option value="2">2 Stars</option>
              <option value="3">3 Stars</option>
              <option value="4">4 Stars</option>
              <option value="5">5 Stars</option>
            </select>
            <button type="submit">Submit Review</button>
          </form>

          <div className="buttons">
            <button onClick={() => handleMapClick(selectedPlace.location)}>View on Google Maps</button>
            <button onClick={handleVehicleBookingClick}>Book a Vehicle</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Places;
