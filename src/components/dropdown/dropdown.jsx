import React from 'react';
import PropTypes from 'prop-types';

import './dropdown.scss';

function Dropdown({ dropdownTitle, dropdownMenuButtonId, children }) {
  return (
    <div className="dropdown dropdown-container">
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
}

Dropdown.propTypes = {
  dropdownTitle: PropTypes.string,
  dropdownMenuButtonId: PropTypes.string,
  children: PropTypes.oneOfType([PropTypes.array, PropTypes.any]),
};

Dropdown.defaultProps = {
  dropdownTitle: '',
  dropdownMenuButtonId: '',
  children: null,
};

export default Dropdown;
