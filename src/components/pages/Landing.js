import React from "react";


function Landing() {

  return (
    <div id="landing">
      <h1>Developer for The Internet™ and the rest of the world. Including Sealand.</h1>
      <ul className="home-menu">
      <li className='nav-item'>
        <a href='#about'>
          About
        </a>
      </li>
      <li className="nav-item">
      <a href="#technologies">
       Knowledge Base
      </a>
    </li>

      <li className='nav-item'>
        <a href='#portfolio'>
          Portfolio
        </a>
      </li>
      <li className="nav-item">
        <a href="#contact">
          Contact Me
        </a>
      </li>
      <li className='nav-item'>
        <a href='https://jamescalingo.com/'>
          Blog
        </a>
        </li>
        {/* <li className="nav-item">
          <a href="https://docs.google.com/document/d/e/2PACX-1vQ2CNmUFp-JwXxwvbgYvfe9-w_5PCCeDiGdZrnBGgbpNQQ0BsDtwjNFi7Qhb6ccY5_9QujoAYZWFxAA/pub">
            Resume
          </a>
        </li> */}
    </ul>
    </div>
  );
}

export default Landing;
