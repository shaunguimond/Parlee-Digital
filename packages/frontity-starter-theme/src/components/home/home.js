/** @jsx jsx */
import { jsx } from "theme-ui";
import React from "react";
import { connect } from "frontity";

import { getUrlData } from "../../helpers";

const Home = ({ state }) => {
  const data = getUrlData(state);


  return (
    <>
      <h2>Hello World!</h2>
    </>
  );
};

export default connect(Home);
