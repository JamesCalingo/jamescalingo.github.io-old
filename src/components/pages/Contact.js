import React from 'react'

function Contact () {
  return (
    <div className='container'>
      <div className='card'>
        <div className='card-header'>
          <h1>Contact me!</h1>
        </div>
        <div className='card-body'>
        You can email me at james.calingo@gmail.com, or if you want, you can leave a comment here. I can't promise I'll read it though, so be aware of that!
          <form>
            <div className='form-group'>
              <label for='emailAddress'>Email address</label>
              <input type='email' class='form-control' id='emailInput1' placeholder='name@example.com' />
            </div>

            <div class='form-group'>
              <label for='Textarea'>Your comment</label>
              <textarea className='form-control' id='Textarea' rows='5' />
            </div>
            <button className='btn btn-primary' disabled>Submit...when I get this working.</button>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
