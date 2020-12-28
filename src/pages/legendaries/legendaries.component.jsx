import React, { useEffect } from "react";
import "./legendaries.style.scss";
import PropTypes from "proptypes";
import PokemonCollectionContainer from "../../components/pokemon-collection-container/pokemon-collection-container.component";
import useFetchPokemon from "../../hooks/useFetchPokemon";
import Loader from "../../components/UI/loader/loader.component";

function extract(bottomEdge, data, topEdge = null) {
  let collection = null;
  if (!topEdge) {
    collection = data
      .filter((pokemon) => {
        const { base } = pokemon;
        return (
          base.HP >= bottomEdge &&
          base.Attack >= bottomEdge &&
          base.Defense >= bottomEdge &&
          base["Sp. Attack"] >= bottomEdge &&
          base["Sp. Defense"] >= bottomEdge
        );
      })
      .map((poke) => poke);
  } else {
    collection = data
      .filter((pokemon) => {
        const { base } = pokemon;
        return (
          (base.HP >= bottomEdge && base.HP <= topEdge) ||
          (base.Attack >= bottomEdge && base.Attack <= bottomEdge) ||
          (base.Defense >= bottomEdge && base.Defense <= bottomEdge) ||
          (base["Sp. Attack"] >= bottomEdge &&
            base["Sp. Attack"] <= bottomEdge) ||
          (base["Sp. Defense"] >= bottomEdge &&
            base["Sp. Defense"] <= bottomEdge)
        );
      })
      .map((poke) => poke);
  }
  return collection;
}
export default function Legendaries(props) {
  const state = useFetchPokemon();
  const { data, error, loading } = state;
  const { setColor, setPage } = props;
  useEffect(() => {
    setColor("white");
    setPage("legendaries");
  }, [setColor, setPage]);

  return (
    <div className="legendaries-page">
      {error && <div>Error</div>}
      {loading && <Loader color="white" />}
      {data && (
        <>
          <PokemonCollectionContainer
            title="Legendaries"
            getData={() => extract(78, data)}
          />
          <PokemonCollectionContainer
            title="Stronger"
            getData={() => extract(50, data, 75)}
          />
          <PokemonCollectionContainer
            title="Weaker"
            getData={() => extract(20, data, 49)}
          />
        </>
      )}
    </div>
  );
}
Legendaries.propTypes = {
  setPage: PropTypes.func.isRequired,
  setColor: PropTypes.func.isRequired,
};
