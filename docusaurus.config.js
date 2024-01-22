// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
   title: "Paralus",
   tagline: "Open source access management tool for your Kubernetes clusters.",
   url: "https://paralus.io",
   baseUrl: "/",
   onBrokenLinks: "throw",
   onBrokenMarkdownLinks: "warn",
   favicon: "img/favicon.ico",

   // GitHub pages deployment config.
   // If you aren't using GitHub pages, you don't need these.
   organizationName: "paralus", // Usually your GitHub org/user name.
   projectName: "paralus", // Usually your repo name.

   // Even if you don't use internalization, you can use this field to set useful
   // metadata like html lang. For example, if your site is Chinese, you may want
   // to replace "en" with "zh-Hans".
   i18n: {
      defaultLocale: "en",
      locales: ["en"],
   },

   // tailwind
   plugins: [
      async function myPlugin(context, options) {
            return {
               name: "docusaurus-tailwindcss",
               configurePostCss(postcssOptions) {
                  // Appends TailwindCSS and AutoPrefixer.
                  postcssOptions.plugins.push(require("tailwindcss"));
                  postcssOptions.plugins.push(require("autoprefixer"));
                  return postcssOptions;
               },
            };
         },
         [
            "docusaurus-plugin-openapi-docs",
            {
               id: "openapi",
               docsPluginId: "classic",
               config: {
                  auditlog: {
                     specPath: "gen/openapi/proto/rpc/audit/auditlog.swagger.json",
                     outputDir: "docs/References/OpenAPI/Audit/Auditlog",
                     sidebarOptions: {
                        groupPathsBy: "tag",
                     },
                  },
                  relayaudit: {
                     specPath: "gen/openapi/proto/rpc/audit/relayaudit.swagger.json",
                     outputDir: "docs/References/OpenAPI/Audit/Relayaudit",
                     sidebarOptions: {
                        groupPathsBy: "tag",
                     },
                  },
                  rolepermission: {
                     specPath: "gen/openapi/proto/rpc/role/rolepermission.swagger.json",
                     outputDir: "docs/References/OpenAPI/Role/Rolepermission",
                     sidebarOptions: {
                        groupPathsBy: "tag",
                     },
                  },
                  role: {
                     specPath: "gen/openapi/proto/rpc/role/role.swagger.json",
                     outputDir: "docs/References/OpenAPI/Role/Role",
                     sidebarOptions: {
                        groupPathsBy: "tag",
                     },
                  },
                  cluster: {
                     specPath: "gen/openapi/proto/rpc/scheduler/cluster.swagger.json",
                     outputDir: "docs/References/OpenAPI/Scheduler/Cluster",
                     sidebarOptions: {
                        groupPathsBy: "tag",
                     },
                  },
                  audit_info: {
                     specPath: "gen/openapi/proto/rpc/sentry/audit_info.swagger.json",
                     outputDir: "docs/References/OpenAPI/Sentry/Audit_info",
                     sidebarOptions: {
                        groupPathsBy: "tag",
                     },
                  },
                  bootstrap: {
                     specPath: "gen/openapi/proto/rpc/sentry/bootstrap.swagger.json",
                     outputDir: "docs/References/OpenAPI/Sentry/Bootstrap",
                     sidebarOptions: {
                        groupPathsBy: "tag",
                     },
                  },
                  cluster_authz: {
                     specPath: "gen/openapi/proto/rpc/sentry/cluster_authz.swagger.json",
                     outputDir: "docs/References/OpenAPI/Sentry/Cluster_authz",
                     sidebarOptions: {
                        groupPathsBy: "tag",
                     },
                  },
                  kubeconfig: {
                     specPath: "gen/openapi/proto/rpc/sentry/kubeconfig.swagger.json",
                     outputDir: "docs/References/OpenAPI/Sentry/Kubeconfig",
                     sidebarOptions: {
                        groupPathsBy: "tag",
                     },
                  },
                  kubectl_cluster: {
                     specPath: "gen/openapi/proto/rpc/sentry/kubectl_cluster.swagger.json",
                     outputDir: "docs/References/OpenAPI/Sentry/Kubectl_cluster",
                     sidebarOptions: {
                        groupPathsBy: "tag",
                     },
                  },
                  relaypeer: {
                     specPath: "gen/openapi/proto/rpc/sentry/relaypeer.swagger.json",
                     outputDir: "docs/References/OpenAPI/Sentry/Relaypeer",
                     sidebarOptions: {
                        groupPathsBy: "tag",
                     },
                  },
                  idp: {
                     specPath: "gen/openapi/proto/rpc/system/idp.swagger.json",
                     outputDir: "docs/References/OpenAPI/System/Idp",
                     sidebarOptions: {
                        groupPathsBy: "tag",
                     },
                  },
                  metro: {
                     specPath: "gen/openapi/proto/rpc/system/metro.swagger.json",
                     outputDir: "docs/References/OpenAPI/System/Metro",
                     sidebarOptions: {
                        groupPathsBy: "tag",
                     },
                  },
                  oidc_provider: {
                     specPath: "gen/openapi/proto/rpc/system/oidc_provider.swagger.json",
                     outputDir: "docs/References/OpenAPI/System/Oidc_provider",
                     sidebarOptions: {
                        groupPathsBy: "tag",
                     },
                  },
                  organization: {
                     specPath: "gen/openapi/proto/rpc/system/organization.swagger.json",
                     outputDir: "docs/References/OpenAPI/System/Organization",
                     sidebarOptions: {
                        groupPathsBy: "tag",
                     },
                  },
                  partner: {
                     specPath: "gen/openapi/proto/rpc/system/partner.swagger.json",
                     outputDir: "docs/References/OpenAPI/System/Partner",
                     sidebarOptions: {
                        groupPathsBy: "tag",
                     },
                  },
                  project: {
                     specPath: "gen/openapi/proto/rpc/system/project.swagger.json",
                     outputDir: "docs/References/OpenAPI/System/Project",
                     sidebarOptions: {
                        groupPathsBy: "tag",
                     },
                  },
                  group: {
                     specPath: "gen/openapi/proto/rpc/user/group.swagger.json",
                     outputDir: "docs/References/OpenAPI/User/Group",
                     sidebarOptions: {
                        groupPathsBy: "tag",
                     },
                  },
                  user: {
                     specPath: "gen/openapi/proto/rpc/user/user.swagger.json",
                     outputDir: "docs/References/OpenAPI/User/User",
                     sidebarOptions: {
                        groupPathsBy: "tag",
                     },
                  },
                  auth: {
                     specPath: "gen/openapi/proto/rpc/v3/auth.swagger.json",
                     outputDir: "docs/References/OpenAPI/V3/Auth",
                     sidebarOptions: {
                        groupPathsBy: "tag",
                     },
                  }
               }
            },
         ],
   ],

   presets: [
      [
         "classic",
         /** @type {import('@docusaurus/preset-classic').Options} */
         ({
            gtag: {
               trackingID: "G-LVGJK4FBCG",
               anonymizeIP: true,
            },
            docs: {
               sidebarPath: require.resolve("./sidebars.js"),
               // Please change this to your repo.
               // Remove this to remove the "edit this page" links.
               editUrl: "https://github.com/paralus/website/tree/main",
               docLayoutComponent: "@theme/DocPage",
               docItemComponent: "@theme/ApiItem", 
            },
            blog: {
               showReadingTime: true,
            },
            theme: {
               customCss: require.resolve("./src/css/custom.css"),
            },
         }),
      ],
   ],

   themes: ["docusaurus-theme-openapi-docs"], // exports ApiItem and ApiDemoPanel

   themeConfig:
      /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
      ({
         colorMode: {
            defaultMode: "light",
            disableSwitch: true,
            respectPrefersColorScheme: false,
         },
         image: "img/paralus-thumbnail.png",
         navbar: {
            title: "",
            logo: {
               alt: "Paralus Logo",
               src: "img/logo.png",
            },
            items: [{
                  to: "/blog",
                  label: "Blog",
                  position: "right"
               },
               {
                  to: "docs/References/OpenAPI/Audit/Auditlog/auditlog-service",
                  label: "API",
                  position: "right"
               },
               {
                  to: "https://join.slack.com/t/paralus/shared_invite/zt-1a9x6y729-ySmAq~I3tjclEG7nDoXB0A",
                  label: "Slack",
                  position: "right",
               },
               {
                  type: "doc",
                  docId: "index",
                  position: "left",
                  label: "Documentation",
               },
               {
                  to: "https://github.com/paralus/paralus",
                  label: "GitHub",
                  position: "right",
               },
            ],
         },
         footer: {
            style: "dark",
            links: [{
                  title: "Docs",
                  items: [{
                     label: "Documentation",
                     to: "/docs/",
                  }, ],
               },
               {
                  title: "Community",
                  items: [{
                        label: "Slack",
                        href: "https://join.slack.com/t/paralus/shared_invite/zt-1a9x6y729-ySmAq~I3tjclEG7nDoXB0A",
                     },
                     {
                        label: "Twitter",
                        href: "https://twitter.com/paralus_",
                     },
                  ],
               },
               {
                  title: "More",
                  items: [{
                        label: "Blog",
                        to: "/blog",
                     },
                     {
                        label: "GitHub",
                        href: "https://github.com/paralus",
                     },
                  ],
               },
            ],
            copyright: `Copyright © ${new Date().getFullYear()} Paralus contributors.`,
         },
         prism: {
            theme: lightCodeTheme,
            darkTheme: darkCodeTheme,
         },
      }),
};

module.exports = config;
