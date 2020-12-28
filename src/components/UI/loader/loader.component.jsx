import React from "react";
import "./loader.style.scss";
import PropTypes from "proptypes";

export default function Loader(props) {
  const { color } = props;
  return (
    <article
      style={{
        margin: "auto",
        marginTop: "100px",
      }}
    >
      <div className="o-pokeball c-loader  u-flash animate__animated animate__flash" />
      <p
        className="u-text-center u-pulse "
        style={{
          color,
        }}
      >
        loading..
      </p>
    </article>
  );
}
Loader.propTypes = {
  color: PropTypes.string.isRequired,
};
