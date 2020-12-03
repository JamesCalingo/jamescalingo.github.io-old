import React from "react"

function NameCard() {
  const taglines = ["Software Developer", "Human", "Hopeful", "Got this working!", "Funny...?", "Unprofessional Gamer", "Nice dude", "semi-retired psychologist", "Not sus", "open to suggestions"]
  let randomI = Math.floor(Math.random() * taglines.length)
  let tagline = taglines[randomI].toUpperCase()

  return(
    <a href="/">
    <div className="nameCard">
     
      <div className="name">JAMES CALINGO;</div>
      <div className="tagline">
      DEVELOPER;
      </div>
    </div>
      </a>
  )
}

export default NameCard