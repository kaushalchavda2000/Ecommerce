import React from 'react';
import { useNavigate } from 'react-router-dom';
import PropTypes from 'prop-types';

import './category.scss';

function Category({ id, caption, generateCategoriesQuery }) {
  const navigate = useNavigate();

  return (
    <li
      style={{ cursor: 'pointer' }}
      role="presentation"
      className="nav-item"
      onClick={() => {
        generateCategoriesQuery(id);
        navigate(`/category/${id}`);
      }}
      onKeyUp={() => {}} // fix required
    >
      <div className="category">
        <i
          className="category__icon fa fa-video-camera pt-2"
          aria-hidden="true"
        />
        <span className="category__caption p-1 px-3">{caption}</span>
      </div>
    </li>
  );
}

Category.propTypes = {
  id: PropTypes.string,
  caption: PropTypes.string,
  generateCategoriesQuery: PropTypes.func,
};

Category.defaultProps = {
  id: '',
  caption: '',
  generateCategoriesQuery: null,
};

export default Category;
