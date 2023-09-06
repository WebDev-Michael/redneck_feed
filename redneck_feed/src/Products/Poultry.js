import React, { useState } from "react";
import feedBag from "../images/feedBag.png";

export default function Poultry() {
  const [image, setImage] = useState(feedBag);

  return (
    <>
      <main>
        {/* <!-- Poultry feed cards --> */}

        <h1 class="header centered padding-1515 margin-1515 bg-darkgray border">
          Poultry Feed
        </h1>

        <div class="flex card-section border bg-lightgray">
          <div class="card flex centered margin-15">
            <img
              src={image}
              class="card-img-top margin-15"
              alt="X-Cel Feed bag"
            />
            <div class="centered">
              <h1 class="card-header">All Purpose</h1>
              <p class="card-text">
                All Purpose is a high protein bird feed. Available in pellet and
                crumble form.
              </p>
              <p class="bold card-text">Price per bag: $21.50</p>
              <p class="bold card-text">Price per 20 bags: $20.50</p>
              <p class="bold card-text">Price per 40 bags: $20.00</p>
            </div>
          </div>
          <div class="card flex centered margin-15">
            <img
              src={image}
              class="card-img-top margin-15"
              alt="X-Cel Feed bag"
            />
            <div class="centered">
              <h1 class="card-header">Broiler Grower</h1>
              <p class="card-text">
                Broiler Grower is used for meat chickens to put on weight
                quickly.
              </p>
              <p class="bold card-text">Price per bag: $25.00</p>
              <p class="bold card-text">Price per 20 bags: $24.00</p>
              <p class="bold card-text">Price per 40 bags: $23.50</p>
            </div>
          </div>
          <div class="card flex centered margin-15">
            <img
              src={image}
              class="card-img-top margin-15"
              alt="X-Cel Feed bag"
            />
            <div class="centered">
              <h1 class="card-header">Chick Start</h1>
              <p class="card-text">
                Chick Start is used for chicks and provides the essential
                nutrients needed for them to grow healthy. Available in
                medicated and non-medicated.
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
              <h1 class="card-header">Fowl Power</h1>
              <p class="card-text">
                Fowl Power is a mixed grain with corn, barley and more. Popular
                for use with water fowl.
              </p>
              <p class="bold card-text">Price per bag: $21.75</p>
              <p class="bold card-text">Price per 20 bags: $20.75</p>
              <p class="bold card-text">Price per 40 bags: $20.25</p>
            </div>
          </div>
          <div class="card flex centered margin-15">
            <img
              src={image}
              class="card-img-top margin-15"
              alt="X-Cel Feed bag"
            />
            <div class="centered">
              <h1 class="card-header">Gamebird</h1>
              <p class="card-text">
                Gamebird is a high protein bird feed for game birds like
                pheasants and quail. Available in pellet and crumble form.
              </p>
              <p class="bold card-text">Price per bag: $25.00</p>
              <p class="bold card-text">Price per 20 bags: $24.00</p>
              <p class="bold card-text">Price per 40 bags: $23.50</p>
            </div>
          </div>
          <div class="card flex centered margin-15">
            <img
              src={image}
              class="card-img-top margin-15"
              alt="X-Cel Feed bag"
            />
            <div class="centered">
              <h1 class="card-header">Layer Ration Complete</h1>
              <p class="card-text">
                Layer Ration Complete is used for laying hens and comes in both
                pellet and crumble form. High in calcium, it helps to promote
                egg production.
              </p>
              <p class="bold card-text">Price per bag: $20.75</p>
              <p class="bold card-text">Price per 20 bags: $19.75</p>
              <p class="bold card-text">Price per 40 bags: $19.25</p>
            </div>
          </div>
          <div class="card flex centered margin-15">
            <img
              src={image}
              class="card-img-top margin-15"
              alt="X-Cel Feed bag"
            />
            <div class="centered">
              <h1 class="card-header">Oyster Shell</h1>
              <p class="card-text">
                Oyster Shell used for added calcium when strengthening egg
                shells.
              </p>
              <p class="bold card-text">Price per bag: $24.00</p>
              <p class="bold card-text">Price per 20 bags: $23.00</p>
              <p class="bold card-text">Price per 40 bags: $22.50</p>
            </div>
          </div>
          <div class="card flex centered margin-15">
            <img
              src={image}
              class="card-img-top margin-15"
              alt="X-Cel Feed bag"
            />
            <div class="centered">
              <h1 class="card-header">Two Way Scratch</h1>
              <p class="card-text">
                Two Way Scratch contains cracked corn and barley.
              </p>
              <p class="bold card-text">Price per bag: $21.00</p>
              <p class="bold card-text">Price per 20 bags: $20.00</p>
              <p class="bold card-text">Price per 40 bags: $19.50</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
