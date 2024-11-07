import React, { useState } from 'react';
import './arku.css';
import { BsArrowLeftShort } from "react-icons/bs";  
import img1 from '../../Interactive/Papikondalu/papikondalu.jpg';
import img2 from '../../Interactive/Papikondalu/Pattiseema.jpg';

const Papikondalu = ({ onBackClick }) => { 
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [newReview, setNewReview] = useState({ user: '', comment: '', rating: 1 });
  const images = [
    {
      id: 1,
      src: img1, 
      title: "Papikondalu",
      description: "Papikondalu, also known as the Papikondalu Hills, is a picturesque mountain range located in the West Godavari district of Andhra Pradesh. The area is renowned for its stunning natural beauty, with lush green hills, dense forests, and the serene Godavari River flowing through the region. Popular for its scenic boat rides, Papikondalu offers visitors breathtaking views of the landscape and a chance to experience the tranquility of nature. The hills are also home to various tribal communities, showcasing rich cultural heritage and traditions. The region is an ideal destination for nature lovers, adventure enthusiasts, and those seeking a peaceful getaway.",
      location: "Papikondalu, Andhra Pradesh",
      reviews: [
        { id: 1, user: "Emma Wilson", comment: "A hidden gem! The boat ride was amazing.", rating: 5 },
        { id: 2, user: "Michael Lee", comment: "Beautiful landscapes and peaceful surroundings.", rating: 4 }
      ]
    },
    {
      id: 2,
      src: img2, 
      title: "Pattiseema",
      description: "Pattiseema is a picturesque village located in the West Godavari district of Andhra Pradesh, known for its serene landscapes and cultural significance. Situated on the banks of the Godavari River, it is famous for the Pattiseema Lift Irrigation Scheme, which plays a crucial role in irrigation and water supply to the surrounding agricultural lands. The village is also home to the ancient Sri Veerabhadra Swamy Temple, attracting numerous devotees and tourists. The scenic beauty of Pattiseema, with lush greenery and the flowing river, makes it a popular destination for nature lovers and those seeking tranquility. Additionally, the region offers opportunities for boating and exploring the rich biodiversity of the Godavari ecosystem.",
      location: "Pattiseema, Andhra Pradesh",
      reviews: [
        { id: 1, user: "Sophia Turner", comment: "A serene village with rich culture!", rating: 5 },
        { id: 2, user: "James Carter", comment: "Great place for a peaceful retreat.", rating: 4 }
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
      ): (
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

export default Papikondalu;
