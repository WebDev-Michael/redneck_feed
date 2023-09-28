import React from "react";
// import feedBag from "../images/feedBag.png";
import straightGrain from '../data/straightGrains-data.json';

export default function StraightGrain() {
  // const [image] = useState(feedBag);
  const feedCard = straightGrain.map(straightGrain => 
    <div class="card flex centered">
    <img
      src={straightGrain.image}
      class="card-img margin-15"
      alt="X-Cel Feed bag"
    />
    <div class="centered">
      <h1 class="card-header bold">{straightGrain.name}</h1>
      <p class="card-text">
        {straightGrain.description}
      </p>
      <p class="bold card-text">Price per bag: {straightGrain.pricePerBag}</p>
      <p class="bold card-text">Price per 20 bags: {straightGrain.pricePer20}</p>
      <p class="bold card-text">Price per 40 bags: {straightGrain.pricePer40}</p>
    </div>
  </div>
    );

    return <div class="flex card-section border">
      {feedCard}
    </div>
}