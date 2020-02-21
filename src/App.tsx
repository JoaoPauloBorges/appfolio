import React, { useState } from "react";

import Toolbar from "./components/Toolbar/Toolbar";
import SideDrawer from "./components/SideDrawer/SideDrawer";
import Button from '@material-ui/core/Button';
import Backdrop from "./components/Backdrop/Backdrop";
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';

type DrawerSide = 'left' | 'bottom';

function App() {
  const [toggle, setToggle] = useState(false);
  const handleToggle = () => setToggle(!toggle);
  const deactiveDrawer = () => setToggle(false);

  const [state, setState] = useState({ left: false, bottom: false });

  let backdrop = toggle ? <Backdrop click={deactiveDrawer} /> : null; 

  const toggleDrawer = (side: DrawerSide, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (event && event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' || (event as React.KeyboardEvent).key === 'Shift'))
        return;
      setState({ ...state, [side]: open });
    };

  return (
    <div style={{ height: "100%" }} className="App">
      <Toolbar handleToggle={handleToggle} />
      <SideDrawer show={toggle} />;{backdrop}
      <SwipeableDrawer
        anchor="bottom"
        open={state.bottom}
        onClose={toggleDrawer('bottom', false)}
        onOpen={toggleDrawer('bottom', true)}>
        lalala
      </SwipeableDrawer>
      <main style={{ marginTop: "74px" }}>
        <Button onClick={toggleDrawer('bottom', true)}>Open Bottom</Button>
        <p> this is a page content </p>
      </main>
    </div>
  );
}

export default App;
