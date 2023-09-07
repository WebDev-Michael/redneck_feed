import React, { useState } from "react";
import feedBag from "../images/feedBag.png";

export default function Rabbit() {
  const [image, setImage] = useState(feedBag);

  return (
    <>
      <main>
        {/* <!-- Rabbit feed cards --> */}

        <h1 class="header centered padding-1515 margin-1515 bg-darkgray border">
          Rabbit Feed
        </h1>

        <div class="flex card-section border bg-lightgray">
          <div class="card flex centered margin-15">
            <img
              src={image}
              class="card-img-top margin-15"
              alt="X-Cel Feed bag"
            />
            <div class="centered">
              <h1 class="card-header">16% Rabbit</h1>
              <p class="card-text">
                16% Rabbit is a 16% protein feed for Rabbits.
              </p>
              <p class="bold card-text">Price per bag: $22.50</p>
              <p class="bold card-text">Price per 20 bags: $21.50</p>
              <p class="bold card-text">Price per 40 bags: $21.00</p>
            </div>
          </div>
          <div class="card flex centered margin-15">
            <img
              src={image}
              class="card-img-top margin-15"
              alt="X-Cel Feed bag"
            />
            <div class="centered">
              <h1 class="card-header">18% Rabbit</h1>
              <p class="card-text">
                18% Rabbit is a 18% protein feed for Rabbits.
              </p>
              <p class="bold card-text">Price per bag: $23.75</p>
              <p class="bold card-text">Price per 20 bags: $22.75</p>
              <p class="bold card-text">Price per 40 bags: $22.25</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
