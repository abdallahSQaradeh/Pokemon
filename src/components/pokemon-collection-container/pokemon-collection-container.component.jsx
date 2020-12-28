import React, { useState, useEffect } from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import "./pokemon-collection-container.style.scss";
import AliceCarousel from "react-alice-carousel";
import PropTypes from "proptypes";
// import PokemonBar from "../pokemon-bar/pokemon-bar.component";
import PokemonCard from "../pokemon-card/pokemon-card.component";
// import PokemonINformation from "../pokemon-information/pokemon-information.component";
import PokemonInformation from "../pokemon-information/pokemon-information.component";

export default function PokemonCollectionContainer(props) {
  const { title, getData } = props;

  const responsive = {
    0: { items: 3 },
    568: { items: 5 },
    1024: { items: 6 },
  };
  const [data, setData] = useState(null);
  const [pokemon, setPokemon] = useState(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const d = getData();
    setData(d);
    setPokemon(d[0]);
  }, [getData]);
  return (
    <div className="pokemon-collection-container">
      <h1 className="collection-title">{title}</h1>
      {pokemon ? (
        <>
          <PokemonInformation pokemon={pokemon} />
        </>
      ) : null}

      <div className="carousel-container">
        {data ? (
          <AliceCarousel
            activeIndex={index}
            infinite
            items={data.map((poke) => {
              return <PokemonCard pokemon={poke} key={`${poke.id}3x`} />;
            })}
            responsive={responsive}
            disableDotsControls
            onSlideChange={(e) => {
              // pokemon = data[e.item + 1];
            }}
            renderSlideInfo={(e) => {
              // console.log(e);
            }}
            onSlideChanged={(e) => {
              setIndex(e.item);
              setPokemon(data[e.item]);
            }}
          />
        ) : null}
      </div>
    </div>
  );
}
PokemonCollectionContainer.propTypes = {
  title: PropTypes.string.isRequired,
  getData: PropTypes.func.isRequired,
};
