import React from 'react';
import PropTypes from 'prop-types';

import { Category } from '../components';

import './navbar.scss';

function Navbar({ categories, generateCategoriesQuery }) {
  return (
    <nav className="navigationbar navbar navbar-expand-md navbar-light p-0 py-xxl-3">
      <div className="container-fluid">
        <span />
        <button
          className="navbar-toggler p-2"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#secondNavbar"
          aria-controls="secondNavbar"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span>Categories</span>
        </button>
        <div
          className="collapse navbar-collapse justify-content-center"
          id="secondNavbar"
        >
          <ul className="navbar-nav mb-2 mb-lg-0 category-list">
            {categories
              && categories
                .slice(10, 20)
                .map((category) => (
                  <Category
                    key={category.id}
                    id={category.id}
                    caption={category.name}
                    generateCategoriesQuery={generateCategoriesQuery}
                  />
                ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}

Navbar.propTypes = {
  categories: PropTypes.oneOfType([PropTypes.array]),
  generateCategoriesQuery: PropTypes.func,
};

Navbar.defaultProps = {
  categories: [],
  generateCategoriesQuery: null,
};

export default Navbar;
