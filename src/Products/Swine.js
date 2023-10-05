import React from "react";
// import feedBag from "../images/feedBag.png";
import swine from '../data/swine-data.json';

export default function Swine() {
  // const [image] = useState(feedBag);
  const feedCard = swine.map(swine => 
    <div class="card flex centered">
    <img
      src={swine.image}
      class="card-img margin-15"
      alt="X-Cel Feed bag"
    />
    <div class="centered">
      <h1 class="card-header bold">{swine.name}</h1>
      <p class="card-text">
        {swine.description}
      </p>
      <p class="bold card-text">Price per bag: {swine.pricePerBag}</p>
      <p class="bold card-text">Price per 20 bags: {swine.pricePer20}</p>
      <p class="bold card-text">Price per 40 bags: {swine.pricePer40}</p>
    </div>
  </div>
    );

    return (
      <div className="centered">
        <h2 className="bold margin-15 feed-header">Swine Feed</h2>
        <div className="flex card-section border">
          {feedCard}
        </div>
      </div>
    );
}