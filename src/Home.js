import React from "react";
import CategorySection from "./CategorySection";
import bannerImage from "./images/redneck-feed-banner.png"

export default function Home() {
  return (
    <>
      <div className="banner-container">
      <img src={bannerImage} alt="Redneck Feeds Logo" className="banner" />
      </div>
      <CategorySection />
      <main>
        {/* <!-- About Section --> */}

        <div className="home centered border padding-1515">
          <h1 className="header centered bold">About RedNeck Feeds</h1>
          <h3 className="home-text">
            Serving a 25 mile radius from the heart of Belfair. XCEL Grains delivered
            right to your doorstep at an affordable price! Delivered Monday,
            Wednesday and Friday. Call or text today:
            <br></br> 
            <a className="phone" href="tel:(253) 313-8107">(253) 313-8107 </a>
          </h3>
          <h4>** Areas beyond 25 mile range are subject to a minimum bag amount to order that is based on distance. Pleae call for details. </h4>
        </div>
      </main>
      
    </>
  );
}
