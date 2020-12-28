import React from "react";
import "./pokemon-bar.style.scss";
import PropTypes from "proptypes";

export default function PokemonBar(props) {
  const { color, mTop, title, width } = props;
  return (
    <div
      className="pokemon-experiences"
      style={{
        marginTop: mTop,
      }}
    >
      <p>{title}</p>
      <p>{width * 1000000000}</p>
      <div className="experience-bar">
        <div
          className="experience-fill-bar"
          style={{
            width: `${width}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
}

PokemonBar.propTypes = {
  color: PropTypes.string.isRequired,
  mTop: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  width: PropTypes.number.isRequired,
};
