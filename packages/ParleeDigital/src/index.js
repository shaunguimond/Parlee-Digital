import React from "react";

const Root = () => {
  return (
    <>
      You can edit your package in:
      <pre>packages\ParleeDigital\src\index.js</pre>
    </>
  );
};

export default {
  name: "ParleeDigital",
  roots: {
    theme: Root
  },
  state: {
    theme: {}
  },
  actions: {
    theme: {}
  }
};
