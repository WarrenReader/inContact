import React from "react";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";

import Home from "../pages/Home";
import NavBar from "../components/navBar/NavBar";

class Routes extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <NavBar />
          <Switch>
            <Route exact path="/" component={Home} />
          </Switch>
        </React.Fragment>
      </Router>
    );
  }
}

export default Routes;
