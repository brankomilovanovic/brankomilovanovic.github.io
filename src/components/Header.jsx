import { IconButton } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const navbarRef = useRef(null);
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

  useEffect(() => {
    if (toggleMobileMenu) {
      document.addEventListener("click", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, [toggleMobileMenu]);

  const handleOnClickLink = () => {
    setToggleMobileMenu(false);
  };

  const handleOutsideClick = (e) => {
    if (
      navbarRef?.current &&
      !navbarRef?.current?.contains(e.target) &&
      e?.target?.nodeName?.toLowerCase() !== "img" &&
      toggleMobileMenu
    ) {
      setToggleMobileMenu(false);
    }
  };

  return (
    <div className="header">
      <div className="navbar-container">
        <NavLink to={"/"} className="navbar-name">
          Branko Milovanović
        </NavLink>
        <div
          ref={navbarRef}
          className={`navbar-links-container ${toggleMobileMenu && "active"}`}
        >
          <NavLink to={"/"} onClick={handleOnClickLink} className="navbar-link">
            Home
          </NavLink>
          <NavLink
            to={"/about-me"}
            onClick={handleOnClickLink}
            className="navbar-link"
          >
            About Me
          </NavLink>
          <NavLink
            to={"/projects"}
            onClick={handleOnClickLink}
            className="navbar-link"
          >
            Projects
          </NavLink>
          <NavLink
            to={"/contact"}
            onClick={handleOnClickLink}
            className="navbar-link"
          >
            Contact
          </NavLink>
          <NavLink
            to={"/download-resume"}
            onClick={handleOnClickLink}
            className="navbar-link"
          >
            Download Resume
          </NavLink>
        </div>
        <div className="hamburger">
          <IconButton
            onClick={() => setToggleMobileMenu((prevState) => !prevState)}
          >
            {!toggleMobileMenu ? (
              <img src="/assets/images/hamburger-menu.svg" />
            ) : (
              <img src="/assets/images/close.svg" />
            )}
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Header;
