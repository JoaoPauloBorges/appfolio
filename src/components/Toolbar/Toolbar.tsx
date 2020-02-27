import React, { useState } from "react";
import {Link } from "react-router-dom";

import DrawerToggle from "../SideDrawer/DrawerToggle";
import Background from "../../assets/lemon.webp";
import SideDrawer from "../SideDrawer/SideDrawer";
import "./Toolbar.css";


const Toolbar: React.FC = () => {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);
  const deactiveDrawer = () => setToggle(false);

  const logoStyle = {
    backgroundImage: `url(${Background})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    height: "100%"
  };

  return (
    <div>
      <SideDrawer deactiveDrawer={deactiveDrawer} show={toggle} />
      <header className="toolbar">
        <nav className="toolbar__navigation">
          <div>
            <DrawerToggle click={handleToggle} />
          </div>
          <div style={logoStyle} className="toolbar__logo">
            <Link to="/">appFólio</Link>
          </div>
          <div className="spacer" />
          <div className="toolbar_navigation-items">
            <ul>
              <li>
                <Link to="/projects">Projects</Link>
              </li>
              <li>
                <Link to="/about">About</Link>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
};
export default Toolbar;
