import React from "react";
import { Switch, Route } from 'react-router-dom'


import Toolbar from "./components/Toolbar/Toolbar";
import About from "./components/About/About";
import Home from "./components/Home/Home";
import Projects from "./components/Projects/Projects";

export default function App() {

  return (
    <div style={{ height: "100%" }} className="App">
      <Toolbar />
      <Main />
    </div>
  );
};

function Main() {
  return (
    <main style={{ paddingTop: "64px" }}>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/projects' component={Projects} />
        <Route path='/about' component={About} />
      </Switch>
    </main>
  );
}