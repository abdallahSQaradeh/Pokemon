import React, { useEffect, useReducer } from "react";
import "./pagination-container.style.scss";
import axios from "axios";
import SinglPokemon from "./single-pokemon/single-pokemon.component";
// import useFetchPokemon from "../../hooks/useFetchPokemon";
import _data from "../../data/data.json";

const initialState = {
  data: [],
  types: [],
  loading: false,
  error: "",
};
function reducer(state, action) {
  switch (action.type) {
    case "success":
      return { ...state, data: action.data, loading: false, error: false };
    case "fail":
      return { ...state, error: action.error, loading: false };

    case "pending":
      return { ...state, loading: true };
    default:
      throw new Error("Something wrong");
  }
}
export default function PaginationContainer() {
  // const state = useFetchPokemon();
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    axios
      .get(" https://app.pokemon-api.xyz/pokemon/all")
      .then((res) => {
        dispatch({ type: "success", data: res.data });
      })
      .catch((err) => {
        dispatch({ type: "fail", error: err });
      });
  }, []);
  const { data } = state;
  console.log(data);
  return (
    <div className="pagination-container">
      <div className="pokemons">
        {data
          .filter((_, idx) => {
            return idx < 9;
          })
          .map((pokemon) => {
            const name = pokemon.name.english;
            const { Attack } = pokemon.base;
            const { Defense } = pokemon.base;
            return (
              <SinglPokemon
                src={pokemon.thumbnail}
                attack={Attack}
                color={_data.pokedex.types[pokemon.type[0]]}
                defense={Defense}
                name={name}
                key={pokemon.id}
              />
            );
          })}
      </div>
      <div className="pagination" />
    </div>
  );
}
