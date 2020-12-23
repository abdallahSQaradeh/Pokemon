import React from "react";
import PropTypes from "proptypes";
import data from "../../data/data.json";
import "./search.style.scss";

export default function Search(props) {
  const { value, setValue } = props;
  const { placeholder } = data.pokedex;
  return (
    <input
      className="search"
      type="search"
      placeholder={placeholder}
      value={value}
      onChange={(e) => setValue(e.target.value)}
    />
  );
}
Search.propTypes = {
  value: PropTypes.string,
  setValue: PropTypes.func,
};

Search.defaultProps = {
  value: "",
  setValue: () => {},
};
