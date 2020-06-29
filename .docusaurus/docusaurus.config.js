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
          "to": "docs/docs_zh/intro",
          "activeBasePath": "docs",
          "label": "Docs",
          "position": "left"
        },
        {
          "to": "docs/tutorial/first-chain/before-create",
          "label": "Tutorial",
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
          "to": "docs/support/support",
          "label": "Support",
          "position": "left"
        },
        {
          "href": "https://github.com/nervosnetwork/muta",
          "label": "GitHub",
          "position": "right"
        },
        {
          "label": "Translation",
          "position": "right",
          "items": [
            {
              "label": "中文",
              "to": "docs/docs_zh/intro"
            },
            {
              "label": "English",
              "to": "docs/docs_en/intro"
            }
          ]
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
              "label": "Getting Started",
              "to": "docs/getting_started"
            },
            {
              "label": "Service Development",
              "to": "docs/service_dev"
            },
            {
              "label": "Dapp Development",
              "to": "docs/dex"
            }
          ]
        },
        {
          "title": "Community",
          "items": [
            {
              "label": "Forum",
              "href": "https://talk.nervos.org/"
            },
            {
              "label": "Discord",
              "href": "https://discord.com/invite/rN35fe8"
            },
            {
              "label": "Twitter",
              "href": "https://twitter.com/nervosnetwork"
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
              "href": "https://github.com/nervosnetwork/muta"
            }
          ]
        }
      ],
      "copyright": "Copyright © 2020 Nervos Foundation"
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
        "tutorial": {
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