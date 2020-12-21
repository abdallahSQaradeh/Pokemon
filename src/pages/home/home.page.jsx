import React from "react";
import "./home.style.scss";
import Peca from "../../assets/picatshoo.png";
import data from "../../data/data.json";

export default function Home() {
  const { bannerHeader, bannerText, bannerButton } = data.home;
  return (
    <div className="home-content">
      <div className="banner">
        <div className="banner-header">
          <span className="b-bold">{bannerHeader.bold1}</span>
          <span>{bannerHeader.normal}</span>
          <span className="b-bold">{bannerHeader.bold2}</span>
        </div>
        <div className="banner-text">{bannerText}</div>
        <button type="button" className="banner-button">
          {bannerButton}
        </button>
      </div>
      <div className="banner-image">
        <picture>
          <img src={Peca} alt="pecatchoo" />
        </picture>
      </div>
    </div>
  );
}
