import React from "react";

export default function MobileMenu() {
  return (
    <div id="mobile-menu" className="card">
      <div className="card-body">
        <ul>
          <li className="nav-item">
            <a href="#about">About</a>
          </li>
          <li className="nav-item">
            <a href="#technologies">Knowledge Base</a>
          </li>

          <li className="nav-item">
            <a href="#portfolio">Portfolio</a>
          </li>
          <li className="nav-item">
            <a href="#contact">Contact Me</a>
          </li>
          <li className="nav-item">
            <a href="https://jamescalingo.com/">Blog</a>
          </li>
          <li className="nav-item">
            <a href="https://docs.google.com/document/d/e/2PACX-1vQcFopUsFf6TglXF6i6vTRadVZbpgs1bSS-UJ6w07hVXV1EbfkUrr5YeeMcs5tXTZwYnGcqqtQZguHk/pub">
              Resume
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
