import React from "react";
import "./pokemon-card.style.scss";
import Ball from "../../assets/goldenPokeball.png";

export default function PokemonCard(props) {
  return (
    <div className="pokemon-card">
      <div className="card-image">
        <img
          alt="pokemon"
          src="https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/538.png"
        />
      </div>

      <div className="card-footer">
        <h5>Name</h5>

        <img className="ball" src={Ball} alt="ball" />
      </div>
    </div>
  );
}
