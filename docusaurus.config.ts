import { themes as prismThemes, themes } from "prism-react-renderer";
import type { Config } from "@docusaurus/types";
import type * as Preset from "@docusaurus/preset-classic";
import { PostCssOptions } from "@docusaurus/types";
import { Options } from "docusaurus-preset-openapi";
import type * as Redocusaurus from "redocusaurus";
import theme from "redocusaurus/theme";
import RedocRawOptions from "redocusaurus";
import Layout from "@theme/Layout";

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const remarkGridTables = require("remark-grid-tables");
const remarkPluginsConfig = {
  remarkPlugins: [remarkGridTables],
};

const postcss = require("postcss");
const postcssOverflowShorthand = require("postcss-overflow-shorthand");

postcss([postcssOverflowShorthand(/* pluginOptions */)]).process(
  [
    "docs/src/components/Footer/footer.module.css",
    "docs/src/components/HomepageFeatures/styles.module.css",
    "docs/src/pages/index.module.css",
  ] /*, processOptions */
);

const config: Config = {
  title: "Stray Kids All Around The World",
  tagline: "Guide Book For Stay",
  favicon: "img/logo.jpg",

  // Set the production url of your site here
  url: "https://v1.docusaurus.io/",
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: "/docs",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "Stay", // Usually your GitHub org/user name.
  projectName: "guideStay", // Usually your repo name.

  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      {
        docs: {
          sidebarPath: "./sidebars.ts",
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
        },
        blog: false,
        theme: {
          customCss: "./src/css/custom.css",
        },
      } satisfies Preset.Options,
    ],
    [
      "redocusaurus",
      {
        // Plugin Options for loading OpenAPI files
        theme: {
          primaryColor: "#fce651",
          options: {
            hideDownloadButton: true,
            hideHostname: true,
          },
        },
      },
    ] satisfies Redocusaurus.PresetEntry,
  ],

  plugins: [
    [
      "@easyops-cn/docusaurus-search-local",
      {
        hashed: true,
      },
    ],
  ],

  themeConfig: {
    // Replace with your project's social card
    image: "img/docusaurus-social-card.jpg",
    navbar: {
      logo: {
        alt: "Logo",
        src: "/img/logo.jpg",
      },
      items: [
        {
          type: "docSidebar",
          sidebarId: "tutorialSidebar",
          position: "left",
          label: "All About Us",
        },
        {
          href: "https://straykids.jype.com/",
          label: "Want to Know More",
          position: "right",
        },
      ],
    },
    prism: {
      theme: prismThemes.jettwaveLight,
      darkTheme: prismThemes.jettwaveDark,
    },
    metadata: [
      {
        name: "description",
        content: "Only Exercise of Docusaurus Documentation",
      },
      {
        name: "keywords",
        content: "Stray kids, stay, exercise, docusaurus",
      },
    ],
  } satisfies Preset.ThemeConfig,
};

export default config;
