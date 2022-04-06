import React from "react";

import "./appbar.scss";

const Appbar = ({setSearchQuery,getQueryResults}) => {

  const handleSubmit = (event) => {
    event.preventDefault();
    getQueryResults();
  }

  // const onChangeHandler = (inputValue) => {
  //   // setlastQuery(inputValue);
  //   clearTimeout(searchTimeout);
  //   searchTimeout = setTimeout(() => {
  //     if (inputValue === "") {
  //       getImages(listApi);
  //     } else {
  //       getImages(`${searchApi}&query=${inputValue}`, true);
  //     }
  //   }, 1000);
  // };

  return (
    <div className="appbar">
      <nav className="navbar navbar-expand-xl navbar-light bg-light p-0">
        <div className="container-fluid navbar_content">
          <a className="navbar-brand d-flex align-items-center p-0" href="#">
            <span className="logo" >S</span>
            <div className="logo_title">Shopka</div>
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
          {/* remove the above button and remove the collapse class below to always show navigation bar */}
          <div
            className="collapse navbar-collapse d-xl-flex justify-content-lg-between"
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav mb-2 mb-lg-0">
              <li className="nav-item list_item px-xl-3 py-xl-1">
                <a className="nav-link" aria-current="page" href="#">
                  Sell on Shopka
                </a>
              </li>
              <li className="nav-item list_item px-xl-3 py-xl-1">
                <a className="nav-link" href="#">
                  Register
                </a>
              </li>
            </ul>
            <form className="d-flex my-3 my-lg-0" onSubmit={handleSubmit}>
              <input
                className="form-control me-2 searchbar"
                type="search"
                placeholder="Search"
                aria-label="Search"
                onChange={(event) => setSearchQuery(event.target.value)}
                // onChange={handleSubmit}
              />
            </form>
            <div className="py-3 py-xl-0">
              <button className="btn sign-in-button btn-outline-primary" type="submit">
                Sign in
              </button>
              <button className="btn my-cart-button btn-outline-primary" type="submit">
                My cart
              </button>
              <button className="btn user-profile-button btn-outline-none p-0" type="submit">
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
