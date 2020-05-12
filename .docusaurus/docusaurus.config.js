export default {
  "plugins": [
    [
      "@docusaurus/plugin-ideal-image",
      {
        "quality": 70,
        "max": 1030,
        "min": 640,
        "steps": 2
      }
    ]
  ],
  "themes": [],
  "customFields": {
    "description": "Muta is a highly customizable high-performance blockchain framework."
  },
  "themeConfig": {
    "navbar": {
      "hideOnScroll": true,
      "title": "Muta",
      "logo": {
        "alt": "Muta Logo",
        "src": "img/muta-logo.png"
      },
      "links": [
        {
          "to": "docs/intro",
          "activeBasePath": "docs",
          "label": "Docs",
          "position": "left"
        },
        {
          "to": "blog",
          "label": "Blog",
          "position": "left"
        },
        {
          "to": "showcase",
          "label": "Showcase",
          "position": "left"
        },
        {
          "to": "docs/support",
          "label": "Support",
          "position": "left"
        },
        {
          "href": "https://github.com/nervosnetwork/muta",
          "label": "GitHub",
          "position": "right"
        }
      ]
    },
    "footer": {
      "style": "dark",
      "links": [
        {
          "title": "Docs",
          "items": [
            {
              "label": "Style Guide",
              "to": "docs/doc1"
            },
            {
              "label": "Second Doc",
              "to": "docs/doc2"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Stack Overflow",
              "href": "https://stackoverflow.com/questions/tagged/docusaurus"
            },
            {
              "label": "Discord",
              "href": "https://discordapp.com/invite/docusaurus"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/docusaurus"
            }
          ]
        },
        {
          "title": "More",
          "items": [
            {
              "label": "Blog",
              "to": "blog"
            },
            {
              "label": "GitHub",
              "href": "https://github.com/facebook/docusaurus"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2020 My Project, Inc. Built with Docusaurus."
    }
  },
  "title": "Muta",
  "tagline": "Build your own blockchain,today",
  "url": "https://zhouyun-zoe.github.io",
  "baseUrl": "/muta-docs2/",
  "favicon": "img/muta-logo.png",
  "organizationName": "zhouyun-zoe",
  "projectName": "muta-docs2",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/Users/Yun/Desktop/docs2/muta-docs2/sidebars.js",
          "postsPerPage": 3,
          "editUrl": "https://github.com/nervosnetwork/muta-docs"
        },
        "blog": {
          "showReadingTime": true,
          "editUrl": "https://github.com/facebook/docusaurus/edit/master/website/blog/"
        },
        "theme": {
          "customCss": "/Users/Yun/Desktop/docs2/muta-docs2/src/css/custom.css"
        }
      }
    ]
  ]
};