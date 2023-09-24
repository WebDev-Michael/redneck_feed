import React from "react";
// import feedBag from "../images/feedBag.png";
import equine from '../data/equine-data.json';

export default function Equine() {
  // const [image] = useState(feedBag);
  const feedCard = equine.map(equine => 
    <div class="card flex centered margin-15">
    <img
      src={equine.image}
      class="card-img-top margin-15"
      alt="X-Cel Feed bag"
    />
    <div class="centered">
      <h1 class="card-header">{equine.name}</h1>
      <p class="card-text">
        {equine.description}
      </p>
      <p class="bold card-text">Price per bag: {equine.pricePerBag}</p>
      <p class="bold card-text">Price per 20 bags: {equine.pricePer20}</p>
      <p class="bold card-text">Price per 40 bags: {equine.pricePer40}</p>
    </div>
  </div>
    );

    return <div class="flex card-section border bg-lightgray">
      {feedCard}
    </div>
}