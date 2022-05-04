import { React } from 'react';
import PropTypes from 'prop-types';

import { Card } from '../components';

import './recentproducts.scss';

function Recentproducts({ recommendations }) {
  return (
    <div className="recent-products">
      <div className="recent-products__title">YOU MAY ALSO LIKE...</div>
      <div className="recent-products__container">
        {recommendations.map((product) => (
          <Card
            key={product.sku}
            sku={product.sku}
            link={product.images.standard}
            name={product.names.title}
            price={product.prices.regular}
            rating={product.customerReviews.averageScore || 0}
          />
        ))}
      </div>
    </div>
  );
}

Recentproducts.propTypes = {
  recommendations: PropTypes.oneOfType([PropTypes.array]),
};

Recentproducts.defaultProps = {
  recommendations: null,
};

export default Recentproducts;
