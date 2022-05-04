import React from 'react';
import PropTypes from 'prop-types';

import './details.scss';

function Details({ children, title, open }) {
  return (
    <details open={open}>
      <summary className="caption">{title}</summary>
      <div className="ms-3">{children}</div>
    </details>
  );
}

Details.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.any]),
  title: PropTypes.string,
  open: PropTypes.bool,
};

Details.defaultProps = {
  children: null,
  title: '',
  open: false,
};

export default Details;
