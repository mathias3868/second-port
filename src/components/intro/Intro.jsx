import React from "react";
import contentImg from "../../images/Rectangle.png";
import contactImg from "../../images/02.png";
import "./intro.scss";

const Intro = () => {
  return (
    <section id="section1">
      <div className="wrap">
        <div className="introContent">
          <p className="intro-greeting">Hello Welcome,</p>
          <h2>I'm Ifediegwu Mathias</h2>
          <p>
            I am a skilled software Designer with experience in creating
            visually Appealing and friendly Websites. I create a type web
            Application both web2 and web3
          </p>
          <button className="introBtn">
            <img src={contactImg} alt="Contact Me" className="contact" /> Hire
            Me
          </button>
        </div>

        <div className="introImg">
          <img src={contentImg} alt="IntroImg" className="contentImg" />
        </div>
      </div>
    </section>
  );
};

export default Intro;
