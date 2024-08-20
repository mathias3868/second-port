import React from "react";
import Card_skill from "./Card_skill";
import html from "../../images/html.png";
import css from "../../images/css.png";
import javaScript from "../../images/js.png";
import react from "../../images/reactedit.jpg";

const Skills = () => {
  // [skillImg, skillHead, skillPara] props;
  return (
    <section id="section3">
      <div className="wrap3">
        <h2>
          My <span>Skills</span>
        </h2>
        <p className="outPara">
          There are many valiation of passing of Lorem ipsum dolor sit amet,
          consectetur adipisicing elit. Libero, quo amet illum atque natus
          magni.
        </p>
        <div className="cards-container">
          <Card_skill
            skillImg={html}
            skillHead="Html"
            skillPara="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ullam
        explicabo qui non eos repellat earum necessitatibus dolor sequi sed!
        Veniam quo numquam nemo. Quos quo ratione dicta! Repudiandae, labore!"
          />
          <Card_skill
            skillImg={css}
            skillHead="Css"
            skillPara="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ullam
        explicabo qui non eos repellat earum necessitatibus dolor sequi sed!
        Veniam quo numquam nemo. Quos quo ratione dicta! Repudiandae, labore!"
          />
          <Card_skill
            skillImg={javaScript}
            skillHead="Javascript"
            skillPara="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ullam
        explicabo qui non eos repellat earum necessitatibus dolor sequi sed!
        Veniam quo numquam nemo. Quos quo ratione dicta! Repudiandae, labore!"
          />
          <Card_skill
            skillImg={react}
            skillHead="React"
            skillPara="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ullam
        explicabo qui non eos repellat earum necessitatibus dolor sequi sed!
        Veniam quo numquam nemo. Quos quo ratione dicta! Repudiandae, labore!"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
