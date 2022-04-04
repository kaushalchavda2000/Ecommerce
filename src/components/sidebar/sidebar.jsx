import { React, useState } from "react";

import Accordion from "../accordion/accordion";
import Checkbox from "../checkbox/checkbox";
import Details from "../details/details";
import Anchor from "../anchor/anchor";

import "./sidebar.scss";

const Sidebar = () => {
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
          <Details title="Electronics" open={true}>
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
          </Details>
        </Details>
      </div>
      <div className="accordion_container">
        <Accordion
          accordionTitle="Filters"
          accordionId="firstAccordion"
          bodyId="collapseFirst"
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
        </Accordion>
      </div>

      <div className="accordion_container">
        <Accordion
          accordionTitle="Manufacturing"
          accordionId="secondAccordion"
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
