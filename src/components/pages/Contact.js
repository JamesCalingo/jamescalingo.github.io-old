import React from 'react'
import linkedinLogo from '../../images/LI-In-Bug.png'
import githubLogo from '../../images/GitHub-Mark-120px-plus.png'

function Contact() {
  return (
    <div className='container'>
      <div className='card'>
        <div className='card-header'>
          <h1>Let's keep in touch!</h1>
        </div>
        <div className='card-body text-center'>

          <a href='https://www.linkedin.com/in/james-calingo/' target='_blank' rel='noopener noreferrer'><button className='btn btn-light'>
            <img src={linkedinLogo} className='buttonLogo' alt='LinkedIn' />
          </button>
          </a>
          <a href='https://www.github.com/JamesCalingo' target='_blank' rel='noopener noreferrer'><button className='btn btn-light'>
            <img src={githubLogo} className='buttonLogo' alt='GitHub' />
          </button>
          </a>
          <button className='btn btn-outline-primary'>
            <a href='mailto:james.calingo@gmail.com'>Email me!</a>
          </button>
          <a href='/'>Return to top</a>
          {/* <form>
            <div className='form-group'>
              <label for='emailAddress'>Email address</label>
              <input type='email' class='form-control' id='emailInput1' placeholder='name@example.com' />
            </div>

            <div class='form-group'>
              <label for='Textarea'>Your comment</label>
              <textarea className='form-control' id='Textarea' rows='5' />
            </div>
            <button className='btn btn-primary' disabled>Submit...when I get this working.</button>
          </form> */}
        </div>
      </div>
    </div>
  )
}

export default Contact
