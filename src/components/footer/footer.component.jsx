import React from "react";
import "./footer.style.scss";
import { AiFillHeart } from "react-icons/ai";
import PropTypes from "proptypes";

export default function Footer(props) {
  const { color } = props;
  return (
    <footer
      className="footer"
      style={{
        color,
      }}
    >
      <div>
        made with
        <AiFillHeart className="red" />
      </div>

      <div>Ours Team</div>
    </footer>
  );
}
Footer.propTypes = {
  color: PropTypes.string.isRequired,
};
