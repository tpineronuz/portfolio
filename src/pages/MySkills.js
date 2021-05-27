import React from "react";
import "./styles/MySkills.css";

import MySkillsMobile from '../components/MySkills/MySkillsMobile';
import MySkillDesktop from '../components/MySkills/MySkillsDesktop';

export default function MySkills() {
  return (
    <div className="my-skill-container">
      <div className="desktop">
        <MySkillDesktop />
      </div>
      <div className="mobile">
        <MySkillsMobile />
      </div>
    </div>
  );
}
