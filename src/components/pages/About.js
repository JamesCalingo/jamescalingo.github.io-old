import React from "react";
// import image
import profilePic from '../../images/picture-of-me.jpg';

function About () {
  return(
    <div className="container">
    <div className="card">
    <div className="card-header"><h1>About Me</h1></div>
    <div class="card-body">
        <img src={profilePic} class="img-fluid float-left mr-3 img-thumbnail profile-pic"
          alt="Me! (Well, it will be soon...)" />
        <p>Hi! If the header at the top wasn't enough indication, my name is James Calingo (or "JC" as all the cool kids
          call me).</p>
        <p>Born in Massachusetts across the Charles River from Boston and raised in Jersey across the Hudson River from
          New York (give or take a few miles), I'm an aspiring web developer with experience in many different technologies such as JavaScript, Node, Express, MySQL, Mongo, React, and more.</p>
        <p>When I'm not busy accidentally breaking things, trying to figure out what I broke, and hoping that my
          computer isn't on fire while trying to get things working again, I like playing music, video games, and
          watching sports.</p>
        <p>There's probably more I could say here, but I can't think of it right now...</p>

      </div>
    </div>
    </div>
    
  )
}

export default About