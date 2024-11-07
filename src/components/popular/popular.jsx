// import React from 'react';
// import './popular.css';
// import { BsArrowLeftShort, BsArrowRightShort, BsDot } from "react-icons/bs";
// import img2 from '../../Interactive/Tirupathi/tirumala.jpg';
// import img5 from '../../Interactive/Amaravati/Dhyana BuddhaStatue.jpg';
// import img7 from '../../Interactive/Araku/Araku_Dudumawaterfalls.jpg';
// import img9 from '../../Interactive/Papikondalu/papikondalu.jpg';

// const Data = [
//   {
//     id: 1,
//     imgsrc: img2,
//     destTitle: 'Chittoor',
//     location: 'Tirumala',
//     grade: 'CULTURAL RELAX',
//   },
//   {
//     id: 2,
//     imgsrc: img5,
//     destTitle: 'Guntur',
//     location: 'Amaravathi',
//     grade: 'CULTURAL RELAX',
//   },
//   {
//     id: 3,
//     imgsrc: img7,
//     destTitle: 'Vizag',
//     location: 'Arku',
//     grade: 'CULTURAL RELAX',
//   },
//   {
//     id: 4,
//     imgsrc: img9,
//     destTitle: 'Alluri Sitharama Raju',
//     location: 'Papikondalu',
//     grade: 'CULTURAL RELAX',
//   },
// ];

// const Popular = ({ onAmravathiClick ,onArkuClick ,onPapiClick}) => { // Receive the handler as a prop
//   return (
//     <section className='popular section container'>
//       <div className="secContainer">
//         <div className="secHeader flex">
//           <div className="textDiv">
//             <h2 className="secTitle">Popular Destination</h2>
//             <p>From historical cities to natural spectacles, come see the best of the world!</p>
//           </div>

//           <div className="iconDiv flex">
//             <BsArrowLeftShort className='icon' />
//             <BsArrowRightShort className='icon' />
//           </div>
//         </div>

//         <div className="mainContent grid">
//           {Data.map(({ id, imgsrc, destTitle, location }) => {
//             return (
//               <div className="singleDestination" key={id}>
//                 <div className="destImage">
//                   <img src={imgsrc} alt={destTitle} className="" />
//                   <div className="overlayInfo">
//                     <h3>{destTitle}</h3>
//                     <p>{location}</p>
                    
//                     <BsArrowRightShort
//                       className='icon'
//                       onClick={() => {
//                         if (location === 'Amaravathi') {
//                           onAmravathiClick(); 
//                         }
//                         else if(location === 'Arku')
//                         {
//                           onArkuClick();
//                         }
//                         else if(location === 'Papikondalu')
//                           {
//                             onPapiClick();
//                           }
//                       }}
//                     />
//                   </div>
//                 </div>
//                 <div className="destFooter">
//                   <div className="number">0{id}</div>
//                   <div className="destText flex">
//                     <h6>{location}</h6>
//                     <span className="flex">
//                       <span className="dot"><BsDot className='icon' /></span> Dot
//                     </span>
//                   </div>
//                 </div>
//               </div>
//             );
//           })}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Popular;

import React from 'react';
import './popular.css';
import { BsArrowLeftShort, BsArrowRightShort, BsDot } from "react-icons/bs";
import img2 from '../../Interactive/Tirupathi/tirumala.jpg';
import img5 from '../../Interactive/Amaravati/Dhyana BuddhaStatue.jpg';
import img7 from '../../Interactive/Araku/Araku_Dudumawaterfalls.jpg';
import img9 from '../../Interactive/Papikondalu/papikondalu.jpg';

const Data = [
  {
    id: 1,
    imgsrc: img2,
    destTitle: 'Chittoor',
    location: 'Tirumala',
    grade: 'CULTURAL RELAX',
  },
  {
    id: 2,
    imgsrc: img5,
    destTitle: 'Guntur',
    location: 'Amaravathi',
    grade: 'CULTURAL RELAX',
  },
  {
    id: 3,
    imgsrc: img7,
    destTitle: 'Vizag',
    location: 'Arku',
    grade: 'CULTURAL RELAX',
  },
  {
    id: 4,
    imgsrc: img9,
    destTitle: 'Alluri Sitharama Raju',
    location: 'Papikondalu',
    grade: 'CULTURAL RELAX',
  },
];

const Popular = ({ onAmravathiClick, onArkuClick, onPapiClick }) => {
  return (
    <section className='popular section container'>
      <div className="secContainer">
        <div className="secHeader flex">
          <div className="textDiv">
            <h2 className="secTitle">Popular Destination</h2>
            <p>From historical cities to natural spectacles, come see the best of the world!</p>
          </div>

          <div className="iconDiv flex">
            <BsArrowLeftShort className='icon' />
            <BsArrowRightShort className='icon' />
          </div>
        </div>

        <div className="mainContent grid">
          {Data.map(({ id, imgsrc, destTitle, location }) => {
            return (
              <div className="singleDestination" key={id}>
                <div className="destImage">
                  <img src={imgsrc} alt={destTitle} className="" />
                  <div className="overlayInfo">
                    <h3>{destTitle}</h3>
                    <p>{location}</p>

                    <BsArrowRightShort
                      className='icon'
                      onClick={() => {
                        if (location === 'Amaravathi') {
                          onAmravathiClick();
                        } else if (location === 'Arku') {
                          onArkuClick();
                        } else if (location === 'Papikondalu') {
                          onPapiClick();
                        }
                      }}
                    />
                  </div>
                </div>
                <div className="destFooter">
                  <div className="number">0{id}</div>
                  <div className="destText flex">
                    <h6>{location}</h6>
                    <span className="flex">
                      <span className="dot"><BsDot className='icon' /></span> 
                    </span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Popular;
