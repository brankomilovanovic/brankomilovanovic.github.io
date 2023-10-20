import React, { useState } from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [toggleMobileMenu, setToggleMobileMenu] = useState(false);

  return (
    <div className="header">
      <div className="navbar-container">
        <div>
          <NavLink to={"/"}>Branko Milovanovic | Portfolio</NavLink>
        </div>
        <div className="navbar-links-container">
          <NavLink to={"/about-me"}>About me</NavLink>
          <NavLink to={"/contact-me"}>Contact me</NavLink>
        </div>
      </div>
    </div>
  );
};

export default Header;
