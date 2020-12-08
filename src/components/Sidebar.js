import React from 'react'
import NameCard from './NameCard'
import { useMediaQuery } from "react-responsive"


function Sidebar () {
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 1000px)"
  })

  return (
    <div id="sidebar" className={isSmallScreen ? "small-screen" : ""}>
    <NameCard />
    <ul className={isSmallScreen ? "dropdown-content" : ""}>
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
  )
}

export default Sidebar
