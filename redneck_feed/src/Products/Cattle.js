import React, { useState } from "react";
import feedBag from "../images/feedBag.png";

export default function Cattle() {
  const [image, setImage] = useState(feedBag);

  return (
    <>
      <main>
        {/* <!-- Cattle feed cards --> */}

        <h1 class="header centered padding-1515 margin-1515 bg-darkgray border">
          Cattle Feed
        </h1>

        <div class="flex card-section border bg-lightgray">
          <div class="card flex centered margin-15">
            <img
              src={image}
              class="card-img-top margin-15"
              alt="X-Cel Feed bag"
            />
            <div class="centered">
              <h1 class="card-header">16% Dairy</h1>
              <p class="card-text">
                16% Dairy is used for dairy cows to help with milk production.
              </p>
              <p class="bold card-text">Price per bag: $20.00</p>
              <p class="bold card-text">Price per 20 bags: $19.00</p>
              <p class="bold card-text">Price per 40 bags: $18.50</p>
            </div>
          </div>
          <div class="card flex centered margin-15">
            <img
              src={image}
              class="card-img-top margin-15"
              alt="X-Cel Feed bag"
            />
            <div class="centered">
              <h1 class="card-header">Cattle Fattener</h1>
              <p class="card-text">
                Cattle Fattener is used to help put weight on meat cows.
              </p>
              <p class="bold card-text">Price per bag: $20.50</p>
              <p class="bold card-text">Price per 20 bags: $19.50</p>
              <p class="bold card-text">Price per 40 bags: $19.00</p>
            </div>
          </div>
          <div class="card flex centered margin-15">
            <img
              src={image}
              class="card-img-top margin-15"
              alt="X-Cel Feed bag"
            />
            <div class="centered">
              <h1 class="card-header">Chris Mix (No Soy)</h1>
              <p class="card-text">
                Chris Mix is a specially formulated feed without soy products.
              </p>
              <p class="bold card-text">Price per bag: $20.25</p>
              <p class="bold card-text">Price per 20 bags: $19.25</p>
              <p class="bold card-text">Price per 40 bags: $18.75</p>
            </div>
          </div>
          <div class="card flex centered margin-15">
            <img
              src={image}
              class="card-img-top margin-15"
              alt="X-Cel Feed bag"
            />
            <div class="centered">
              <h1 class="card-header">Medicated Calf</h1>
              <p class="card-text">
                Medicated Calf contains the antibiotics and vitamins necessary
                for use in young calves.
              </p>
              <p class="bold card-text">Price per bag: $23.00</p>
              <p class="bold card-text">Price per 20 bags: $22.00</p>
              <p class="bold card-text">Price per 40 bags: $21.50</p>
            </div>
          </div>
          <div class="card flex centered margin-15">
            <img
              src={image}
              class="card-img-top margin-15"
              alt="X-Cel Feed bag"
            />
            <div class="centered">
              <h1 class="card-header"> Barn Yard Buffet (BYB)</h1>
              <p class="card-text">
                Barn Yard Buffet (BYB) is used for any animal on the farm.
              </p>
              <p class="bold card-text">Price per bag: $18.25</p>
              <p class="bold card-text">Price per 20 bags: $17.25</p>
              <p class="bold card-text">Price per 40 bags: $16.75</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
