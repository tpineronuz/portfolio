import React from "react";
import WorkListDesktop from "../components/MyWork/WorkListDesktop";
import WorkListMobile from "../components/MyWork/WorkListMobile";
import "./styles/MyWork.css";

export default function MyWork() {
  return (
    <div className="mywork-container">
      <div className="desktop">
        <WorkListDesktop />
      </div>
      <div className="mobile">
        <WorkListMobile />
      </div>
    </div>
  );
}
