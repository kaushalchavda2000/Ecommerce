import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import './appbar.scss';

function Appbar({ setSearchQuery, generateQuery, setProducts }) {
  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    generateQuery();
    setProducts([]);
    navigate('/Ecommerce/');
  };

  return (
    <div className="appbar">
      <nav className="navbar navbar-expand-xl navbar-light p-0">
        <div className="container-fluid appbar__content">
          <Link className="navbar-brand d-flex align-items-center p-0" to="/Ecommerce/">
            <span className="appbar__logo">S</span>
            <div className="appbar__logo-title">Shopka</div>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon" />
          </button>
          <div
            className="collapse navbar-collapse d-xl-flex justify-content-lg-between"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item appbar__list-item px-xl-3 py-xl-1">
                <Link className="nav-link" aria-current="page" to="/Ecommerce/">
                  Sell on Shopka
                </Link>
              </li>
              <li className="nav-item appbar__list-item px-xl-3 py-xl-1">
                <Link className="nav-link" to="/Ecommerce/">
                  Register
                </Link>
              </li>
            </ul>
            <form className="d-flex my-3 my-lg-0" onSubmit={handleSubmit}>
              <input
                className="form-control me-2 appbar__searchbar"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(event) => setSearchQuery(event.target.value)}
              />
            </form>
            <div className="py-3 py-xl-0">
              <button
                className="btn appbar__sign-in-button btn-outline-primary"
                type="submit"
              >
                Sign in
              </button>
              <button
                className="btn appbar__my-cart-button btn-outline-primary"
                type="submit"
                onClick={() => {
                  navigate('/cart');
                }}
              >
                My cart
              </button>
              <button
                className="btn appbar__user-profile-button btn-outline-none p-0"
                type="submit"
              >
                <i className="fa-solid fa-circle-user appbar__user-profile-icon" />
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

Appbar.propTypes = {
  setSearchQuery: PropTypes.func,
  generateQuery: PropTypes.func,
  setProducts: PropTypes.func,
};

Appbar.defaultProps = {
  setSearchQuery: null,
  generateQuery: null,
  setProducts: null,
};

export default Appbar;
