import React from "react";

import Category from "../category/category";

import "./navbar.scss";

const Navbar = () => {
  return (
    <nav className="navigationbar navbar navbar-expand-md navbar-light p-0 py-xxl-3">
      <div className="container-fluid">
        {/* <a className="navbar-brand" href="#"></a> */}
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
        <div className="collapse navbar-collapse justify-content-center" id="secondNavbar">
          <ul className="navbar-nav mb-2 mb-lg-0 category_list">
          <Category caption="clothes" />
          <Category caption="Entertainment" />
          <Category caption="Mobile" />  
          <Category caption="Electronics" />
          <Category caption="sports" />
          <Category caption="Toys" />
          <Category caption="Home appliences" />  
          <Category caption="Cars" />
          <Category caption="Vegetables" />
          <Category caption="Drinks" />
          <Category caption="Furniture" />  
          <Category caption="Home & garden" />
          <Category caption="Gatgets" />
          <Category caption="Games" />
          <Category caption="Books" />  
          <Category caption="Bikes" />
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
