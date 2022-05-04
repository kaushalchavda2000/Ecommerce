/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useParams, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Productdetails, Recentproducts } from '../../components/components';

import './productdetailpage.scss';

function Productdetailpage({ MY_API_KEY, setCartProduct }) {
  const params = useParams();
  const location = useLocation();

  const [showSpinner, setShowSpinner] = useState({
    product: 'found',
    alsoViewed: 'found',
  });
  const [selectedProduct, setSelectedProduct] = useState({});
  const [recommendations, setRecommendations] = useState([]);

  const API = `https://api.bestbuy.com/v1/products(sku=${params.productId})?format=json&show=all&apiKey=0Q75AAetcE7MZUKyrAG9DVI7`;
  const recommendationAPI = `https://api.bestbuy.com/v1/products/${params.productId}/alsoViewed?apiKey=${MY_API_KEY}`;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  const getselectedProduct = async () => {
    try {
      setShowSpinner((prev) => ({ ...prev, product: 'finding' }));
      const response = await fetch(API);
      const data = await response.json();
      setSelectedProduct(data.products[0]);
      setShowSpinner((prev) => ({ ...prev, product: 'found' }));
    } catch (error) {
      setShowSpinner((prev) => ({ ...prev, product: 'notfound' }));
    }
  };

  const getRecommendations = async () => {
    try {
      setShowSpinner((prev) => ({ ...prev, alsoViewed: 'finding' }));
      const response = await fetch(recommendationAPI);
      const data = await response.json();
      setRecommendations([...data.results]);
      setShowSpinner((prev) => ({ ...prev, alsoViewed: 'found' }));
    } catch (error) {
      setShowSpinner((prev) => ({ ...prev, alsoViewed: 'notfound' }));
    }
  };

  useEffect(() => {
    getselectedProduct();
    getRecommendations();
  }, [params.productId]);

  return (
    <div className="productdetailpage">
      {showSpinner.product === 'found' && showSpinner.alsoViewed === 'found' ? (
        <div>
          <Productdetails
            selectedProduct={selectedProduct}
            setShowSpinner={setShowSpinner}
            setCartProduct={setCartProduct}
          />
          <Recentproducts
            recommendations={recommendations}
            MY_API_KEY={MY_API_KEY}
            showSpinner={showSpinner}
            setShowSpinner={setShowSpinner}
          />
        </div>
      ) : showSpinner.product === 'finding'
        || showSpinner.alsoViewed === 'finding' ? (
          <div className="productdetailpage__spinner">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        ) : (
          (showSpinner.product === 'notfound'
          || showSpinner.alsoViewed === 'notfound') && (
          <div
            className="alert alert-danger productdetailpage__error-msg"
            role="alert"
          >
            <div>Something Went Wrong!</div>
            <button
              type="button"
              className="productdetailpage__error-msg-btn"
              onClick={() => {
                getselectedProduct();
                getRecommendations();
              }}
            >
              Try Again
            </button>
          </div>
          )
        )}
    </div>
  );
}

Productdetailpage.propTypes = {
  MY_API_KEY: PropTypes.string,
  setCartProduct: PropTypes.func,
};

Productdetailpage.defaultProps = {
  MY_API_KEY: '0Q75AAetcE7MZUKyrAG9DVI7',
  setCartProduct: {},
};

export default Productdetailpage;
