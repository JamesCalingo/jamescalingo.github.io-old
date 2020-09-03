import React from "react";
import Splash from "./components/pages/Splash";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
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
         
        <Portfolio />
       
        <ButtonBar />
      </div>
    // {/* </HashRouter> */}
  );
}

export default App;
