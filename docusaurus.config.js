const isProductionDeployment = process.env.DEPLOYMENT === 'production';

module.exports = {
  title: 'Monarch',
  tagline: 'Focus on writing code',
  url: 'https://monarchapp.io',
  baseUrl: '/',
  trailingSlash: false,
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'assets/monarch-fav.ico',
  organizationName: 'Dropsource', // Usually your GitHub org/user name.
  projectName: 'monarch', // Usually your repo name.
  scripts: [
    // fontawesome script is used for icons on landing page, e.g. "fa-regular fa-keyboard" or "fa-solid fa-bug"
    'https://kit.fontawesome.com/99abf59b20.js' 
  ],
  stylesheets: [
    '/fonts/stylesheet.css'
  ],
  themeConfig: {
    image: 'assets/monarch-open-graph-purple.png',
    colorMode: {
      disableSwitch: true,
      defaultMode: 'dark',
    },
    navbar: {
      title: 'Monarch',
      style: 'dark',
      hideOnScroll: true,
      logo: {
        alt: 'Monarch Logo',
        src: 'assets/logo-monarch.png',
        srcDark: 'assets/logo-monarch.png'
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
          position: 'right'
        },
        {
          href: 'https://github.com/Dropsource/monarch',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      logo: {
        alt: 'Monarch Logo',
        src: 'assets/logomark-monarch-white.png',
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
              label: 'Why Monarch',
              to: 'docs/hard-to-reach'
            }
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
              label: 'Dropsource',
              href: 'https://dropsource.com',
            }
          ],
        },
        {
          title: 'Community',
          items: [
            {
              html: `
                  <a href="http://eepurl.com/hJ-S0L" target="_blank" aria-label="Join our newsletter">
                    <b>Join our newsletter 💌</b>
                  </a>
                `,
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Dropsource/monarch', 
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/monarch_app',
            },
            {
              label: 'YouTube',
              href: 'https://www.youtube.com/channel/UCuG4P4KTQ2HbikL57HIc1OQ',
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
      copyright: `Copyright © ${new Date().getFullYear()} Dropsource`,
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
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
        },
        blog: {
          showReadingTime: false,
          blogSidebarCount: 10
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        gtag: isProductionDeployment
          ? {
              trackingID: 'G-W8V27Q03X3',
              anonymizeIP: false,
            }
          : undefined,
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
        },
      },
    ],
  ]
};
