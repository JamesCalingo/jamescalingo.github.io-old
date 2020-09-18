import React from 'react'
import linkedinLogo from '../images/LI-In-Bug.png'
import githubLogo from '../images/GitHub-Mark-120px-plus.png'

function ButtonBar () {
  return (
    <div className='text-center'>
      <h1>Let's stay in touch!</h1>
      <a href='https://www.linkedin.com/in/james-calingo-373164145/' target='_blank' rel='noopener noreferrer'><button className='btn btn-light'>
        <img src={linkedinLogo} className='buttonLogo' alt='LinkedIn' />
                                                                                                               </button>
      </a>
      <a href='https://www.github.com/JamesCalingo' target='_blank' rel='noopener noreferrer'><button className='btn btn-light'>
        <img src={githubLogo} className='buttonLogo' alt='GitHub' />
                                                                                              </button>
      </a>
      <button className='btn btn-outline-primary'>
        <a href='mailto:james.calingo@gmail.com'>Email me</a>
      </button>
    </div>
  )
}

export default ButtonBar
