import React from "react";

function Technologies() {
  return (
    <div id="technologies" className="container mb-5">
      <div className="card">
        <div className="card-header">
          <h2>My knowledge base</h2>
        </div>
        <div className="card-body">
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <h3>What I know</h3>
                <ul>
                  <li>HTML</li>
                  <li>CSS</li>
                  <li>JavaScript</li>
                  <li>Bootstrap</li>
                  <li>JQuery</li>
                  <li>Node.js</li>
                  <li>Express</li>
                  <li>MySQL</li>
                  <li>MongoDB</li>
                  <li>React</li>
                  <li>Git</li>
                  <li>Heroku</li>
                </ul>
              </div>
              <div className="col-md-6">
                <h3>What I'm excited to learn</h3>
                <ul>
                  <li>TypeScript</li>
                  <li>Python</li>
                  <li>Go</li>
                  <li>Rust</li>
                  <li>Java</li>
                  <li>Angular</li>
                  <li>Vue</li>
                  <li>Jest</li>
                  <li>WebAssembly</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Technologies;
