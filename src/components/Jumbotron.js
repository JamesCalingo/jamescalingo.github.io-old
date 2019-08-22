import React from "react";
import "../App.css";
import NavTabs from "./NavTabs"


function Jumbotron (){
  return(
    <div className="jumbotron-fluid py-3 mb-5 text-center">
    <h1  className="display-4">JAMES CALINGO</h1>
    <p className="lead">Web developer. Musician. Gamer. Dorito addict.</p>
    <NavTabs />
    </div>
  )
  
}

export default Jumbotron