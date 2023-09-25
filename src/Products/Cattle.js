import React from "react";
// import feedBag from "../images/feedBag.png";
import cattle from '../data/cattle-data.json';

export default function Cattle() {
  // const [image] = useState(feedBag);
  const feedCard = cattle.map(cattle => 
    <div class="card flex centered margin-15">
    <img
      src={cattle.image}
      class="margin-15 card-img"
      alt="X-Cel Feed bag"
    />
    <div class="centered">
      <h1 class="card-header bold">{cattle.name}</h1>
      <p class="card-text">
        {cattle.description}
      </p>
      <p class="bold card-text">Price per bag: {cattle.pricePerBag}</p>
      <p class="bold card-text">Price per 20 bags: {cattle.pricePer20}</p>
      <p class="bold card-text">Price per 40 bags: {cattle.pricePer40}</p>
    </div>
  </div>
    );

    return <div class="flex card-section border bg-lightgray">
      {feedCard}
    </div>

}
