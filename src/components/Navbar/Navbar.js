import React from "react";
import "./styles/Navbar.css";

import NavbarContextProvider from "../../contexts/Navbar/NavbarContextProvider";

import MobileNavbar from "./MobileNavbar";
import DesktopNavbar from "./DesktopNavbar";

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
