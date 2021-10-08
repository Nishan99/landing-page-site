import React, { useState } from "react";

function Skills() {
  const [contents,setContents] = useState({
    heading1: "I,VE SKILLS ON",
    heading2: "Let's Work Together",
    text: "Phasellus accumsan scelerisque dolor, quis mattis justo bibendum non. Nulla sollicitudin turpis in elementum varius. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae",
    buttonText: "Hire Me Now",
  });
  const [skillbar] = useState([
    {
      PGL: "HTML",
      cls1: "bar__html",
      cls2: "level__html",
    },
    {
      PGL: "CSS",
      cls1: "bar__css",
      cls2: "level__css",
    },
    {
      PGL: "JavaScript",
      cls1: "bar__js",
      cls2: "level__js",
    },
    {
      PGL: "React",
      cls1: "bar__react",
      cls2: "level__react",
    },
  ]);
  return (
    <div className="container__skills" id="skills">
      <div className="skills__contents">
        <h3>{contents.heading1}</h3>
        <h1>{contents.heading2}</h1>
        <p>{contents.text}</p>
        <span>{contents.buttonText}</span>
      </div>
      <div className="skill__bars">
        {skillbar.map((skill,index ) => {
          return (
            <div key={index} className={skill.PGL}>
              <p>{skill.PGL}</p>
              <div className={skill.cls1}>
                <div className={skill.cls2}></div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Skills;
