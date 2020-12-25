import React from "react";
import "./pagination-container.style.scss";
import PropTypes from "proptypes";
import SinglPokemon from "./single-pokemon/single-pokemon.component";
// import useFetchPokemon from "../../hooks/useFetchPokemon";
import _data from "../../data/data.json";
import Loader from "../UI/loader/loader.component";

export default function PaginationContainer(props) {
  // const state = useFetchPokemon();
  const { error, loading, data } = props;
  return (
    <div className="pagination-container">
      <div className="pokemons">
        {error && <div>Some thing wemt wrong</div>}
        {loading && <Loader />}
        {!loading &&
          data.map((pokemon) => {
            const name = pokemon.name.english;
            const { Attack } = pokemon.base;
            const { Defense } = pokemon.base;
            return (
              <SinglPokemon
                src={pokemon.thumbnail}
                key={pokemon.id}
                attack={Attack}
                color={_data.pokedex.types[pokemon.type[0]]}
                defense={Defense}
                name={name}
              />
            );
          })}
      </div>

      <div className="pagination" />
    </div>
  );
}
PaginationContainer.propTypes = {
  error: PropTypes.bool.isRequired,
  loading: PropTypes.bool.isRequired,
  // eslint-disable-next-line react/forbid-prop-types
  data: PropTypes.array,
};

PaginationContainer.defaultProps = {
  data: [],
};
