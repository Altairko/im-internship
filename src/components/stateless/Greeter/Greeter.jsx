import React from "react";
import PropTypes from "prop-types";

export class Greeter extends React.Component {
  static propTypes = {
    greeting: PropTypes.string.isRequired
  };

  render() {
    return <h1 className="h1-border">{this.props.greeting}</h1>;
  }
}
