import React from "react";
import NavbarContextProvider from "../../contexts/Navbar/NavbarContextProvider";
import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";
import "./styles/Navbar.css";

export default function Navar() {
  return (
    <div classname="navbar-container">
      <div className="desktop">
        <DesktopNavbar />
      </div>
      <div className="mobile">
        <NavbarContextProvider>
          <MobileNavbar />
        </NavbarContextProvider>
      </div>
    </div>
  );
}
