import React, { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Cartcard, Cartsummary } from '../../components/components';

import './cart.scss';

function Cart({
  cartProduct,
  setCartProduct,
  subTotal,
  shippingCost,
  total,
  cartData,
  setSubTotal,
  setShippingCost,
  setTotal,
  setCartData,
}) {
  const navigate = useNavigate();

  useEffect(() => {
    if (Object.keys(cartProduct).length !== 0) {
      setCartData((prev) => {
        if (prev.some((item) => item.sku === cartProduct.sku)) {
          const newCartData = prev.map((cartItem) => {
            const item = cartItem;
            if (item.sku === cartProduct.sku) {
              item.quantity += 1;
            }
            return item;
          });
          return newCartData;
        }
        return [...prev, cartProduct];
      });
      setCartProduct({});
    }
  }, [cartProduct]);

  useEffect(() => {
    setSubTotal(0);
    setShippingCost(0);
    setTotal(0);
    cartData.forEach((item) => {
      setSubTotal((prev) => prev + item.price * item.quantity);
      setShippingCost((prev) => prev + item.quantity * item.shippingCost);
      setTotal(
        (prev) => prev + item.price * item.quantity + item.quantity * item.shippingCost,
      );
    });
  }, [cartData]);

  return cartData.length > 0 ? (
    <div className="container cart">
      <h1 className="cart__title">CART</h1>
      <div className="cart__items-container">
        {cartData.map((cartItem) => (
          <Cartcard
            key={cartItem.sku}
            cartProduct={cartItem}
            cartData={cartData}
            setCartData={setCartData}
            setSubTotal={setSubTotal}
            setShippingCost={setShippingCost}
            setTotal={setTotal}
          />
        ))}
      </div>
      <h2 className="cart__total-table-heading">CART TOTALS</h2>
      <Cartsummary
        subTotal={subTotal}
        shippingCost={shippingCost}
        total={total}
      />

      <div className="cart__checkout-btn">
        <button type="button" onClick={() => navigate('/checkout')}>
          PROCEED TO CHECKOUT
        </button>
      </div>
    </div>
  ) : (
    <h1 className="container d-flex flex-column flex-md-row justify-content-center text-center cart__message">
      <span>Your Cart is Empty.</span>
      <Link to="/">Explore Products</Link>
    </h1>
  );
}

Cart.propTypes = {
  cartProduct: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
  setCartProduct: PropTypes.func,
  subTotal: PropTypes.number,
  shippingCost: PropTypes.number,
  total: PropTypes.number,
  cartData: PropTypes.oneOfType([PropTypes.array]),
  setSubTotal: PropTypes.func,
  setShippingCost: PropTypes.func,
  setTotal: PropTypes.func,
  setCartData: PropTypes.func,
};

Cart.defaultProps = {
  cartProduct: null,
  setCartProduct: null,
  subTotal: 0,
  shippingCost: 0,
  total: 0,
  cartData: null,
  setSubTotal: null,
  setShippingCost: null,
  setTotal: null,
  setCartData: null,
};

export default Cart;
