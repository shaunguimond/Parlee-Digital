import { jsx, Container } from "theme-ui";
import { connect } from "frontity";

import { getUrlData } from "../../helpers";

import { formatPostData } from "../../helpers";

const Page = ({ state, libraries }) => {
  const data = getUrlData(state);

  const post = state.source[data.type][data.id];

  const Html2React = libraries.html2react.Component;

  const { content } = formatPostData(state, post);

  /**
   * Once the post has loaded in the DOM, prefetch both the
   * home posts and the list component so if the user visits
   * the home page, everything is ready and it loads instantly.
   */

  return data.isReady ? (
    <Container className="container" sx={{ maxWidth: "xl" }}>
      <article> 
  
          <Html2React html={content} />

      </article>
    </Container>
  ) : null;
};

export default connect(Page);
