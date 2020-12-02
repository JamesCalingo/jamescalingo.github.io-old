import React from 'react'
import NameCard from './NameCard'

function Sidebar () {
  return (
    <div className="sidebar">
    <NameCard />
    <ul className='justify-content-center mb-1 mt-0'>
      <li className='nav-item'>
        <a href='#about'>
          About
        </a>
      </li>
      {/* <li className="nav-item">
      <a href="#technologies">
        My Technologies
      </a>
    </li> */}

      <li className='nav-item'>
        <a href='#portfolio'>
          Portfolio
        </a>
      </li>
 
      <li className="nav-item">
        <a href="#contact">
          External Links
        </a>
      </li>
      <li className='nav-item'>
        <a href='https://jamescalingo.com/'>
          Blog
        </a>
        </li>
    </ul>
    </div>
  )
}

export default Sidebar
