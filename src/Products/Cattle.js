import React from "react";
// import feedBag from "../images/feedBag.png";
import cattle from '../data/cattle-data.json';

export default function Cattle() {
  // const [image] = useState(feedBag);
  const bannerImg = 'https://extension.illinois.edu/sites/default/files/styles/2_1_banner/public/2023-03/GettyImages-1167064450.jpg?itok=oWyPB8UY'
  const feedCard = cattle.map(cattle => 
    <div class="card flex centered">
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

    return (
      <div className="centered">
        <div className="banner-container">
          <img src={bannerImg} alt={cattle.name} className="banner"/>
        </div>
        <h2 className="bold margin-15 feed-header">Cattle Feed</h2>
        <div className="flex card-section border">
          {feedCard}
        </div>
      </div>
    );

}
