import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import './productdetails.scss';

function Productdetails({ selectedProduct, setCartProduct }) {
  const navigate = useNavigate();

  const addToCartHandler = () => {
    setCartProduct(selectedProduct);
    navigate('/Ecommerce/cart');
  };

  return (
    Object.keys(selectedProduct).length !== 0 && (
      <div className="product-details" id="product-details">
        <div className="product-details__image">
          <img
            src={selectedProduct.images[0].href}
            className="card-img-top"
            alt="product"
          />
          <button
            type="button"
            className="product-details__Add-to-cart"
            onClick={addToCartHandler}
          >
            Add to Cart
          </button>
        </div>
        <div>
          <div className="product-details__description">
            <h1>Product Details</h1>
            <div className="product-details__name">{selectedProduct.name}</div>
            <div>
              <div className="product-details__pricetitle">Regular Price</div>
              <div className="product-details__price">{`$${selectedProduct.regularPrice}`}</div>
            </div>
            <div>
              <span>⭐⭐⭐⭐⭐</span>
              <span className="product-details__rating">
                {selectedProduct.customerReviewAverage || '0.0'}
              </span>
              <span>and</span>
              <span className="product-details__reviewcount">
                {selectedProduct.customerReviewCount || '0'}
              </span>
              <span>Reviews</span>
            </div>
            <div className="product-details__full-description">
              <div className="">
                {selectedProduct.details.length !== 0
                  && selectedProduct.details.map((detail) => {
                    const index = Math.random();
                    return (
                      <div key={index}>
                        <span style={{ fontWeight: '700' }}>{detail.name}</span>
                        <span>{` : ${detail.value}`}</span>
                      </div>
                    );
                  })}
              </div>
              <div className="product-details__features">
                {selectedProduct.features.length !== 0
                  && selectedProduct.features.map((feature) => {
                    const index = Math.random();
                    return (
                      <div key={index} style={{ marginBottom: '10px' }}>
                        {feature.feature}
                      </div>
                    );
                  })}
              </div>
              {selectedProduct.warrantyParts !== null && (
                <div className="product-details__warranty">
                  <span style={{ fontWeight: '700' }}>Warranty</span>
                  <span>{` : ${selectedProduct.warrantyParts}`}</span>
                </div>
              )}
              <div className="product-details__type">
                <span style={{ fontWeight: '700' }}>Product Type</span>
                <span>{` : ${selectedProduct.type}`}</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
}

Productdetails.propTypes = {
  selectedProduct: PropTypes.oneOfType([PropTypes.object]),
  setCartProduct: PropTypes.func,
};

Productdetails.defaultProps = {
  selectedProduct: null,
  setCartProduct: null,
};

export default Productdetails;
