import React from "react";
import { Global, css } from "frontity";
import gotuRegularWOFF2 from "../fonts/Gotu-Regular.woff2";
import quicksandRegularWOFF2 from "../fonts/Quicksand-Regular.woff2";

const FontFace = () => (
  <Global
    styles={css`
      @font-face {
        font-family: "Gotu-Regular";
        src: url(${gotuRegularWOFF2}) format("woff2");

        font-weight: normal;
        font-style: normal;
        font-display: swap;
      }

      @font-face {
        font-family: "Quicksand-Regular";
        src: url(${quicksandRegularWOFF2}) format("woff2");

        font-weight: 700;
        font-style: normal;
        font-display: swap;
      }
    `}
  />
);

export default FontFace;
