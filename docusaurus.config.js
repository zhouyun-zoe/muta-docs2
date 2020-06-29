module.exports = {
  title: 'Muta',
  tagline: 'Build your own blockchain,today',
  url: 'https://zhouyun-zoe.github.io',
  baseUrl: '/muta-docs2/',
  favicon: 'img/muta-logo.png',
  organizationName: 'zhouyun-zoe', // Usually your GitHub org/user name.
  projectName: 'muta-docs2', // Usually your repo name.
  customFields: {
    description:
      'Muta is a highly customizable high-performance blockchain framework.',
  },
  plugins: [
    [
      '@docusaurus/plugin-ideal-image',
      {
        quality: 70,
        max: 1030, // max resized image's size.
        min: 640, // min resized image's size. if original is lower, use that size.
        steps: 2, // the max number of images generated between min and max (inclusive)
      },
    ],
  ],
  themeConfig: {
    navbar: {
      hideOnScroll: true,
      title: 'Muta',
      logo: {
        alt: 'Muta Logo',
        src: 'img/muta-logo.png',
      },
      links: [
        {
          to: 'docs/docs_zh/intro',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'docs/tutorial/first-chain/before-create', label: 'Tutorial', position: 'left'},
        {to: 'blog', label: 'Blog', position: 'left'},
        {to: 'showcase', label: 'Showcase', position: 'left'},
        {to: 'docs/support/support', label: 'Support', position: 'left'},
        {
          href: 'https://github.com/nervosnetwork/muta',
          label: 'GitHub',
          position: 'right',
        },
        {
          label: 'Translation',
          position: 'right', // or 'right'
          items: [
            {
              label: '中文',
              to: 'docs/docs_zh/intro',
            },
            {
              label: 'English',
              to: 'docs/docs_en/intro',
            },
            // ... more items
          ],
        },       
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Getting Started',
              to: 'docs/getting_started',
            },
            {
              label: 'Service Development',
              to: 'docs/service_dev',
            },
            {
              label: 'Dapp Development',
              to: 'docs/dex',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Forum',
              href: 'https://talk.nervos.org/',
            },
            {
              label: 'Discord',
              href: 'https://discord.com/invite/rN35fe8',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/nervosnetwork',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/nervosnetwork/muta',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Nervos Foundation`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          postsPerPage: 3,
          // Please change this to your repo.
          editUrl:
            'https://github.com/nervosnetwork/muta-docs',
        },
        tutorial: {
          sidebarPath: require.resolve('./sidebars.js'),
          postsPerPage: 3,
          // Please change this to your repo.
          editUrl:
            'https://github.com/nervosnetwork/muta-docs',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl:
            'https://github.com/facebook/docusaurus/edit/master/website/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
