import { useState } from "react";
import "./App.css";
import Navigtion from "./components/head/Navigtion";
import Intro from "./components/intro/Intro";
import About_Me from "./components/about/About_Me";
import Skills from "./components/skills/Skills";
import Recomendation from "./components/recomendation/Recomendation";
import Form from "./components/form/Form";
import Footer from "./components/footer/Footer";

// import pict from "./images/02.png";

function App() {
  return (
    <>
      <Navigtion />
      <Intro />
      <About_Me />
      <Skills />
      <Recomendation />
      <Form />
      <Footer />
    </>
  );
}

export default App;
