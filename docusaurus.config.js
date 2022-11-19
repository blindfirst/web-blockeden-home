// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require('prism-react-renderer/themes/github');
const {beConfig} = require("./src/config");
// const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Block Eden',
  titleDelimiter: "-",
  tagline: 'Aptos REST and GraphQL API and Node Service',
  url: 'https://blockeden.xyz',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.svg',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facebook', // Usually your GitHub org/user name.
  projectName: 'docusaurus', // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [
    [
      "docusaurus-plugin-openapi",
      {
        id: "sui-api-reference",
        path: "./src/swagger/sui-openapi.json",
        routeBasePath: "sui-api-reference",
      },
    ],
  ],

  presets: [
    [
      'docusaurus-preset-openapi',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        "api": {
          // id: 'cars', // omitted => default instance
          path: './src/swagger/aptos-openapi.json',
          routeBasePath: 'aptos-api-reference',
          // ... other options
        },
        docs: {
          sidebarCollapsed: false,
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: [
            require.resolve('./src/css/custom.css'),
            require.resolve("./static/assets/css/theme-saas-trend.css"),
          ],
        },
        gtag: {
          trackingID: 'G-V2HNMTR1D0'
        },
      }),
    ],
  ],

  stylesheets: [
    "https://fonts.googleapis.com/css?family=Inter",
  ],

  themeConfig:
    /** @type {import('docusaurus-preset-openapi').ThemeConfig} */
    ({
      navbar: {
        title: 'Block Eden',
        logo: {
          alt: 'Block Eden',
          src: 'img/favicon.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'intro',
            position: 'left',
            label: 'Doc',
          },
          {to: '/blog', label: 'Blog', position: 'left'},
          {to: '/pricing', label: 'Pricing', position: 'left'},
          {to: beConfig.analytics, label: 'Analytics', position: 'left'},
          {to: beConfig.signIn, label: 'Login', position: 'right'},
          {to: beConfig.signUp, label: 'Sign Up', position: 'right'},
        ],
      },
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Navigate',
            items: [
              {
                label: 'Tutorial',
                to: '/docs/intro',
              },
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'About Us',
                to: '/about-us',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/blockedenhq',
              },
              {
                label: 'Aptos API Reference',
                to: '/aptos-api-reference/get-ledger-info',
              },
            ],
          },
          { // <a href="https://discordapp.com/invite/docusaurus" target="_blank" rel="noopener noreferrer" class="footer__link-item">Discord<svg width="13.5" height="13.5" aria-hidden="true" viewBox="0 0 24 24" class="iconExternalLink_node_modules-@docusaurus-theme-classic-lib-theme-Icon-ExternalLink-styles-module"><path fill="currentColor" d="M21 13v10h-21v-19h12v2h-10v15h17v-8h2zm3-12h-10.988l4.035 4-6.977 7.07 2.828 2.828 6.977-7.07 4.125 4.172v-11z"></path></svg></a>
            title: 'Contact',
            items: [
              {
                html: `<a href="https://discord.gg/GqzTYQ4YNa" target="_blank" rel="noopener noreferrer" class="footer__link-item">Discrod Support Channel</a><br/><div style="font-size: 12px;">Singapore Time (SGT) Mon - Fri 7am - 3pm<div><br/>`,
              },
              {
                html: `<a href="https://discord.gg/4Yfvs2HWey" target="_blank" rel="noopener noreferrer" class="footer__link-item">Discord</a><br/><div style="font-size: 12px;"><div><br/>`,
              },
              {
                html: `<a href="https://twitter.com/BlockedenHQ" target="_blank" rel="noopener noreferrer" class="footer__link-item">Twitter</a><br/><div style="font-size: 12px;"><div><br/>`,
              },
            ],
          },
          {
            title: "Resources",
            items: [
              {
                label: 'Privacy Policy',
                href: '/privacy-policy',
              },
              {
                label: 'Terms of Service',
                href: '/terms-of-service',
              },
              {
                label: "Stargately Home",
                href: "https://stargately.com/",
              },
            ],
          }

        ],
        copyright: `Copyright © ${new Date().getFullYear()} Stargately, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        // darkTheme: darkCodeTheme,
      },
      colorMode: {
        defaultMode: 'light',
        disableSwitch: true,
        respectPrefersColorScheme: false,
      },
    }),
};

module.exports = config;
