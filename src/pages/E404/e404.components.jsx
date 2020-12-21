import React from "react";
import "./E404.style.scss";
import data from "../../data/data.json";
import TeamRocket from "../../assets/teamRocket.png";
import Button from "../../components/UI/button.component";

export default function E404() {
  const { firstText, secondText, returnE, E404T } = data.e404;
  return (
    <div className="e404-page">
      <div className="e404">
        <p className="text-404">{E404T}</p>

        <img className="team-rocket" src={TeamRocket} alt="team-rocket" />
      </div>
      <div className="page-404-text">
        <span className="first-text-error">{firstText}</span>
        <span className="second-text-error">{secondText}</span>
      </div>

      <Button cname="e404-button" text={returnE} />
    </div>
  );
}
