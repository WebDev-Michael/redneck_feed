import React from "react";
import { useFetchData } from "../hooks";

const Feed = ({ endpoint }) => {
  const { data, error } = useFetchData(endpoint);
  const { products, bannerImg, categoryName } = data;
  
  if (error) return <p>Error: {error}</p>;

  if (!data || data === null) return <p>Error: Data has shifted or is in another location</p>;

  

  const feedCard = products.map((product, index) => (
    <div className="card flex centered" key={index}>
      <img
        src={product.image}
        className="margin-15 card-img"
        alt={product.name}
      />
      <div className="centered">
        <h1 className="card-header bold">{product.name}</h1>
        <p className="card-text">{product.description}</p>
        <p className="bold card-text">Price per bag: {product.pricePerBag}</p>
        <p className="bold card-text">Price per 20 bags: {product.pricePer20}</p>
        <p className="bold card-text">Price per 40 bags: {product.pricePer40}</p>
      </div>
    </div>
  ));

  return (
    <div className="centered">
      <div className="banner-container">
        <img src={bannerImg} alt={`${categoryName} Banner`} className="banner" />
      </div>
      <h2 className="bold margin-15 feed-header">{categoryName}</h2>
      <div className="flex card-section border">
        {feedCard}
      </div>
    </div>
  );
};

export default Feed;