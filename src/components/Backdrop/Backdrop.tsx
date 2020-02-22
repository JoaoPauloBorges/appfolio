import React from "react";

import "./Backdrop.css";


interface Props {
   show: boolean;
   click(): void;
}

const backdrop: React.FC<Props> = (props) => {

   let backdropClasses = props.show ? "backdrop open" : "backdrop";

   return (
      <div className={backdropClasses} onClick={props.click} />
   );
}

export default backdrop;
