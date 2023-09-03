import React, { useState } from "react";
import feedBag from "../images/feedBag.png";

export default function Equine() {
  const [image, setImage] = useState(feedBag);

  return (
    <>
      {/* <!-- Equine feed cards --> */}

      <h1 class="header centered padding-1515 margin-1515 bg-darkgray border">
        Equine Feed
      </h1>

      <div class="flex card-section border bg-lightgray">
        <div class="card flex centered margin-15">
          <img
            src={image}
            class="card-img-top margin-15"
            alt="X-Cel Feed bag"
          />
          <div class="centered">
            <h1 class="card-header">12% Horse</h1>
            <p class="card-text">
              12% Horse is used as a maintenance feed for horses of all stages.
            </p>
            <p class="bold card-text">Price per bag: $20.75</p>
            <p class="bold card-text">Price per 20 bags: $19.75</p>
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
            <h1 class="card-header">Alfalfa Pellets</h1>
            <p class="card-text">
              Alfalfa Pellets are compressed and pelletized alfalfa.
            </p>
            <p class="bold card-text">Price per bag: $24.25</p>
            <p class="bold card-text">Price per 20 bags: $23.25</p>
            <p class="bold card-text">Price per 40 bags: $22.75</p>
          </div>
        </div>
        <div class="card flex centered margin-15">
          <img
            src={image}
            class="card-img-top margin-15"
            alt="X-Cel Feed bag"
          />
          <div class="centered">
            <h1 class="card-header">Beet Pulp Pellets</h1>
            <p class="card-text">
              Beet Pulp is used as a filler to help add and maintain weight on a
              horse. Usually soaked and added as a wet feed.
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
            <h1 class="card-header">C.O.B.</h1>
            <p class="card-text">
              C.O.B. is corn, oats, and barley mixed together. Available in both
              wet (molasses) and dry (no molasses)
            </p>
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
            <h1 class="card-header">Mare and Foal</h1>
            <p class="card-text">
              Mare and Foal is specially formulated to give mares and foals the
              vital nutrition required when nursing.
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
            <h1 class="card-header">Mountaineer</h1>
            <p class="card-text">
              Mountaineer is a high performance feed used primarily with working
              and trail horses.
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
            <h1 class="card-header">Rice Bran</h1>
            <p class="card-text">
              Rice Bran is a high protein substitute that is added to a horses
              standard feed.
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
            <h1 class="card-header">Senior Horse</h1>
            <p class="card-text">
              Senior Horse is formulated for older horses.
            </p>
            <p class="bold card-text">Price per bag: $23.25</p>
            <p class="bold card-text">Price per 20 bags: $22.25</p>
            <p class="bold card-text">Price per 40 bags: $21.75</p>
          </div>
        </div>
        <div class="card flex centered margin-15">
          <img
            src={image}
            class="card-img-top margin-15"
            alt="X-Cel Feed bag"
          />
          <div class="centered">
            <h1 class="card-header">Sterling Horse</h1>
            <p class="card-text">
              Sterling horse is a low sugar and starch feed.
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
            <h1 class="card-header">Wheat Bran</h1>
            <p class="card-text">
              Wheat Bran is used to increase fiber in a horses diet.
            </p>
            <p class="bold card-text">Price per bag: $20.00</p>
            <p class="bold card-text">Price per 20 bags: $19.00</p>
            <p class="bold card-text">Price per 40 bags: $18.50</p>
          </div>
        </div>
      </div>
    </>
  );
}
