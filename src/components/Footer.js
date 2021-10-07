import React, { useState } from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
function Footer() {
  const [contents] = useState({
    text: "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor inci- didunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exe- rcitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  });
  const [logos] = useState([
    {
      logo: <FaFacebookF />,
    },
    {
      logo: <FaTwitter />,
    },
    {
      logo: <FaInstagram />,
    },
    {
      logo: <FaGithub />,
    },
  ]);

  const [footer] = useState({
    heading: "Copyright",
    year: 2021,
    comp: "bil.dev",
    text: "All Rights Reserved",
  });
  return (
    <div className="footer__container">
      <div className="footer">
        <div className="footer__header">
          <div className="navbar__left-logo">
            {/* <img src={nav_logo} alt="logo" /> */}
            <h1>
              bil
              <span>dev</span>
            </h1>
          </div>
          <p>{contents.text}</p>
        </div>
        <div className="sc__logo">
          {logos.map((logo,index) => {
            return <div className="indi__logo" key={index}>{logo.logo}</div>;
          })}
        </div>
      </div>
      <div className="copyright__section">
        <p>
          {footer.heading} &copy; {footer.year} <span> {footer.comp}</span> .{" "}
          {footer.text}
        </p>
      </div>
    </div>
  );
}

export default Footer;
