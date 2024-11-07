import React from 'react'
import './About.css'
import img1 from '../../Assets/elks-8430545.jpg'
import img2 from '../../Assets/beach-4967176.jpg'
import img3 from '../../Assets/island-7058873.jpg'
import video from '../../Assets/see.mp4'
import video1 from '../../Assets/206294.mp4'
const About = () => {
  return (
    <section className="about section">
      <div className="secContainer">
        <div className="title">
          Why Hikings?
        </div>
        <div className="mainContent container grid">
          <div className="singleItem">
           
            <img src={img1} alt="" />
            <h3>
              100+ Mountains
            </h3>
            <p>
              Reasearch shows that a chance to break away from the normal rhythms of daily life reduces stress and improves health and well-being
            </p>
            
          </div>
          <div className="singleItem">
           
           <img src={img2}  alt="" />
           <h3>
             1000+ HIkings
           </h3>
           <p>
             Reasearch shows that a chance to break away from the normal rhythms of daily life reduces stress and improves health and well-being
           </p>
           
         </div>
         <div className="singleItem">
           
           <img src={img3}  alt="" />
           <h3>
             100+ Mountains
           </h3>
           <p>
             Reasearch shows that a chance to break away from the normal rhythms of daily life reduces stress and improves health and well-being
           </p>
           
         </div>
         
        </div>
        <div className="videoCard container">
          <div className="cardContent grid">
            <div className="cardText">
              <h2>
                Wonderful House experience ninthere!
              </h2>
              <p>
                The Advanture subranking is based on a equal weighted average of scores from five country.
              </p>
            </div>
            <div className="cardVideo">
              <video src={video} autoPlay loop muted type='vide/mp4'></video>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
