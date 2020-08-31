import React from "react";
// import { HashRouter, Route } from "react-router-dom";
import Splash from "./components/pages/Splash";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Technologies from "./components/pages/Technologies";
import ButtonBar from "./components/ButtonBar";
import NavTabs from "./components/NavTabs"
import "./App.css"


function App() {
  return (
    // <HashRouter basename="/">
      <div>
        <Splash />
  
        <NavTabs />
        <About />
         <Technologies />
        <Portfolio />
        <p className="text-center"></p>
        <ButtonBar />
      </div>
    // {/* </HashRouter> */}
  );
}

export default App;
