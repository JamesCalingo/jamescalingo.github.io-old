import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
// import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import ExternalLinks from "./components/pages/ExternalLinks";
import Technologies from "./components/pages/Technologies";
import ButtonBar from "./components/ButtonBar"
import "./App.css"


function App() {
  return (
    <HashRouter basename="/">
      <div>
        <Jumbotron />
        <Route exact path="/" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/externallinks" component={ExternalLinks} />
        <Route exact path="/technologies" component={Technologies} />
        <p className="text-center"></p>
        <ButtonBar />
      </div>
    </HashRouter>
  );
}

export default App;
