import React from "react";
import "./skills.scss"

const SkillsProp = (props) => {
  return (
    <div className="card">
      <img src={props.skillImg} alt="Html Logo" className="skillImg"/>
      <h4 className="skillHead">{props.skillHead}</h4>
      <p className="skillPara">{props.skillPara}</p>
    </div>
  );
};

export default SkillsProp;
