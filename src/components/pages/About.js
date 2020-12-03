import React from 'react'
import profilePic from '../../images/picture-of-me.jpg'


function About () {
  return (
    <div id='about' className='container mb-5'>
      <div className='card'>
        <div className='card-header'><h1>ABOUT ME</h1></div>
        <div id="bio" className='card-body'>
          <img
            src={profilePic} className='img-thumbnail profile-pic'
            alt='James Calingo'
          />

          <h1>Hi!</h1>
          <p>My name is James Calingo (or "JC" as all the cool kids
          call me), and I am a web/software developer.</p>

          <p>For as long as I can remember, I've been working with computers. Whether it was writing stories and papers in Word, playing with sounds in Garageband, or even just surfing the internet, I spent countless hours each day at the computer.</p>
          <p>One day, while browsing around the internet in search of a new career path, I found web development through a coding bootcamp. I quickly fell in love with the problem solving nature of it and the feeling of making code work.</p>
          <p>Now, I'm working on dynamic applications, learning new things every day, and trying to keep up with the busy world of software development.</p>
          <p>When I'm not busy writing code, fixing strange bugs, and hoping that my
          computer isn't on fire while trying to get things working again, I like playing music, video games, and
          watching sports.
          </p>
          <p>And that's basically me in a nutshell. If you want to know more about me, you can check out my blog by using the link in the sidebar.</p>

        </div>
     
      </div>
    </div>

  )
}

export default About
