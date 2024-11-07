
// import React, { useState } from 'react';
// import './app.css';
// import Navbar from './components/Navbar/navbar';
// import Home from './components/Home/home';
// import Popular from './components/popular/popular';
// import About from './components/About/About';
// import Blog from './components/blog/blog';
// import Footer from './components/Fotter/fotter';
// import Offers from './components/offers/offers';
// import AllPlaces from './components/places/allplaces';
// import Login from './components/Navbar/login';
// import Signup from './components/Navbar/signup';
// import AmravathiPlaces from './components/places/places'; 
// import Arku from './components/places/arku';
// import Papi from './components/places/papikondalu';

// const App = () => {
//   const [showLogin, setShowLogin] = useState(false);
//   const [showSignup, setShowSignup] = useState(false);
//   const [showAllPlaces, setShowAllPlaces] = useState(false);
//   const [showAmravathiPlaces, setShowAmravathiPlaces] = useState(false); 
//   const[showArku,setShowArku]=useState(false);
//   const[showPapi,setShowPapi]=useState(false);

//   const handleExploreClick = () => {
//     setShowAllPlaces(true);
//   };

//   const handleBackClick = () => {
//     setShowAllPlaces(false);
//     setShowAmravathiPlaces(false); 
//     setShowArku(false);
//     setShowPapi(false);

//   };

//   const handleAmravathiClick = () => {
//     setShowAmravathiPlaces(true); 
//   };
//   const handleArkuClick=()=>{
//     setShowArku(true);
//   };
//   const handlePapiClick = () => {
//     setShowPapi(true); 
//   };
//   return (
//     <div>
//       <Navbar setShowLogin={setShowLogin} setShowSignup={setShowSignup} />

//       {!showAllPlaces && !showAmravathiPlaces && !showArku && !showPapi ? (
//         <>
//           <Home onExploreClick={handleExploreClick} />
//           <Popular onAmravathiClick={handleAmravathiClick}  onArkuClick={handleArkuClick} onPapiClick={handlePapiClick}/> 
//           <Offers />
//           <About />
//           <Blog />
//           <Footer />
//         </>
//       ): showPapi ? (
//         <div>
//           <Papi onBackClick={handleBackClick}/>
//         </div>
//       ): showArku ? (
//         <div>
//           <Arku onBackClick={handleBackClick}/>
//         </div>
//       ): showAmravathiPlaces ? (
//         <div>
//           <AmravathiPlaces onBackClick={handleBackClick} /> 
//         </div>
//       ) : (
//         <div>
//           <AllPlaces onBackClick={handleBackClick} />
//         </div>
//       )}

//       {showLogin && <Login setShowLogin={setShowLogin} />}
//       {showSignup && <Signup setShowSignup={setShowSignup} />}
//     </div>
//   );
// };

// export default App;

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
import { BrowserRouter ,Router,Routes } from 'react-router-dom';

const App = () => {
  // const [showLogin, setShowLogin] = useState(false);
  // const [showSignup, setShowSignup] = useState(false);
  const [showAllPlaces, setShowAllPlaces] = useState(false);
  const [showAmravathiPlaces, setShowAmravathiPlaces] = useState(false); 
  const [showArku, setShowArku] = useState(false);
  const [showPapi, setShowPapi] = useState(false);

  const handleExploreClick = () => {
    setShowAllPlaces(true);
  };

  const handleBackClick = () => {
    setShowAllPlaces(false);
    setShowAmravathiPlaces(false); 
    setShowArku(false);
    setShowPapi(false);
  };

  const handleAmravathiClick = () => {
    setShowAmravathiPlaces(true);
  };
  
  const handleArkuClick = () => {
    setShowArku(true);
  };
  
  const handlePapiClick = () => {
    setShowPapi(true);
  };

  return (
    <div>
      {/* <Navbar setShowLogin={setShowLogin} setShowSignup={setShowSignup} /> */}

      {!showAllPlaces && !showAmravathiPlaces && !showArku && !showPapi ? (
        <>
          <Home onExploreClick={handleExploreClick} />
          <Popular 
            onAmravathiClick={handleAmravathiClick}  
            onArkuClick={handleArkuClick} 
            onPapiClick={handlePapiClick}
          /> 
          <Offers />
          <About />
          <Blog />
          <Footer /> 
          
        </>
      ) : showPapi ? (
        <div>
          <Papi onBackClick={handleBackClick}/>
        </div>
      ) : showArku ? (
        <div>
          <Arku onBackClick={handleBackClick}/>
        </div>
      ) : showAmravathiPlaces ? (
        <div>
          <AmravathiPlaces onBackClick={handleBackClick} /> 
        </div>
      ) : (
        <div>
          <AllPlaces onBackClick={handleBackClick} />
        </div>
      )}
      
      {/* {showLogin && <Login setShowLogin={setShowLogin} />}
      {showSignup && <Signup setShowSignup={setShowSignup} />} */}
    </div>
  );

  
};

export default App;
