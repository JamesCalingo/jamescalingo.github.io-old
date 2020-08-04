import React from "react";
import { Link } from "react-router-dom";

function NavTabs() {
  return (
    <ul className="nav justify-content-center mb-3">
      <li className="nav-item">
        <Link to="/" className={window.location.pathname === "/" ? "nav-link active" : "nav-link"}>
          About Me
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/portfolio"
          className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
        >
          Portfolio
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/technologies"
          className={window.location.pathname === "/technologies" ? "nav-link active" : "nav-link"}
        >
          Tech Skills
        </Link>
      </li>

      <li className="nav-item">
        <Link
          to="/blog"
          className={window.location.pathname === "/blog" ? "nav-link active" : "nav-link"}
        >
          Blog
        </Link>
      </li>
      {/* <li className="nav-item">
        <Link
          to="/externallinks"
          className={window.location.pathname === "/externallinks" ? "nav-link active" : "nav-link"}
        >
          External Links
        </Link>
      </li> */}
    </ul>
  );
}

export default NavTabs;
