// Navibar.js
import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom'; 
import Login from './components/Navbar/login';
import Signup from './components/Navbar/signup';
import Navbar from './components/Navbar/navbar';
import App from './App';
import Contact from './components/contact/contact';
import Resources from './components/resources/resources';
import Blog from './components/blog/blog';
import Amaravathi from './components/places/places';
import AllPlaces from './components/places/allplaces'; 
import Arku from './components/places/arku';
import Papi from './components/places/papikondalu';
import Kadapa from './components/places/Kadapa';
import Kurnool from './components/places/Kurnool';
import Lepa from './components/places/Lepakshi';
import Tirupathi from './components/places/Tirupathi';

const Navibar = () => {
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState('');
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div>
      <Navbar setShowLogin={setShowLogin} setShowSignup={setShowSignup} />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/products" element={<AllPlaces />} /> 
        <Route path="/blog" element={<Blog/>}/>
        <Route path="/resources" element={<Resources/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/Amaravathi" element={<Amaravathi />} />
        <Route path="/Araku" element={<Arku />} />
        <Route path="/papikondalu" element={<Papi />} />
        <Route path="/Gandikota" element={<Kadapa />} />
        <Route path="/kurnool" element={<Kurnool />} />
        <Route path="/Lepakshi" element={<Lepa />} />
        <Route path="/Tirupathi" element={<Tirupathi />} />
      </Routes>

      {showLogin && <Login setShowLogin={setShowLogin} setUsername={setUsername}/>}
      {showSignup && <Signup setShowSignup={setShowSignup} />}
    </div>
  );
};

export default Navibar;
