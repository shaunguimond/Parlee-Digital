import { darken, lighten } from "polished";

const dark = "#0f131a";
const dark0 = lighten(0.08, "#0f131a");
const dark2 = darken(0.04, "#0f131a");
const dark3 = darken(0.1, "#0f131a");
const light = "#e7e7e8";
const light2 = lighten(0.04, "#e7e7e8");
const primary = "#7f92b7";
const secondary = "#528ec7";
const lightGrey = "#cfcfd1";
const grey = "#9fa0a3";
const yellow = "#528ec7";
const purple = "#9725A3";
const accentDark = "#7f92b7";
const accentLight = "#528ec7";

export const colors = {
  primary,
  secondary,
  light,
  dark,
  lightGrey,
  accentDark,
  yellow,
  purple,
  accent: accentLight,
  background: light,
  bgInverse: dark,
  text: dark0,
  textInverse: light,
  white: "white",
  black: "black",
  brand: primary,
  mutted: lightGrey,
  grey: grey,
  border: lightGrey,
  headerBg: dark,
  headerColor: light,
  footerBg: dark,
  footerColor: light,
  cardBg: light2,
  highlightColor: accentDark,
  focusOutline: grey,
  mobileMenuBg: dark,
  modes: {
    dark: {
      text: light,
      background: dark,
      cardBg: dark2,
      headerBg: dark3,
      footerBg: dark3,
      accent: accentDark
    }
  }
};
