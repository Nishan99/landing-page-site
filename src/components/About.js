import React, { useState } from "react";
import man from "../images/man-01.png";

function About() {
  const [headers] = useState({
    heading1: "About Me",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
    image: man,
    heading2: "Hi there",
    about:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
  });
  const [personalDetails] = useState([
    {
      heading: "Name",
      value: "Sumit Sunar",
      class: "name",
    },
    {
      heading: "Email",
      value: "sumitsunar901@gmail.com",
      class: "eml",
    },
    {
      heading: "Phone",
      value: "+977-9864886138",
      class: "phone",
    },
    {
      heading: "LinkedIn",
      value: "sumit-sunar-266a20202",
      class: "linkedIn",
    },
  ]);
  return (
    <div className="container__about" id="about">
      <div className="aboutMe">
        <h1 className="header__aboutme">{headers.heading1}</h1>
        <p>{headers.text}</p>
      </div>
      <div className="mid__section">
        <img src={headers.image} alt="sumit.jpg" />
        <div className="contents">
          <h1>{headers.heading2}</h1>
          <p>{headers.about}</p>
          <div className="personal__details">
            {personalDetails.map((det,index) => {
              return (
                <h3 className={det.class} key={index}>
                  {det.heading}: <br />
                  <span>{det.value}</span>
                </h3>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
