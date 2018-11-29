import React, { Component } from "react";
import "./App.css";
import { Greeter } from "../../components/stateless/Greeter/Greeter";
import { TextHideShow } from "../../components/stateful/TextHideShow/TextHideShow";

class App extends Component {
  render() {
    return (
      <div>
        <Greeter greeting="Рендерим текст через stateless компонент" />
        <TextHideShow text="Рендерим текст через stateful компонент" />
      </div>
    );
  }
}

export default App;
