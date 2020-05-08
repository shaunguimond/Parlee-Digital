/** @jsx jsx */
import { jsx, Flex, ThemeProvider } from "theme-ui";
import theme from "../theme-ui";
import { Global, connect, Head, css } from "frontity";
import Switch from "@frontity/components/switch";
import FontFace from "../styles/fontFace";
import globalStyles from "../styles/globalStyles";
import Header from "./header";
import Footer from "./footer";
import Archive from "./archive";
import Page from "./page"
import Loading from "./loading";
import Page404 from "./page404";
import Post from "./post";
import { getUrlData } from "../helpers";
import Title from "./title";
import { Grommet } from "grommet";
import gutenbergStyle from "../styles/gutenberg/style.css";
import gutenbergTheme from "../styles/gutenberg/theme.css";

const Theme = ({ state }) => {
  // Get information about the current URL.
  const data = getUrlData(state);
  const { isFetching, isPostType, isArchive, isPage } = data;

  return (
    <Grommet theme={theme}>
      <ThemeProvider theme={theme}>
        <Title />
        <Head>
          <meta name="description" content={state.frontity.description} />
          <html lang="en" />
        </Head>
        <FontFace />
        <Global styles={css(gutenbergStyle)} />
        <Global styles={css(gutenbergTheme)} />
        <Global styles={globalStyles} />

        <Flex
          sx={{
            flexDirection: "column",
            justifyContent: "space-between",
            minHeight: "100vh"
          }}
        >
          <Header />
          <main
            sx={{
              py: ["xl", "xl", "xxl"]
            }}
          >
            <Switch>
              <Archive when={isArchive} />
              <Page when={isPage} />
              <Post when={isPostType} />
              <Loading when={isFetching} />
              <Page404 />
            </Switch>
          </main>
          <Footer />
        </Flex>
      </ThemeProvider>
    </Grommet>
  );
};

export default connect(Theme);
