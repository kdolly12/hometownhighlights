import React from 'react';
import './allplaces.css';
import { BsArrowLeftShort, BsArrowRightShort, BsDot } from "react-icons/bs";  
import img1 from '../../Interactive/Tirupathi/tirumala.jpg';
import img2 from '../../Interactive/Amaravati/Dhyana BuddhaStatue.jpg';
import img3 from '../../Interactive/Araku/Araku_Dudumawaterfalls.jpg';
import img4 from '../../Interactive/Papikondalu/papikondalu.jpg';
import img5 from '../../Interactive/Gandikota/Raghunathaswamy Temple.jpg';
import img6 from '../../Interactive/Kurnool/Belumcaves_Main.jpg';
import img7 from '../../Interactive/Lepakshi/Lepakshi Nandi.jpg'


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
          description: "A mesmerizing view of the Papikondalu hills."
        },
        {
          id: 6,
          src: img6, 
          title: "Kurnool",
          location: "Belumcaves",
          description: "A mesmerizing view of the Papikondalu hills."
        },
        {
          id: 7,
          src: img7, 
          title: "Lepakshi",
          location: "Lepakshi Nandi",
          description: "A mesmerizing view of the Papikondalu hills."
        }
    ];
const AllPlaces = ({ onBackClick }) => { 
  return (
    <section className='popular section container'>
      <div className="back-button-container">
         <button onClick={onBackClick} className="back-button">
           <BsArrowLeftShort className='icon' /> 
         </button>
       </div>
      <div className="secContainer">
       
    <div className="mainContent grid">
   {
    places.map(({id,src,title,location,grade})=>{
      return(
        <div className="singleDestination">
        <div className="destImage">
          <img src={src} alt={title} className="" />
          <div className="overlayInfo">
            <h3>{title}</h3>
            <p>{location}</p>
            <BsArrowRightShort className='icon'/>
          </div>
  
        </div>
        <div className="destFooter">
          <div className="number">
            0{id}
          </div>
          <div className="destTxet flex">
            <h6>
              {location}
            </h6>
            <span className="flex">
              <span className="dot">
                <BsDot className='icon'/>
              </span>
              Dot
            </span>
          </div>
        </div>
      </div>
      )
    })
   }
    </div>
      </div>
    </section>
  )
}

export default AllPlaces;