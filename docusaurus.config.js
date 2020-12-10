module.exports = {
  title: 'Build high-quality Flutter widgets faster',
  tagline: 'Monarch is a tool for developing Flutter widgets in isolation. It makes building beautiful widgets a more pleasant and faster experience. It is inspired by Storybook.',
  url: 'https://your-docusaurus-test-site.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/monarch_favicon.ico',
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: '',
      logo: {
        alt: 'Monarch Logo',
        src: 'img/logo_monarch_black.png',
        srcDark: 'img/logo_monarch_white.png'
      },
      items: [
        {
          to: 'docs/install',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'right',
        },
        {
          to: 'blog',
          label: 'Releases', 
          position: 'right'},
        {
          href: 'https://github.com/Dropsource/monarch',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Monarch Logo',
        src: 'img/logo_monarch_white.png',
      },
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Get Started',
              to: 'docs/install',
            },
            {
              label: 'Advanced Usage',
              to: 'docs/themes',
            },
            {
              label: 'Reference',
              to: 'docs/cli-commands',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Releases',
              to: 'blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Dropsource/monarch',
            },
            {
              label: 'Dropsource',
              href: 'https://dropsource.com',
            }
          ],
        },
        // {
        //   title: 'More',
        //   items: [
        //     {
        //       label: 'Releases',
        //       to: 'blog',
        //     },
        //     {
        //       label: 'GitHub',
        //       href: 'https://github.com/facebook/docusaurus',
        //     },
        //   ],
        // },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Dropsource, Inc.`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/vsDark'),
      defaultLanguage: 'dart',
      additionalLanguages: ['dart', 'bash'],
    }
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: false,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
