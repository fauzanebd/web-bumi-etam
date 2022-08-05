const settings = {
  "name": "web-bumi-etam",
  "state": {
    "frontity": {
      // "url": "https://test.frontity.org",
      "url": "https://blog.bumietam.web.id/",
      "title": "Desa Bumi Etam",
      "description": "Website Informasi Desa Bumi Etam"
    }
  },
  "packages": [
    {
      "name": "@frontity/etam-theme",
      "state": {
        "theme": {
          "menu": [
            
          ],
          "featured": {
            "showOnList": false,
            "showOnPost": false
          }
        }
      }
    },
    // {
    //   "name": "bumietam-theme",
    // },
    // {
    //   "name": "labre-theme",
    //   "state": {
    //     "theme": {
    //       "menu": [
    //         ["Home", "/"],
    //         ["Block", "/category/block/"],
    //         ["Classic", "/category/classic/"],
    //         ["Alignments", "/tag/alignment-2/"],
    //         ["About", "/about/"]
    //       ],
    //       "featured": {
    //         "showOnList": false,
    //         "showOnPost": false
    //       }
    //     }
    //   }
    // },
    // {
    //   "name": "@frontity/bootstrap-theme",
    //   "state": {
    //     "theme": {
    //       "menu": [
    //         [
    //           "Home",
    //           "/"
    //         ],
    //         [
    //           "Nature",
    //           "/category/nature/"
    //         ],
    //         [
    //           "Travel",
    //           "/category/travel/"
    //         ],
    //         [
    //           "Japan",
    //           "/tag/japan/"
    //         ],
    //         [
    //           "About Us",
    //           "/about-us/"
    //         ]
    //       ],
    //       "featured": {
    //         "showOnList": false,
    //         "showOnPost": false
    //       }
    //     }
    //   }
    // },
    {
      "name": "@frontity/wp-source",
      "state": {
        "source": {
          // "url": "https://test.frontity.org/",
          // "url": "https://webbumietam.000webhostapp.com/",
          "url": "https://www.blog.bumietam.web.id/",
          // "url": "https://jsnation2020.frontity.org/wp-json"
          // "redirections": "404",
          "postTypes": [
            // {
            //   type: "destinations",
            //   endpoint: "destinations",
            //   archive: "/destinations",
            // }
            {
              type: "pariwisata",
              endpoint: "pariwisata",
              archive: "/pariwisata",
            },
            {
              type: "flora-mangrove",
              endpoint: "flora-mangrove",
              archive: "/flora-mangrove",
            }
          
          ],
          "homepage": "/beranda",
          "postsPage": "/archives"
        }
      }
    },
    "@frontity/tiny-router",
    "@frontity/html2react"
  ]
};

export default settings;
