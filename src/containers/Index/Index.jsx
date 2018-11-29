import React from "react";
import { Link } from "react-router-dom";

export const Index = () => (
  <div>
    <Link className="react-link" to="/stateless">
      Посмотреть stateless компоненты
    </Link>
    <Link className="react-link" to="/stateful">
      Посмотреть statefull компоненты
    </Link>
    <Link className="react-link" to="/redux-form">
      Посмотреть компоненты с использованием redux-form
    </Link>
    <Link className="react-link" to="/gql">
      Посмотреть компоненты с использованием apollo
    </Link>
  </div>
);
