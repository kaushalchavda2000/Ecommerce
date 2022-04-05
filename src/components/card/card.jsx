import React from "react";

import "./card.scss";

const Card = ({productImageURL, productText, price, additionalText, rating}) => {
  return (
    <div className="card">
      <div className="image_container">
        <img src={productImageURL} className="card-img-top" alt="girl" />
      </div>
      <div className="card-body">
        <p className="card-text">
          {productText}
        </p>
        <h5 className="card-title">{price}</h5>
        <p className="additional-text">
          {additionalText}
        </p>
        <div>
          <span className="rating-stars">⭐⭐⭐⭐⭐</span>
          <span className="rating-number">{rating}</span>
          <button className="btn btn-outline-primary" type="submit">
            💙 Watch
          </button>
        </div>
      </div>
    </div>
  );
};

export default Card;
