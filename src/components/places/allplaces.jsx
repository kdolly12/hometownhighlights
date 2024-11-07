import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import './allplaces.css';
import { BsArrowLeftShort, BsArrowRightShort, BsDot } from "react-icons/bs";  
import img1 from '../../Interactive/Tirupathi/tirumala.jpg';
import img2 from '../../Interactive/Amaravati/Dhyana BuddhaStatue.jpg';
import img3 from '../../Interactive/Araku/Araku_Dudumawaterfalls.jpg';
import img4 from '../../Interactive/Papikondalu/papikondalu.jpg';
import img5 from '../../Interactive/Gandikota/Raghunathaswamy Temple.jpg';
import img6 from '../../Interactive/Kurnool/Belumcaves_Main.jpg';
import img7 from '../../Interactive/Lepakshi/Lepakshi Nandi.jpg';

const places = [
  {
    id: 1,
    src: img1,
    title: "Chittoor",
    location: "Tirumala",
    description: "A religious and cultural hotspot."
  },
  {
    id: 2,
    src: img2,
    title: "Guntur",
    location: "Amaravathi",
    description: "Experience the serene atmosphere of Dhyana Buddha."
  },
  {
    id: 3,
    src: img3,
    title: "Vizag",
    location: "Araku",
    description: "A scenic destination with stunning waterfalls."
  },
  {
    id: 4,
    src: img4,
    title: "Alluri Sitharama Raju",
    location: "Papikondalu",
    description: "A mesmerizing view of the Papikondalu hills."
  },
  {
    id: 5,
    src: img5,
    title: "Kadapa",
    location: "Gandikota",
    description: "The Grand Canyon of India."
  },
  {
    id: 6,
    src: img6,
    title: "Kurnool",
    location: "Belumcaves",
    description: "India's second longest caves."
  },
  {
    id: 7,
    src: img7,
    title: "Lepakshi",
    location: "Lepakshi Nandi",
    description: "Famous for its rich architectural legacy."
  }
];

const AllPlaces = ({ onBackClick, onArkuClick }) => {
  const [selectedPlace, setSelectedPlace] = useState(null); 
  const navigate = useNavigate(); // Initialize useNavigate

  const handlePlaceClick = (place) => {
    if (place.location === "Amaravathi") {
      navigate('/Amaravathi'); // Navigate to Places.jsx when Amaravathi is clicked
    } else if (place.location === "Araku") {
      navigate('/Araku');
    } 
    else if (place.location === "Papikondalu") {
      navigate('/papikondalu');
    } 
    else if (place.location === "Gandikota") {
      navigate('/Gandikota');
    } 
    else if (place.location === "Belumcaves") {
      navigate('/Kurnool');
    } 
    else if (place.location === "Lepakshi Nandi") {
      navigate('/Lepakshi');
    } 
    else if (place.location === "Tirumala") {
      navigate('/Tirupathi');
    }
    else {
      setSelectedPlace(place);
    }
  };

  return (
    <section className='popular section container'>
      <div className="back-button-container">
        <button onClick={onBackClick} className="back-button">
          <BsArrowLeftShort className='icon' />
        </button>
      </div>

      {!selectedPlace ? (
        <div className="secContainer">
          <div className="mainContent grid">
            {places.map((place) => (
              <div key={place.id} className="singleDestination">
                <div className="destImage">
                  <img src={place.src} alt={place.title} className="" />
                  <div className="overlayInfo" onClick={() => handlePlaceClick(place)}>
                    <h3>{place.title}</h3>
                    <p>{place.location}</p>
                    <BsArrowRightShort className='icon' />
                  </div>
                </div>
                <div className="destFooter">
                  <div className="number">0{place.id}</div>
                  <div className="destText flex">
                    <h6>{place.location}</h6>
                    <span className="flex">
                      <span className="dot">
                        <BsDot className='icon' />
                      </span>
                    
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="placeDetails">
          <button onClick={() => setSelectedPlace(null)} className="back-button">
            <BsArrowLeftShort className='icon' /> Back to all places
          </button>
          <h2>{selectedPlace.title}</h2>
          <img src={selectedPlace.src} alt={selectedPlace.title} />
          <p>{selectedPlace.description}</p>
        </div>
      )}
    </section>
  );
};

export default AllPlaces;
