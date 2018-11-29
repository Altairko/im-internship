import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Index } from "../Index/Index";
import { ReactState } from "../Statefull/ReactState/ReactState";
import { Stateless } from "../Stateless/Stateless";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Index} />
          <Route exact path="/stateless" component={Stateless} />
          <Route exact path="/stateful" component={ReactState} />
        </div>
      </Router>
    );
  }
}

export default App;
