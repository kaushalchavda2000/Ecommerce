import { React, useState } from "react";

import Accordion from "../accordion/accordion";
import Checkbox from "../checkbox/checkbox";
import Details from "../details/details";
// import Anchor from "../anchor/anchor";

import "./sidebar.scss";

const Sidebar = ({ categories, generateCategoriesQuery, handleFilters}) => {
  const [isOpen, SetIsOpen] = useState(false);

  function handleToggle() {
    SetIsOpen(!isOpen);
    console.log(isOpen);
  }

  return (
    <div className={`sidebar ${isOpen ? "opened" : ""}`}>
      <button id="toggaleButton" onClick={handleToggle}>
        {isOpen ? "❮" : "❯"}
      </button>
      <button className="stores">Stores</button>
      <div className="accordion_container details_container">
        <Details title="All Categories" open={true}>
          {/* <Details title="Electronics" open={true}>
            <div>
              <Details title="cell phone" open={true}>
                <div>
                  <Anchor link="#" text="samsung" />
                  <Anchor link="#" text="redmi" />
                  <Anchor link="#" text="one plus" />
                  <Anchor link="#" text="iPhone" />
                  <Anchor link="#" text="nokia" />
                </div>
              </Details>
              <Anchor link="#" text="air conditioner" />
              <Anchor link="#" text="fan" />
              <Anchor link="#" text="refrigerator" />
              <Anchor link="#" text="Tubelight" />
            </div>
          </Details>
          <Details title="Vehicles" open={false}>
            <div>
              <Anchor link="#" text="Bikes" />
              <Anchor link="#" text="Cars" />
              <Anchor link="#" text="Trucks" />
              <Anchor link="#" text="Cycles" />
              <Anchor link="#" text="Tripla" />
            </div>
          </Details>
          <Details title="Books" open={false}></Details>
          <Details title="Pharmacy" open={false}></Details>
          <Details title="Grocery" open={false}></Details>
          <Details title="Home" open={false}>
            <div>
              <Anchor link="#" text="Bikes" />
              <Anchor link="#" text="Cars" />
              <Anchor link="#" text="Trucks" />
              <Anchor link="#" text="Cycles" />
              <Anchor link="#" text="Tripla" />
            </div>
          </Details> */}
          {categories.map((category) => {
            return (
              <Details key={category.id} title={category.name} open={false}>
                <div>
                  {category.subCategories.map((subCategory) => {
                    return (
                      <div
                        key={subCategory.id}
                        onClick={() => generateCategoriesQuery(subCategory.id)}
                      >
                        {subCategory.name}
                      </div>
                    );
                  })}
                </div>
              </Details>
            );
          })}
        </Details>
      </div>
      <div className="accordion_container">
        <Accordion
          accordionTitle="Price"
          accordionId="firstAccordion"
          bodyId="collapseFirst"
        >
          <Checkbox value="regularPrice>0&regularPrice<=10" id="price1" label="$0 - $10"  handleFilters={handleFilters}/>
          <Checkbox value="regularPrice>=10&regularPrice<=100" id="price2" label="$10 - $100"  handleFilters={handleFilters}/>
          <Checkbox value="regularPrice>=100&regularPrice<=1000" id="price3" label="$100 - $1000"  handleFilters={handleFilters}/>
          <Checkbox value="regularPrice>=1000&regularPrice<=10000" id="price4" label="$1000 - $10000"  handleFilters={handleFilters}/>
          <Checkbox value="regularPrice>=10000" id="price5" label="$10000 and Above"  handleFilters={handleFilters}/>
          {/* <Checkbox value="High-Low" id="price6" label="$"  handleFilters={handleFilters}/> */}
        </Accordion>
      </div>

      <div className="accordion_container">
        <Accordion
          accordionTitle="Ratings"
          accordionId="secondAccordion"
          bodyId="collapseFirst"
        >
          <Checkbox value="customerReviewAverage>=1" id="rating1" label="⭐ & above"  handleFilters={handleFilters}/>
          <Checkbox value="customerReviewAverage>=2" id="rating2" label="⭐⭐ & above"  handleFilters={handleFilters}/>
          <Checkbox value="customerReviewAverage>=3" id="rating3" label="⭐⭐⭐ & above"  handleFilters={handleFilters}/>
          <Checkbox value="customerReviewAverage>=4" id="rating4" label="⭐⭐⭐⭐ & above"  handleFilters={handleFilters}/>
          {/* <Checkbox value="Low-High" id="rating5" label="⭐ & above" /> */}
          {/* <Checkbox value="High-Low" id="price6" label="$" /> */}
        </Accordion>
      </div>

      <div className="accordion_container">
        <Accordion
          accordionTitle="Manufacturing"
          accordionId="thirdAccordion"
          bodyId="collapseSecond"
        >
          <Checkbox value="Recommended" id="Checkbox1" label="Recommended" />
          <Checkbox
            value="Recently Added"
            id="Checkbox2"
            label="Recently Added"
          />
          <Checkbox
            value="Expiring Soon"
            id="Checkbox3"
            label="Expiring Soon"
          />
          <Checkbox value="Most rated" id="Checkbox4" label="Most rated" />
          <Checkbox value="Low-High" id="Checkbox5" label="Price: Low - High" />
          <Checkbox value="High-Low" id="Checkbox6" label="Price: High - Low" />
          <Checkbox value="Most rated" id="Checkbox4" label="Most rated" />
          <Checkbox value="Low-High" id="Checkbox5" label="Price: Low - High" />
          <Checkbox value="High-Low" id="Checkbox6" label="Price: High - Low" />
        </Accordion>
      </div>
    </div>
  );
};

export default Sidebar;
