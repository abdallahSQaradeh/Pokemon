import React from "react";
import "./pokemon-card.style.scss";
import PropTypes from "proptypes";
import Ball from "../../assets/goldenPokeball.png";

export default function PokemonCard(props) {
  const { pokemon, activeItem, item } = props;

  return (
    <div className={`pokemon-card `}>
      <div className="card-image">
        <img alt="pokemon" src={pokemon.hires} />
      </div>

      <div className="card-footer">
        <h5>{pokemon.name.english}</h5>

        <img className="ball" src={Ball} alt="ball" />
      </div>
      <div
        className="not-active"
        style={{
          backgroundColor: `${activeItem === item ? "rgba(0,0,0,0)" : ""}`,
        }}
      />
    </div>
  );
}
PokemonCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  pokemon: PropTypes.object.isRequired,
  activeItem: PropTypes.number,
  item: PropTypes.number.isRequired,
};
PokemonCard.defaultProps = {
  activeItem: null,
};
