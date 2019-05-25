import React from "react";
import projects from "../../projects.json"

function Portfolio(props) {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header"><h1>A few of the (awesome) things I've worked on</h1></div>
        <div className="card-body">
          <div className="row">
            <div className="col-12 col-md-4">
            {/* Cards for projects */}
              {props.projects.map((projects) => {
                return (
                  <div className="card">
                    <a href={projects.link}>
                      <div className="card-header">
                      {projects.title}
                      </div>
                      <div className="card-body">
                      {projects.description}</div>
                    </a>
                  </div>
                );
              })}
              

              {/* END CARD */}
            </div>
          </div>
          <div className="row text-center">
          <div className="col-12">
          <h1 className="portfolioTag">MORE TO COME SOON</h1>
          </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Portfolio