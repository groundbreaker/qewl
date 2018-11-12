import React from "react";

export const MockComponent = props => <div className="mock-component" />;
export const MockErrorComponent = props => (
  <div className="mock-error-component" />
);
export const MockLoadingComponent = props => (
  <div className="mock-loading-component">
    <h1>Loading</h1>
  </div>
);
