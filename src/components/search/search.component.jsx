import React from "react";
import PropTypes from "proptypes";
import data from "../../data/data.json";
import "./search.style.scss";

export default function Search(props) {
  const { value, onChangeHandler } = props;
  const { placeholder } = data.pokedex;
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      value={value}
      onChange={onChangeHandler}
    />
  );
}
Search.propTypes = {
  value: PropTypes.string,
  onChangeHandler: PropTypes.func,
};

Search.defaultProps = {
  value: "",
  onChangeHandler: () => {},
};
