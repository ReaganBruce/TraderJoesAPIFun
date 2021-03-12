import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Nav from './components/Nav'
import Home from "./views/Home"

const App = () => {
  return (
    <BrowserRouter>
      <Nav />
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route exact path="/about">
          {() => <h1>ABOUT TJS</h1>}
        </Route>
        <Route exact path="/foods">
          {() => <h1>FOODS</h1>}
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
export default App;
