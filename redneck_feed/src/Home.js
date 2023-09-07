import React from "react";
import feedBag from "./images/feedBag.png";

export default function Home(props) {
  return (
    <>
      <main>
        {/* <!-- About Section --> */}

        <div className="centered border padding-1515 margin-1515 bg-darkgray">
          <h1 className="header centered">About Redneck Feed</h1>
          <h3>
            Serving a 25 mile radius from the heart of Belfair. Grain delivered
            right to your doorstep at an affordable price! Delivered Monday,
            Wednesday and Friday. Call or text today:
            <br></br> 
            <a href="tel:(253) 313-8107">(253) 313-8107 </a>
          </h3>
        </div>

        {/* <!-- Popular feed cards --> */}

        <h1 className="header centered padding-1515 margin-1515 bg-darkgray border">
          Popular Products
        </h1>

        <div className="flex card-section border bg-lightgray">
          <div className="card flex centered margin-15">
            <img
              src={feedBag}
              className="card-img-top margin-15"
              alt="X-Cel Feed bag"
            />
            <div className="centered">
              <h1 className="card-header">Barn Yard Buffet (BYB)</h1>
              <p className="card-text">
                Barn Yard Buffet (BYB) is used for any animal on the farm and is
                the most affordable feed we offer.
              </p>
              <p className="bold card-text">Price per bag: $18.25</p>
              <p className="bold card-text">Price per 20 bags: $17.25</p>
              <p className="bold card-text">Price per 40 bags: $16.75</p>
            </div>
          </div>
          <div className="card flex centered margin-15">
            <img
              src={feedBag}
              className="card-img-top margin-15"
              alt="X-Cel Feed bag"
            />
            <div className="centered">
              <h1 className="card-header">Layer Ration Complete</h1>
              <p className="card-text">
                Layer Ration Complete is used for laying hens and comes in both
                pellet and crumble form. High in calcium, it helps to promote
                egg production.
              </p>
              <p className="bold card-text">Price per bag: $20.75</p>
              <p className="bold card-text">Price per 20 bags: $19.75</p>
              <p className="bold card-text">Price per 40 bags: $19.25</p>
            </div>
          </div>
          <div className="card flex centered margin-15">
            <img src={feedBag} className="card-img-top margin-15" alt="..." />
            <div className="centered">
              <h1 className="card-header">All Purpose</h1>
              <p className="card-text">
                All Purpose is used for any and all poultry and water fowl. High
                in protein and comes in a pellet and crumble form.
              </p>
              <p className="bold card-text">Price per bag: $21.50</p>
              <p className="bold card-text">Price per 20 bags: $20.50</p>
              <p className="bold card-text">Price per 40 bags: $20.00</p>
            </div>
          </div>
          <div className="card flex centered margin-15">
            <img src={feedBag} className="card-img-top margin-15" alt="..." />
            <div className="centered">
              <h1 className="card-header">14% Hog Ration</h1>
              <p className="card-text">
                14% Hog Ration is a swine feed that averages 14% protein, but
                usually tests between 16% and 18%, which makes it a suitable
                feed for grower hogs.
              </p>
              <p className="bold card-text">Price per bag: $21.00</p>
              <p className="bold card-text">Price per 20 bags: $20.00</p>
              <p className="bold card-text">Price per 40 bags: $19.50</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
