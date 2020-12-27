import React from "react";
import "./pokemon-bar.style.scss";
import PropTypes from "proptypes";

export default function PokemonBar(props) {
  const { color, mTop } = props;
  return (
    <div
      className="pokemon-experiences"
      style={{
        marginTop: mTop,
      }}
    >
      <p>Healthy point</p>
      <p>{2 * 1000000000}</p>
      <div className="experience-bar">
        <div
          className="experience-fill-bar"
          style={{
            width: `${2}%`,
            color,
          }}
        />
      </div>
    </div>
  );
}

PokemonBar.propTypes = {
  color: PropTypes.string.isRequired,
  mTop: PropTypes.string.isRequired,
};
