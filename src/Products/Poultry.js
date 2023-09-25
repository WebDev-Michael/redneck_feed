import React from "react";
// import feedBag from "../images/feedBag.png";
import poultry from '../data/poultry-data.json';

export default function Poultry() {
  // const [image] = useState(feedBag);
  const feedCard = poultry.map(poultry => 
    <div class="card flex centered margin-15">
    <img
      src={poultry.image}
      class="card-img margin-15"
      alt="X-Cel Feed bag"
    />
    <div class="centered">
      <h1 class="card-header bold">{poultry.name}</h1>
      <p class="card-text">
        {poultry.description}
      </p>
      <p class="bold card-text">Price per bag: {poultry.pricePerBag}</p>
      <p class="bold card-text">Price per 20 bags: {poultry.pricePer20}</p>
      <p class="bold card-text">Price per 40 bags: {poultry.pricePer40}</p>
    </div>
  </div>
    );

    return <div class="flex card-section border bg-lightgray">
      {feedCard}
    </div>
}