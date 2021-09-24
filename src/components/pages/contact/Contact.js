import React from "react";
import "./contact.css";

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
              <a href="https://jciscreative.dev">
                For my more "freelance" type work, look here.
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
