import React from "react";
import "./pokemon.style.scss";
import PropTypes from "proptypes";
import PokemonBar from "../pokemon-bar/pokemon-bar.component";

export default function PokemonInformation(props) {
  const { pokemon } = props;
  const { HP, Attack, Defense, Speed } = pokemon.base;
  const spDefense = pokemon.base["Sp. Defense"];
  const spAttack = pokemon.base["Sp. Attack"];

  return (
    <div className="pokemon-information">
      <img alt="pokemon" src={pokemon.hires} />
      <div className="information-detailed">
        <p className="pokemon-name-legendaries">{pokemon.name.english}</p>
        <p className="pokemon-description-info">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
          repudiandae sit! Assumenda nulla libero tenetur dicta rerum qui
          pariatur earum alias iusto itaque repellendus ratione amet ipsa,
          perferendis quisquam expedita?
        </p>
        <div className="pokemon-specialists">
          <PokemonBar
            mTop="30px"
            color="#F5DB13"
            title="Healthy Point"
            width={HP}
          />
          <PokemonBar
            mTop="30px"
            color="#F5DB13"
            title="Experience"
            width={Speed}
          />
          <PokemonBar
            mTop="30px"
            color="#F5DB13"
            title="Attack"
            width={Attack}
          />
          <PokemonBar
            mTop="30px"
            color="#F5DB13"
            title="Defense"
            width={Defense}
          />
          <PokemonBar
            mTop="30px"
            color="#F5DB13"
            title="Special Attack"
            width={spAttack}
          />
          <PokemonBar
            mTop="30px"
            color="#F5DB13"
            title="Special Defense"
            width={spDefense}
          />
        </div>
      </div>
    </div>
  );
}
PokemonInformation.propTypes = {
  // eslint-disable-next-line react/forbid-prop-types
  pokemon: PropTypes.object.isRequired,
};
