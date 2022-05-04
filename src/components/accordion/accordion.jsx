import React from 'react';
import PropTypes from 'prop-types';

import './accordion.scss';

function Accordion({
  children, accordionTitle, accordionId, bodyId,
}) {
  return (
    <div>
      <div className="accordion accordionExample" id={accordionId}>
        <div className="accordion-item">
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button accordian__title py-0"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target={`#${bodyId}`}
              aria-expanded="true"
              aria-controls={bodyId}
            >
              {accordionTitle}
            </button>
          </h2>
          <div
            id={bodyId}
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent={`#${accordionId}`}
          >
            <div className="accordion-body p-0">{children}</div>
          </div>
        </div>
      </div>
    </div>
  );
}

Accordion.propTypes = {
  children: PropTypes.oneOfType([PropTypes.array]),
  accordionTitle: PropTypes.string,
  accordionId: PropTypes.string,
  bodyId: PropTypes.string,
};

Accordion.defaultProps = {
  children: null,
  accordionTitle: '',
  accordionId: '',
  bodyId: '',
};

export default Accordion;
