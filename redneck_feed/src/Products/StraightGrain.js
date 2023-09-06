import React, { useState } from "react";
import feedBag from "../images/feedBag.png";

export default function StraightGrain() {
  const [image, setImage] = useState(feedBag);

  return (
    <>
      <main>
        {/* <!-- Straight Grain feed cards --> */}

        <h1 class="header centered padding-1515 margin-1515 bg-darkgray border">
          Straight Grain Feed
        </h1>

        <div class="flex card-section border bg-lightgray">
          <div class="card flex centered margin-15">
            <img
              src={image}
              class="card-img-top margin-15"
              alt="X-Cel Feed bag"
            />
            <div class="centered">
              <h1 class="card-header">Rolled Barley</h1>
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
              <h1 class="card-header">Rolled Corn</h1>
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
              <h1 class="card-header">Soy Meal</h1>
              <p class="bold card-text">Price per bag: $28.00</p>
              <p class="bold card-text">Price per 20 bags: $27.00</p>
              <p class="bold card-text">Price per 40 bags: $26.50</p>
            </div>
          </div>
          <div class="card flex centered margin-15">
            <img
              src={image}
              class="card-img-top margin-15"
              alt="X-Cel Feed bag"
            />
            <div class="centered">
              <h1 class="card-header">Rolled Oats</h1>
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
              <h1 class="card-header">Whole Barley</h1>
              <p class="bold card-text">Price per bag: $19.75</p>
              <p class="bold card-text">Price per 20 bags: $18.75</p>
              <p class="bold card-text">Price per 40 bags: $18.25</p>
            </div>
          </div>
          <div class="card flex centered margin-15">
            <img
              src={image}
              class="card-img-top margin-15"
              alt="X-Cel Feed bag"
            />
            <div class="centered">
              <h1 class="card-header">Whole Corn</h1>
              <p class="bold card-text">Price per bag: $19.75</p>
              <p class="bold card-text">Price per 20 bags: $18.75</p>
              <p class="bold card-text">Price per 40 bags: $18.25</p>
            </div>
          </div>
          <div class="card flex centered margin-15">
            <img
              src={image}
              class="card-img-top margin-15"
              alt="X-Cel Feed bag"
            />
            <div class="centered">
              <h1 class="card-header">Whole Oats</h1>
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
              <h1 class="card-header">Whole Wheat</h1>
              <p class="bold card-text">Price per bag: $21.25</p>
              <p class="bold card-text">Price per 20 bags: $20.25</p>
              <p class="bold card-text">Price per 40 bags: $19.75</p>
            </div>
          </div>
          <div class="card flex centered margin-15">
            <img
              src={image}
              class="card-img-top margin-15"
              alt="X-Cel Feed bag"
            />
            <div class="centered">
              <h1 class="card-header">Cracked Corn</h1>
              <p class="bold card-text">Price per bag: $20.50</p>
              <p class="bold card-text">Price per 20 bags: $19.50</p>
              <p class="bold card-text">Price per 40 bags: $19.00</p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
