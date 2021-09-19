import { jsx, Container } from "theme-ui";
import SocialShare from "../socialShare";
import { connect } from "frontity";

const Footer = ({ state }) => {
  return (
    <footer sx={{ variant: "footer" }}>
      <Container>
      {state.theme.showSocialLinks.footer && <SocialShare />}
        <p>&copy; Parlee Digital {new Date().getFullYear()}. Created with frontity.</p>
      </Container>
    </footer>
  );
};

export default connect(Footer);
