import React from "react";
import githubLogo from "../../images/GitHub-Mark-120px-plus.png"

function PortfolioCard (props){
  return(<div className="card mb-3">
                    
                      <div className="card-header text-center">
                      <a href={props.link} target="_blank" rel="noopener noreferrer"><h3>{props.title}</h3></a>
                      </div>
                      <div className="card-body border-bottom mb-2">
                      <img src={props.image} alt={props.alt}></img>
                      {props.description}</div>
                    <a className="text-center" href={props.github} target="_blank" rel="noopener noreferrer"><img src={githubLogo} className="buttonLogo" alt="Github"/></a>
                  </div>
  )
}

export default PortfolioCard