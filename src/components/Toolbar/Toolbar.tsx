import React from "react";

import DrawerToggle from "../SideDrawer/DrawerToggle";
import "./Toolbar.css";

const toolbar = ({ handleToggle }) => (
  <header className="toolbar">
    <nav className="toolbar__navigation">
      <div>
        <DrawerToggle click={handleToggle} />
      </div>
      <div className="toolbar__logo">
        <a href="/">
          <img src="../../public/lemon.png" alt="THE LOGO" />
        </a>
      </div>
      <div className="spacer" />
      <div className="toolbar_navigation-items">
        <ul>
          <li>
            <a href="/">Producst</a>
          </li>
          <li>
            <a href="/">Users</a>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default toolbar;
