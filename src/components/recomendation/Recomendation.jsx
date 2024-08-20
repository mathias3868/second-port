import React from "react";
import { Carousel } from "antd";
// import "antd/dist/reset.css";
import "./recomendation.scss";
import recoImg from "../../images/A Tech Guy.png";
import RecomentionCard from "./RecomentionCard";
import image1 from "../../images/12.jpg"; // Ant Design styles
import image2 from "../../images/18.jpg"; // Ant Design styles
import image3 from "../../images/20.jpg"; // Ant Design styles
import { GrBlockQuote } from "react-icons/gr";

const Recomendation = () => (
  <section id="section4">
    {/* <RecomentionCard
        img={recoImg}
        recomenderName="mathias"
        recomenderText="this my recomendation to mathias"
      /> */}
    <Carousel
      className="carousel"
      arrows
      dotPosition="left"
      autoplay={true}
      autoplaySpeed={5000}>
      <div>
        <RecomentionCard
          recomenderRate={<GrBlockQuote className="quote" />}
          img={recoImg}
          recomenderName="mathias"
          recomenderText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ullam explicabo qui non eos repellat earum necessitatibus dolor sequi sed! Veniam quo numquam nemo. Quos quo ratione dicta! Repudiandae, labore!"
        />
      </div>
      <div>
        <RecomentionCard
          recomenderRate={<GrBlockQuote className="quote" />}
          img={image1}
          recomenderName="mathias"
          recomenderText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ullam explicabo qui non eos repellat earum necessitatibus dolor sequi sed! Veniam quo numquam nemo. Quos quo ratione dicta! Repudiandae, labore!"
        />
      </div>
      <div>
        <RecomentionCard
          recomenderRate={<GrBlockQuote className="quote" />}
          img={image2}
          recomenderName="mathias"
          recomenderText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ullam explicabo qui non eos repellat earum necessitatibus dolor sequi sed! Veniam quo numquam nemo. Quos quo ratione dicta! Repudiandae, labore!"
        />
      </div>
      <div>
        <RecomentionCard
          recomenderRate={<GrBlockQuote className="quote" />}
          img={image3}
          recomenderName="mathias"
          recomenderText="Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem ullam explicabo qui non eos repellat earum necessitatibus dolor sequi sed! Veniam quo numquam nemo. Quos quo ratione dicta! Repudiandae, labore!"
        />
      </div>
    </Carousel>
  </section>
);
export default Recomendation;
