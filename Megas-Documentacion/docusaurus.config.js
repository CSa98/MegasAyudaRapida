// @ts-check
// `@type` JSDoc annotations allow editor autocompletion and type checking
// (when paired with `@ts-check`).
// There are various equivalent ways to declare your Docusaurus config.
// See: https://docusaurus.io/docs/api/docusaurus-config

import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Megas Gestión Comercial',
  tagline: 'Manual de ayuda rápida gestión comercial',
  favicon: 'img/favicon.ico',

  // Set the production url of your site here
  url: 'http:/megassl.com',

  baseUrl: '/',



  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'es',
    locales: ['es'],
    path: 'i18n',
  },

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: './sidebars.js',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
         
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      }),
    ],
  ],
  plugins: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"), 
      {
        hashed: true,
      },
    ],
    'docusaurus-plugin-zooming'
  ],
  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      // Replace with your project's social card
      image: 'img/docusaurus-social-card.jpg',
      navbar: {
        title: 'Megas Quality Services',
        logo: {
          alt: 'My Site Logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'Manual',
          },
          {
            type: 'docSidebar',
            sidebarId: 'sidebarNotas',
            label: 'Notas de version',
            position: 'left',
          },
        
        ],
      },
      zooming: {
        selector: '.markdown img',
        delay: 500,
        background: {
          light: 'rgba(101,108,133,0.8)',
          dark: 'rgba(9,10,17,0.8)'
        },
        options: {
          // See the docs of zooming for all available options: https://github.com/francoischalifour/medium-zoom#usage
        }
      },
      
      footer: {
        style: 'dark',
        links: [
          {
            title: 'Documentos',
            items: [
              {
                label: 'Manual Gestión',
                to: '/docs/Acceso%20a%20la%20aplicación',
              },
            ],
          },
          {
            title: 'Community',
            items: [
           
            ],
          },
          {
            title: 'More',
            items: [
              {
                label: 'Blog',
                to: '/blog',
              },
              {
                label: 'GitHub',
                href: 'https://github.com/facebook/docusaurus',
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Catalin Andrei Sonca Sonca. Built with Docusaurus.`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    }),
};

export default config;
