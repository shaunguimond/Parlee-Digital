import { jsx, Container, Flex } from "theme-ui";
import { connect } from "frontity";
import MobileMenu from "./mobileMenu";
import Logo from "./logo";
import SocialShare from "../socialShare";
import Headroom from "react-headroom";
import ColorSwitch from "../colorSwitch";

const Header = ({ state }) => {
  return (
    <Headroom>
      <header className="header" sx={{ variant: `header` }}>
        <Container className="container">
          <Flex sx={{
            alignItems: 'center',
            justifyContent: 'space-between',
            width: ['100%', '100%', '100%']
          }}>
          <MobileMenu sx={{ display: ["block", "block", "block"] }} />
            {state.theme.showSocialLinks.header && (
              <SocialShare sx={{ px: 20 }} />
            )}
            <Logo />
            <ColorSwitch sx={{ ml: 10, height: 24 }} />
          </Flex>
        </Container>
      </header>
    </Headroom>
  );
};

export default connect(Header);
