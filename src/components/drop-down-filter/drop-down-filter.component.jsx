import React from "react";
import { AiOutlineDown } from "react-icons/ai";
import "./drop-down-filter.style.scss";
import PropTypes from "proptypes";

export default function DropDownFilter(props) {
  const { filters, onChecked, text } = props;
  return (
    <div className="drop-down">
      <button type="button" className="drop-down-button">
        {text}
        <div className="drop-down-icon">
          <AiOutlineDown />
        </div>
      </button>
      <ul className="filter-checks">
        {filters &&
          Object.keys(filters).map((li) => {
            return (
              <div key={li} className="check-item">
                <input
                  type="radio"
                  name={text}
                  value={li}
                  id={li}
                  onChange={(e) => onChecked(e, li)}
                />
                <label htmlFor={li}>{li}</label>
              </div>
            );
          })}
      </ul>
    </div>
  );
}
DropDownFilter.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  filters: PropTypes.array,
  onChecked: PropTypes.func,
  text: PropTypes.string.isRequired,
};
DropDownFilter.defaultProps = {
  filters: [],
  onChecked: () => {},
};
