import { useEffect, useState } from "react";
import InfiniteScroll from 'react-infinite-scroller';

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
  // console.log(cursorMark);
  // useEffect(() => {
  //   console.log(cursorMark);
  // }, [cursorMark]);

  useEffect(() => {
    getProducts();
    // window.addEventListener("scroll", () => handleScroll(cursorMark));
  }, []);

  // useEffect(() => {
  //   console.log("cursermark changed", cursorMark);
  //   window.removeEventListener("scroll", () => handleScroll(cursorMark));
  //   window.addEventListener("scroll", () => handleScroll(cursorMark));
  // }, [cursorMark]);

  const getProducts = async (page) => {
    try {
      const response = await fetch(
        `https://api.bestbuy.com/v1/products?format=json&pageSize=5&cursorMark=${cursorMark}&show=sku,images,name,regularPrice&apiKey=${MY_API_KEY}`
      );
      const data = await response.json();
      setCursorMark(data.nextCursorMark);
      setProducts((prev) => [...prev, ...data.products]);
    } catch (error) {
      console.log(error);
    }
  };

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
      <Appbar />
      <Navbar />
      <div className="container-fluid p-0 d-flex justify-content-center">
        <div className="grid_container">
          <Sidebar />
          <InfiniteScroll
            pageStart={0}
            loadMore={getProducts}
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
