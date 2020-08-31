import React from "react";
import PortfolioCard from "./PortfolioCard"
import projects from "../../projects.json"


class Portfolio extends React.Component {
  state = {
    projects: projects
  }

  render() {
    return (
      <div id="portfolio" className="container">
        <div className="card">
          <div className="card-header"><h1>A few of the (awesome) things I've worked on</h1></div>
          <div className="card-body">
            
                {/* Cards for projects */}
                {this.state.projects.map(projects =>{
          return(
            
              
            <PortfolioCard key={projects.id}
            title={projects.title} description={projects.description} link={projects.link} github={projects.github}
            />
            
            
          )
        })}


                {/* END CARD */}
              
            <div className="row text-center">
              <div className="col-12">
                <h1 className="portfolioTag">MORE TO COME SOON</h1>
              </div>
            </div>
          </div>
        </div>
        <a href="/">Return to top</a>
      </div>
    )
  }
}

export default Portfolio