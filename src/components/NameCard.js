import React from "react"
import {useMediaQuery} from "react-responsive"

function NameCard() {
  const taglines = ["Software Developer", "Human", "Hopeful", "Got this working!", "Funny...?", "Unprofessional Gamer", "Nice dude", "semi-retired psychologist", "Not sus", "open to suggestions"]
  
  const isSmallScreen = useMediaQuery({
    query: "(max-width: 1000px)"
  })

  return(
    <a href={isSmallScreen ? "#mobile-menu" : "/"}>
    <div className="nameCard">
     
      <div className="name">JAMES CALINGO;</div>
      <div className="tagline">
      {taglines[0].toUpperCase()};
      </div>
    </div>
      </a>
  )
}

export default NameCard