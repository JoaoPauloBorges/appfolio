import React from "react";

import Toolbar from "./components/Toolbar/Toolbar";

export default function App() {
  return (
    <div style={{ height: "100%" }} className="App">
      <Toolbar/>
      <main style={{ marginTop: "74px" }}>
        <p> this is a page content </p>
      </main>
    </div>
  );
};