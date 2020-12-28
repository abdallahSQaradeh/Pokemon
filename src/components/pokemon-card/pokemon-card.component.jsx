import React from "react";
import "./pokemon-card.style.scss";
import PropTypes from "proptypes";
import Ball from "../../assets/goldenPokeball.png";

export default function PokemonCard(props) {
  const { pokemon } = props;

  return (
    <div className="pokemon-card">
      <div className="card-image">
        <img alt="pokemon" src={pokemon.hires} />
      </div>

      <div className="card-footer">
        <h5>{pokemon.name.english}</h5>

        <img className="ball" src={Ball} alt="ball" />
      </div>
    </div>
  );
}
PokemonCard.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  pokemon: PropTypes.object.isRequired,
};
