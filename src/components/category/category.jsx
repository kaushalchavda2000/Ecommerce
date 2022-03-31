import React from "react";

import "./category.scss";

const Category = ({caption}) => {
  return (
    <li className="nav-item">
      <a className="nav-link p-0" href="#">
        <div className="category">
          <i className="icon fa-solid fa-circle-user pt-2"></i>
          <span className="category_caption p-1 px-3">{caption}</span>
        </div>
      </a>
    </li>
  );
};

export default Category;
