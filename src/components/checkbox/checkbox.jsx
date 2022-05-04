import React from 'react';
import PropTypes from 'prop-types';

import './checkbox.scss';

function Checkbox({
  value,
  id,
  label,
  status,
  handleFilters,
  name,
  checkboxArray,
  setCheckboxArray,
}) {
  const handleOnChange = (event) => {
    const newArr = checkboxArray.map((obj) => {
      const object = obj;
      if (object.id === event.target.id) {
        object.status = !object.status;
      }
      return object;
    });
    setCheckboxArray(newArr);
    handleFilters(event.target.value, name);
  };

  return (
    <div className="form-check mb-0 checkbox">
      <input
        style={{ cursor: 'pointer' }}
        className="form-check-input"
        type="checkbox"
        value={value}
        id={id}
        onChange={(event) => handleOnChange(event)}
        checked={status}
      />
      <label
        className="form-check-label"
        htmlFor={id}
        style={{ cursor: 'pointer' }}
      >
        {label}
      </label>
    </div>
  );
}

Checkbox.propTypes = {
  value: PropTypes.string,
  id: PropTypes.string,
  label: PropTypes.string,
  status: PropTypes.bool,
  handleFilters: PropTypes.func,
  name: PropTypes.string,
  checkboxArray: PropTypes.oneOfType([PropTypes.array]),
  setCheckboxArray: PropTypes.func,
};

Checkbox.defaultProps = {
  value: '',
  id: '',
  label: '',
  status: false,
  handleFilters: null,
  name: '',
  checkboxArray: [],
  setCheckboxArray: null,
};

export default Checkbox;
