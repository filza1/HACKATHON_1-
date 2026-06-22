"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var config = {
    title: 'Physical AI & Humanoid Robotics',
    tagline: 'From Digital Intelligence to Embodied Intelligence',
    url: 'https://example.com',
    baseUrl: '/',
    organizationName: 'your-org',
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
                    href: 'https://github.com/your-org/physical-ai-humanoid-robotics-book',
                    label: 'GitHub',
                    position: 'right',
                },
            ],
        },
        footer: {
            style: 'dark',
            links: [],
            copyright: "Copyright ".concat(new Date().getFullYear(), " Physical AI & Humanoid Robotics"),
        },
    },
};
exports.default = config;
