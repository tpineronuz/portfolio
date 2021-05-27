import React from "react";
import "./styles/AboutMe.css";

import AboutMeMobile from "../components/AboutMe/AboutMeMobile";
import AboutMeDesktop from "../components/AboutMe/AboutMeDesktop";

export default function AboutMe() {
  return (
    <div className="about-container">
      <div className="desktop">
        <AboutMeDesktop />
      </div>
      <div className="mobile">
        <AboutMeMobile />
      </div>
    </div>
  );
}
