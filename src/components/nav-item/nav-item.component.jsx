import React from "react";
import PropTypes from "proptypes";
import "./nav-item.style.scss";

export default function NavItem(props) {
  const { text } = props;
  return <li className="nav-item">{text}</li>;
}
NavItem.propTypes = {
  text: PropTypes.string.isRequired,
};
