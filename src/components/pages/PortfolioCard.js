import React from "react";

function PortfolioCard (props){
  return(<div className="card mb-3">
                    
                      <div className="card-header text-center">
                      <a href={props.link}><h3>{props.title}</h3></a>
                      </div>
                      <div className="card-body border-bottom mb-2">
                      {props.description}</div>
                    <a className="text-right" href={props.github}>Github</a>
                  </div>
  )
}

export default PortfolioCard