import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import './card.scss';

function Card({
  sku, link, name, price, rating,
}) {
  const navigate = useNavigate();

  const showProductDetails = () => {
    navigate(`/productdetails/${sku}`);
  };

  return (
    <div
      role="button"
      tabIndex={0}
      className="card"
      onClick={showProductDetails}
      onKeyUp={() => {}}
    >
      <div className="card__image-container">
        <img src={link} className="card-img-top" alt="product" />
      </div>
      <div className="card__body">
        <p className="card__name">{name}</p>
        <h5 className="card__price">{`$ ${price}`}</h5>
        <p className="card__additional-text">Shipping is free</p>
        <div>
          <span className="card__rating-stars">⭐⭐⭐⭐⭐</span>
          <span className="card__rating-value">{rating}</span>
          <button className="card__btn" type="submit">
            💙 Watch
          </button>
        </div>
      </div>
    </div>
  );
}

Card.propTypes = {
  sku: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  link: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.number,
  rating: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
};

Card.defaultProps = {
  sku: 0,
  link: '',
  name: '',
  price: '',
  rating: '',
};

export default Card;
