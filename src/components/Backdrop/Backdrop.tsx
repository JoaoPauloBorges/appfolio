import React from "react";

import "./Backdrop.css";


interface Props {
   click():  void;
}

const backdrop: React.FC<Props> = ({ click }) => <div className="backdrop" onClick={click} />;

export default backdrop;
