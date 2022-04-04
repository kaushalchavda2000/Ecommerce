import React from "react";

import "./dropdown.scss";

const Dropdown = ({dropdownTitle, dropdownMenuButtonId, children}) => {
  return (
    <div className="dropdown dropdown_container">
      <button
        className="btn btn-light dropdown-toggle"
        type="button"
        id={dropdownMenuButtonId}
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        {dropdownTitle}
      </button>
      <ul className="dropdown-menu" aria-labelledby={dropdownMenuButtonId}>
        {children}
      </ul>
    </div>
  );
};

export default Dropdown;
