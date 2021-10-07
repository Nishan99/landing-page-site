import React, { useState } from "react";
import { FaGithub } from "react-icons/fa";
import { FaTelegram } from "react-icons/fa";

function Services() {
  const [header] = useState({
    heading: "INTERESTS",
    subHeading: "My INTERESTS",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry Lorem Ipsum standard dummy text.",
  });

  const [service] = useState([
    {
      icon: <FaGithub className="commonIcons" />,
      heading: "Web Development",
      text: " Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
    },
    {
      icon: <FaTelegram className="commonIcons" />,
      heading: "Web Development",
      text: " Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
    },
    {
      icon: <FaGithub className="commonIcons" />,
      heading: "Web Development",
      text: " Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
    },
    {
      icon: <FaGithub className="commonIcons" />,
      heading: "Web Development",
      text: " Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
    },
    {
      icon: <FaGithub className="commonIcons" />,
      heading: "Web Development",
      text: " Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
    },
    {
      icon: <FaGithub className="commonIcons" />,
      heading: "Web Development",
      text: " Lorem Ipsum is simply dummy text of the printing typesetting industry. simply dummy",
    },
  ]);
  return (
    <div className="services" id="interest">
      <div className="services__header">
        <div className="common">
          <h3 className="heading">{header.heading}</h3>
          <h1 className="mainHeader">{header.subHeading}</h1>
          <p className="mainContent">{header.text}</p>
        </div>
        <div className="row">
          {service.map((item,index) => {
            return (
              <div className="services__box" key={index}>
                {item.icon}
                <h3 className="services__box-header">{item.heading}</h3>
                <div className="services__box-p">{item.text}</div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Services;
