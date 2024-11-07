import React, { useState } from 'react';
import './kurnool.css';
import { BsArrowLeftShort } from "react-icons/bs";  
import img1 from '../../Interactive/Kurnool/341453769Kurnool_KondaReddy_Fort_Main.jpg';
import img2 from '../../Interactive/Kurnool/Belumcaves_Main.jpg';
import img3 from '../../Interactive/Kurnool/Mantralayam.jpg'; 
import img4 from '../../Interactive/Kurnool/Orvakal Rock Garden.jpg'; 
import img5 from '../../Interactive/Kurnool/Rollapadu Wildlife Sanctuary.jpg'; 
import img6 from '../../Interactive/Kurnool/Srisailam.jpg'; 

const Kurnool = ({ onBackClick }) => { 
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [newReview, setNewReview] = useState({ user: '', comment: '', rating: 1 });
  const images = [
    {
      id: 1,
      src: img1, 
      title: "Konda Reddy Fort",
      description: "Konda Reddy Fort, located in the town of Kurnool, Andhra Pradesh, is a historic fort that dates back to the 15th century. Built by the Reddy dynasty, the fort showcases a mix of architectural styles influenced by both Hindu and Islamic designs. Perched on a hill, it offers stunning views of the surrounding landscape and the Kurnool city below. The fort features several ancient structures, including temples, walls, and bastions, reflecting its strategic importance in history.",
      reviews: [
        { id: 1, user: "Alice Johnson", comment: "A magnificent fort with a rich history!", rating: 5 },
        { id: 2, user: "Bob Brown", comment: "The views from the top are breathtaking.", rating: 4 }
      ]
    },
    {
      id: 2,
      src: img2, 
      title: "Belum Caves",
      description: "Belum Caves, located in the Chittoor district of Andhra Pradesh, are one of the largest and most impressive cave systems in India. Spanning over 3,000 meters, these limestone caves are renowned for their stunning stalactites and stalagmites, showcasing unique geological formations.",
      reviews: [
        { id: 1, user: "Charlie Davis", comment: "A mesmerizing experience inside the caves!", rating: 5 },
        { id: 2, user: "Dana White", comment: "Unique geological formations and a must-visit!", rating: 4 }
      ]
    },
    {
      id: 3,
      src: img3, 
      title: "Mantralayam",
      description: "Mantralayam is a prominent pilgrimage town located in the Kurnool district of Andhra Pradesh, known for its deep spiritual significance and rich cultural heritage. It is famously associated with the revered saint Raghavendra Swamy.",
      reviews: [
        { id: 1, user: "Eve Green", comment: "A peaceful place for spiritual seekers.", rating: 5 },
        { id: 2, user: "Frank Hall", comment: "Beautiful temple and serene surroundings.", rating: 4 }
      ]
    },
    {
      id: 4,
      src: img4, 
      title: "Orvakal Rock Garden",
      description: "Orvakal Rock Garden, located near Kurnool in Andhra Pradesh, is a stunning natural park known for its unique rock formations and scenic beauty. Spanning over 200 acres, the garden features impressive boulders and cliffs.",
      reviews: [
        { id: 1, user: "Grace King", comment: "Great place for a picnic with family!", rating: 5 },
        { id: 2, user: "Harry Lewis", comment: "The rock formations are impressive.", rating: 4 }
      ]
    },
    {
      id: 5,
      src: img5, 
      title: "Rollapadu Wildlife Sanctuary",
      description: "Rollapadu Wildlife Sanctuary, located in the Kurnool district of Andhra Pradesh, is a protected area renowned for its rich biodiversity and conservation efforts.",
      reviews: [
        { id: 1, user: "John Doe", comment: "A fantastic spot for wildlife enthusiasts.", rating: 5 },
        { id: 2, user: "Jane Smith", comment: "Saw so many different birds here!", rating: 4 }
      ]
    },
    {
      id: 6,
      src: img6, 
      title: "Srisailam",
      description: "Srisailam is a historic town located in Andhra Pradesh, renowned for its rich cultural heritage and spiritual significance. It is home to the famous Srisailam Temple, dedicated to Lord Shiva.",
      reviews: [
        { id: 1, user: "Alice Johnson", comment: "The temple is beautiful and serene.", rating: 5 },
        { id: 2, user: "Bob Brown", comment: "A great place for spirituality and adventure.", rating: 4 }
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
            <button onClick={() => handleMapClick(selectedPlace.title)}>View on Google Maps</button>
            <button onClick={handleVehicleBookingClick}>Book a Vehicle</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Kurnool;
