import React from "react";
import NameCard from "../namecard/NameCard";
import { useMediaQuery } from "react-responsive";
import "./sidebar.css";

function Sidebar() {
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 1000px)",
  });

  return (
    <div id="sidebar" className={isSmallScreen ? "small-screen" : ""}>
      <NameCard />
      <ul className={isSmallScreen ? "dropdown-content" : ""}>
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
  );
}

export default Sidebar;
