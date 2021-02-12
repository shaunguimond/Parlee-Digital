const settings = {
  "name": "ParleeDigital",
  "state": {
    "frontity": {
      "url": "https://parleemarketing.ca",
      "title": "Parlee Digital",
      "description": "A digital marketing solution serving coast to coast."
    }
  },
  "packages": [ 
    {
    "name": "@frontity/google-analytics",
    "state": {
      "googleAnalytics": {
        "trackingId": "UA-80445367-5",
      },
    },
  },
    {
      "name": "ParleeDigital",
      "state": {
        "theme": {
          "menu": [
            [ "Web Development", "/web-development/" ],
            [ "Digital Marketing", "/digital-marketing/" ],
            [ "Digital Consulting", "/digital-consulting/" ],
            [ "Portfolio", "/portfolio/" ],
            [ "Blog", "/blog/" ],
            [ "About", "/about/" ]
          ],
          "featured": {
            "showOnList": true,
            "showOnPost": true
          },
          autoPrefetch: "in-view" 
        }
      }
    },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          "api": "https://parleemarketing.com/wp-json", 
          "homepage": "/home",
          "postsPage": "/blog"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
    "frontity-contact-form-7"
  ]
};

export default settings;
