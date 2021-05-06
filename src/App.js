import React from "react";
import { HashRouter, Route } from "react-router-dom";
import Landing from "./components/pages/Landing";
import About from "./components/pages/About";
import Technologies from "./components/pages/Technologies/Technologies";
import Portfolio from "./components/pages/Portfolio/Portfolio";
import Contact from "./components/pages/Contact";
import Sidebar from "./components/Sidebar";
import MobileMenu from "./components/pages/MobileMenu";
import "./App.css";

function App() {
  return (
    <div className="container-grid">
      <Sidebar />

      <div className="pages">
        <HashRouter basename="/">
          <Route exact path="/" component={Landing} />
          <Route exact path="/about" component={About} />
          <Route exact path="/technologies" component={Technologies} />
          <Route exact path="/portfolio" component={Portfolio} />
          <Route exact path="/contact" component={Contact} />
          <Route exact path="/mobile-menu" component={MobileMenu} />
        </HashRouter>
        <footer id="copyright">© James Calingo</footer>
      </div>
    </div>
  );
}

export default App;
