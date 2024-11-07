import React, { useEffect } from 'react'; 
import './home.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

const Home = ({ onExploreClick }) => { // Receive onExploreClick as a prop
  useEffect(() => {
    Aos.init({ duration: 1000 });
  }, []);

  return (
    <section className="home">
      <div className="secContainer container">
        <div className="homeText">
          <h1 data-aos='fade-up' className="title">
            HomeTown Highlights - Your travel guide
          </h1>
          <p data-aos='fade-up' className="subTitle">
            Travel to your favourite city with respect for the environment!
          </p>
          <button data-aos='fade-up' className="btn" onClick={onExploreClick}>
            Explore Now
          </button>
        </div>
        <div  className="homeCard grid">
          <div className="locationDiv">
            <label htmlFor="location">Location</label>
            <input type="text" placeholder='Dream Destination' />
          </div>

          <div className="distDiv">
            <div className="distance">
              <label htmlFor="location">Distance</label>
              <input type="text" placeholder='11/Meters' />
            </div>
          </div>
          <div className="priceDiv">
            <div className="price">
              <label htmlFor="location">Price Range</label>
              <input type="text" placeholder='$140-$500' />
            </div>
          </div>
          <button className='btn'>
            Search
          </button>
        </div>
      </div>
    </section>
  );
};

export default Home;
