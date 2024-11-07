import React from 'react';
import './resources.css';

const Resources = () => {
  return (
    <section className="resources section">
      <div className="resourcesContainer container">
        <div className="resourcesTitle">
          <h2>Resources</h2>
          <p>Explore our collection of travel resources to make your journey unforgettable.</p>
        </div>
        <div className="resourceList">
          <div className="resourceItem">
            <h3>Travel Guides</h3>
            <p>Comprehensive guides to help you plan your trip.</p>
          </div>
          <div className="resourceItem">
            <h3>Destination Insights</h3>
            <p>In-depth information about popular destinations.</p>
          </div>
          <div className="resourceItem">
            <h3>Packing Tips</h3>
            <p>Essential tips to pack smart for your trip.</p>
          </div>
          <div className="resourceItem">
            <h3>Local Experiences</h3>
            <p>Discover unique local experiences and activities.</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Resources;
