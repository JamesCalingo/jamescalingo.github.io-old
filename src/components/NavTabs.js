import React from "react";

function NavTabs() {
  return (
    <ul className="nav justify-content-center mb-1">
      <li className="nav-item">
        <a href="#about" className={window.location.pathname === "/about" ? "nav-link active" : "nav-link"}>
          About Me
        </a>
      </li>

      <li className="nav-item">
        <a href="#portfolio"
          className={window.location.pathname === "/portfolio" ? "nav-link active" : "nav-link"}
        >
          Portfolio
        </a>
      </li>

      <li className="nav-item">
        <a href="#technologies"
          className={window.location.pathname === "/technologies" ? "nav-link active" : "nav-link"}
        >
          Tech Skills
        </a>
      </li>

      <li className="nav-item">
        <a
          href="https://jamescalingo.vercel.app/"
          className={window.location.pathname === "/blog" ? "nav-link active bg-dark" : "nav-link"}
        >
          Blog
        </a>
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
