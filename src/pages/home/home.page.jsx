import React, { useEffect } from "react";
import "./home.style.scss";
import PropTypes from "proptypes";
import { Link } from "react-router-dom";
import Peca from "../../assets/picatshoo.png";
import data from "../../data/data.json";

export default function Home(props) {
  const { bannerHeader, bannerText, bannerButton } = data.home;
  const { setPage, setColor } = props;
  useEffect(() => {
    setPage("home");
    setColor("black");
  });
  return (
    <div className="home-content">
      <div className="banner">
        <div className="banner-info">
          <div className="banner-header">
            <span className="b-bold">{bannerHeader.bold1}</span>
            <span>{bannerHeader.normal}</span>
            <span className="b-bold">{bannerHeader.bold2}</span>
          </div>
          <div className="banner-text">{bannerText}</div>
          <Link to="/pokedex">
            <button type="button" className="banner-button">
              {bannerButton}
            </button>
          </Link>
        </div>
        <div className="banner-image">
          <img src={Peca} alt="pecatchoo" />
        </div>
      </div>
    </div>
  );
}
Home.propTypes = {
  setColor: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
};
