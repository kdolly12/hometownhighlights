// import React, { useState } from 'react';
// import './navbar.css'
// import { SiGoogleearth } from "react-icons/si"
// import { AiFillCloseCircle } from "react-icons/ai"
// import { TbGridDots } from "react-icons/tb"
// import { Link } from 'react-router-dom';


// const Navbar = () => {
//   const [active,setActive] = useState('navBar')
//   const showNav=()=>{
//     setActive('navBar activeNavbar')
//   }
//   const removeNav=()=>{
//     setActive('navBar')
//   }

//   const [transparent,setTransparent]=useState('header')
//   const addBg = ()=>{
//     if(window.scrollY>=10){
//       setTransparent('header activeHeader')
//     }
//     else{
//       setTransparent('header')
//     }
//   }
//   window.addEventListener('scroll',addBg)
//   return (
//     <section className='navBarSection'>
//       <div className={transparent}>
//         <div className="logoDiv">
//           <a href="#" className="logo">
//               <h1 className='flex'>
//                 <SiGoogleearth  className="icon"/>
//                 Dot
//               </h1>
//           </a>
//         </div>


//         <div className={active}>

//           <ul className="navLists flex">
//             <li className="navItem">
//               <a href="#" className="navLink">Home</a>
//             </li>
//             <li className="navItem">
//               <a href="#" className="navLink">products</a>
//             </li>
//             <li className="navItem">
//               <a href="#" className="navLink">Resources</a>
//             </li>
//             <li className="navItem">
//               <a href="#" className="navLink">Contact</a>
//             </li>
//             <li className="navItem">
//               <a href="#" className="navLink">Blog</a>
//             </li>
//             <div className="headerBtns flex">
//               <button className="btn loginBtn">
//                 <a href="./login.html">Login</a>
//               </button>
//               <button className="btn">
//                 <a href="#">Sign Up</a>

//               </button>
//             </div>
//           </ul>
//           <div onClick={removeNav} className="closeNavbar">
//             <AiFillCloseCircle className='icon'/>
//           </div>
//           </div>
//           <div onClick={showNav} className="toggleNavbar">
//         <TbGridDots className='icon'/>
//         </div>
        
//         </div>
      
      
//     </section>
//   )
// }

// export default Navbar;


// import React, { useState } from 'react';
// import './navbar.css';
// import { SiGoogleearth } from "react-icons/si";
// import { AiFillCloseCircle } from "react-icons/ai";
// import { TbGridDots } from "react-icons/tb";
// import { Link } from 'react-router-dom';

// const Navbar = ({ setShowLogin, setShowSignup  }) => {
//   const [active, setActive] = useState('navBar');
//   const showNav = () => {
//     setActive('navBar activeNavbar');
//   };
//   const removeNav = () => {
//     setActive('navBar');
//   };

//   return (
//     <section className='navBarSection'>
//       <div className="header">
//         <div className="logoDiv">
//           <a href="#" className="logo">
//             <h1 className='flex'>
//               <SiGoogleearth className="icon" />
//               Dot
//             </h1>
//           </a>
//         </div>

//         <div className={active}>
//           <ul className="navLists flex">
//             <li className="navItem">
//               <a href="#" className="navLink">Home</a>
//             </li>
//             <li className="navItem">
//               <a href="#" className="navLink">Products</a>
//             </li>
//             <li className="navItem">
//               <a href="#" className="navLink">Resources</a>
//             </li>
//             <li className="navItem">
//               <a href="#" className="navLink">Contact</a>
//             </li>
//             <li className="navItem">
//               <a href="#" className="navLink">Blog</a>
//             </li>
//             <div className="headerBtns flex">
//               <button className="btn loginBtn" onClick={() => setShowLogin(true)}> 
//                 Login
//               </button>
//               <button className="btn" onClick={() => setShowSignup(true)}>
//                 <a href="#">Sign Up</a>
//               </button>
//             </div>
//           </ul>
//           <div onClick={removeNav} className="closeNavbar">
//             <AiFillCloseCircle className='icon' />
//           </div>
//         </div>
//         <div onClick={showNav} className="toggleNavbar">
//           <TbGridDots className='icon' />
//         </div>
//       </div>
//     </section>
//   );
// }

// export default Navbar;



import React, { useState } from 'react';
import './navbar.css';
import { SiGoogleearth } from "react-icons/si";
import { AiFillCloseCircle } from "react-icons/ai";
import { TbGridDots } from "react-icons/tb";
import { Link } from 'react-router-dom';

const Navbar = ({ setShowLogin, setShowSignup }) => {
  const [active, setActive] = useState('navBar');
  
  const showNav = () => {
    setActive('navBar activeNavbar');
  };

  const removeNav = () => {
    setActive('navBar');
  };

  return (
    <section className='navBarSection'>
      <div className="header">
        <div className="logoDiv">
          <a href="#" className="logo">
            <h1 className='flex'>
              <SiGoogleearth className="icon" />
              
            </h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItem">
              <a href="\" className="navLink">Home</a>
            </li>
            <li className="navItem">
              <Link to="/products" className="navLink">Products</Link>
            </li>
            <li className="navItem">
              <a href="/resources" className="navLink">Resources</a>
            </li>
            <li className="navItem">
              <a href="/contact" className="navLink">Contact</a>
            </li>
            <li className="navItem">
              <a href="/blog" className="navLink">Blog</a>
            </li>
            <div className="headerBtns flex">
              <button className="btn loginBtn" onClick={() => setShowLogin(true)}> 
                Login
              </button>
              <button className="btn signupBtn" onClick={() => setShowSignup(true)}>
                Sign Up
              </button>
            </div>
          </ul>
          <div onClick={removeNav} className="closeNavbar">
            <AiFillCloseCircle className='icon' />
          </div>
        </div>
        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className='icon' />
        </div>
      </div>
    </section>
  );
}

export default Navbar;
