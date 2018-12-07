import React from "react";

import {
  withDataStateless,
  withDataStatefull
} from "../../../components/decorators/withData/withData";
import DataDump from "../../../components/stateless/DataDump/DataDump";
import { allUserQuery } from "../../../grapqhl/query/allUser";

const variables = { count: 2 };
const WithDataStatelessDataDump = withDataStateless(allUserQuery, variables)(DataDump);
const WithDataStatefullDataDump = withDataStatefull(allUserQuery, variables)(DataDump);

class HocInjector extends React.PureComponent {
  render() {
    return [
      <div key="stateless">
        <h3 className="left-space-big" key="header">
          Stateless HOC
        </h3>
        <WithDataStatelessDataDump key="example" />
      </div>,
      <div key="statefull">
        <h3 className="left-space-big" key="header">
          Statefull HOC
        </h3>
        <WithDataStatefullDataDump key="example" />
      </div>
    ];
  }
}

export default HocInjector;
