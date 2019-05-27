import React from "react";
import "../App.css";
import NavTabs from "./NavTabs"


function Jumbotron (){
  return(
    <div className="jumbotron py-3 text-center">
    <h1  className="display-4">JAMES CALINGO</h1>
    <p class="lead">Web developer. Musicdian. Gamer. Dorito addict.</p>
    <NavTabs />
    </div>
  )
  
}

export default Jumbotron