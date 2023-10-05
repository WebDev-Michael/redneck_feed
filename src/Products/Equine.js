import React from "react";
// import feedBag from "../images/feedBag.png";
import equine from '../data/equine-data.json';

export default function Equine() {
  // const [image] = useState(feedBag);
  const feedCard = equine.map(equine => 
    <div class="card flex centered">
    <img
      src={equine.image}
      class="card-img margin-15"
      alt="X-Cel Feed bag"
    />
    <div class="centered">
      <h1 class="card-header bold">{equine.name}</h1>
      <p class="card-text">
        {equine.description}
      </p>
      <p class="bold card-text">Price per bag: {equine.pricePerBag}</p>
      <p class="bold card-text">Price per 20 bags: {equine.pricePer20}</p>
      <p class="bold card-text">Price per 40 bags: {equine.pricePer40}</p>
    </div>
  </div>
    );

    return (
      <div className="centered">
        <h2 className="bold margin-15 feed-header">Equine Feed</h2>
        <div className="flex card-section border">
          {feedCard}
        </div>
      </div>
    );
}