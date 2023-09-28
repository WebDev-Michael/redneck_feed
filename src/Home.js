import React from "react";
// import feedBag from "./images/feedBag.png";

export default function Home() {
  return (
    <>
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
        </div>
      </main>
    </>
  );
}
