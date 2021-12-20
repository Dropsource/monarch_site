module.exports = {
  title: 'Monarch',
  tagline: 'Build high-quality UIs with ease',
  url: 'https://monarchapp.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'assets/monarch-favicon.ico',
  organizationName: 'Dropsource', // Usually your GitHub org/user name.
  projectName: 'monarch', // Usually your repo name.
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;700&display=swap'
  ],
  themeConfig: {
    googleAnalytics: {
      trackingID: 'G-GHR4Z83T6D',
      anonymizeIP: false
    },
    gtag: {
      trackingID: 'G-GHR4Z83T6D',
      anonymizeIP: false
    },
    image: 'assets/monarch-open-graph.png',
    colorMode: {
      disableSwitch: true
    },
    navbar: {
      title: 'Monarch',
      logo: {
        alt: 'Monarch Logo',
        src: 'assets/monarch-m.png',
        srcDark: 'assets/monarch-m.png'
      },
      items: [
        {
          to: 'docs/introduction',
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
        src: 'assets/logo-monarch-white.png',
      },
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Get Started',
              to: 'docs/introduction',
            },
            {
              label: 'Advanced Usage',
              to: 'docs/themes',
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
        {
          title: 'Credits',
          items: [
            {
              label: 'Storybook (inspiration for Monarch)',
              href: 'https://storybook.js.org/'
            },
            {
              label: 'Developer Quest app (used for samples above)',
              href: 'https://github.com/2d-inc/developer_quest'
            }
          ]
        }
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
        },
        blog: {
          showReadingTime: false,
          blogSidebarCount: 10
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
        sitemap: {
          changefreq: 'weekly',
          priority: 0.5,
          trailingSlash: false,
        },
      },
    ],
  ]
};
