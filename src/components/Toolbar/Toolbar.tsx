import React from "react";

import DrawerToggle from "../SideDrawer/DrawerToggle";
import "./Toolbar.css";

import Background from "../../../public/lemon.png";

const toolbar = ({ handleToggle }) => {
  const logoStyle = {
    backgroundImage: `url(${Background})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%"
  };

  return (
    <header className="toolbar">
      <nav className="toolbar__navigation">
        <div>
          <DrawerToggle click={handleToggle} />
        </div>
        <div style={logoStyle} className="toolbar__logo">
          <a href="/">appFólio</a>
        </div>
        <div className="spacer" />
        <div className="toolbar_navigation-items">
          <ul>
            <li>
              <a href="/">Projects</a>
            </li>
            <li>
              <a href="/">About</a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
export default toolbar;
