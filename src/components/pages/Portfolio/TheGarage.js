import React, { useState, useEffect } from "react";
import PortfolioCard from "./PortfolioCard";
import oldProjects from "../../../otherprojects.json";
import "./portfolio.css";

function TheGarage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(oldProjects);
  }, []);

  console.log(projects)
  return (
    <div>
      <h1>"The Garage"</h1>
      <p>
        Here, you can see some of my older projects. A lot of these are from my
        VERY EARLY days of learning to code, but I think they're still pretty
        interesting.
      </p>

      {oldProjects.map((project) => {
        return (
          <PortfolioCard
            key={project.id}
            title={project.title}
            description={project.description}
            technologies={project.technologies}
            link={project.link}
            github={project.github}
          />
        );
      })}
    </div>
  );
}

export default TheGarage;
