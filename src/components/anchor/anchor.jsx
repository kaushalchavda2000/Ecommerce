import React from "react";

import "./anchor.scss";

const Anchor = ({text, link}) => {
  return (
    // <div>
    //   <a href={link}>{text}</a>
    // </div>
    <div>{text}</div>
  );
};

export default Anchor;
