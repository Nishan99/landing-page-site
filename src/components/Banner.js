import React,{useState} from "react";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaPinterest } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import pp1 from "../images/man-01.png";
function Banner() {
  const [infoMe,setInfoMe] = useState({
    title: "I am Sumit Sunar",
    text: "I'm an enthusiast web developer since long time",
    image: pp1,
  });
  const [smLogo,setSmLogo] = useState([
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
      logo: <FaPinterest />,
    },
    {
      logo: <FaYoutube />,
    },
  ]);
  return (
    <div className="header" id="banner">
      <div className="row">
        <div className="header__section">
          <ul className="header__ul">
            {smLogo.map((logo,index) => {
              return <li key={index}>{logo.logo}</li>;
            })}
          </ul>
          <h1 className="banner__header">{infoMe.title}</h1>
          <p>{infoMe.text}</p>
          <div className="header__buttons">
            <a
              href="https://drive.google.com/file/d/138Q46I6nlnYJviJ-I8U3xjqkT4kBmHpn/view?usp=sharing"
              target="__blank"
              className="btn btn-outline"
            >
              My Portfolio
            </a>
          </div>
        </div>
        <div className="col-6">
          <div className="banner__img">
            <img src={infoMe.image} alt="pp"/>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
