import React from "react";

function Portfolio(props) {
  return (
    <div className="container">
      <div className="card">
        <div className="card-header"><h1>A few of the (awesome) things I've worked on</h1></div>
        <div className="card-body">
          <div className="row">
            <div className="col-12 col-md-4">
              <div className="card">
                <div className="card-header">{props.title}
                </div>
                <div className="card-body">
                {props.description}</div>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export default Portfolio