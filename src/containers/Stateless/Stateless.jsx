import React from "react";
import { Greeter } from "../../components/stateless/Greeter/Greeter";
import { GreeterFunc } from "../../components/stateless/GreeterFunc/GreeterFunc";

export const Stateless = () => (
  <div>
    <Greeter greeting="Рендерим текст через stateless компонент" />
    <GreeterFunc greeting="Рендерим текст через функциональный stateless компонент" />
  </div>
);
