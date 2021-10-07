import React, { useState } from "react";
import { FaBars } from "react-icons/fa";
function Navbar() {
  const [navLinks] = useState([
    {
      name: "Home",
      class: "#banner",
    },
    {
      name: "Interests",
      class: "#interest",
    },
    {
      name: "About",
      class: "#about",
    },
    {
      name: "Skills",
      class: "#skills",
    },
    {
      name: "Projects",
      class: "#projects",
    },
    {
      name: "Contact",
      class: "#contact",
    },
  ]);
  const clickHandler = () => {
    document.querySelector(".navbar__right").classList.toggle("helper");
    document.querySelector(".navbar").classList.toggle("helper1");
    document.querySelector(".navbar__container").classList.toggle("helper2");
  };
  return (
    <nav className="navbar">
      <div className="navbar__container">
        <div className="navbar__left-logo">
          {/* <img src={nav_logo} alt="logo" /> */}
          <h1>
            bil
            <span>dev</span>
          </h1>
        </div>

        <ul className="navbar__right">
          {navLinks.map((link,index) => {
            return (
              <li key={index}>
                <a href={link.class}>{link.name}</a>
              </li>
            );
          })}
        </ul>
        <div className="sidebar">
          <FaBars className="side__bar" onClick={clickHandler} />
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
