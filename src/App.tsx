import React from "react";

import Toolbar from "./components/Toolbar/Toolbar";
import Banner from "./components/Banner/Banner";


export default function App() {

  return (
    <div style={{ height: "100%" }} className="App">
      <Toolbar />
      <main style={{ paddingTop: "64px" }}>
        <Banner />
        <section style={{margin: "10px auto", maxWidth: "70%", paddingTop: "5px"}}>
          <p> Hello little world <span role="img" aria-label="world">🌎</span> </p>
        </section>
      </main>
    </div>
  );
};