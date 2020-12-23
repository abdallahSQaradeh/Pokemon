import React from "react";
import "./single-pokemon.style.scss";
import PropTypes from "proptypes";

export default function SinglePokemon(props) {
  const { name, src, attack, defense, color } = props;
  return (
    <div className="single-pokemon">
      <div className="pokemon-info">
        <h4 className="pokemon-name">{name}</h4>
        <div className="pokemon-qualification">
          <div className="attack">
            <div className="circle">{attack}</div>
            <p className="qualification-text">Attack</p>
          </div>
          <div className="defence">
            <div className="circle">{defense}</div>
            <p className="qualification-text">Defense</p>
          </div>
        </div>
        <div className="pokemon-badges">
          <div className="badge green">Grass</div>
          <div className="badge blue">Poison</div>
        </div>
      </div>
      <div
        className="pokemon-image-container"
        style={{
          backgroundColor: color,
        }}
      >
        <div
          style={{
            backgroundImage: `url(${src})`,
          }}
          className="spokemon-image"
        />
      </div>
    </div>
  );
}
SinglePokemon.propTypes = {
  name: PropTypes.string.isRequired,
  src: PropTypes.string.isRequired,
  attack: PropTypes.string.isRequired,
  defense: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
};
