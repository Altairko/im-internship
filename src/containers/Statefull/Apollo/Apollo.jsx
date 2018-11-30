import React from "react";
import { Link } from "react-router-dom";

export const Apollo = () => (
  <div>
    <Link className="react-link" to="/query">
      Посмотреть компонент с graphql Query
    </Link>
    <Link className="react-link" to="/mutation">
      Посмотреть компонент с graphql Mutation
    </Link>
  </div>
);
