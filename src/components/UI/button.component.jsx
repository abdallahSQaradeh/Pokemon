import React from "react";
import PropTypes from "proptypes";

export default function Button(props) {
  const { text, cname } = props;
  return (
    <button type="button" className={cname}>
      {text}
    </button>
  );
}
Button.propTypes = {
  text: PropTypes.string.isRequired,
  cname: PropTypes.string.isRequired,
};
