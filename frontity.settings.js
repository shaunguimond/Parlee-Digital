const settings = {
  "name": "parlee-marketing",
  "state": {
    "frontity": {
      "url": "https://parleemarketing.ca",
      "title": "Parlee Digital",
      "description": "A digital marketing solution serving coast to coast."
    }
  },
  "packages": [
    {
      "name": "frontity-starter-theme",
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
          }
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
    "@frontity/html2react"
  ]
};

export default settings;
