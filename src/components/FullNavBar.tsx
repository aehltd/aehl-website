import React from "react";
import { useLocation } from "react-router-dom";
import NavBar from "./NavBar";
import IRMenu from "./IRBar";

const useIsIRPage = () => {
  const location = useLocation();
  return location.pathname.startsWith("/ir");
};

const FullNavBar = () => {
  const isIRPage = useIsIRPage();

  return (
    <nav>
        <NavBar />
        {isIRPage && <IRMenu />}
    </nav>
  )
};

export default FullNavBar;
