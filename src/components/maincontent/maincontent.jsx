import React from "react";

import Dropdown from "../dropdown/dropdown";
import Dropdownitem from "../dropdownItem/dropdownitem";
import Card from "../card/card";
// import image from "./../../assets/team-2.jpg";

import "./maincontent.scss";

const MainContent = ({ products }) => {
  return (
    <div className="main_content">
      <div className="bg_container">
        <div className="dropdowns d-flex flex-wrap">
          <span className="dropdown_wrapper ps-3 pt-3 ps-sm-3 pe-sm-2">
            <Dropdown
              dropdownTitle="Useless First"
              dropdownMenuButtonId="first"
            >
              <Dropdownitem link="#" title="first item" />
              <Dropdownitem link="#" title="second" />
              <Dropdownitem link="#" title="third item" />
              <Dropdownitem link="#" title="fourth" />
            </Dropdown>
          </span>
          <span className="dropdown_wrapper ps-3 pt-3 px-sm-2">
            <Dropdown dropdownTitle="Condition" dropdownMenuButtonId="second">
              <Dropdownitem link="#" title="first item" />
              <Dropdownitem link="#" title="second" />
              <Dropdownitem link="#" title="third item" />
              <Dropdownitem link="#" title="fourth" />
            </Dropdown>
          </span>
          <span className="dropdown_wrapper ps-3 pt-3 ps-sm-2">
            <Dropdown
              dropdownTitle="Delivery Options"
              dropdownMenuButtonId="third"
            >
              <Dropdownitem link="#" title="first item" />
              <Dropdownitem link="#" title="second" />
              <Dropdownitem link="#" title="third item" />
              <Dropdownitem link="#" title="fourth" />
            </Dropdown>
          </span>
        </div>
        <div className="cards_container">
          {products.map((product) => {
            return (
              <Card key={product.sku}
                productImageURL={product.images[0].href}
                productText={product.name}
                price={`$ ${product.regularPrice}`}
                additionalText="Shipping is free"
                rating="5.00"
              />
            );
          })}
          {/* <Card
            productImageURL={image}
            productText="Hello i am a new product. i am very unique.you can buy me."
            price="$49.50"
            additionalText="Shipping is free"
            rating="5.00"
          />
          <Card
            productImageURL={image}
            productText="Hello i am a new product. i am very unique.you can buy me."
            price="$49.50"
            additionalText="Shipping is free"
            rating="5.00"
          />
          <Card
            productImageURL={image}
            productText="Hello i am a new product. i am very unique.you can buy me."
            price="$49.50"
            additionalText="Shipping is free"
            rating="5.00"
          />
          <Card
            productImageURL={image}
            productText="Hello i am a new product. i am very unique.you can buy me."
            price="$49.50"
            additionalText="Shipping is free"
            rating="5.00"
          />
          <Card
            productImageURL={image}
            productText="Hello i am a new product. i am very unique.you can buy me."
            price="$49.50"
            additionalText="Shipping is free"
            rating="5.00"
          />
          <Card
            productImageURL={image}
            productText="Hello i am a new product. i am very unique.you can buy me."
            price="$49.50"
            additionalText="Shipping is free"
            rating="5.00"
          />
          <Card
            productImageURL={image}
            productText="Hello i am a new product. i am very unique.you can buy me."
            price="$49.50"
            additionalText="Shipping is free"
            rating="5.00"
          />
          <Card
            productImageURL={image}
            productText="Hello i am a new product. i am very unique.you can buy me."
            price="$49.50"
            additionalText="Shipping is free"
            rating="5.00"
          />
          <Card
            productImageURL={image}
            productText="Hello i am a new product. i am very unique.you can buy me."
            price="$49.50"
            additionalText="Shipping is free"
            rating="5.00"
          />
          <Card
            productImageURL={image}
            productText="Hello i am a new product. i am very unique.you can buy me."
            price="$49.50"
            additionalText="Shipping is free"
            rating="5.00"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default MainContent;
