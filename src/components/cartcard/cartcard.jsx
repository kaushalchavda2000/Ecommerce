import React from 'react';
import PropTypes from 'prop-types';

import './cartcard.scss';

function Cartcard({
  cartProduct,
  cartData,
  setCartData,
  setSubTotal,
  setShippingCost,
  setTotal,
}) {
  const removeItem = (sku) => {
    setSubTotal(0);
    setShippingCost(0);
    setTotal(0);
    const newCartData = cartData.filter((cartItem) => sku !== cartItem.sku);
    setCartData(newCartData);
  };

  const quantityHandler = (sku, sign) => {
    setSubTotal(0);
    setShippingCost(0);
    setTotal(0);
    if (sign === '+') {
      const newCartData = cartData.map((cartItem) => {
        const item = cartItem;
        if (sku === cartItem.sku) {
          item.quantity += 1;
        }
        return cartItem;
      });
      setCartData(newCartData);
    } else {
      const newCartData = cartData.flatMap((cartItem) => {
        const item = cartItem;
        if (sku === cartItem.sku) {
          item.quantity -= 1;
        }
        if (cartItem.quantity === 0) {
          removeItem(sku);
          return [];
        }
        return cartItem;
      });
      setCartData(newCartData);
    }
  };

  return (
    <div className="container cartcard">
      <div className="cartcard__image">
        <img src={cartProduct.link} alt="..." />
      </div>
      <div className="cartcard__details">
        <p className="cartcard__name">{cartProduct.name}</p>
        <div>
          <span className="cartcard__star">⭐</span>
          <span className="cartcard__rating">
            {cartProduct.review || '0.0'}
          </span>
          <span>and</span>
          <span className="cartcard__reviewcount">
            {cartProduct.reviewCount || '0'}
          </span>
          <span>Reviews</span>
        </div>
        <div className="">
          <div className="cartcard__pricetitle">Regular Price</div>
          <div className="cartcard__price">{`$${cartProduct.price}`}</div>
        </div>
        <button
          type="button"
          className="cartcard__remove"
          onClick={() => removeItem(cartProduct.sku)}
        >
          Remove from Cart
        </button>
      </div>
      <div className="cartcard__quantity">
        <button
          type="button"
          className="py-0 cartcard__minus-btn"
          onClick={() => quantityHandler(cartProduct.sku, '-')}
        >
          -
        </button>
        <span className="cartcard__input">{cartProduct.quantity}</span>
        <button
          type="button"
          className="py-0 cartcard__plus-btn"
          onClick={() => quantityHandler(cartProduct.sku, '+')}
        >
          +
        </button>
      </div>
      <div className="cartcard__total-price">
        <div className="cartcard__total-price-title">Total Price</div>
        <div className="cartcard__total-price-value">
          {`$${(cartProduct.price * cartProduct.quantity).toFixed(2)}`}
        </div>
      </div>
    </div>
  );
}

Cartcard.propTypes = {
  cartProduct: PropTypes.oneOfType([PropTypes.object]),
  cartData: PropTypes.oneOfType([PropTypes.string, PropTypes.number, PropTypes.array]),
  setCartData: PropTypes.func,
  setSubTotal: PropTypes.func,
  setShippingCost: PropTypes.func,
  setTotal: PropTypes.func,
};

Cartcard.defaultProps = {
  cartProduct: null,
  cartData: [],
  setCartData: null,
  setSubTotal: null,
  setShippingCost: null,
  setTotal: null,
};

export default Cartcard;
