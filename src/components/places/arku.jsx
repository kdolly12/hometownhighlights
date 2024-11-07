import React, { useState } from 'react';
import './arku.css';
import { BsArrowLeftShort } from "react-icons/bs";
import img1 from '../../Interactive/Araku/Anantagiri.jpg';
import img2 from '../../Interactive/Araku/Anantagiri water_Falls.jpg';
import img3 from '../../Interactive/Araku/Araku_Dudumawaterfalls.jpg';
import img4 from '../../Interactive/Araku/Chaaparai water falls.jpg';
import img5 from '../../Interactive/Araku/TribalMuseum.jpg';

const images = [
  {
    id: 1,
    src: img1,
    title: "Anantagiri",
    description: "At a distance of 26 km from Araku, 85 km from Vizag & 660 km from Hyderabad, Anantagiri is a lovely tiny hill station between Vizag and Araku Valley. It is one of the top tourist places to visit in Araku Valley and is also among the top hill station in Andhra Pradesh apart from being a popular weekend getaway from Vizag city.At an altitude of 1168 meters, Anantagiri is famous for extensive coffee plantations and numerous waterfalls. There is a view point on the way to Anantagiri on main road that offers excellent views of the deep valleys on one side and coffee plantations on the other side.Anantagiri Hills are well known for its scenic beauty and charming weather. It is a perfect gateway to spend some time amidst the lap of nature. Anantagiri is paradise for coffee lovers and nature enthusiasts. The village is surrounded by coffee estates that emit the rich aroma of coffee and the surrounding hillocks are home to cascading waterfalls that feed the lush greenery.The famous Borra Caves are very close to Anantagiri. This unexplored and peaceful environment of the hill station attracts tourists from various parts of the state. Watching the panoramic views ranging from sunrise, sunset, thick forests and mountain ranges cover the route between Vizag to Anantagiri. The Anantagiri hill resort is a perfect getaway from the hot and humid weather of Vizag in summer months.Accommodation is easily available in Anantagiri Hills. There are various types of hotels and lodges in the area which offer pleasant lodging facilities and services. AP tourism runs a resort is the Anantagiri village. Jungle Bells resort at Tyda is about 11 km from Anantagiri and it's a wonderful option to stay.Anantagiri hills can be reached via both road and rail. The closest railhead to these hills is 9 km away at Borra Caves. State buses are also available, in order to reach these hills.",
    reviews: [
      { id: 1, user: "John Doe", comment: "Amazing place, must visit!", rating: 5 },
      { id: 2, user: "Jane Smith", comment: "Beautiful scenery!", rating: 4 }
    ]
  },
  {
    id: 2,
    src: img2,
    title: "Anantagiri Waterfalls",
    description: "Anantagiri Waterfalls: A Serene Retreat in Nature Nestled in the picturesque hills of the Eastern Ghats, Anantagiri Waterfalls is a breathtaking natural wonder located near the Anantagiri Hills in the Vikarabad district of Telangana, India. This stunning waterfall, formed by the flowing waters of the Musi River, cascades down rocky cliffs, creating a mesmerizing sight that captivates visitors throughout the year.The waterfall is surrounded by lush greenery and dense forests, making it an ideal destination for nature lovers and adventure enthusiasts alike. The cool, refreshing mist from the falls adds to the allure, providing a perfect spot for a relaxing picnic or a rejuvenating trek through the scenic landscapes. The area is also home to diverse flora and fauna, offering opportunities for birdwatching and wildlife photography.Anantagiri Waterfalls is particularly enchanting during the monsoon season when the water flow is at its peak, creating a spectacular display of nature's power. Adventurous visitors can enjoy trekking trails that lead to the falls, where they can explore the rich biodiversity and experience the serenity of the surrounding environment.Whether you're seeking tranquility, adventure, or a picturesque escape, Anantagiri Waterfalls promises an unforgettable experience in the heart of nature.",
    reviews: [
      { id: 1, user: "Alice Johnson", comment: "Perfect for a weekend getaway.", rating: 5 },
      { id: 2, user: "Bob Brown", comment: "Loved the trekking trails.", rating: 4 }
    ]
  },
  {
    id: 3,
    src: img3,
    title: "Duduma Falls",
    description: "At a distance of 70 Kms from Araku, Duduma Falls (also known as Matsya Tirtha) on Machkund River is located in Orissa state close to Munchingiputtu village of Visakhapatnam District. With a height of 520 feet, this is one of the most popular waterfalls in Orissa state.The tourism department has started focusing on this destination and can see some facilities here going forward. Nearby Jalaput Dam on Machkund River offers spectacular views",
    reviews: [
      { id: 1, user: "Charlie Davis", comment: "Spectacular views!", rating: 5 },
      { id: 2, user: "Dana White", comment: "A must-visit place.", rating: 4 }
    ]
  },
  {
    id: 4,
    src: img4,
    title: "Chaparai Waterfalls",
    description: "Chaparai Waterfalls is a stunning natural attraction located near Vikarabad in Telangana, India. Formed by the Musi River, the falls cascade down rocky terrain, creating a picturesque landscape surrounded by lush greenery. This hidden gem is particularly enchanting during the monsoon season when the water flow intensifies, making it a popular spot for nature lovers and adventure seekers. Visitors can enjoy picnics, explore nearby trails, and take in the serene atmosphere. With its breathtaking beauty and tranquil environment, Chaparai Waterfalls offers a perfect escape for anyone looking to connect with nature.",
    reviews: [
      { id: 1, user: "Eve Green", comment: "Beautiful and serene.", rating: 5 },
      { id: 2, user: "Frank Hall", comment: "Great for a day trip.", rating: 4 }
    ]
  },
  {
    id: 5,
    src: img5,
    title: "Tribal Museum",
    description: "Tribal Museum is a cultural haven that showcases the rich heritage and diverse traditions of the tribal communities in India. Located in cities like Hyderabad, the museum features an extensive collection of artifacts, traditional crafts, and artworks that reflect the unique lifestyles and beliefs of various tribes. Visitors can explore exhibits that highlight tribal rituals, music, dance, and costumes, providing insight into their vibrant cultures. The museum often hosts workshops and cultural programs, allowing visitors to engage with tribal artists and learn about their skills. With its immersive experience, the Tribal Museum serves as an essential platform for preserving and promoting tribal heritage.",
    reviews: [
      { id: 1, user: "Grace King", comment: "Insightful and educational.", rating: 5 },
      { id: 2, user: "Harry Lewis", comment: "A cultural treasure.", rating: 4 }
    ]
  }
];

const Arku = ({ onBackClick }) => {
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [newReview, setNewReview] = useState({ user: '', comment: '', rating: 1 });
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
              <img src={item.src} alt={`Image ${item.id}`} className="image" />
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
                  <div className="review-user-icon">👤</div>
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

export default Arku;
