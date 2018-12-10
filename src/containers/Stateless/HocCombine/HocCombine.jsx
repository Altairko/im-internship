import React from "react";

import DataDump from "../../../components/stateless/DataDump/DataDump";
import { allUserQuery } from "../../../grapqhl/query/allUser";
import { withDataStatefull } from "../../../components/decorators/withData/withData";
import withQuery from "../../../components/decorators/withQuery/withQuery";
import withLoader from "../../../components/decorators/withLoader/withLoader";
import withError from "../../../components/decorators/withError/withError";

const variables = { count: 2 };
const WithQueryDataDump = withQuery(allUserQuery, variables)(DataDump);
const CombinedDataDump = withDataStatefull(allUserQuery, variables)(
  withLoader(withError(DataDump))
);

class HocCombine extends React.PureComponent {
  render() {
    return [
      <div key="with-query">
        <h3 className="left-space-big" key="header">
          HOC Injector+Enhancer
        </h3>
        <WithQueryDataDump key="example" />
      </div>,
      <div key="combined">
        <h3 className="left-space-big" key="header">
          Композиция из HOC
        </h3>
        <CombinedDataDump key="example" />
      </div>
    ];
  }
}

export default HocCombine;
