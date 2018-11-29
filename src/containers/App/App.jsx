import React, { Component } from "react";
import "./App.css";
import { Greeter } from "../../components/stateless/Greeter/Greeter";
import { GreeterFunc } from "../../components/stateless/GreeterFunc/GreeterFunc";
import { TextHideShow } from "../../components/stateful/TextHideShow/TextHideShow";

class App extends Component {
  render() {
    return (
      <div>
        <Greeter greeting="Рендерим текст через stateless компонент" />
        <GreeterFunc greeting="Рендерим текст через функциональный stateless компонент" />
        <TextHideShow text="Рендерим текст через stateful компонент" />
      </div>
    );
  }
}

export default App;
