import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Splash from "./components/pages/Splash";
import About from "./components/pages/About";
import Portfolio from "./components/pages/Portfolio";
import Contact from "./components/pages/Contact";
import Blog from "./components/pages/Blog"
import Technologies from "./components/pages/Technologies";
import ButtonBar from "./components/ButtonBar";
import NavTabs from "./components/NavTabs"
import "./App.css"


function App() {
  return (
    <HashRouter basename="/">
      <div>
        <Route exact path="/" component={Splash} />
  
        <NavTabs />
        <Route exact path="/about" component={About} />
        <Route exact path="/portfolio" component={Portfolio} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/technologies" component={Technologies} />
        <Route exact path ="/blog" component={Blog} />
        <p className="text-center"></p>
        <ButtonBar />
      </div>
    </HashRouter>
  );
}

export default App;
