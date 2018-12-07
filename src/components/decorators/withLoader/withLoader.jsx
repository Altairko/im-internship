import React from "react";

function withLoader(Component) {
  return props => {
    if (props.loading) {
      return (
        <div key="loader" className="h1-border">
          Loading...
        </div>
      );
    }

    return <Component key="with-loader-component" {...props} />;
  };
}

export default withLoader;
