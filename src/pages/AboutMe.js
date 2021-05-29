import React from "react";
import AboutMeMobile from "../components/AboutMe/AboutMeMobile";
import AboutMeDesktop from "../components/AboutMe/AboutMeDesktop";
import "./styles/AboutMe.css";

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
