import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Jumbotron from "./components/Jumbotron";
// import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import ExternalLinks from "./components/pages/ExternalLinks";

function App() {
  return (
    <Router>
      <div>
        <Jumbotron />
        <Route exact path="/" component={About} />
         <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route path="/externallinks" component={ExternalLinks} />
        hi
      </div>
    </Router>
  );
}

export default App;
