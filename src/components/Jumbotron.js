import React from "react";
import "../App.css";
import NavTabs from "./NavTabs"


function Jumbotron (){
  return(
    <div>
    <div className="jumbotron-fluid pt-3 pb-2 text-center">
    <h1  className="display-4">JAMES CALINGO</h1>
    <p className="lead">Web and software developer for the people.</p>
    </div>
    <NavTabs />
    </div>
  )
  
}

export default Jumbotron