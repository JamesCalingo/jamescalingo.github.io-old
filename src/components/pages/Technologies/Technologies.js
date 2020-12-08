import React, {useState} from "react";
import './technologies.css'

function Technologies() {

 const [isActive, setActive] = useState(false)

  function toggleActive () {
setActive(!isActive)

  }
  
  return (
    <div id="technologies" className="">
      <div className="card">
        <div className="card-header">
          <h1>MY KNOWLEDGE BASE</h1>
          <h2>Things in gray are things I'm working on learning</h2>
        </div>
        <div className="card-body">
          <div className="panels">
            <div id="languages" onClick={toggleActive} className={isActive ? "active panel" : "panel"}>
              <h3 className="list-header">Languages</h3>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
                <li>SQL</li>
                <li>TypeScript</li>
                <li className="learning">Python</li>
                <li className="learning">Go</li>
                <li className="learning">Rust</li>
                <li className="learning">Java</li>

                
              </ul>
            </div>
            <div id="frameworks" onClick={toggleActive} className={isActive ? "active panel" : "panel"}>
              <h3 className="list-header">Frameworks/Libraries</h3>
              <ul>
                <li>React</li>
                <li className="learning">Angular</li>
                <li className="learning">Vue</li>
                <li>Bootstrap</li>
                <li>JQuery</li>
                <li className="learning">Jest</li>
               
              </ul>
            </div>
            <div id="other" onClick={toggleActive} className={isActive ? "active panel" : "panel"}>
              <h3 className="list-header">Other Important Things</h3>
              <ul>
              <li>Node.js</li>
                <li>Express</li>
                <li>MongoDB</li>
                <li>Git</li>
                <li>Heroku</li>
                <li className="learning">Vercel</li>
                <li className="learning">WebAssembly</li>
                <li className="learning">FaunaDB</li>
                <li className="learning">GraphQL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
