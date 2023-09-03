import React, { useState } from "react";
import feedBag from "../images/feedBag.png";

export default function SheepAndGoat() {
  const [image, setImage] = useState(feedBag);

  return (
    <>
      <main>
        {/* <!-- Sheep and Goat feed cards --> */}

        <h1 class="header centered padding-1515 margin-1515 bg-darkgray border">
          Sheep and Goat Feed
        </h1>

        <div class="flex card-section border bg-lightgray">
          <div class="card flex centered margin-15">
            <img
              src={image}
              class="card-img-top margin-15"
              alt="X-Cel Feed bag"
            />
            <div class="centered">
              <h1 class="card-header">16% Sheep</h1>
              <p class="card-text">
                16% Sheep is a 16% protein feed for sheep.
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
              <h1 class="card-header">Goat Pellet</h1>
              <p class="card-text">
                Goat Pellet is a copper free feed for goats.
              </p>
              <p class="bold card-text">Price per bag: $22.25</p>
              <p class="bold card-text">Price per 20 bags: $21.25</p>
              <p class="bold card-text">Price per 40 bags: $20.75</p>
            </div>
          </div>
          <div class="card flex centered margin-15">
            <img
              src={image}
              class="card-img-top margin-15"
              alt="X-Cel Feed bag"
            />
            <div class="centered">
              <h1 class="card-header">Sheep and Goat</h1>
              <p class="card-text">
                Sheep and Goat is a specially formulated feed free of copper for
                both sheep and goats.
              </p>
              <p class="bold card-text">Price per bag: $21.50</p>
              <p class="bold card-text">Price per 20 bags: $20.50</p>
              <p class="bold card-text">Price per 40 bags: $20.00</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
