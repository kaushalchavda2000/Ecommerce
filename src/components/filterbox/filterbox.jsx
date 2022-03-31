import React from "react";

import "./filterbox.scss";

const Filterbox = () => {
  return (
    <div className="filterbox">
      <details>
        <summary className="caption">Filters</summary>
        <div className="filters">
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="Check1"
            />
            <label class="form-check-label" for="Check1">
              Recommended
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="Check2"
            />
            <label class="form-check-label" for="Check2">
              Recently Added
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="Check3"
            />
            <label class="form-check-label" for="Check3">
              Expiring Soon
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="Check4"
            />
            <label class="form-check-label" for="Check4">
              Most rated
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="Check5"
            />
            <label class="form-check-label" for="Check5">
              Price: Low - High
            </label>
          </div>
          <div class="form-check">
            <input
              class="form-check-input"
              type="checkbox"
              value=""
              id="Check6"
            />
            <label class="form-check-label" for="Check6">
              Price: High - Low
            </label>
          </div>
        </div>
      </details>
    </div>
  );
};

export default Filterbox;
