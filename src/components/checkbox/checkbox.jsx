import React from "react";

import "./checkbox.scss";

const Checkbox = ({ value, id, label, handleFilters}) => {
  return (
    <div className="form-check mb-0 checkbox">
      <input
        className="form-check-input"
        type="checkbox"
        value={value}
        id={id}
        onChange={(event) => handleFilters(event.target.value)}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
    // <div class="form-check mb-0 checkbox">
    //   <input
    //     class="form-check-input"
    //     type="radio"
    //     name="flexRadioDefault"
    //     id={id}
    //   />
    //   <label class="form-check-label" for={id}>
    //   {label}
    //   </label>
    // </div>
  );
};

export default Checkbox;
