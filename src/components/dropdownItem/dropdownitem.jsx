import React from "react";

const Dropdownitem = ({link, title}) => {
  return (
    <li>
      <a className="dropdown-item" href={link}>
        {title}
      </a>
    </li>
  );
};

export default Dropdownitem;
