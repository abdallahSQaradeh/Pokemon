import React, { useEffect } from "react";
import "./E404.style.scss";
import PropTypes from "proptypes";
import { Link } from "react-router-dom";
import data from "../../data/data.json";
import TeamRocket from "../../assets/teamRocket.png";
import Button from "../../components/UI/button.component";

export default function E404(props) {
  const { setPage, setColor } = props;
  const { firstText, secondText, returnE, E404T } = data.e404;
  useEffect(() => {
    setPage(null);
    setColor("");
  });
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

      <Link to="/">
        <Button cname="e404-button" text={returnE} />
      </Link>
    </div>
  );
}
E404.propTypes = {
  setPage: PropTypes.func.isRequired,
  setColor: PropTypes.func.isRequired,
};
