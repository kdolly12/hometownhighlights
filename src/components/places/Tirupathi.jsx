import React, { useState } from 'react';
import './Tirupathi.css';
import { BsArrowLeftShort } from "react-icons/bs";  
import img1 from '../../Interactive/Tirupathi/tirumala.jpg';
import img2 from '../../Interactive/Tirupathi/203211133Pushkarini_Main_New.jpg';
import img3 from '../../Interactive/Tirupathi/20321113VarahaswamyTemple_Main.jpg'; 
import img4 from '../../Interactive/Tirupathi/203211683BediAnjaneyaTemple_Main.jpg'; 
import img5 from '../../Interactive/Tirupathi/741666471Tirumala_SrivariPadalu_Main.jpg';
import img6 from '../../Interactive/Tirupathi/741666646Tirumala_Venkateswara_Sanctuary_Main.jpg';
import img7 from '../../Interactive/Tirupathi/741666954Tirumala_AkasaGanga_Main.jpg';
import img8 from '../../Interactive/Tirupathi/759142297Shilatoranam_Main.jpg';
import img9 from '../../Interactive/Tirupathi/759142556Tirupati_Main.jpg';
import img10 from '../../Interactive/Tirupathi/75914255Chakratirth _Main.jpg';

const Tirumala = ({ onBackClick }) => { 
  const [selectedPlace, setSelectedPlace] = useState(null);
  const [newReview, setNewReview] = useState({ user: '', comment: '', rating: 1 });
  const images = [
    {
      id: 1,
      src: img1, 
      title: "Tirumala Main Temple",
      description: "The Tirumala Main Temple, also known as the Sri Venkateswara Swamy Temple, is one of the most revered Hindu temples in the world. Dedicated to Lord Venkateswara, an incarnation of Lord Vishnu, it is situated on the Tirumala Hills in Andhra Pradesh. The temple is renowned for its intricate Dravidian architecture, showcasing beautifully carved gopurams (towers) and sanctuaries. Millions of devotees visit this temple annually to seek the blessings of Lord Venkateswara, making it one of the richest and most visited religious sites globally. The spiritual atmosphere and sacred rituals performed here elevate the entire pilgrimage experience.",
      location: "Tirumala Hills, Andhra Pradesh",
      reviews: [
        { id: 1, user: "John Doe", comment: "An amazing spiritual experience!", rating: 5 },
        { id: 2, user: "Jane Smith", comment: "A beautiful temple with rich history.", rating: 4 }
       ]
    },
    {
      id: 2,
      src: img2, 
      title: "Pushkarini",
      description: "Tirupathi's Pushkarini, also known as Swami Pushkarini, is a sacred temple tank located adjacent to the renowned Tirumala Venkateswara Temple. This holy water body holds great spiritual significance, as it is believed to be brought from Vaikuntha, the celestial abode of Lord Vishnu. Pilgrims visiting Tirumala take a ritual bath in the Pushkarini before entering the temple, considering it a purification act before seeking the Lord's blessings. The serene environment around the Pushkarini adds to its divine aura, making it an integral part of the pilgrimage experience at Tirupathi.",
      location: "Tirumala Hills, Andhra Pradesh",
      reviews: [
        { id: 1, user: "Rahul", comment: "The water here feels very pure and calming.", rating: 5 },
        { id: 2, user: "Ananya", comment: "A peaceful spot to reflect.", rating: 4 }
      ]
    },
    {
      id: 3,
      src: img3, 
      title: "Varahaswamy Temple",
      description: "The Varahaswamy Temple, located on the banks of Swami Pushkarini at Tirumala, is dedicated to Lord Varaha, the boar incarnation of Lord Vishnu. According to legend, Lord Varaha rescued the Earth from the demon Hiranyaksha, making this temple a site of immense spiritual significance. It is believed that devotees should first offer prayers at the Varahaswamy Temple before proceeding to the main Tirumala Venkateswara Temple. The temple features classic Dravidian architecture and has a serene, ancient ambiance, making it an important part of the pilgrimage to Tirumala.",
      location: "Tirumala Hills, Andhra Pradesh",
      reviews: [
        { id: 1, user: "Priya", comment: "Great spiritual experience.", rating: 5 },
        { id: 2, user: "Manoj", comment: "A must-visit before entering the main temple.", rating: 4 }
      ]
    },
    {
      id: 4,
      src: img4, 
      title: "Bedi Anjaneya Temple",
      description: "The Bedi Anjaneya Temple is a small yet significant temple located opposite the main Tirumala Venkateswara Temple. It is dedicated to Lord Hanuman, known here as Anjaneya. According to local legend, the idol of Lord Hanuman is seen with his hands bound by chains ('Bedi'), symbolizing a mother's attempt to restrain him. Pilgrims often visit this temple after their darshan at the main shrine, seeking Lord Hanuman’s blessings for strength and protection. Though modest in size, the temple holds immense spiritual value, especially for devotees of Lord Hanuman.",
      location: "Tirumala Hills, Andhra Pradesh",
      reviews: [
        { id: 1, user: "Deepak", comment: "Strong spiritual vibes here!", rating: 5 },
        { id: 2, user: "Suma", comment: "Lovely place with a unique story.", rating: 4 }
      ]
    },
    {
      id: 5,
      src: img5, 
      title: "Srivari Padalu",
      description: "Srivari Padalu is a sacred site located on the Narayanagiri Hill, one of the highest points in Tirumala. It is believed to mark the spot where Lord Venkateswara first set his feet upon arriving on Earth. The term 'Srivari Padalu' translates to Lord's feet, and the footprints of Lord Venkateswara are enshrined here, attracting pilgrims who seek blessings by offering prayers and touching the sacred marks. The location provides a tranquil environment with breathtaking views of the Tirumala Hills, adding to its spiritual significance. Srivari Padalu is an essential stop for many pilgrims visiting Tirumala.",
      location: "Narayanagiri Hill, Tirumala, Andhra Pradesh",
      reviews: [
        { id: 1, user: "Naveen", comment: "An important site with breathtaking views.", rating: 5 },
        { id: 2, user: "Radha", comment: "Worth the visit for both views and spirituality.", rating: 4 }
      ]
    },
    {
      id: 6,
      src: img6, 
      title: "Tirumala Venkateswara Sanctuary",
      description: "The Tirumala Venkateswara Sanctuary, also known as the Sri Venkateswara Wildlife Sanctuary, is a vast protected area surrounding the sacred Tirumala Hills. Spanning over 353 square kilometers, it is home to a diverse range of flora and fauna, making it a significant ecological zone. The sanctuary is known for its rich biodiversity, including species like leopards, sambars, sloth bears, and numerous bird species. Nestled amidst the Eastern Ghats, the sanctuary offers a serene and scenic backdrop for pilgrims visiting Tirumala. The lush forests and tranquil environment provide an additional sense of peace and connection to nature, complementing the spiritual aura of the region.",
      location: "Tirumala Hills, Andhra Pradesh",
      reviews: [
        { id: 1, user: "Harish", comment: "Beautiful nature and peaceful surroundings.", rating: 5 },
        { id: 2, user: "Sneha", comment: "A scenic spot, especially for nature lovers.", rating: 4 }
      ]
    },
    {
      id: 7,
      src: img7, 
      title: "Akasa Ganga",
      description: "Akasa Ganga is a sacred waterfall located near the Tirumala Venkateswara Temple, considered highly divine by devotees. According to legend, this waterfall originated directly from the feet of Lord Vishnu, and its waters are used for the daily rituals and bathing of the deity at the temple. Pilgrims often visit Akasa Ganga to take a dip in the holy waters, believing it to purify both body and soul. Surrounded by the lush greenery of the Tirumala Hills, the site offers a tranquil atmosphere, making it a spiritually enriching experience for those seeking blessings and inner peace.",
      location: "Tirumala Hills, Andhra Pradesh",
      reviews: [
        { id: 1, user: "Vikram", comment: "Refreshing and spiritual.", rating: 5 },
        { id: 2, user: "Asha", comment: "A must-visit for its holiness and scenic beauty.", rating: 4 }
      ]
    },
    {
      id: 8,
      src: img8, 
      title: "Shilatoranam",
      description: "Shilatoranam, also known as the 'Shila Thoranam,' is a natural rock formation located in the Tirumala Hills, near the Sri Venkateswara Temple. This unique geological structure resembles a massive arch or torana (gateway) and is believed to hold significant spiritual importance. According to local legend, the formation is associated with the various mythological stories of Lord Venkateswara and his divine manifestations. Pilgrims often visit Shilatoranam as part of their journey to Tirumala, appreciating its natural beauty and taking the opportunity to offer prayers and seek blessings in this tranquil setting. The site serves as a reminder of the spiritual harmony between nature and divinity, making it a cherished landmark in the region.",
      location: "Tirumala Hills, Andhra Pradesh",
      reviews: [
        { id: 1, user: "Ravi", comment: "Very unique and full of energy.", rating: 5 },
        { id: 2, user: "Anjali", comment: "Loved the geological aspect and history.", rating: 4 }
      ]
    },
    {
      id: 9,
      src: img9, 
      title: "Tirupati Main",
      description: "The main city of Tirupati is a bustling hub for pilgrims visiting the nearby Tirumala Temple...",
      location: "Tirupati, Andhra Pradesh",
      reviews: [
        { id: 1, user: "Arjun", comment: "Great place to start the pilgrimage.", rating: 5 },
        { id: 2, user: "Megha", comment: "Nice city with helpful locals.", rating: 4 }
      ]
    },
    {
      id: 10,
      src: img10, 
      title: "Chakratirth",
      description: "Chakratirth, also known as Chakratirtham, is a sacred water tank situated near the Sri Venkateswara Temple in Tirumala. This holy site is named after the Sudarshana Chakra, the divine weapon of Lord Vishnu. It is believed that the waters of Chakratirth have purifying properties, making it an important spot for pilgrims seeking spiritual cleansing. Devotees often take a holy dip in the tank before proceeding to the main temple, considering it an essential part of their pilgrimage ritual. The serene atmosphere and picturesque surroundings of Chakratirth enhance its spiritual significance, making it a cherished landmark in the Tirumala pilgrimage circuit.",
      location: "Tirumala Hills, Andhra Pradesh",
      reviews: [
        { id: 1, user: "Kiran", comment: "Peaceful and divine.", rating: 5 },
        { id: 2, user: "Shilpa", comment: "The water is so refreshing.", rating: 4 }
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
          <h3>Location:</h3>
          <p>{selectedPlace.location}</p>
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

export default Tirumala;
