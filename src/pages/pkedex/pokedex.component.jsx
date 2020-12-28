import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import "./pokedex.style.scss";
// import elasticlunr from "elasticlunr";
import PropTypes from "proptypes";
import pageData from "../../data/data.json";
import Search from "../../components/search/search.component";
import DropDownFilter from "../../components/drop-down-filter/drop-down-filter.component";
import Pokemons from "../../components/pagination-container/pagination-container.component";
// import useFetchPokemon from "../../hooks/useFetchPokemon";
import Modal from "../../components/Modal/Modal.component";

const initialState = {
  data: [],
  loading: false,
  error: "",
  pokemonPage: [],
  page: 1,
  pages: [],
  filters: {},
  filteredData: [],
};
function pagination(data) {
  const Pages = [];
  for (let i = 1; i <= 3; i += 1) {
    const pageCollection = data.slice((i - 1) * 9, i * 9);
    Pages.push(pageCollection);
  }
  return Pages;
}
function reducer(state, action) {
  switch (action.type) {
    case "success": {
      const Pages = pagination(action.data);
      return {
        ...state,
        data: action.data,
        loading: false,
        error: false,
        pokemonPage: Pages[0],
        types: pageData.pokedex.types,
        pages: Pages,
      };
    }

    case "fail":
      return { ...state, error: action.error, loading: false };

    case "pending":
      return { ...state, loading: true };
    case "search": {
      const pPage = state.data
        .filter((pokemon) => {
          return pokemon.name.english.toLowerCase().includes(action.value);
        })
        .map((pokemon) => {
          return pokemon;
        });
      const Pages = pagination(pPage);
      return { ...state, pokemonPage: Pages[0] };
    }
    case "filter": {
      const { item } = action.filters;
      const currentFilter = { ...state.filters };
      let deleted = false;
      if (!currentFilter[item]) currentFilter[item] = { checked: true };
      else {
        delete currentFilter[item];
        deleted = true;
      }
      const keys = Object.keys(currentFilter);
      let pokes = [];
      let data = [];
      if (state.filteredData.length === 0 || deleted) {
        data = [...state.data];
      } else {
        data = [...state.filteredData];
      }
      if (deleted && keys.length === 0) {
        pokes = data;
      } else {
        data.forEach((poke) => {
          keys.forEach((filter) => {
            if (currentFilter[filter].checked) {
              if (filter === poke.type[0] || filter === poke.type[1])
                pokes.push(poke);
            }
          });
        });
      }

      const Pages = pagination(pokes);

      return {
        ...state,
        pokemonPage: Pages[0],
        filters: currentFilter,
        filteredData: pokes,
      };
    }

    default:
      throw new Error("Something wrong");
  }
}

export default function Pokedex(props) {
  const { title } = pageData.pokedex;
  const [selectedPoke, setSelectedPoke] = useState(null);
  const [search, setSearch] = useState(null);
  const [state, dispatch] = useReducer(reducer, initialState);
  const { loading, error, pokemonPage } = state;
  const { setPage, setColor } = props;

  let Ability = "";
  let gen = 0;
  const onChangeHandler = (e) => {
    const { value } = e.target;
    setSearch(value);
    dispatch({ type: "search", value });
    // console.log(state);
  };
  const onChecked = (e, item) => {
    dispatch({
      type: "filter",
      filters: { filterId: e.target.id, item },
    });
  };
  useEffect(() => {
    dispatch({ type: "pending" });
    axios
      .get(" https://app.pokemon-api.xyz/pokemon/all")
      .then((res) => {
        dispatch({ type: "success", data: res.data });
        // pagePokemons(res.data.filter((p, _) => _ < 9).map((p) => p));
      })
      .catch((err) => {
        dispatch({ type: "fail", error: err });
      });
    setPage("home");
    setColor("black");
  }, [setColor, setPage]);

  // const state = useFetchPokemon();
  if (selectedPoke) {
    if (selectedPoke.profile.ability.length > 0)
      for (let i = 0; i < selectedPoke.profile.ability.length; i += 1) {
        Ability += `${selectedPoke.profile.ability[i][0]}${
          i === selectedPoke.profile.ability.length - 1 ? "" : "-"
        }`;
      }
    else Ability = "Weak";
    if (selectedPoke.evolution.next) {
      // eslint-disable-next-line prefer-destructuring
      gen = selectedPoke.evolution.next[0][1];
    } else if (selectedPoke.evolution.prev) {
      // eslint-disable-next-line prefer-destructuring
      gen = selectedPoke.evolution.prev[0][1];
    } else {
      gen = "Old";
    }
  }

  return (
    <div className="pokedex-content">
      {selectedPoke !== null ? (
        <Modal
          id={selectedPoke.id}
          generation={gen}
          AbilityText={Ability}
          Experience={selectedPoke.base.Speed}
          HP={selectedPoke.base.HP}
          srcModal={selectedPoke.hires}
          name={selectedPoke.name.english}
          src={selectedPoke.thumbnail}
          attack={selectedPoke.base.Attack}
          defense={selectedPoke.base.Defense}
          color={pageData.pokedex.types[selectedPoke.type[0]]}
          spAttack={selectedPoke.base["Sp. Attack"]}
          spDefense={selectedPoke.base["Sp. Defense"]}
          setModal={() => {
            setSelectedPoke(null);
          }}
        />
      ) : null}
      <h2 className="title">
        {title.titlePre}
        <span>{title.titleSuf}</span>
        {title.titlePost}
      </h2>
      <Search value={search} onChangeHandler={onChangeHandler} />
      <div className="filters">
        <DropDownFilter
          filters={state.types}
          onChecked={onChecked}
          text="Tipo"
        />
        <DropDownFilter text="Ataque" />
        <DropDownFilter text="Experiencia" />
      </div>
      <Pokemons
        loading={loading}
        error={error}
        data={pokemonPage}
        setSelectedPoke={setSelectedPoke}
      />
    </div>
  );
}
Pokedex.propTypes = {
  setColor: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
};
