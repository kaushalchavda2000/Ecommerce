/* eslint-disable jsx-a11y/label-has-associated-control */
/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import { Cartcard, Cartsummary, FormInput } from '../../components/components';

import './checkoutpage.scss';

function Checkoutpage({
  subTotal,
  shippingCost,
  total,
  cartData,
  usersData,
  setSubTotal,
  setShippingCost,
  setTotal,
  setUsersData,
  setCartData,
  setCurrentUser,
}) {
  const navigate = useNavigate();
  const errorMessagesInitialState = {
    firstname_error: '',
    lastname_error: '',
    email_error: '',
    contact_error: '',
    address_error: '',
    address2_error: '',
    city_error: '',
    state_error: '',
    zip_error: '',
  };

  const [errormessages, setErrorMessages] = useState(errorMessagesInitialState);
  const [userDetail, setUserDetail] = useState({
    firstname: '',
    lastname: '',
    email: '',
    contact: '',
    address: '',
    address2: '',
    city: '',
    state: '',
    zip: '',
  });

  useEffect(() => {
    setSubTotal(0);
    setShippingCost(0);
    setTotal(0);
    cartData.forEach((item) => {
      setSubTotal((prev) => prev + item.price * item.quantity);
      setShippingCost((prev) => prev + item.quantity * item.shippingCost);
      setTotal(
        (prev) => prev + item.price * item.quantity + item.quantity * item.shippingCost,
      );
    });
  }, [cartData]);

  const handleValidation = (name, value) => {
    let bool;
    let message;

    const getError = () => {
      switch (name) {
        case 'firstname':
          message = value.trim() !== '' ? '' : 'First Name is required!';
          bool = value.trim() !== '';
          break;
        case 'lastname':
          message = value.trim() !== '' ? '' : 'Last Name is required!';
          bool = value.trim() !== '';
          break;
        case 'email': {
          const email = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(
            value,
          );
          const emailsAlreadyExist = usersData.find(
            (obj) => obj.email === value,
          );
          message = email
            ? emailsAlreadyExist
              ? 'This Email is already Exists!'
              : ''
            : 'Invalid Email Address!';
          bool = email ? !emailsAlreadyExist : false;
          break;
        }
        case 'contact': {
          const phoneNo = /^\d{10}$/.test(value);
          const phoneNoAlreadyExist = usersData.find(
            (obj) => obj.phone === value,
          );
          message = phoneNo
            ? phoneNoAlreadyExist
              ? 'This Phone number is already Exists!'
              : ''
            : 'Invalid Phone Number!';
          bool = phoneNo ? !phoneNoAlreadyExist : false;
          break;
        }
        case 'address':
          message = value.trim() !== '' ? '' : 'Address is required!';
          bool = value.trim() !== '';
          break;
        case 'address2':
          message = value.trim() !== '' ? '' : 'address2 is required!';
          bool = value.trim() !== '';
          break;
        case 'city':
          message = value.trim() !== '' ? '' : 'city is required!';
          bool = value.trim() !== '';
          break;
        case 'state':
          message = value.trim() !== '' ? '' : 'select valid state';
          bool = value.trim() !== '';
          break;
        case 'zip': {
          const zip = /^\d{6}$/.test(value);
          message = value.trim() !== ''
            ? zip
              ? ''
              : 'Invalid zip!'
            : 'zip is required!';
          bool = value.trim() !== '';
          break;
        }
        default:
        // empty
      }
      return message;
    };

    const errorMsg = getError();

    setErrorMessages((prev) => ({
      ...prev,
      [`${name}_error`]: errorMsg,
    }));
    return bool;
  };

  const onChangeHandler = (event) => {
    const { name, value } = event.target;
    setUserDetail((prev) => ({
      ...prev,
      [name]: value,
    }));
    handleValidation(name, value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const arr = [];
    Array.from(Object.keys(userDetail)).forEach((key) => {
      arr.push(handleValidation(key, userDetail[key]));
    });
    if (!arr.includes(false)) {
      setUsersData((prev) => [...prev, userDetail]);
      setCartData([]);
      setCurrentUser(userDetail);
      navigate('/Ecommerce/ordersuccesspage');
    }
  };

  return cartData.length > 0 ? (
    <div className="container checkout">
      <h1 className="checkout__order-summary-title">Order Summary</h1>
      <div className="checkout__order-summary">
        {cartData.map((cartItem) => (
          <Cartcard
            key={cartItem.sku}
            cartProduct={cartItem}
            cartData={cartData}
            setCartData={setCartData}
            setSubTotal={setSubTotal}
            setShippingCost={setShippingCost}
            setTotal={setTotal}
          />
        ))}
        <Cartsummary
          subTotal={subTotal}
          shippingCost={shippingCost}
          total={total}
        />
      </div>
      <h2 className="checkout__form-heading">Shipping Information</h2>
      <form
        className="row g-3 needs-validation checkout__form"
        onSubmit={(event) => handleSubmit(event)}
      >
        <div className="col-12">
          <FormInput
            label="First Name"
            type="text"
            id="firstName"
            name="firstname"
            placeholder="First Name"
            value={userDetail.firstname}
            onChangeHandler={onChangeHandler}
            handleValidation={handleValidation}
            errorMessage={errormessages.firstname_error}
          />
        </div>
        <div className="col-12">
          <FormInput
            label="Last Name"
            type="text"
            id="lastName"
            name="lastname"
            placeholder="Last Name"
            value={userDetail.lastname}
            onChangeHandler={onChangeHandler}
            handleValidation={handleValidation}
            errorMessage={errormessages.lastname_error}
          />
        </div>
        <div className="col-md-6">
          <FormInput
            label="Email"
            type="email"
            id="inputEmail"
            name="email"
            placeholder="name@example.com"
            value={userDetail.email}
            onChangeHandler={onChangeHandler}
            handleValidation={handleValidation}
            errorMessage={errormessages.email_error}
          />
        </div>
        <div className="col-md-6">
          <FormInput
            label="Contact No."
            type="tel"
            id="inputPhoneNumber"
            name="contact"
            placeholder="9534357326"
            value={userDetail.contact}
            onChangeHandler={onChangeHandler}
            handleValidation={handleValidation}
            errorMessage={errormessages.contact_error}
          />
        </div>
        <div className="col-12">
          <FormInput
            label="Address"
            type="text"
            id="inputAddress"
            name="address"
            placeholder="1234 Main St"
            value={userDetail.address}
            onChangeHandler={onChangeHandler}
            handleValidation={handleValidation}
            errorMessage={errormessages.address_error}
          />
        </div>
        <div className="col-12">
          <FormInput
            label="Address 2"
            type="text"
            id="inputAddress2"
            name="address2"
            placeholder="Apartment, studio, or floor"
            value={userDetail.address2}
            onChangeHandler={onChangeHandler}
            handleValidation={handleValidation}
            errorMessage={errormessages.address2_error}
          />
        </div>
        <div className="col-md-6">
          <FormInput
            label="City"
            type="text"
            id="inputCity"
            name="city"
            placeholder="surat"
            value={userDetail.city}
            onChangeHandler={onChangeHandler}
            handleValidation={handleValidation}
            errorMessage={errormessages.city_error}
          />
        </div>
        <div className="col-md-4">
          <label htmlFor="inputState" className="form-label">
            State
          </label>
          <select
            id="inputState"
            name="state"
            className="form-select"
            value={userDetail.state}
            onChange={(event) => onChangeHandler(event)}
            onBlur={(event) => handleValidation(event.target.name, event.target.value)}
          >
            <option value="">choose a state</option>
            <option value="gujrat">gujrat</option>
            <option value="rajsthan">rajsthan</option>
            <option value="maharastra">maharastra</option>
            <option value="goa">goa</option>
            <option value="chandigarh">chandigarh</option>
          </select>
          <div className="checkout__validation-feedback">
            {errormessages.state_error}
          </div>
        </div>
        <div className="col-md-2">
          <FormInput
            label="Zip Code"
            type="text"
            id="inputZip"
            name="zip"
            placeholder="364710"
            value={userDetail.zip}
            onChangeHandler={onChangeHandler}
            handleValidation={handleValidation}
            errorMessage={errormessages.zip_error}
          />
        </div>
        <div className="col-12 my-5">
          <button type="submit" className="btn btn-primary col-12">
            Place Order
          </button>
        </div>
      </form>
    </div>
  ) : (
    <h1 className="container d-flex flex-column flex-md-row justify-content-center text-center checkout__message">
      <span>Your Cart is Empty.</span>
      <Link to="/Ecommerce/">Explore Products</Link>
    </h1>
  );
}

Checkoutpage.propTypes = {
  subTotal: PropTypes.number,
  shippingCost: PropTypes.number,
  total: PropTypes.number,
  cartData: PropTypes.oneOfType([PropTypes.array]),
  usersData: PropTypes.oneOfType([PropTypes.array]),
  setSubTotal: PropTypes.func,
  setShippingCost: PropTypes.func,
  setTotal: PropTypes.func,
  setUsersData: PropTypes.func,
  setCartData: PropTypes.func,
  setCurrentUser: PropTypes.func,
};

Checkoutpage.defaultProps = {
  subTotal: 0,
  shippingCost: 0,
  total: 0,
  cartData: [],
  usersData: [],
  setSubTotal: null,
  setShippingCost: null,
  setTotal: null,
  setUsersData: null,
  setCartData: null,
  setCurrentUser: null,
};

export default Checkoutpage;
