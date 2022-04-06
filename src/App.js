import { useEffect, useState } from "react";
import InfiniteScroll from "react-infinite-scroller";

import Appbar from "./components/appbar/appbar";
import Navbar from "./components/navbar/navbar";
import Sidebar from "./components/sidebar/sidebar";
import MainContent from "./components/maincontent/maincontent";

import "./App.scss";
// 0Q75AAetcE7MZUKyrAG9DVI7
const MY_API_KEY = "0Q75AAetcE7MZUKyrAG9DVI7";
// images,name(plot),regularPrice,sku(id),thumbnailImage,rating show=sku,images,name,regularPrice

function App() {
  const [products, setProducts] = useState([]);
  const [cursorMark, setCursorMark] = useState("*");
  const [searchQuery, setSearchQuery] = useState("");
  const [url, setUrl] = useState("");
  const [filters, setFilters] = useState(["regularPrice>100", "new=true"]);

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
  // console.log(cursorMark);
  // useEffect(() => {
  //   console.log(cursorMark);
  // }, [cursorMark]);

  // useEffect(() => {
  //   getProducts(productsAPI);
  //   // window.addEventListener("scroll", () => handleScroll(cursorMark));
  // }, []);

  // useEffect(() => {
  //   console.log("cursermark changed", cursorMark);
  //   window.removeEventListener("scroll", () => handleScroll(cursorMark));
  //   window.addEventListener("scroll", () => handleScroll(cursorMark));
  // }, [cursorMark]);

  useEffect(() => {
    getProducts(productsAPI);
  }, [url]);

  const getProducts = async (currentAPI) => {
    console.log("inside get products", currentAPI);
    try {
      const response = await fetch(currentAPI);
      const data = await response.json();
      console.log("new", data);
      setCursorMark(data.nextCursorMark);
      setProducts((prev) => [...prev, ...data.products])
    } catch (error) {
      console.log(error);
    }
  };

  console.log("new", cursorMark);
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

  const getQueryResults = () => {
    let searchUrl = "";
    if (searchQuery !== "") {
      searchUrl = `(search=${searchQuery}`;
      if (filters.length !== 0) {
        filters.map((filter) => {
          searchUrl += `&${filter}`;
          return true;
        });
        searchUrl += ")";
      } else {
        searchUrl += ")";
      }
    } else {
      if (filters.length !== 0) {
        searchUrl = filters.join("&");
      }

      // const searchURL = `https://api.bestbuy.com/v1/products(search=${searchQuery})?format=json&show=all&apiKey=0Q75AAetcE7MZUKyrAG9DVI7`

      // const filterAPI = `https://api.bestbuy.com/v1/products(search=${searchQuery}&${price}>=4 &customerReviewAverage>=)?format=json&show=all&apiKey=0Q75AAetcE7MZUKyrAG9DVI7`
    }
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
  // let handleScroll = (cursorMark) => {
  //   if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
  //     console.log("inside hangle scroll is called.", cursorMark);
  //     // console.log(cursorMark);
  //     getProducts(cursorMark);
  //   }
  // };

  return (
    <div className="App">
      <Appbar
        setSearchQuery={setSearchQuery}
        getQueryResults={getQueryResults}
      />
      <Navbar />
      <div className="container-fluid p-0 d-flex justify-content-center">
        <div className="grid_container">
          <Sidebar />
          <InfiniteScroll
            pageStart={0}
            loadMore={() => getProducts(productsAPI)}
            hasMore={true}
          >
            <MainContent products={products} />
          </InfiniteScroll>
        </div>
      </div>
    </div>
  );
}

export default App;
