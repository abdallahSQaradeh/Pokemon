import "./Modal.style.scss";
import PropTypes from "proptypes";
import { AiOutlineClose } from "react-icons/ai";
import Ability from "../UI/ability/ability.component";

export default function Modal(props) {
  const {
    id,
    generation,
    AbilityText,
    Experience,
    HP,
    name,
    srcModal,
    attack,
    defense,
    spAttack,
    spDefense,
    color,
    setModal,
  } = props;

  return (
    <div
      className={`modal `}
      onClick={() => {
        setModal(false);
      }}
      role="button"
      tabIndex={0}
      onKeyDown={() => {
        setModal(false);
      }}
    >
      <div className="pokemon-detail">
        <div
          className="close-pokemon-detail"
          onClick={() => {
            setModal(false);
          }}
          role="button"
          tabIndex={0}
          onKeyDown={() => {
            setModal(false);
          }}
        >
          <AiOutlineClose />
        </div>
        <div
          className="pokemon-image-detail"
          style={{
            backgroundImage: `  linear-gradient(to right,${color}, rgb(0,0,0,0.3))`,
          }}
        >
          <img alt="img" className="modal-image" src={srcModal} />
          <div className="badge">badge 1</div>
        </div>
        <div
          className="pokemon-modal-detail"
          style={{
            backgroundImage: `linear-gradient(to bottom ,${color} ,rgb(0,0,0,0.3) )`,
          }}
        >
          <div className="pokemon-detail-header">
            <div className="pokemon-detail-name">{name}</div>
            <div className="generation-info">
              <sub className="pokemon-detail-gen">
                {`Generation ${generation}`}
              </sub>
              <div className="power-badge">{id}</div>
            </div>
          </div>
          <div className="pokemon-abilities">
            <p>Abilities</p>
            <p>{AbilityText}</p>
          </div>

          <div className="experiences">
            <div className="pokemon-experiences">
              <p>Healthy point</p>
              <p>{HP * 1000000000}</p>
              <div className="experience-bar">
                <div
                  className="experience-fill-bar"
                  style={{
                    width: `${HP}%`,
                  }}
                />
              </div>
            </div>
            <div className="pokemon-experiences">
              <p>Experience point</p>
              <p>{Experience * 100000000}</p>
              <div className="experience-bar">
                <div
                  className="experience-fill-bar"
                  style={{
                    width: `${Experience}%`,
                  }}
                />
              </div>
            </div>
          </div>
          <div className="abilities">
            <div className="ability-container">
              <Ability qText="Defense" number={defense} />
            </div>
            <div className="ability-container">
              <Ability qText="Attack}" number={attack} />
            </div>

            <div className="ability-container">
              <Ability qText="Sp Defense" number={spDefense} />
            </div>
            <div className="ability-container">
              <Ability qText="Sp Attack" number={spAttack} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

Modal.propTypes = {
  id: PropTypes.number.isRequired,
  generation: PropTypes.number.isRequired,
  AbilityText: PropTypes.string.isRequired,
  Experience: PropTypes.number.isRequired,
  HP: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  attack: PropTypes.number.isRequired,
  defense: PropTypes.number.isRequired,
  srcModal: PropTypes.string.isRequired,
  spDefense: PropTypes.number.isRequired,
  spAttack: PropTypes.number.isRequired,
  setModal: PropTypes.func.isRequired,
};
