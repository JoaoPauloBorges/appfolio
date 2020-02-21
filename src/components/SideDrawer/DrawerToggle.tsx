import React from "react";

import "./DrawerToggle.css";
interface Props {
  click():  void;
}

const drawerToggle: React.FC<Props> = ({click}) => (
  <button className="toggle-button" onClick={click}>
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
    <div className="toggle-button__line" />
  </button>
);

export default drawerToggle;
