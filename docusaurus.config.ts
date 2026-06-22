import type { Config } from '@docusaurus/types';

const config: Config = {
  title: 'Physical AI & Humanoid Robotics',
  tagline: 'From Digital Intelligence to Embodied Intelligence',
  url: `https://${process.env.VERCEL_URL ?? 'physical-ai-humanoid-robotics-book.vercel.app'}`,
  baseUrl: '/',
  organizationName: 'filza1',
  projectName: 'physical-ai-humanoid-robotics-book',
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
      title: 'Physical AI & Humanoid Robotics',
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
      copyright: `Copyright ${new Date().getFullYear()} Physical AI & Humanoid Robotics`,
    },
  },
};

export default config;
