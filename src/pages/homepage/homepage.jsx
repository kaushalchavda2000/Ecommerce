/* eslint-disable no-nested-ternary */
import React, { useEffect, useState } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import PropTypes from 'prop-types';

import { Navbar, MainContent } from '../../components/components';
import { Sidebar } from '../../containers/containers';

import './homepage.scss';

function Homepage({
  MY_API_KEY, url, setUrl, products, setProducts,
}) {
  const [categories, setCategories] = useState([]);
  const [cursorMark, setCursorMark] = useState('*');
  const [filters, setFilters] = useState({
    price: [],
    ratings: [],
  });
  const [filterString, setFilterString] = useState('');
  const [sortBy, setSortBy] = useState('');
  const [showSpinner, setShowSpinner] = useState(false);

  const productsAPI = `https://api.bestbuy.com/v1/products${
    url === ''
      ? filterString === ''
        ? ''
        : `(${filterString})`
      : filterString === ''
        ? `(${url})`
        : `(${url}&${filterString})`
  }?format=json&pageSize=5&cursorMark=*&show=all${sortBy}&apiKey=${MY_API_KEY}`;
  const productsAPI2 = `https://api.bestbuy.com/v1/products${
    url === ''
      ? filterString === ''
        ? ''
        : `(${filterString})`
      : filterString === ''
        ? `(${url})`
        : `(${url}&${filterString})`
  }?format=json&pageSize=5&cursorMark=${cursorMark}&show=all${sortBy}&apiKey=${MY_API_KEY}`;
  const categoriesAPI = `https://api.bestbuy.com/v1/categories?format=json&show=all&pageSize=20&apiKey=${MY_API_KEY}`;

  useEffect(() => {
    const getCategories = async () => {
      try {
        const response = await fetch(categoriesAPI);
        const data = await response.json();
        setCategories(data.categories);
      } catch (error) {
        // empty
      }
    };
    getCategories();
  }, [categoriesAPI]);

  useEffect(() => {
    let newFilterString = '';
    const arr = [];
    const keyArray = Object.keys(filters);
    keyArray.forEach((key) => {
      if (filters[key].length !== 0) {
        arr.push(filters[key]);
      }
    });
    if (arr.length !== 0) {
      const newArr = arr.map((element) => `(${element.join('|')})`);
      newFilterString = newArr.join('&');
    }
    setFilterString(newFilterString);
  }, [filters]);

  useEffect(() => {
    setFilters({
      price: [],
      ratings: [],
    });
    setSortBy('');
  }, [url]);

  const getProducts = async (currentAPI, loadmore) => {
    try {
      setShowSpinner(true);
      const response = await fetch(currentAPI);
      const data = await response.json();
      setCursorMark(data.nextCursorMark);
      if (loadmore) {
        setProducts((prev) => [...prev, ...data.products]);
      } else {
        setProducts([...data.products]);
      }
      setShowSpinner(false);
    } catch (error) {
      setShowSpinner(false);
    }
  };

  useEffect(() => {
    setCursorMark('*');
    getProducts(productsAPI, false);
  }, [url, sortBy, filterString]);

  const generateCategoriesQuery = (id) => {
    const searchUrl = `categoryPath.id=${id}`;
    setUrl(searchUrl);
  };

  const handleFilters = (condition, name) => {
    if (filters[name].includes(condition)) {
      const arr = filters[name].filter((element) => condition !== element);
      setFilters((prev) => ({ ...prev, [name]: arr }));
    } else {
      const arr = [...filters[name], condition];
      setFilters((prev) => ({ ...prev, [name]: arr }));
    }
  };

  const sortProducts = (attribute, order) => {
    if (order === 'asc') {
      setSortBy(`&sort=${attribute}.asc`);
    } else {
      setSortBy(`&sort=${attribute}.dsc`);
    }
  };

  return (
    <div className="homepage">
      <Navbar
        categories={categories}
        generateCategoriesQuery={generateCategoriesQuery}
      />
      <div className="container-fluid p-0 d-flex justify-content-center">
        <div className="homepage__grid-container">
          <Sidebar
            categories={categories}
            generateCategoriesQuery={generateCategoriesQuery}
            url={url}
            handleFilters={handleFilters}
          />

          <InfiniteScroll
            dataLength={Date.now()}
            next={() => {
              if (!showSpinner) {
                getProducts(productsAPI2, true);
              }
            }}
            hasMore
            scrollThreshold="0px"
          >
            <MainContent
              products={products}
              sortProducts={sortProducts}
              showSpinner={showSpinner}
              getProducts={getProducts}
              productsAPI={productsAPI}
            />
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
}

Homepage.propTypes = {
  MY_API_KEY: PropTypes.string,
  url: PropTypes.string,
  setUrl: PropTypes.func,
  products: PropTypes.oneOfType([PropTypes.array]),
  setProducts: PropTypes.func,
  // setSearchQuery: PropTypes.func,
};

Homepage.defaultProps = {
  MY_API_KEY: '0Q75AAetcE7MZUKyrAG9DVI7',
  url: '',
  setUrl: null,
  products: [],
  setProducts: null,
  // setSearchQuery: null,
};

export default Homepage;
