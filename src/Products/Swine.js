import React, { useState } from "react";
import feedBag from "../images/feedBag.png";
import swine from '../data/swine-data.json';

export default function Swine() {
  const [image] = useState(feedBag);
  const feedCard = swine.map(swine => 
    <div class="card flex centered margin-15">
    <img
      src={image}
      class="card-img-top margin-15"
      alt="X-Cel Feed bag"
    />
    <div class="centered">
      <h1 class="card-header">{swine.name}</h1>
      <p class="card-text">
        {swine.description}
      </p>
      <p class="bold card-text">Price per bag: {swine.pricePerBag}</p>
      <p class="bold card-text">Price per 20 bags: {swine.pricePer20}</p>
      <p class="bold card-text">Price per 40 bags: {swine.pricePer40}</p>
    </div>
  </div>
    );

    return <div class="flex card-section border bg-lightgray">
      {feedCard}
    </div>
}