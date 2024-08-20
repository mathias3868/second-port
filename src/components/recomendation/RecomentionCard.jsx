import React from "react";
import "./recomendation.scss";

const RecomentionCard = (props) => {
  return (
    <div className="card-reco">
      <div className="recomendImage">
        <img src={props.img} alt="" className="recomendImg" />
      </div>
      <div className="recomend-content">
        <span>{props.recomenderRate}</span>
        <p className="recomendPara">{props.recomenderText}</p>
        <span className="RecomndName">{props.recomenderName}</span>
      </div>
    </div>
  );
};

export default RecomentionCard;
