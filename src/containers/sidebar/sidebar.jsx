import { React, useEffect, useState } from 'react';
import PropTypes from 'prop-types';

import { Accordion, Checkbox, Details } from '../../components/components';

import './sidebar.scss';

function Sidebar({
  categories, generateCategoriesQuery, url, handleFilters,
}) {
  const initialState = [
    {
      value: 'regularPrice>0&regularPrice<=10',
      id: 'price1',
      label: '$0 - $10',
      status: false,
    },
    {
      value: 'regularPrice>=10&regularPrice<=100',
      id: 'price2',
      label: '$10 - $100',
      status: false,
    },
    {
      value: 'regularPrice>=100&regularPrice<=1000',
      id: 'price3',
      label: '$100 - $1000',
      status: false,
    },
    {
      value: 'regularPrice>=1000&regularPrice<=10000',
      id: 'price4',
      label: '$1000 - $10000',
      status: false,
    },
    {
      value: 'regularPrice>=10000',
      id: 'price5',
      label: '$10000 and Above',
      status: false,
    },
    {
      value: 'customerReviewAverage>=1',
      id: 'rating1',
      label: '⭐ & above',
      status: false,
    },
    {
      value: 'customerReviewAverage>=2',
      id: 'rating2',
      label: '⭐⭐ & above',
      status: false,
    },
    {
      value: 'customerReviewAverage>=3',
      id: 'rating3',
      label: '⭐⭐⭐ & above',
      status: false,
    },
    {
      value: 'customerReviewAverage>=4',
      id: 'rating4',
      label: '⭐⭐⭐⭐ & above',
      status: false,
    },
    {
      value: 'condition=new',
      id: 'price1',
      label: '$0 - $10',
      status: false,
    },
    {
      value: 'condition=refurbished',
      id: 'price2',
      label: '$10 - $100',
      status: false,
    },
    {
      value: 'condition=pre-owned',
      id: 'price3',
      label: '$100 - $1000',
      status: false,
    },
  ];

  const [checkboxArray, setCheckboxArray] = useState(initialState);
  const [isOpen, setIsOpen] = useState(false);
  const [movetoggler, setMoveToggler] = useState(false);

  useEffect(() => {
    setCheckboxArray(initialState);
  }, [url]);

  function handleToggle() {
    setIsOpen(!isOpen);
    setMoveToggler(!movetoggler);
  }

  return (
    <div>
      <div className={`sidebar ${isOpen ? 'opened' : ''}`}>
        <button type="button" className="sidebar__stores-btn">
          Stores
        </button>
        <div className="sidebar__accordion-container sidebar__details-container">
          <Details title="All Categories" open>
            {categories
              && categories
                .map((category) => (
                  <Details key={category.id} title={category.name} open={false}>
                    <div>
                      {category.subCategories.map((subCategory) => (
                        <div
                          role="button"
                          tabIndex={0}
                          className="sidebar__subcategories"
                          key={subCategory.id}
                          onClick={() => generateCategoriesQuery(subCategory.id)}
                          onKeyUp={() => {}} // fix required
                        >
                          {subCategory.name}
                        </div>
                      ))}
                    </div>
                  </Details>
                ))
                .slice(0, 10)}
          </Details>
        </div>
        <div className="accordion_container">
          <Accordion
            accordionTitle="PRICE"
            accordionId="firstAccordion"
            bodyId="collapseFirst"
          >
            {checkboxArray.slice(0, 5).map((element) => (
              <Checkbox
                key={element.id}
                value={element.value}
                id={element.id}
                label={element.label}
                status={element.status}
                handleFilters={handleFilters}
                name="price"
                checkboxArray={checkboxArray}
                setCheckboxArray={setCheckboxArray}
              />
            ))}
          </Accordion>
        </div>

        <div className="accordion_container">
          <Accordion
            accordionTitle="CUSTOMER RATINGS"
            accordionId="secondAccordion"
            bodyId="collapseSecond"
          >
            {checkboxArray.slice(5, 9).map((element) => (
              <Checkbox
                key={element.id}
                value={element.value}
                id={element.id}
                label={element.label}
                status={element.status}
                handleFilters={handleFilters}
                name="ratings"
                checkboxArray={checkboxArray}
                setCheckboxArray={setCheckboxArray}
              />
            ))}
          </Accordion>
        </div>
      </div>
      <button
        type="button"
        id="sidebar__toggaleButton"
        className={movetoggler ? 'move' : ''}
        onClick={handleToggle}
      >
        {isOpen ? '❮' : '❯'}
      </button>
    </div>
  );
}
Sidebar.propTypes = {
  categories: PropTypes.oneOfType([PropTypes.array, PropTypes.any]),
  generateCategoriesQuery: PropTypes.func,
  url: PropTypes.string,
  handleFilters: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
};

Sidebar.defaultProps = {
  categories: [],
  generateCategoriesQuery: null,
  url: '',
  handleFilters: {},
};

export default Sidebar;
