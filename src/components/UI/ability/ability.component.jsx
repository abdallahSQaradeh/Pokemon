import React from "react";
import "./ability.style.scss";
import PropTypes from "proptypes";

export default function Ability(props) {
  const { qText, number } = props;
  return (
    <div className="ability">
      <div className="circle">{number}</div>
      <p className="qualification-text">{qText}</p>
    </div>
  );
}

Ability.propTypes = {
  qText: PropTypes.string.isRequired,
  number: PropTypes.number.isRequired,
};
