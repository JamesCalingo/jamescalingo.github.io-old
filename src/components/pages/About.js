import React from 'react'
// import image
import profilePic from '../../images/picture-of-me.jpg'
import Technologies from './Technologies'

function About () {
  return (
    <div id='about' className='container mb-5'>
      <div className='card'>
        <div className='card-header'><h1>About Me</h1></div>
        <div className='card-body'>
          <img
            src={profilePic} className='img-fluid float-left mr-3 img-thumbnail profile-pic'
            alt='James Calingo'
          />
          <p>Hi! If the header at the top wasn't enough indication, my name is James Calingo (or "JC" as all the cool kids
          call me).
          </p>
          <p>For as long as I can remember, I've been a computer . Whether it was writing stories and papers in Word, playing with sounds in Garageband, or even just surfing the internet, I spent countless hours each day at the computer.</p>
          <p>In 2019, while searching for a new career path because the old one wasn't working, I found web development through a coding bootcamp. I quickly fell in love with the problem solving nature of it and the feeling of making code work.</p>
          <p>When I'm not busy accidentally breaking things, trying to figure out what I broke, and hoping that my
          computer isn't on fire while trying to get things working again, I like playing music, video games, and
          watching sports.
          </p>
          <p>There's probably more I could say here, but I can't think of it right now...</p>

        </div>
        <Technologies />
      </div>
      <a href='/'>Return to top</a>
    </div>

  )
}

export default About
