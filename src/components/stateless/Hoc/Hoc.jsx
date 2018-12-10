import React from "react";
import { Link } from "react-router-dom";

const Hoc = () => (
  <div>
    <Link className="react-link" to="/hoc/injector">
      Посмотреть HOC Injector
    </Link>
    <Link className="react-link" to="/hoc/enhancer">
      Посмотреть HOC Enhancer
    </Link>
    <Link className="react-link" to="/hoc/combine">
      Посмотреть HOC Injector+Enhancer
    </Link>
  </div>
);

export default Hoc;
