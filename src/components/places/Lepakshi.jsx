import React, { useState } from 'react';
import './arku.css';
import { BsArrowLeftShort } from "react-icons/bs";  
import img1 from '../../Interactive/Lepakshi/Lepakshi Nandi.jpg';
import img2 from '../../Interactive/Lepakshi/Veerabhadra Swamy Temple - Lepakshi.jpg';

const Lepakshi = ({ onBackClick }) => { 
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [newReview, setNewReview] = useState({ user: '', comment: '', rating: 1 });
  const images = [
    {
      id: 1,
      src: img1, 
      title: "Lepakshi Nandi",
      description: "Lepakshi Nandi, located in the Lepakshi village of Andhra Pradesh, is a magnificent monolithic statue of a bull, revered as the vahana (vehicle) of Lord Shiva. The statue, carved from a single block of stone, measures about 20 feet in length and 15 feet in height, making it one of the largest Nandi statues in India. It is situated near the famous Lepakshi Temple, which is known for its exquisite architecture and intricate frescoes. The statue's serene expression and detailed carvings attract numerous visitors and pilgrims, who come to admire its craftsmanship and spiritual significance. Lepakshi Nandi is not only a symbol of devotion but also a remarkable example of the artistic brilliance of the Vijayanagara period, showcasing the region's rich cultural heritage.",
      location: "Lepakshi, Andhra Pradesh",
      reviews: [
        { id: 1, user: "John Doe", comment: "A stunning statue!", rating: 5 },
        { id: 2, user: "Jane Smith", comment: "Incredible craftsmanship.", rating: 4 }
      ]
    },
    {
      id: 2,
      src: img2, 
      title: "Veerabhadra Swamy Temple",
      description: "The Veerabhadra Swamy Temple, located in the town of Lepakshi, Andhra Pradesh, is a significant Hindu shrine dedicated to Lord Veerabhadra, an incarnation of Lord Shiva. Built in the 16th century during the reign of the Vijayanagara Empire, the temple is renowned for its stunning Dravidian architecture and intricate carvings. The temple complex features elaborate sculptures, beautifully painted ceilings, and a massive Nandi statue, which adds to its grandeur. A notable highlight is the hanging pillar, which demonstrates the architectural ingenuity of the time. The temple attracts numerous devotees and tourists, making it an important cultural and historical site in the region. With its rich heritage and spiritual ambiance, the Veerabhadra Swamy Temple remains a must-visit destination for those exploring the cultural legacy of Andhra Pradesh.",
      location: "Lepakshi, Andhra Pradesh",
      reviews: [
        { id: 1, user: "Alice Johnson", comment: "A must-visit for history lovers!", rating: 5 },
        { id: 2, user: "Bob Brown", comment: "Beautiful architecture and peaceful.", rating: 4 }
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
              <img src={item.src} alt={`${item.id}`} className="image" />
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

export default Lepakshi;
