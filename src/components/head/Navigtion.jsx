import React from "react";
// import logo from "../../images/01.png";
import { Link } from "react-scroll";
import "./navigation.scss";
import { FaRegMessage } from "react-icons/fa6";
import { MdOutlineStorage } from "react-icons/md";
import { useState } from "react";

const Navigtion = () => {
  const [bugerMenu, setBugerMenu] = useState(false);

  const toggleNavBar = () => {
    setBurgerMenu(!burgerMenu);
  };

  return (
    <header>
      <nav className="navItems">
        <h1 className="logo">
          About<span className="logo-Me">Me</span>
        </h1>
        <ul className="navList">
          <li>
            <Link
              className="link"
              activeClass="active"
              to="section1"
              spy="true"
              smooth="true"
              offset={-100}
              duration={500}>
              home
            </Link>
          </li>
          <li>
            <Link
              className="link"
              activeClass="active"
              to="section2"
              spy="true"
              smooth="true"
              offset={-50}
              duration={500}>
              About
            </Link>
          </li>
          <li>
            <Link
              className="link"
              activeClass="active"
              to="section3"
              spy="true"
              smooth="true"
              offset={-40}
              duration={500}>
              Portfolio
            </Link>
          </li>
          <li>
            <Link
              className="link"
              activeClass="active"
              to="section4"
              spy="true"
              smooth="true"
              offset={-50}
              duration={500}>
              Client
            </Link>
          </li>
        </ul>
        <button
          className="navBtn"
          onClick={() => {
            document
              .querySelector("#section5")
              .scrollIntoView({ behavior: "smooth", offset: "-50" });
          }}>
          <FaRegMessage /> Contact Me
        </button>
        {/* BURGER STARTS HERE */}

        <div className="burgerNav">
          <MdOutlineStorage id="burger" onClick={() => toggleNavBar} />
          <ul className="bugerList">
            <li>
              <Link
                className="link"
                activeClass="active"
                to="section1"
                spy="true"
                smooth="true"
                offset={-100}
                duration={500}>
                home
              </Link>
            </li>
            <li>
              <Link
                className="link"
                activeClass="active"
                to="section2"
                spy="true"
                smooth="true"
                offset={-50}
                duration={500}>
                About
              </Link>
            </li>
            <li>
              <Link
                className="link"
                activeClass="active"
                to="section3"
                spy="true"
                smooth="true"
                offset={-40}
                duration={500}>
                Portfolio
              </Link>
            </li>
            <li>
              <Link
                className="link"
                activeClass="active"
                to="section4"
                spy="true"
                smooth="true"
                offset={-50}
                duration={500}>
                Client
              </Link>
            </li>
            <li>
              <Link
                className="link"
                activeClass="active"
                to="section5"
                spy="true"
                smooth="true"
                offset={-50}
                duration={500}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};

export default Navigtion;
