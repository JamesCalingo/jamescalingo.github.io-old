import React from "react";
import { useMediaQuery } from "react-responsive";
import "./namecard.css";

function NameCard() {
  const taglines = ["Software Developer", "Web Developer"];

  function flip() {
    return Math.round(Math.random());
  }

  const isSmallScreen = useMediaQuery({
    query: "(max-width: 1000px)",
  });

  return (
    <a href={isSmallScreen ? "#mobile-menu" : "/"}>
      <div className="nameCard">
        <div className="name">JAMES CALINGO;</div>
        <div className="tagline">{taglines[flip()].toUpperCase()};</div>
      </div>
    </a>
  );
}

export default NameCard;
