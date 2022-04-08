import React from "react";

import "./category.scss";

const Category = ({caption, generateQuery, setSearchQuery}) => {
  return (
    <li className="nav-item" onClick={() => {
      setSearchQuery("movies");
      generateQuery();
      console.log("i am clicked.");
    }}>
      {/* <a className="nav-link p-0" href="#"> */}
      <div className="category">
        {/* <i className="icon fa-solid fa-circle-user pt-2"></i> */}
        <i className="icon fa fa-video-camera pt-2" aria-hidden="true"></i>
        <span className="category_caption p-1 px-3">{caption}</span>
      </div>
      {/* </a> */}
    </li>
  );
};

export default Category;
