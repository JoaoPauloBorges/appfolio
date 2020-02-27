import React from "react";

import Backdrop from "../Backdrop/Backdrop";
import "./SideDrawer.css";
import { Link } from "react-router-dom";

interface Props {
  show: boolean;
  deactiveDrawer(): void;
}

const sideDrawer: React.FC<Props> = (props) => {
  let drawerClasses = props.show ? "side-drawer open" : "side-drawer";

  return (
    <div>
      <Backdrop show={props.show} click={props.deactiveDrawer} />
      <div className={drawerClasses}>
        <ul>
          <li>
            <Link to="/projects">Projects</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default sideDrawer;
