import React from "react";
import PortfolioCard from "./PortfolioCard";
import projects from "../../../projects.json";
import "./portfolio.css";

class Portfolio extends React.Component {
  state = {
    projects: projects,
  };

  render() {
    return (
      <div id="portfolio">
        <div className="card">
          <div className="card-header">
            <h1>MY PORTFOLIO OF WORK</h1>
            <h2>A few of the (awesome) things I've worked on</h2>
          </div>

          <div className="card-body">

            <h2 id="explain-github">
              Click on the Github logo in each project card to go to the
              repository for that project
            </h2>

            <div className="projects">
              {/* Cards for projects */}
              {this.state.projects.map((projects) => {
                return (
                  <PortfolioCard
                    key={projects.id}
                    title={projects.title}
                    description={projects.description}
                    link={projects.link}
                    github={projects.github}
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
}

export default Portfolio;
