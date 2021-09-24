import React from "react";
import linkedinLogo from "./logos/LI-In-Bug.png";
import githubLogo from "./logos/GitHub-Mark-120px-plus.png";
import gmailLogo from "./logos/Gmail_2013.png";
import "./logobar.css";

function Logobar() {
  return (
    <div id="logobar" className="container">
   
    
          <a
            href="https://www.linkedin.com/in/james-calingo/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinLogo} className="buttonLogo" alt="LinkedIn" />
          </a>
   
          <a
            href="https://www.github.com/JamesCalingo"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubLogo} className="buttonLogo" alt="GitHub" />
          </a>
    
          <a href="mailto:james.calingo.web@gmail.com">
            <img src={gmailLogo} alt="Email me" className="buttonLogo" />
          </a>
 
    </div>
  );
}

export default Logobar;
