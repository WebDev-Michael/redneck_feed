import React from "react";
// import feedBag from "../images/feedBag.png";
import sheepAndGoat from '../data/sheepAndGoat-data.json';

export default function SheepAndGoat() {
  // const [image] = useState(feedBag);
  const bannerImg = "https://morningchores.com/wp-content/uploads/2019/11/What-to-Consider-When-Raising-Sheep-and-Goats-Together-FI.jpg"
  const feedCard = sheepAndGoat.map(sheepAndGoat => 
    <div class="card flex centered">
    <img
      src={sheepAndGoat.image}
      class="card-img margin-15"
      alt="X-Cel Feed bag"
    />
    <div class="centered">
      <h1 class="card-header bold">{sheepAndGoat.name}</h1>
      <p class="card-text">
        {sheepAndGoat.description}
      </p>
      <p class="bold card-text">Price per bag: {sheepAndGoat.pricePerBag}</p>
      <p class="bold card-text">Price per 20 bags: {sheepAndGoat.pricePer20}</p>
      <p class="bold card-text">Price per 40 bags: {sheepAndGoat.pricePer40}</p>
    </div>
  </div>
    );

    return (
      <div className="centered">
        <div className="banner-container">
          <img src={bannerImg} alt={sheepAndGoat.name} className="banner" />
        </div>
        <h2 className="bold margin-15 feed-header">Sheep and Goat Feed</h2>
        <div className="flex card-section border">
          {feedCard}
        </div>
      </div>
    );
}