import React, { useState } from "react";
import feedBag from "../images/feedBag.png";

export default function Swine() {
  const [image, setImage] = useState(feedBag);

  return (
    <>
      <main>
        {/* <!-- Swine feed cards --> */}

        <h1 class="header centered padding-1515 margin-1515 bg-darkgray border">
          Swine Feed
        </h1>

        <div class="flex card-section border bg-lightgray">
          <div class="card flex centered margin-15">
            <img
              src={image}
              class="card-img-top margin-15"
              alt="X-Cel Feed bag"
            />
            <div class="centered">
              <h1 class="card-header">14% Hog</h1>
              <p class="card-text">
                14% Hog Ration is a swine feed that averages 14% protein, but
                usually tests between 16% and 18%, which makes it a suitable
                feed for grower hogs.
              </p>
              <p class="bold card-text">Price per bag: $21.00</p>
              <p class="bold card-text">Price per 20 bags: $20.00</p>
              <p class="bold card-text">Price per 40 bags: $19.50</p>
            </div>
          </div>
          <div class="card flex centered margin-15">
            <img
              src={image}
              class="card-img-top margin-15"
              alt="X-Cel Feed bag"
            />
            <div class="centered">
              <h1 class="card-header">16% Hog</h1>
              <p class="card-text">
                16% Hog Ration is a swine feed that tests at 16% protein.
              </p>
              <p class="bold card-text">Price per bag: $22.00</p>
              <p class="bold card-text">Price per 20 bags: $21.00</p>
              <p class="bold card-text">Price per 40 bags: $20.50</p>
            </div>
          </div>
          <div class="card flex centered margin-15">
            <img
              src={image}
              class="card-img-top margin-15"
              alt="X-Cel Feed bag"
            />
            <div class="centered">
              <h1 class="card-header">18% Pig Start</h1>
              <p class="card-text">
                18% Pig Start is a swine feed that tests at 18% protein and is
                used as a boost for growing piglets.
              </p>
              <p class="bold card-text">Price per bag: $24.25</p>
              <p class="bold card-text">Price per 20 bags: $23.25</p>
              <p class="bold card-text">Price per 40 bags: $22.75</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
