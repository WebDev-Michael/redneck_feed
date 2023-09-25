import React from "react";
// import feedBag from "../images/feedBag.png";
import rabbit from '../data/rabbit-data.json';

export default function Rabbit() {
  // const [image] = useState(feedBag);
  const feedCard = rabbit.map(rabbit => 
    <div class="card flex centered margin-15">
    <img
      src={rabbit.image}
      class="card-img margin-15"
      alt="X-Cel Feed bag"
    />
    <div class="centered">
      <h1 class="card-header bold">{rabbit.name}</h1>
      <p class="card-text">
        {rabbit.description}
      </p>
      <p class="bold card-text">Price per bag: {rabbit.pricePerBag}</p>
      <p class="bold card-text">Price per 20 bags: {rabbit.pricePer20}</p>
      <p class="bold card-text">Price per 40 bags: {rabbit.pricePer40}</p>
    </div>
  </div>
    );

    return <div class="flex card-section border bg-lightgray">
      {feedCard}
    </div>
}