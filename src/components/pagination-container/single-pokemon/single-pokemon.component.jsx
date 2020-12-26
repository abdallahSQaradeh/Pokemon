import React, { useState } from "react";
import "./single-pokemon.style.scss";
import PropTypes from "proptypes";
import Modal from "../../Modal/Modal.component";

export default function SinglePokemon(props) {
  const [isModalOpened, setOpenModal] = useState(false);
  const {
    id,
    generation,
    Ability,
    Experience,
    HP,
    name,
    src,
    srcModal,
    attack,
    defense,
    color,
    spAttack,
    spDefense,
  } = props;

  return (
    <div
      onKeyDown={() => {}}
      role="button"
      tabIndex={0}
      className="single-pokemon"
      onClick={() => {
        setOpenModal(true);
      }}
    >
      <div className="pokemon-info">
        <h4 className="pokemon-name">{name}</h4>
        <div className="pokemon-qualification">
          <div className="attack">
            <div className="circle">{attack}</div>
            <p className="qualification-text">Attack</p>
          </div>
          <div className="defence">
            <div className="circle">{defense}</div>
            <p className="qualification-text">Defense</p>
          </div>
        </div>
        <div className="pokemon-badges">
          <div className="badge green">Grass</div>
          <div className="badge blue">Poison</div>
        </div>
      </div>
      <div
        className="pokemon-image-container"
        style={{
          backgroundColor: color,
        }}
      >
        <div
          style={{
            backgroundImage: `url(${src})`,
          }}
          className="spokemon-image"
        />
      </div>
      {isModalOpened ? (
        <Modal
          id={id}
          generation={generation}
          AbilityText={Ability}
          Experience={Experience}
          HP={HP}
          srcModal={srcModal}
          modal={isModalOpened}
          name={name}
          src={srcModal}
          attack={attack}
          defense={defense}
          color={color}
          spAttack={spAttack}
          spDefense={spDefense}
          setModal={setOpenModal}
        />
      ) : null}
    </div>
  );
}
SinglePokemon.propTypes = {
  id: PropTypes.number.isRequired,
  generation: PropTypes.number.isRequired,
  Ability: PropTypes.string.isRequired,
  Experience: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  HP: PropTypes.number.isRequired,
  src: PropTypes.string.isRequired,
  attack: PropTypes.string.isRequired,
  defense: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  spDefense: PropTypes.string.isRequired,
  spAttack: PropTypes.string.isRequired,
  srcModal: PropTypes.string.isRequired,
};
