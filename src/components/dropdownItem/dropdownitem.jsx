import React from 'react';
import PropTypes from 'prop-types';

function Dropdownitem({
  title, value, order, sortProducts,
}) {
  return (
    <li style={{ cursor: 'pointer' }}>
      <div
        role="link"
        tabIndex={0}
        className="dropdown-item"
        onClick={() => sortProducts(value, order)}
        onKeyUp={() => {}} // temporary soln.
      >
        {title}
      </div>
    </li>
  );
}

Dropdownitem.propTypes = {
  title: PropTypes.string,
  value: PropTypes.string,
  order: PropTypes.string,
  sortProducts: PropTypes.func,
};

Dropdownitem.defaultProps = {
  title: '',
  value: '',
  order: '',
  sortProducts: null,
};

export default Dropdownitem;
