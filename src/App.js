import { useEffect, useState } from "react";
// import InfiniteScroll from "react-infinite-scroller";

import Appbar from "./components/appbar/appbar";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import MainContent from "./components/maincontent/maincontent";

import "./App.scss";
// import { getValue } from "@testing-library/user-event/dist/utils";
//anchor component ne remove karvano chhe
//url change uper filters ne reset karvana chhe(Ui and state banne ma)
// 0Q75AAetcE7MZUKyrAG9DVI7
const MY_API_KEY = "0Q75AAetcE7MZUKyrAG9DVI7";
// images,name(plot),regularPrice,sku(id),thumbnailImage,rating show=sku,images,name,regularPrice

function App() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [cursorMark, setCursorMark] = useState("*");
  const [searchQuery, setSearchQuery] = useState("");
  const [url, setUrl] = useState("");
  const [loadmore, setLoadMore] = useState(false);
  const [shouldLoadData, setShouldLoadData] = useState(0);
  const [filters, setFilters] = useState([]); //"regularPrice>100"

  console.log(filters);

  // useEffect(() => {
  //   if (searchQuery !== "") {
  //     setSearchAndFilters((prev) => {
  //       return { ...prev, search: searchQuery };
  //     });
  //   }
  // }, [searchQuery]);

  // console.log(searchQuery, filters);
  // setSearchAndFilters(`(${{name:"kaushal",}})`)
  // const productsAPI = `https://api.bestbuy.com/v1/products(search=laptop)?format=json&pageSize=20&cursorMark=${cursorMark}&show=sku,images,name,regularPrice&apiKey=${MY_API_KEY}`;
  const productsAPI = `https://api.bestbuy.com/v1/products${url}?format=json&pageSize=5&cursorMark=${cursorMark}&show=all&apiKey=${MY_API_KEY}`;
  const categoriesAPI = `https://api.bestbuy.com/v1/categories?format=json&show=all&pageSize=10&apiKey=${MY_API_KEY}`;
  // const productsAPI = `https://api.bestbuy.com/v1/products(class=HOME%20FURNITURE)?format=json&pageSize=15&show=all&apiKey=0Q75AAetcE7MZUKyrAG9DVI7`;
  // console.log(cursorMark);
  // useEffect(() => {
  //   console.log(cursorMark);
  // }, [cursorMark]);

  useEffect(() => {
    // getProducts(productsAPI);
    getCategories();
    window.addEventListener("scroll", handleScroll);
  }, []);

  // useEffect(() => {
  //   console.log("cursermark changed", cursorMark);
  //   window.removeEventListener("scroll", () => handleScroll(cursorMark));
  //   window.addEventListener("scroll", () => handleScroll(cursorMark));
  // }, [cursorMark]);

  useEffect(() => {
    let newUrl = "";
    console.log(url, filters.length);
    if (filters.length !== 0) {
      if (url === "") {
        newUrl = `(${filters.join("&")})`;
      } else {
        console.log(" i am inside else part of filters.");
        newUrl = `${url.slice(0, url.length - 1)}&${filters.join("&")})`;
      }
    }
    setUrl(newUrl);
  }, [filters]);

  useEffect(() => {
    getProducts(productsAPI);
  }, [url, shouldLoadData]);

  const getProducts = async (currentAPI) => {
    console.log("inside get products", currentAPI);
    try {
      const response = await fetch(currentAPI);
      const data = await response.json();
      console.log("new", data);
      setCursorMark(data.nextCursorMark);
      console.log(loadmore);
      if (loadmore) {
        setProducts((prev) => [...prev, ...data.products]);
        setLoadMore(false);
      } else {
        setProducts([...data.products]);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const getCategories = async () => {
    try {
      const response = await fetch(categoriesAPI);
      const data = await response.json();
      console.log("new", data);
      // setCursorMark(data.nextCursorMark);
      // console.log(loadmore);
      setCategories(data.categories);
    } catch (error) {
      console.log(error);
    }
  };
  // console.log("new", categories);
  // useEffect()

  // const getQueryResults = () => {
  //   const filterKeys = Object.keys(filters);
  //   if (searchQuery !== "") {
  //     setUrl(`(search=${searchQuery}`);
  //     if (filterKeys.length !== 0) {
  //       filterKeys.map((filter) => {
  //         setUrl((prev) => prev.concat(`&${filter}>${filters[filter]}`));
  //         return;
  //       });
  //       setUrl((prev) => prev.concat(")"));
  //     } else {
  //       setUrl((prev) => prev.concat(")"));
  //     }
  //   } else {
  //     if (filterKeys.length !== 0) {
  //       const str = filterKeys
  //         .map((filter) => {
  //           return `${filter}>${filters[filter]}`;
  //         })
  //         .join("&");
  //       setUrl(`(${str})`);
  //     }

  //     // const searchURL = `https://api.bestbuy.com/v1/products(search=${searchQuery})?format=json&show=all&apiKey=0Q75AAetcE7MZUKyrAG9DVI7`

  //     // const filterAPI = `https://api.bestbuy.com/v1/products(search=${searchQuery}&${price}>=4 &customerReviewAverage>=)?format=json&show=all&apiKey=0Q75AAetcE7MZUKyrAG9DVI7`
  //   }
  //   getProducts(productsAPI);
  //   console.log(productsAPI);
  // };

  // const generateQuery = () => {
  //   console.log(searchQuery);
  //   let searchUrl = "";
  //   if (searchQuery !== "") {
  //     searchUrl = `(search=${searchQuery}`;
  //     if (filters.length !== 0) {
  //       filters.map((filter) => {
  //         searchUrl += `&${filter}`;
  //         return true;
  //       });
  //       searchUrl += ")";
  //     } else {
  //       searchUrl += ")";
  //     }
  //   } else {
  //     if (filters.length !== 0) {
  //       searchUrl = `(${filters.join("&")})`;
  //     }

  //     // const searchURL = `https://api.bestbuy.com/v1/products(search=${searchQuery})?format=json&show=all&apiKey=0Q75AAetcE7MZUKyrAG9DVI7`

  //     // const filterAPI = `https://api.bestbuy.com/v1/products(search=${searchQuery}&${price}>=4 &customerReviewAverage>=)?format=json&show=all&apiKey=0Q75AAetcE7MZUKyrAG9DVI7`
  //   }
  //   // setLoadMore(false);
  //   setUrl(searchUrl);
  //   // console.log(searchUrl);
  // };

  const generateQuery = () => {
    console.log(searchQuery);
    // let searchUrl = "";
    if (searchQuery !== "") {
      const searchUrl = `(search=${searchQuery})`;
      setUrl(searchUrl);
    }
    // console.log(searchUrl);
  };

  // const generateCategoriesQuery = (id) => {
  //   // console.log(searchQuery);
  //   let searchUrl = "";
  //   // if (searchQuery !== "") {
  //   searchUrl = `(categoryPath.id=${id}`;
  //   if (filters.length !== 0) {
  //     filters.map((filter) => {
  //       searchUrl += `&${filter}`;
  //       return true;
  //     });
  //     searchUrl += ")";
  //   } else {
  //     searchUrl += ")";
  //   }
  //   // }
  //   //  else {
  //   //   if (filters.length !== 0) {
  //   //     searchUrl = `(${filters.join("&")})`;
  //   //   }

  //   // const searchURL = `https://api.bestbuy.com/v1/products(search=${searchQuery})?format=json&show=all&apiKey=0Q75AAetcE7MZUKyrAG9DVI7`

  //   // const filterAPI = `https://api.bestbuy.com/v1/products(search=${searchQuery}&${price}>=4 &customerReviewAverage>=)?format=json&show=all&apiKey=0Q75AAetcE7MZUKyrAG9DVI7`

  //   // setLoadMore(false);
  //   setUrl(searchUrl);
  //   console.log(searchUrl);
  // };

  const generateCategoriesQuery = (id) => {
    // console.log(searchQuery);
    // if (searchQuery !== "") {
    const searchUrl = `(categoryPath.id=${id})`;
    setUrl(searchUrl);
    console.log(searchUrl);
  };

  // const getQueryResults = () => {
  //   // const filterKeys = Object.keys(filters);
  //   if (searchQuery !== "") {
  //     setUrl(`(search=${searchQuery}`);
  //     // console.log(productsAPI);
  //   }
  // };

  console.log(url);
  // const u = ""
  // for (const property in searchAndFilters.filters) {
  //   console.log(`${property}=${searchAndFilters.filters[property]}`);
  // }

  // https://api.bestbuy.com/v1/products(search=oven&search=stainless&search=steel)

  // console.log(products, cursorMark);
  const handleScroll = () => {
    // window.innerHeight + window.pageYOffset >= document.body.offsetHeight;
    if (
      window.innerHeight + document.documentElement.scrollTop ===
      document.scrollingElement.scrollHeight
    ) {
      // console.log("inside hangle scroll is called.", cursorMark);
      // console.log(cursorMark);
      setShouldLoadData((prev) => prev + 1);
      setLoadMore(true);
      // getProducts(productsAPI);
    }
  };

  const handleFilters = (condition) => {
    if (filters.includes(condition)) {
      const arr = filters.filter((element) => {
        return condition !== element;
      });
      setFilters(arr);
    } else {
      setFilters((prev) => [...prev, condition]);
    }
  };

  console.log(loadmore);

  return (
    <div className="App">
      <Appbar setSearchQuery={setSearchQuery} generateQuery={generateQuery} />
      <Navbar generateQuery={generateQuery} setSearchQuery={setSearchQuery} />
      <div className="container-fluid p-0 d-flex justify-content-center">
        <div className="grid_container">
          <Sidebar
            categories={categories}
            generateCategoriesQuery={generateCategoriesQuery}
            handleFilters={handleFilters}
          />
          {/* <InfiniteScroll
            pageStart={0}
            loadMore={() => {
              setLoadMore(true);
              getProducts(productsAPI);
            }}
            hasMore={true}
          > */}
          <MainContent products={products} />
          {/* </InfiniteScroll> */}
        </div>
      </div>
    </div>
  );
}

export default App;
