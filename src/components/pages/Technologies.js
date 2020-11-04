import React from "react";

function Technologies() {
  return (
    <div id="technologies" className="container mb-5">
      <div className="card">
        <div className="card-header">
          <h2>My knowledge base</h2><br />
          <p>Things in gray are things I'm working on learning</p>
        </div>
        <div className="card-body">
          <div className="panels row">
            <div id="languages" className="panel col-md-4">
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
            <div id="frameworks" className="panel col-md-4">
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
            <div id="other" className="panel col-md-4">
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
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
