import Theme from "./components";
import image from "@frontity/html2react/processors/image";

const starterTheme = {
  name: "frontity-starter-theme",
  roots: {
    theme: Theme
  },
  state: {
    theme: {
      menu: [],
      /**
       * The logo can be a text or an image url
       */
      logo: "Parlee Digital",
      // logo:
      //   "https://about.canva.com/en_in/wp-content/uploads/sites/3/2016/08/logos-1.png",
      // logo: Logo,
      showSocialLinks: {
        header: false,
        footer: true
      },
      socialLinks: [
        [ "pinterest", "https://www.pinterest.ca/okraidersrule/" ],
        [ "facebook", "https://www.facebook.com/shaun.guimond/" ],
        [ "instagram" , "https://www.instagram.com/shagui88/" ],
        [ "twitter" , "https://twitter.com/home" ]
      ],
      isMobileMenuOpen: false,
      autoPreFetch: "hover",
      featured: {
        showOnArchive: true,
        showOnPost: true
      },
      postInfo: {
        showOnArchive: true,
        showOnPost: true
      },
      postMeta: {
        showOnArchive: true,
        showOnPost: true
      }
    }
  },
  actions: {
    theme: {
      openMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = true;
      },
      closeMobileMenu: ({ state }) => {
        state.theme.isMobileMenuOpen = false;
      }
    }
  },
  libraries: {
    html2react: {
      processors: [image]
    }
  }
};

export default starterTheme;
