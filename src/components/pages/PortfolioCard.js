import React from "react";

function PortfolioCard (props){
  return(<div className="card mb-3 text-center">
                    
                      <div className="card-header">
                      <a href={props.link}><h3>{props.title}</h3></a>
                      </div>
                      <div className="card-body">
                      {props.description}</div>
                    
                  </div>
  )
}

export default PortfolioCard