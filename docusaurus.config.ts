import type { Config } from '@docusaurus/types';

const config: Config = {
  title: 'hackathon_book',
  tagline: 'From Digital Intelligence to Embodied Intelligence',
  url: `https://${process.env.VERCEL_URL ?? 'hackathon_book.vercel.app'}`,
  baseUrl: '/',
  organizationName: 'filza1',
  projectName: 'hackathon_book',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: undefined,
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.ts'),
          editUrl: undefined,
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  themeConfig: {
    metadata: [
      {
        name: 'description',
        content:
          'A robotics book covering physical AI, ROS 2, simulation, NVIDIA Isaac, VLA systems, humanoid robotics, hardware, and a full capstone stack.',
      },
    ],
    navbar: {
      title: 'hackathon_book',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'tutorialSidebar',
          position: 'left',
          label: 'Book',
        },
        {
          href: 'https://github.com/filza1/HACKATHON_1-',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [],
      copyright: `Copyright ${new Date().getFullYear()} hackathon_book`,
    },
  },
};

export default config;
