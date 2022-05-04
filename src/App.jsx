import React, { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';

import {
  Homepage,
  Productdetailpage,
  Cart,
  Checkoutpage,
  Ordersuccesspage,
} from './pages/pages';
import { Appbar } from './components/components';

import './App.scss';

const MY_API_KEY = '0Q75AAetcE7MZUKyrAG9DVI7';

function App() {
  const [products, setProducts] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [url, setUrl] = useState('');
  const [cartProduct, setCartProduct] = useState({});
  const [cartData, setCartData] = useState([]);
  const [subTotal, setSubTotal] = useState(0);
  const [shippingCost, setShippingCost] = useState(0);
  const [total, setTotal] = useState(0);
  const [usersData, setUsersData] = useState([]);
  const [currentUser, setCurrentUser] = useState({});

  useEffect(() => {
    const retrivedCartData = JSON.parse(localStorage.getItem('cartData'));
    if (retrivedCartData) {
      setCartData(retrivedCartData);
    }
    const retrivedUsersData = JSON.parse(localStorage.getItem('usersData'));
    if (retrivedUsersData) {
      setUsersData(retrivedUsersData);
    }
  }, []);

  useEffect(() => {
    if (cartData) {
      localStorage.setItem('cartData', JSON.stringify(cartData));
    }
  }, [cartData]);

  useEffect(() => {
    if (usersData) {
      localStorage.setItem('usersData', JSON.stringify(usersData));
    }
  }, [usersData]);

  const generateQuery = () => {
    if (searchQuery !== '') {
      const arr = searchQuery.split(' ').map((word) => `search=${word}`);
      const searchUrl = arr.join('&');
      setUrl(searchUrl);
    }
  };

  return (
    <div className="App">
      <Appbar
        setSearchQuery={setSearchQuery}
        generateQuery={generateQuery}
        setProducts={setProducts}
      />
      <Routes>
        <Route
          exact
          path="/Ecommerce/*"
          element={(
            <Homepage
              MY_API_KEY={MY_API_KEY}
              url={url}
              setUrl={setUrl}
              products={products}
              setProducts={setProducts}
            />
          )}
        />

        <Route
          exact
          path="/Ecommerce/productdetails/:productId"
          element={(
            <Productdetailpage
              MY_API_KEY={MY_API_KEY}
              setCartProduct={setCartProduct}
            />
          )}
        />

        <Route
          exact
          path="/Ecommerce/cart"
          element={(
            <Cart
              cartProduct={
                Object.keys(cartProduct).length !== 0 && {
                  sku: cartProduct.sku,
                  name: cartProduct.name,
                  link: cartProduct.images[0].href,
                  review: cartProduct.customerReviewAverage,
                  reviewCount: cartProduct.customerReviewCount,
                  price: cartProduct.regularPrice,
                  quantity: 1,
                  shippingCost:
                    cartProduct.shippingCost === ''
                      ? 3.99
                      : cartProduct.shippingCost,
                }
              }
              setCartProduct={setCartProduct}
              subTotal={subTotal}
              shippingCost={shippingCost}
              total={total}
              cartData={cartData}
              setSubTotal={setSubTotal}
              setShippingCost={setShippingCost}
              setTotal={setTotal}
              setCartData={setCartData}
            />
          )}
        />

        <Route
          exact
          path="/Ecommerce/checkout"
          element={(
            <Checkoutpage
              setCartProduct={setCartProduct}
              subTotal={subTotal}
              shippingCost={shippingCost}
              total={total}
              cartData={cartData}
              usersData={usersData}
              setSubTotal={setSubTotal}
              setShippingCost={setShippingCost}
              setTotal={setTotal}
              setCartData={setCartData}
              setUsersData={setUsersData}
              setCurrentUser={setCurrentUser}
            />
          )}
        />

        <Route
          exact
          path="/Ecommerce/ordersuccesspage"
          element={(
            <Ordersuccesspage
              currentUser={currentUser}
              subTotal={subTotal}
              shippingCost={shippingCost}
              total={total}
            />
          )}
        />
      </Routes>
    </div>
  );
}

export default App;
