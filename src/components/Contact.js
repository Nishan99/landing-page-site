import React, { useState } from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaRegEnvelope } from "react-icons/fa";

function Contact() {
  const [contents] = useState({
    header: "HAVE ANY QUERIES",
    heading: "Contact Me",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
  });
  const [contDet] = useState([
    {
      logo: <FaMapMarkerAlt />,
      heading: "Locate me",
      det: "Greenland, Kathmandu",
    },
    {
      logo: <FaPhoneAlt />,
      heading: "Give me a Call",
      det: "Mob: +977-9864886138",
    },
    {
      logo: <FaRegEnvelope />,
      heading: "Get in online",
      det: "sumitsunar901@gmail.com",
    },
  ]);
  return (
    <div className="container__contact" id="contact">
      <div className="content__contact">
        <h3>{contents.header}</h3>
        <h1>{contents.heading}</h1>
        <p>{contents.text}</p>
      </div>
      <div className="contact__inf">
        {contDet.map((info,index) => {
          return (
            <div className="details" key={index}>
              <div className="cont__logo">{info.logo}</div>
              <div className="cont__det">
                <h3>{info.heading}</h3>
                <p>{info.det}</p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="messages">
        <div className="row__1">
          <input type="text" placeholder="Your Name" />
          <input type="text" placeholder="Your Email" />
        </div>
        <div className="subject">
          <input type="text" placeholder="Your Subject" />
        </div>
        <div className="msg__text">
          <input type="text" placeholder="Your Message" />
        </div>
        <span  className="send__message">
          Send Message
        </span>
      </div>
    </div>
  );
}

export default Contact;
