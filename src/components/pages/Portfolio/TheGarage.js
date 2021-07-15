import React, { useState, useEffect } from "react";
import PortfolioCard from "./PortfolioCard";
import oldProjects from "../../../projects.json";
import "./portfolio.css";

function TheGarage() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(oldProjects);
  }, []);

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
            key={projects.id}
            title={projects.title}
            description={projects.description}
            technologies={projects.technologies}
            link={projects.link}
            github={projects.github}
          />
        );
      })}
    </div>
  );
}

export default TheGarage;
