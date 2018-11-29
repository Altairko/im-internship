import React from "react";
import PropTypes from "prop-types";

export class TextHideShow extends React.Component {
  static propTypes = {
    text: PropTypes.string.isRequired
  };

  constructor(props) {
    super(props);

    this.state = {
      showText: true
    };

    this.onButtonClick = this.onButtonClick.bind(this);
  }

  onButtonClick() {
    this.setState({ showText: !this.state.showText });
  }

  render() {
    return (
      <div className="h1-border">
        <button key="0" onClick={this.onButtonClick}>
          {this.state.showText ? "Скрыть текст" : "Показать текст"}
        </button>
        {this.state.showText ? <h1 key="1">{this.props.text}</h1> : null}
      </div>
    );
  }
}
