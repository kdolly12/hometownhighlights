import React, { useState } from 'react';
import './app.css';
import Navbar from './components/Navbar/navbar';
import Home from './components/Home/home';
import Popular from './components/popular/popular';
import About from './components/About/About';
import Blog from './components/blog/blog';
import Footer from './components/Fotter/fotter';
import Offers from './components/offers/offers';
import AllPlaces from './components/places/allplaces';
import Login from './components/Navbar/login';
import Signup from './components/Navbar/signup';
import AmravathiPlaces from './components/places/places'; 
import Arku from './components/places/arku';
import Papi from './components/places/papikondalu';

const Offer = () => {
  
  return (
    <div>
        
          <Offers />
          <About />
          <Blog />
          <Footer />
      
      

      
    </div>
  );
};

export default Offer;
