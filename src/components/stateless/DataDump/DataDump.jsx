import React from "react";

const DataDump = ({ data }) => (
  <pre className="h1-border" key="data-dump">
    {JSON.stringify(data, null, 2)}
  </pre>
);

export default DataDump;
