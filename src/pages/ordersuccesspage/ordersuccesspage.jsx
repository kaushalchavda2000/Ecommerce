import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Cartsummary } from '../../components/components';

import './ordersuccesspage.scss';

function Ordersuccesspage({
  currentUser, subTotal, shippingCost, total,
}) {
  return (
    <div className="success-page">
      <div className="container">
        <div className="row">
          <div className="col-lg-9 mx-auto mt-5">
            <div className="payment">
              <div className="payment__header">
                <div className="payment__check">
                  <i className="fa fa-check" aria-hidden="true" />
                </div>
              </div>
              <div className="payment__content">
                <h1 className="payment__username">{`${currentUser.firstname} ${currentUser.lastname}`}</h1>
                <h1 className="payment__message">Thanks for your order!</h1>
                <p className="payment__summary-title">Payment Summary</p>
                <Cartsummary
                  subTotal={subTotal}
                  shippingCost={shippingCost}
                  total={total}
                />
                <div className="payment__link-container mx-auto">
                  <Link
                    to="/Ecommerce/"
                    className="payment__link"
                    style={{ textDecoration: 'none' }}
                  >
                    Continue Shopping
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Ordersuccesspage.propTypes = {
  currentUser: PropTypes.oneOfType([PropTypes.object]),
  subTotal: PropTypes.number,
  shippingCost: PropTypes.number,
  total: PropTypes.number,
};

Ordersuccesspage.defaultProps = {
  currentUser: {},
  subTotal: 0,
  shippingCost: 0,
  total: 0,
};

export default Ordersuccesspage;
