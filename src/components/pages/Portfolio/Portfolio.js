import React from "react";
import PortfolioCard from "./PortfolioCard"
import projects from "../../../projects.json"
import './portfolio.css'


class Portfolio extends React.Component {
  state = {
    projects: projects
  }

  render() {
    return (
      <div id="portfolio">
        <div className="card">
          <div className="card-header"><h1>A few of the (awesome) things I've worked on</h1></div>
          <div className="card-body projects">
            
                {/* Cards for projects */}
                {this.state.projects.map(projects =>{
          return(
            
              
            <PortfolioCard key={projects.id}
            title={projects.title} description={projects.description} link={projects.link} github={projects.github}
            />
            
            
          )
        })}


                {/* END CARD */}
              
          </div>
        </div>
      </div>
    )
  }
}

export default Portfolio