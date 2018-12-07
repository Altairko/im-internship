import React from "react";

function withError(Component) {
  return ({ error, ...rest }) => {
    const output = [];

    if (error) {
      output.push(
        <div key="error" className="error">
          {JSON.stringify(error, null, 2)}
        </div>
      );
    }
    output.push(<Component key="with-error-component" {...rest} />);

    return output;
  };
}

export default withError;
