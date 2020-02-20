import React from "react";

import "./SideDrawer.css";

const sideDrawer = ({ show }) => {
  let drawerClasses = "side-drawer";
  if (show) {
    drawerClasses = "side-drawer open";
  }
  return (
    <div className={drawerClasses}>
      <ul>
        <li>
          <a href="Products">Products</a>
        </li>
        <li>
          <a href="Users">Users</a>
        </li>
      </ul>
    </div>
  );
};

export default sideDrawer;
