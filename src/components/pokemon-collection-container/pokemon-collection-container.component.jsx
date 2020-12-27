import React from "react";
import "react-alice-carousel/lib/alice-carousel.css";
import "./pokemon-collection-container.style.scss";
import AliceCarousel from "react-alice-carousel";
import PropTypes from "proptypes";
import PokemonBar from "../pokemon-bar/pokemon-bar.component";
import PokemonCard from "../pokemon-card/pokemon-card.component";

export default function PokemonCollectionContainer(props) {
  const { title, getData } = props;
  const responsive = {
    0: { items: 3 },
    568: { items: 5 },
    1024: { items: 6 },
  };
  const data = getData();
  const items = [
    <PokemonCard key="3x" />,
    <PokemonCard key="4x" />,
    <PokemonCard key="5x" />,
    <PokemonCard key="6x" />,
    <PokemonCard key="7x" />,
    <PokemonCard key="8x" />,
    <PokemonCard key="9x" />,
    <PokemonCard key="10x" />,
    <PokemonCard key="11x" />,
  ];
  return (
    <div className="pokemon-collection-container">
      <h1 className="collection-title">{title}</h1>
      <div className="pokemon-information">
        <img
          alt="pokemon"
          src="https://raw.githubusercontent.com/Purukitto/pokemon-data.json/master/images/pokedex/hires/139.png"
        />
        <div className="information-detailed">
          <p className="pokemon-name-legendaries">Judokra</p>
          <p className="pokemon-description-info">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            repudiandae sit! Assumenda nulla libero tenetur dicta rerum qui
            pariatur earum alias iusto itaque repellendus ratione amet ipsa,
            perferendis quisquam expedita?
          </p>
          <div className="pokemon-specialists">
            <PokemonBar mTop="30px" color="yellow" />
            <PokemonBar mTop="30px" color="yellow" />
            <PokemonBar mTop="30px" color="yellow" />
            <PokemonBar mTop="30px" color="yellow" />
            <PokemonBar mTop="30px" color="yellow" />
            <PokemonBar mTop="30px" color="yellow" />
          </div>
        </div>
      </div>
      <div className="carousel-container">
        <AliceCarousel
          infinite
          mouseTracking
          items={items}
          responsive={responsive}
          disableDotsControls
        />
      </div>
    </div>
  );
}
PokemonCollectionContainer.propTypes = {
  title: PropTypes.string.isRequired,
  getData: PropTypes.func.isRequired,
};
