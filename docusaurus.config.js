module.exports={
  "title": "Simplemap.io",
  "tagline": "Open Sources Projects",
  "url": "https://simplemap.github.io",
  "baseUrl": "/",
  "organizationName": "Simplemap.io",
  "projectName": "simplemap.github.io",
  "deploymentBranch":	"simplemap",
  "scripts": [
    "https://buttons.github.io/buttons.js"
  ],
  "favicon": "img/Simplemap-icon.ico",
  "customFields": {},
  "onBrokenLinks": "log",
  "onBrokenMarkdownLinks": "log",
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "showLastUpdateAuthor": true,
          "showLastUpdateTime": true,
          "path": "../docs",
          "sidebarPath": "../v1-website/sidebars.json"
        },
        "blog": {
          "path": "blog"
        },
        "theme": {
          "customCss": [require.resolve('./src/css/custom.css')],
        }
      }
    ]
  ],
  "plugins": [],
  "themeConfig": {
    "navbar": {
      "title": "Simplemap.io",
      "logo": {
        "src": "img/Simplemap-Puntos.png"
      },
      "items": [
        {
          "to": "docs/developers",
          "label": "Docs",
          "position": "left"
        },
        {
          "to": "/help",
          "label": "Help",
          "position": "left"
        }
      ]
    },
    "image": "img/undraw_online.svg",
    "footer": {
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Developers',
              to: 'docs/developers',
            },
            {
              label: 'Contributing guidelines',
              to: 'docs/contributing',
            },
            {
              label: 'Code of Conduct',
              to: 'docs/code_of_conduct',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Github',
              href: 'https://github.com/RentadroneCL',
            },
            {
              label: 'Slack',
              href: 'https://simplemapio.slack.com/ssb/redirect',
            },
            {
              label: 'Simplemap Website',
              href: 'https://simplemap.io/',
            },        
          ],
        },
      ],
      "copyright": "Copyright © 2022 simplemap.io",
      "logo": {
        "src": "img/Simplemap-icon.ico"
      }
    }
  }
}