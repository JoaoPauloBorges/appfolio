import React from "react";

import Backdrop from "../Backdrop/Backdrop";
import "./SideDrawer.css";

interface Props {
  show: boolean;
  deactiveDrawer(): void;
}

const sideDrawer: React.FC<Props> = (props) => {
  let drawerClasses = props.show ? "side-drawer open": "side-drawer";
  let backdrop = props.show ? <Backdrop click={props.deactiveDrawer} /> : null;

  return (
    <div>
      {backdrop}
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
    </div>
  );
};

export default sideDrawer;
