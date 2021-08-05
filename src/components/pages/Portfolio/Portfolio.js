import React, { useState, useEffect } from "react";
import PortfolioCard from "./PortfolioCard";
import projectsObj from "../../../projects.json";
import "./portfolio.css";

function Portfolio() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsObj);
  }, []);

  return (
    <div id="portfolio">
      <div className="card">
        <div className="card-header">
          <h1>MY PORTFOLIO OF WORK</h1>
          <h2>A few of the (awesome) things I've worked on</h2>
        </div>

        <div className="work card-body">
          <p id="explain">
            Here's where you can see a few of the things I've made! Click on the
            banner on top to go to the app itself, or the Github logo at the
            bottom of each project card to go to the repository for that
            project.
          </p>

          <div className="projects">
            {/* Cards for projects */}
            {projects.map((project) => {
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

            {/* END CARD */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
