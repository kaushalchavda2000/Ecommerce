import React from "react";

import "./appbar.scss";

const Appbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center logo_title" href="#">
            <span className="logo me-2" >S</span>
            Shopka
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse d-lg-flex justify-content-lg-between"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link text-black" aria-current="page" href="#">
                  Sell on Shopka
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link text-black" href="#">
                  Register
                </a>
              </li>
            </ul>
            <form className="d-flex my-3 my-lg-0">
              <input
                className="form-control me-2 searchbar"
                type="search"
                placeholder="Search"
                aria-label="Search"
                size={40}
              />
            </form>
            <div>
              <button className="btn btn-outline-success" type="submit">
                Sign in
              </button>
              <button className="btn btn-outline-success mx-3" type="submit">
                My cart
              </button>
              <button className="btn btn-outline-none p-0" type="submit">
                <i className="fa-solid fa-circle-user user_profile"></i>
              </button>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Appbar;
