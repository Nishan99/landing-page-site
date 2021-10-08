import React, { useState } from "react";

function Projects() {
  const [content1] = useState({
    heading: "Projects Showcase",
    text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
  });

  const [projects,setProjects] = useState([
    {
      class: "web",
      heading: "E-Commerce Website",
      link: "https://competent-albattani-5dce3f.netlify.app/",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
    },

    {
      class: "todo",
      heading: "To-Do App",
      link: "https://focused-poincare-11ca24.netlify.app/",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
    },
    {
      class: "game",
      heading: "Guessing Game",
      link: "https://keen-saha-3200c4.netlify.app/",
      text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum standard dummy text.",
    },
  ]);
  return (
    <div className="container__projects" id="projects">
      <div className="contents__projects">
        <h1>{content1.heading}</h1>
        <p>{content1.text}</p>
      </div>
      <div className="projects">
        {projects.map((project,index) => {
          return (
            <div className="project__box" key={index}>
              <h2>{project.heading}</h2>
              <p>{project.text}</p>
              <a href={project.link}>See Project</a>
            </div>
          );
        })}
      </div>
      <div className="bar"></div>
    </div>
  );
}

export default Projects;
