import React from "react";
// import feedBag from "../images/feedBag.png";
import poultry from '../data/poultry-data.json';

export default function Poultry() {
  // const [image] = useState(feedBag);
  const bannerImg = "https://live-production.wcms.abc-cdn.net.au/930544c4d01ed91830623b2919a3b227?impolicy=wcms_crop_resize&cropH=2208&cropW=3312&xPos=0&yPos=237&width=862&height=575"
  const feedCard = poultry.map(poultry => 
    <div class="card flex centered">
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

    return (
      <div className="centered">
        <div className="banner-container">
          <img src={bannerImg} alt={poultry.name} className="banner"/>
        </div>

        <h2 className="bold margin-15 feed-header">Poultry Feed</h2>
        <div className="flex card-section border">
          {feedCard}
        </div>
      </div>
    );
}