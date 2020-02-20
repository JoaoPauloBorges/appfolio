import React, { useState } from "react";

import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Backdrop from "./components/Backdrop/Backdrop";

function App() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);
  const deactiveDrawer = () => setToggle(false);

  let backdrop;
  if (toggle) {
    backdrop = <Backdrop click={deactiveDrawer} />;
  }

  return (
    <div style={{ height: "100%" }} className="App">
      <Toolbar handleToggle={handleToggle} />
      <SideDrawer show={toggle} />;{backdrop}
      <main style={{ marginTop: "74px" }}>
        <p> this is a page content </p>
      </main>
    </div>
  );
}

export default App;
