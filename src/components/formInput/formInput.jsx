/* eslint-disable jsx-a11y/label-has-associated-control */
import React from 'react';
import PropTypes from 'prop-types';

function FormInput({
  label,
  type,
  id,
  name,
  placeholder,
  value,
  onChangeHandler,
  handleValidation,
  errorMessage,
}) {
  return (
    <>
      <label htmlFor={id} className="form-label">
        {label}
      </label>
      <input
        type={type}
        className="form-control"
        id={id}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={(event) => onChangeHandler(event)}
        onBlur={(event) => handleValidation(event.target.name, event.target.value)}
      />
      <div className="checkout__validation-feedback">{errorMessage}</div>
    </>
  );
}

FormInput.propTypes = {
  label: PropTypes.string,
  type: PropTypes.string,
  id: PropTypes.string,
  name: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChangeHandler: PropTypes.func,
  handleValidation: PropTypes.func,
  errorMessage: PropTypes.string,
};

FormInput.defaultProps = {
  label: '',
  type: '',
  id: '',
  name: '',
  placeholder: '',
  value: '',
  onChangeHandler: null,
  handleValidation: null,
  errorMessage: '',
};

export default FormInput;
