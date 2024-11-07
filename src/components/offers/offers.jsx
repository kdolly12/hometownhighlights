import React from 'react';
import './offers.css';

import { MdKingBed } from "react-icons/md";
import { MdBathtub } from "react-icons/md";
import { FaWifi } from "react-icons/fa6";
import { MdAirportShuttle } from "react-icons/md";
import { MdLocationOn } from "react-icons/md";
import { BsArrowRightShort } from "react-icons/bs";

import img3 from '../../Interactive/Heritage sites in Andhra Pradesh/Famous Forts/Kondaveedu Fort.jpg'; 
import img4 from '../../Interactive/Tirupathi/tirumala.jpg'; 
import img5 from '../../Interactive/Lepakshi/Lepakshi Nandi.jpg'; 


const offer = [
  {
    id: 1,
    imgSrc: img4, 
    destTitle: 'Tirupati',
    location: 'Tirupati',
    price: '₹7,000',
    description: 'Tirupati is famous for its Venkateswara Temple.'
  },
  {
    id: 2,
    imgSrc: img5, 
    destTitle: 'Lepakshi',
    location: 'Lepakshi Nandi',
    price: '₹3,500',
    description: 'Monolithic Bull is a sculpture of Nandi in Lepakshi, India. It is also an archaeological site.'
  },
  {
    id: 3,
    imgSrc: img3, 
    destTitle: 'Kondaveedu Fort',
    location: 'Kondaveedu',
    price: '₹4,200',
    description: 'Kondaveedu Fort is a historically significant ancient hill fortress located in Kondaveedu.'
  }
];

const Offers = () => {
  return (
    <section className="offer container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="secTitle">
            Special Offers
          </h2>
          <p>
            From historical cities to natural spectaculars, come see the best of the world!
          </p>
        </div>
        <div className="mainContent grid">
          {
            offer.map(({ id, imgSrc, destTitle, location, price, description }) => {
              return (
                <div className="singleOffer" key={id}>
                  
                  <h3 className="destTitle">{destTitle}</h3>
                  <div className='destImage'>
                    <img src={imgSrc} alt={destTitle} />
                    <span className="discount">
                      30% Off
                    </span>
                    
                    <div className="locationTag">
                      <MdLocationOn className='icon' />
                      <small>{location}</small>
                    </div>
                  </div>
                  <div className="offerBody">
                    <div className="price flex">
                      <h4>{price}</h4>
                      <span className="status">For Rent</span>
                    </div>

                    <div className="amenities flex">
                      <div className="singleAmenity flex">
                        <MdKingBed className='icon' />
                        <small>2 Beds</small>
                      </div>

                      <div className="singleAmenity flex">
                        <MdBathtub className='icon' />
                        <small>1 Bath</small>
                      </div>

                      <div className="singleAmenity flex">
                        <FaWifi className='icon' />
                        <small>Wi-Fi</small>
                      </div>

                      <div className="singleAmenity flex">
                        <MdAirportShuttle className='icon' />
                        <small>Shuttle</small>
                      </div>
                    </div>
                    <p>{description}</p>
                    <button className="btn flex">
                      View Details
                      <BsArrowRightShort className='icon' />
                    </button>
                  </div>
                </div>
              );
            })
          }
        </div>
      </div>
    </section>
  );
}

export default Offers;