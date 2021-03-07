import React from "react";
import "./pagination-container.style.scss";
import PropTypes from "proptypes";
import SinglPokemon from "./single-pokemon/single-pokemon.component";
// import useFetchPokemon from "../../hooks/useFetchPokemon";
import _data from "../../data/data.json";

export default function PaginationContainer(props) {
  // const state = useFetchPokemon();
  const { error, data, setSelectedPoke } = props;
  return (
    <div className="pokemons">
      {error && <div>Some thing wemt wrong</div>}
      {data.map((pokemon) => {
        const name = pokemon.name.english;
        const { Attack, Defense, HP } = pokemon.base;
        const spDefense = pokemon.base["Sp. Attack"];
        const spAttack = pokemon.base["Sp. Defense"];
        const { types } = pokemon;
        let Ability = "";

        if (pokemon.profile.ability.length > 0)
          for (let i = 0; i < pokemon.profile.ability.length; i += 1) {
            Ability += `${pokemon.profile.ability[i][0]}${
              i === pokemon.profile.ability.length - 1 ? "" : "-"
            }`;
          }
        else Ability = "Weak";
        let gen = 0;
        if (pokemon.evolution.next) {
          // eslint-disable-next-line prefer-destructuring
          gen = pokemon.evolution.next[0][1];
        } else if (pokemon.evolution.prev) {
          // eslint-disable-next-line prefer-destructuring
          gen = pokemon.evolution.prev[0][1];
        } else {
          gen = "Old";
        }

        return (
          <SinglPokemon
            setSelectedPoke={() => setSelectedPoke(pokemon)}
            generation={gen}
            Ability={Ability}
            Experience={pokemon.base.Speed}
            HP={HP}
            src={pokemon.thumbnail}
            key={pokemon.id}
            id={pokemon.id}
            attack={Attack}
            color={_data.pokedex.types[pokemon.type[0]]}
            defense={Defense}
            name={name}
            spDefense={spDefense}
            spAttack={spAttack}
            srcModal={pokemon.hires}
            types={types}
          />
        );
      })}
    </div>
  );
}
PaginationContainer.propTypes = {
  error: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array,
  setSelectedPoke: PropTypes.func.isRequired,
};

PaginationContainer.defaultProps = {
  data: [],
};
