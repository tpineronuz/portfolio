import { createContext, useState } from "react";

export default ({ children }) => {
  const [state, setState] = useState({
    navbarTitle: "T. Piñero // Web Developer",
  });
  return (
    <NavbarContext.Provider value={[state, setState]}>
      {children}
    </NavbarContext.Provider>
  );
};

export const NavbarContext = createContext();
