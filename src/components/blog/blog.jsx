import React from 'react';
import './blog.css';
import { BsArrowRightShort } from 'react-icons/bs';
import img1 from '../../Assets/elks-8430545.jpg';
import img2 from '../../Assets/beach-4967176.jpg';
import img3 from '../../Assets/island-7058873.jpg';
import img4 from '../../Assets/woman-2594934.jpg';

const posts = [
  {
    id: 1,
    postImage: img1,
    title: 'Discover the Wonders of Morocco',
    desc: 'The Kingdom of Morocco is a Muslim country in western North Africa, with coastlines along both the Atlantic Ocean and the Mediterranean Sea.'
  },
  {
    id: 2,
    postImage: img2,
    title: 'Explore the Breathtaking Beaches of Morocco',
    desc: 'Experience the stunning coastal scenery and vibrant culture of Morocco\'s beaches, perfect for relaxation and adventure.'
  },
  {
    id: 3,
    postImage: img3,
    title: 'Adventure Awaits in the Moroccan Countryside',
    desc: 'From the Atlas Mountains to the Sahara Desert, discover the diverse landscapes and rich history of Morocco.'
  },
  {
    id: 4,
    postImage: img4,
    title: 'Cultural Treasures: Discovering Moroccan Heritage',
    desc: 'Immerse yourself in the vibrant culture, delicious cuisine, and warm hospitality that define Morocco.'
  }
];

const Blog = () => {
  return (
    <section className="blog container section">
      <div className="secContainer">
        <div className="secIntro">
          <h2 className="secTitle">
            Our Best Blog?
          </h2>
          <p>
            An insight to the incredible experience in the world.
          </p>
        </div>
        <div className="mainContainer grid">
          {
            posts.map(({ id, postImage, title, desc }) => {
              return (
                <div className="singlePost grid" key={id}>
                  <div className="imgDiv">
                    <img src={postImage} alt={title} />
                  </div>
                  <div className="postDetails">
                    <h3>{title}</h3>
                    <p>{desc}</p>
                  </div>
                  <a href="#" className='flex'>
                    <BsArrowRightShort className='icon' />
                    Read more
                  </a>
                </div>
              )
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Blog;
