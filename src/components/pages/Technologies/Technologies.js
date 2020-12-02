import React from "react";
import './technologies.css'

function Technologies() {

  const panels = document.querySelectorAll('.panel')

  function toggleOpen () {
    this.classList.toggle('open')
  }
  
  function toggleActive (event) {
    console.log(event.propertyName)
    if(event.propertyName.includes("flex")){
  this.classList.toggle("open-active")
    }
  }
  
  panels.forEach(panel => panel.addEventListener('click', toggleOpen))
  panels.forEach(panel => panel.addEventListener('transitionend', toggleActive))
  
  return (
    <div id="technologies" className="container mb-5">
      <div className="card">
        <div className="card-header">
          <h2>My knowledge base</h2><br />
          <p>Things in gray are things I'm working on learning</p>
        </div>
        <div className="card-body">
          <div className="panels">
            <div id="languages" className="panel">
              <h3>Languages</h3>
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
            <div id="frameworks" className="panel">
              <h3>Frameworks/Libraries</h3>
              <ul>
                <li>React</li>
                <li className="learning">Angular</li>
                <li className="learning">Vue</li>
                <li>Bootstrap</li>
                <li>JQuery</li>
                <li className="learning">Jest</li>
               
              </ul>
            </div>
            <div id="other" className="panel">
              <h3>Other Important Things</h3>
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
