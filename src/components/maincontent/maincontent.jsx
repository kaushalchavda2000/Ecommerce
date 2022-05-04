import React from 'react';
import PropTypes from 'prop-types';

import { Dropdown, Dropdownitem, Card } from '../components';

import './maincontent.scss';

function MainContent({
  products,
  sortProducts,
  showSpinner,
  getProducts,
  productsAPI,
}) {
  return (
    <div className="main-content">
      <div className="main-content__content-container">
        <div className="main-content__dropdowns d-flex flex-wrap">
          <span className="dropdown_wrapper ps-3 pt-3 ps-sm-3 pe-sm-2">
            <Dropdown dropdownTitle="Sort By" dropdownMenuButtonId="first">
              <Dropdownitem
                title="Newest First"
                value="releaseDate"
                order="dsc"
                sortProducts={sortProducts}
              />
              <Dropdownitem
                title="Price:Low to High"
                value="regularPrice"
                order="asc"
                sortProducts={sortProducts}
              />
              <Dropdownitem
                title="Price:High to Low"
                value="regularPrice"
                order="dsc"
                sortProducts={sortProducts}
              />
              <Dropdownitem
                title="Ratings:Low to High"
                value="customerReviewAverage"
                order="asc"
                sortProducts={sortProducts}
              />
              <Dropdownitem
                title="Ratings:High to Low"
                value="customerReviewAverage"
                order="dsc"
                sortProducts={sortProducts}
              />
            </Dropdown>
          </span>
          <span className="dropdown_wrapper ps-3 pt-3 px-sm-2">
            <Dropdown dropdownTitle="Condition" dropdownMenuButtonId="second">
              <Dropdownitem link="#" title="first item" />
              <Dropdownitem link="#" title="second" />
              <Dropdownitem link="#" title="third item" />
              <Dropdownitem link="#" title="fourth" />
            </Dropdown>
          </span>
          <span className="dropdown_wrapper ps-3 pt-3 ps-sm-2">
            <Dropdown
              dropdownTitle="Delivery Options"
              dropdownMenuButtonId="third"
            >
              <Dropdownitem link="#" title="first item" />
              <Dropdownitem link="#" title="second" />
              <Dropdownitem link="#" title="third item" />
              <Dropdownitem link="#" title="fourth" />
            </Dropdown>
          </span>
        </div>
        <div className="main-content__cards-container">
          {products.length !== 0
            ? products.map((product) => (
              <Card
                key={product.sku}
                sku={product.sku}
                link={product.images[0].href}
                name={product.name}
                price={product.regularPrice}
                rating={product.customerReviewAverage || 0}
              />
            ))
            : !showSpinner
              && products.length === 0 && (
                <div
                  className="alert alert-danger main-content__error-msg"
                  role="alert"
                >
                  <div>Something Went Wrong!</div>
                  <button
                    type="button"
                    className="main-content__error-msg-btn"
                    onClick={() => getProducts(productsAPI)}
                  >
                    Try Again
                  </button>
                </div>
            )}
        </div>
        {showSpinner && (
          <div className="main-content__spinner">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Loading...</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

MainContent.propTypes = {
  products: PropTypes.oneOfType([PropTypes.array]),
  sortProducts: PropTypes.func,
  showSpinner: PropTypes.bool,
  getProducts: PropTypes.func,
  productsAPI: PropTypes.string,
};

MainContent.defaultProps = {
  products: [],
  sortProducts: null,
  showSpinner: false,
  getProducts: null,
  productsAPI: '',
};

export default MainContent;
