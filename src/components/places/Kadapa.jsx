import React, { useState } from 'react';
import './Kadapa.css';
import { BsArrowLeftShort } from "react-icons/bs";  
import img1 from '../../Interactive/Gandikota/Gandikota_Madhavaraya_Temple.jpg';
import img2 from '../../Interactive/Gandikota/Jamia Masjid.jpg';
import img3 from '../../Interactive/Gandikota/Owk Reservoir.jpg'; 
import img4 from '../../Interactive/Gandikota/Pennar River Gorge Viewpoint.jpg'; 
import img5 from '../../Interactive/Gandikota/Raghunathaswamy Temple.jpg'; 

const Kadapa = ({ onBackClick }) => { 
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [newReview, setNewReview] = useState({ user: '', comment: '', rating: 1 });
  const images = [
    {
      id: 1,
      src: img1, 
      title: "Gandikota Madhavaraya Temple",
      description: "The Gandikota Madhavaraya Temple, located in Andhra Pradesh, is a 14th-century architectural gem dedicated to Lord Vishnu. Renowned for its intricate carvings and stunning stone work, it exemplifies the Dravidian and Vijayanagara architectural styles. Nestled within the Gandikota Fort complex, the temple offers breathtaking views of the surrounding landscapes and the Pennar River gorge. Its historical significance and serene atmosphere attract both pilgrims and history enthusiasts, making it a noteworthy destination in the region.",
      reviews: [
        { id: 1, user: "John Doe", comment: "Amazing temple with great history!", rating: 5 },
        { id: 2, user: "Jane Smith", comment: "Beautiful architecture and peaceful surroundings.", rating: 4 }
      ]
    },
    {
      id: 2,
      src: img2, 
      title: "Jamia Masjid",
      description: "The Jamia Masjid, located in the heart of Old Delhi, is one of India's largest and most renowned mosques. Commissioned by the Mughal Emperor Shah Jahan in the 17th century, its construction was completed in 1656. The mosque features a stunning blend of Indo-Islamic architecture, characterized by its grand domes, intricate carvings, and expansive courtyards. With a capacity to accommodate around 25,000 worshippers, it serves as a central hub for the Muslim community in Delhi. The Jamia Masjid stands as a testament to the rich cultural heritage of India, attracting both devotees and tourists alike.",
      reviews: [
        { id: 1, user: "Alice Johnson", comment: "A must-visit historical site.", rating: 5 },
        { id: 2, user: "Bob Brown", comment: "Impressive architecture and history.", rating: 4 }
      ]
    },
    {
      id: 3,
      src: img3, 
      title: "Owk Reservoir",
      description: "The Owk Reservoir, located in the Nallamala Hills of Andhra Pradesh, is an important water body that serves as a vital source of irrigation and drinking water for the surrounding regions. Constructed across the Krishna River, the reservoir was developed to enhance agricultural productivity and support local livelihoods. It is surrounded by picturesque landscapes, making it a popular spot for nature lovers and photographers. The reservoir also plays a crucial role in flood control and groundwater recharge. Additionally, the tranquil environment and scenic beauty make it a great destination for picnics and outdoor activities.",
      reviews: [
        { id: 1, user: "Charlie Davis", comment: "Beautiful and serene spot.", rating: 5 },
        { id: 2, user: "Dana White", comment: "Perfect for a family picnic.", rating: 4 }
      ]
    },
    {
      id: 4,
      src: img4, 
      title: "Pennar River Gorge Viewpoint",
      description: "The Pennar River Gorge Viewpoint, located near Gandikota in Andhra Pradesh, offers breathtaking panoramic views of the stunning gorge formed by the Pennar River. This viewpoint is renowned for its dramatic cliffs and vibrant landscapes, making it a popular destination for nature enthusiasts and photographers. Visitors can enjoy picturesque sunsets and the serene beauty of the river as it winds through the rugged terrain. The area is also rich in flora and fauna, adding to its charm. With its tranquil ambiance and scenic vistas, the Pennar River Gorge Viewpoint is an ideal spot for relaxation and exploration.",
      reviews: [
        { id: 1, user: "Eve Green", comment: "Absolutely stunning views!", rating: 5 },
        { id: 2, user: "Frank Hall", comment: "Great place for photography.", rating: 4 }
      ]
    },
    {
      id: 5,
      src: img5, 
      title: "Raghunathaswamy Temple",
      description: "The Raghunathaswamy Temple, situated in the town of Bhadrachalam, Andhra Pradesh, is a revered Hindu shrine dedicated to Lord Rama, an incarnation of Lord Vishnu. Constructed in the 17th century, the temple is known for its stunning Dravidian architecture and intricate sculptures. It is believed to be the site where Lord Rama, along with Sita and Lakshmana, is said to have visited during their exile, making it a significant pilgrimage destination. The temple hosts numerous festivals, attracting thousands of devotees, especially during Rama Navami. Its serene atmosphere, rich history, and spiritual significance make the Raghunathaswamy Temple a must-visit for those exploring the cultural heritage of the region.",
      reviews: [
        { id: 1, user: "Grace King", comment: "A spiritual and historical gem.", rating: 5 },
        { id: 2, user: "Harry Lewis", comment: "Peaceful and beautiful temple.", rating: 4 }
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

export default Kadapa;
