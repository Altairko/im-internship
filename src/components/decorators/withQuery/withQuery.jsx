import React from "react";
import { withApollo } from "react-apollo";

function withQuery(query, variables) {
  return Component => {
    class WithQuery extends React.PureComponent {
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
        if (this.state.loading) {
          return (
            <div key="loader" className="h1-border">
              Loading...
            </div>
          );
        }
        const output = [];

        if (this.state.error) {
          output.push(
            <div key="error" className="error">
              {JSON.stringify(this.state.error, null, 2)}
            </div>
          );
        }
        output.push(
          <Component key="with-query-component" {...this.props} data={this.state.data} />
        );

        return output;
      }
    }

    return withApollo(WithQuery);
  };
}

export default withQuery;
