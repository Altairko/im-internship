import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Index } from "../Index/Index";
import { ReactState } from "../Statefull/ReactState/ReactState";
import { Stateless } from "../Stateless/Stateless";
import { store } from "../../store/index";
import { Provider } from "react-redux";
import { ReduxForm } from "../Statefull/ReduxForm/ReduxForm";

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div>
            <Route exact path="/" component={Index} />
            <Route exact path="/stateless" component={Stateless} />
            <Route exact path="/stateful" component={ReactState} />
            <Route exact path="/redux-form" component={ReduxForm} />
          </div>
        </Router>
      </Provider>
    );
  }
}
