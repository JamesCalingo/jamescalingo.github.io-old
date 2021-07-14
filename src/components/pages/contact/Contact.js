import React from "react";
import linkedinLogo from "./logos/LI-In-Bug.png";
import githubLogo from "./logos/GitHub-Mark-120px-plus.png";
import gmailLogo from "./logos/Gmail_2013.png";
import "./contact.css"

function Contact() {
  return (
    <div id="contact" className="container">
      <div className="card">
        <div className="card-header">
          <h1>CONTACT ME</h1>
        </div>
        <div className="card-body text-center">
          <div id="contact-head">
            <h2>Let's keep in touch!</h2>
            <p>
              Here are just a few of the places around the internet where you
              can find me. I'd love to hear from you!
            </p>
          </div>
          <ul className="contact-list">
            <li>
              <a
                href="https://www.linkedin.com/in/james-calingo/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={linkedinLogo} className="buttonLogo" alt="LinkedIn" />
                Connect with me on LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://www.github.com/JamesCalingo"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img src={githubLogo} className="buttonLogo" alt="GitHub" />
                Check me out on GitHub
              </a>
            </li>
            <li>
              <a href="mailto:james.calingo.web@gmail.com">
                <img src={gmailLogo} alt="Email me" className="buttonLogo" />
                Email me: james.calingo.web@gmail.com
              </a>
            </li>
          </ul>
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
  );
}

export default Contact;
