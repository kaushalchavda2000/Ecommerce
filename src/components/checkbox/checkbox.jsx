import React from "react";

import "./checkbox.scss";

const Checkbox = ({value, id, label}) => {
  return (
    <div className="form-check mb-0 checkbox">
      <input
        className="form-check-input"
        type="checkbox"
        value={value}
        id={id}
      />
      <label className="form-check-label" htmlFor={id}>
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
