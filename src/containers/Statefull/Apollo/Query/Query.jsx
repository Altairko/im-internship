import React from "react";
import { connect } from "react-redux";
import { withApollo } from "react-apollo";
import { allUserQuery } from "../../../../grapqhl/query/allUser";
import { addAllUser } from "../../../../store/userData/userData.action";
import { getAllUserData } from "../../../../store/userData/userData.selector";
class Query extends React.PureComponent {
  static mapStateToProps = state => ({
    allUserData: getAllUserData(state)
  });

  componentDidMount() {
    this.props.client
      .query({
        query: allUserQuery,
        variables: {
          count: 10
        }
      })
      .then(data => {
        this.props.dispatch(addAllUser(data));
      });
  }

  render() {
    return <div>{JSON.stringify(this.props.allUserData)}</div>;
  }
}

export default withApollo(connect(Query.mapStateToProps)(Query));
