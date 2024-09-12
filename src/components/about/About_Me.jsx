import React from "react";
import aboutImg from "../../images/Rectangle-2.png";
import "./about.scss";
import { FaPhoneAlt } from "react-icons/fa";
const About_Me = () => {
  return (
    <div id="about">
      <section id="section2">
        <div className="wrap2">
          <div className="aboutImg">
            <div className="empty"></div>
            <img src={aboutImg} alt="About me" className="man-Img" />
          </div>
          <div className="aboutContent">
            <h2>
              About<span className="logo-Me">Me</span>
            </h2>
            <p>
              I am a skilled software Designer with experience in creating
              visually Appealing and friendly Websites. I create a type web
              Application both web2 and web3
            </p>
            <p>
              I have worked with so many teams and I have make sure that during
              my days with them I deliver to any task given to me
            </p>
            <button
              onClick={() => {
                document
                  .querySelector("#section5")
                  .scrollIntoView({ behavior: "smooth", offset: "-50" });
              }}>
              <FaPhoneAlt /> Contact Me
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About_Me;
