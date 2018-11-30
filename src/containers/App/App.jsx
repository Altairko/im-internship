import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Index } from "../Index/Index";
import { ReactState } from "../Statefull/ReactState/ReactState";
import { Stateless } from "../Stateless/Stateless";
import { store } from "../../store/index";
import { Provider } from "react-redux";
import { ReduxForm } from "../Statefull/ReduxForm/ReduxForm";
import { ApolloClient } from "apollo-client";
import { createHttpLink } from "apollo-link-http";
import { setContext } from "apollo-link-context";
import { InMemoryCache } from "apollo-cache-inmemory";
import { ApolloProvider } from "react-apollo";
import { Apollo } from "../Statefull/Apollo/Apollo";
import Query from "../Statefull/Apollo/Query/Query";
import Mutation from "../Statefull/Apollo/Mutation/Mutation";

const httpLink = createHttpLink({
  uri: "https://fakerql.com/graphql"
});

const authLink = setContext((_, { headers }) => {
  // получаем сохраненный токен из localStorage
  const token = localStorage.getItem("token");
  // возвращаем новые заголовки
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : ""
    }
  };
});

const client = new ApolloClient({
  link: authLink.concat(httpLink),
  cache: new InMemoryCache()
});

export default class App extends React.Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <Provider store={store}>
          <Router>
            <div>
              <Route exact path="/" component={Index} />
              <Route exact path="/stateless" component={Stateless} />
              <Route exact path="/stateful" component={ReactState} />
              <Route exact path="/redux-form" component={ReduxForm} />
              <Route exact path="/apollo" component={Apollo} />
              <Route exact path="/query" component={Query} />
              <Route exact path="/mutation" component={Mutation} />
            </div>
          </Router>
        </Provider>
      </ApolloProvider>
    );
  }
}
