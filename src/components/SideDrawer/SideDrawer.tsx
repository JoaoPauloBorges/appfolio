import React from "react";

import "./SideDrawer.css";

interface Props {
  show:  boolean;
}

const sideDrawer: React.FC<Props> = ({ show }) => {
  let drawerClasses = "side-drawer";
  if (show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <div className={drawerClasses}>
      <ul>
        <li>
          <a href="/">Projects</a>
        </li>
        <li>
          <a href="/">About</a>
        </li>
      </ul>
    </div>
  );
};

export default sideDrawer;
