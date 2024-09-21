import React from "react";
// import feedBag from "../images/feedBag.png";
import equine from '../data/equine-data.json';

export default function Equine() {
  const bannerImg = "https://www.msd-animal-health.com/wp-content/uploads/sites/2/2021/12/equine-hero-img.jpg"
  // const [image] = useState(feedBag);
  const feedCard = equine.map(equine => 
    <div className="card flex centered">
    <img
      src={equine.image}
      className="card-img margin-15"
      alt="X-Cel Feed bag"
    />
    <div className="centered">
      <h1 className="card-header bold">{equine.name}</h1>
      <p className="card-text">
        {equine.description}
      </p>
      <p className="bold card-text">Price per bag: {equine.pricePerBag}</p>
      <p className="bold card-text">Price per 20 bags: {equine.pricePer20}</p>
      <p className="bold card-text">Price per 40 bags: {equine.pricePer40}</p>
    </div>
  </div>
    );

    return (
      <div className="centered">
        <div className="banner-container">
          <img src={bannerImg} alt={equine.name} className="banner"/>
        </div>
        <h2 className="bold margin-15 feed-header">Equine Feed</h2>
        <div className="flex card-section border">
          {feedCard}
        </div>
      </div>
    );
}