import React from 'react';
import PropTypes from 'prop-types';

import './cartsummary.scss';

function Cartsummary({ subTotal, shippingCost, total }) {
  return (
    <div className="cart__total-table">
      <div className="cart__subtotal">
        <span>Subtotal</span>
        <span>{`$ ${subTotal.toFixed(2)}`}</span>
      </div>
      <div className="cart__shipping">
        <span>Shipping</span>
        <span>{`$ ${shippingCost.toFixed(2)}`}</span>
      </div>
      <div className="cart__total">
        <span>Total</span>
        <span>{`$ ${total.toFixed(2)}`}</span>
      </div>
    </div>
  );
}

Cartsummary.propTypes = {
  subTotal: PropTypes.number,
  shippingCost: PropTypes.number,
  total: PropTypes.number,
};

Cartsummary.defaultProps = {
  subTotal: 0,
  shippingCost: 0,
  total: 0,
};

export default Cartsummary;
