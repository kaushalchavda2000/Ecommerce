import React from "react";

import "./details.scss";

const Details = ({children, title, open}) => {
  return (
    <details open={open}>
      <summary className="caption">{title}</summary>
      <div className="ms-3">
        {children}
      </div>
    </details>
  );
};

export default Details;
