import React, { useEffect, useReducer, useState } from "react";
import axios from "axios";
import "./pokedex.style.scss";
// import elasticlunr from "elasticlunr";
import PropTypes from "proptypes";
import Slider from "react-slick";
import pageData from "../../data/data.json";
import Search from "../../components/search/search.component";
import DropDownFilter from "../../components/drop-down-filter/drop-down-filter.component";
import Pokemons from "../../components/pagination-container/pagination-container.component";
// import useFetchPokemon from "../../hooks/useFetchPokemon";
import Modal from "../../components/Modal/Modal.component";
import Loader from "../../components/UI/loader/loader.component";
import Cry from "../../assets/cry2.gif";

const initialState = {
  data: [],
  loading: false,
  error: "",
  pages: [],
  filters: {},
  filteredData: [],
  types: null,
};

function pagination(data) {
  const Pages = [];
  const length = Math.ceil(data.length / 9);
  for (let i = 1; i <= Math.min(3, length); i += 1) {
    let pageCollection = "";
    if (data.length < 9) {
      pageCollection = data.slice((i - 1) * 9, i * data.length);
    } else {
      pageCollection = data.slice((i - 1) * 9, i * 9);
    }
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
          const res = pokemon.name.english
            .toLowerCase()
            .includes(action.value.toLowerCase());
          return res;
        })
        .map((pokemon) => {
          return pokemon;
        });
      const Pages = pagination(pPage);
      return { ...state, pages: Pages };
    }
    case "filter": {
      console.log(action);
      const currentFilter = action.filters;
      const pokes = [];
      const data = [...state.data];
      data.forEach((poke) => {
        if (
          action.filters.item === poke.type[0] ||
          action.filters.item === poke.type[1]
        )
          pokes.push(poke);
      });

      const Pages = pagination(pokes);

      return {
        ...state,
        pages: Pages,
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
  const { loading, error, pages } = state;
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
      <div className="pagination-container">
        {loading && <Loader />}
        {pages.length > 0 && (
          <Slider dots slidesToShow={1} slidesToScroll={1} infinite={false}>
            {pages.map((page, i) => {
              return (
                <Pokemons
                  error={error}
                  data={page}
                  key={`page-${`${i}p`}-p`}
                  setSelectedPoke={setSelectedPoke}
                />
              );
            })}
          </Slider>
        )}
        {pages.length === 0 && !loading && (
          <div style={{ textAlign: "center" }}>
            <img src={Cry} alt="cry" />
            <h4>we cannot find my siblings</h4>
          </div>
        )}
      </div>
    </div>
  );
}
Pokedex.propTypes = {
  setColor: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
};
