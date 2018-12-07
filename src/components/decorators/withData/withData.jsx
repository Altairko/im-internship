import React from "react";
import { Query, withApollo } from "react-apollo";

export function withDataStateless(query, variables) {
  return Component => props => (
    <Query key="query" query={query} variables={variables}>
      {({ data, loading, error }) => (
        <Component
          key="with-data-component"
          {...props}
          data={data}
          loading={loading}
          error={error}
        />
      )}
    </Query>
  );
}

export function withDataStatefull(query, variables) {
  return Component => {
    class WithDataStatefull extends React.PureComponent {
      state = {
        data: {},
        loading: false,
        error: null
      };

      componentDidMount() {
        this.setState({
          loading: true
        });
        this.props.client
          .query({
            query,
            variables,
            fetchPolicy: "network-only"
          })
          .then(({ data, loading, error }) => {
            this.setState({ data, loading, error });
          })
          .catch(error => {
            this.setState({ error, loading: false });
          });
      }

      render() {
        return (
          <Component
            key="with-data-component"
            {...this.props}
            data={this.state.data}
            loading={this.state.loading}
            error={this.state.error}
          />
        );
      }
    }

    return withApollo(WithDataStatefull);
  };
}
