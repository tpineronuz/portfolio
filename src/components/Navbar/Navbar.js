import React from "react";
import "./styles/Navbar.css";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";

export default function Navar() {
  return (
    <div classname='navbar-container'>
      <div className="desktop">
        <DesktopNavbar />
      </div>
      <div className="mobile">
        <MobileNavbar />
      </div>
    </div>
  );
}
