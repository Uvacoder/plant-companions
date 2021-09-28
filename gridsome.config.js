module.exports = {
  siteName: 'SavvyGarden',
  siteDescription: 'Permaculture inspired tools for the Savvy Gardener',
  siteUrl: 'https://dev.savvygarden.app',
  icon: './src/favicon.png',
  permalinks: {
    trailingSlash: false,
  },
  plugins: [
    {
      use: 'gridsome-plugin-tailwindcss',
      options: {
        tailwindConfig: './tailwind.config.js',
        purgeConfig: {
          whitelist: [],
          whitelistPatterns: []
        },
        presetEnvConfig: {},
        shouldPurge: false,
        shouldImport: false,
        shouldTimeTravel: false,
        shouldPurgeUnusedKeyframes: true,
      }
    },
    {
      use: 'gridsome-source-static-meta',
      options: {
        path: 'content/site/*.json'
      }
    },
    {
      use: '@gridsome/source-airtable',
      options: {
        apiKey: process.env.GRIDSOME_AIRTABLE_KEY,
        base: process.env.GRIDSOME_AIRTABLE_DEV_BASE,
        tables: [
          {
            name: 'Guilds',
            typeName: 'Guild',
          },
          {
              name: 'Plants',
              typeName: 'Plant',
              links: [
                {
                  fieldName: 'Friends',
                  typeName: 'Plant',
                  linkToFirst: false
                },
                {
                  fieldName: 'Foes',
                  typeName: 'Plant',
                  linkToFirst: false
                }
              ]
          }
        ]
      }
    },
    {
      use: 'gridsome-plugin-pwa',
      options: {
          title: 'SavvyGarden',
          description: 'Permaculture inspired tools for the Savvy Gardener',
          startUrl: '/',
          display: 'standalone',
          gcm_sender_id: undefined,
          statusBarStyle: 'default',
          manifestPath: 'manifest.json',
          disableServiceWorker: false,
          serviceWorkerPath: 'service-worker.js',
          cachedFileTypes: 'js,json,css,html,png,jpg,jpeg,svg',
          shortName: 'SavvyGarden',
          themeColor: '#f0f2f5',
          lang: "en-ZA",
          backgroundColor: '#f0f2f5',
          dir: 'auto',
          maskableIcon: true,
          icon: './src/favicon.png',
          msTileImage: 'SavvyGarden',
          msTileColor: '#f0f2f5',
      }
    },
    {
      use: 'gridsome-plugin-robots',
      options: {
        host: 'https://savvygarden.app',
        sitemap: 'https://savvygarden.app/sitemap.xml',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    },
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        cacheTime: 600000,
        config: {
          "/*": {
            changefreq: "weekly",
            priority: 0.5,
          },
        },
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Vendor',
        path: './content/vendors/**/*.md',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'ProductMeta',
        path: './content/product-meta/**/*.md',
      }
    },
  ],
  templates:{
    Plant: [
      {
        path: "/:Slug",
        component: "./src/components/Plant.vue"
      }
    ],
    Guild: [
      {
        path: "/guilds/:Slug",
        component: "./src/templates/Guild.vue"
      }
    ],
    CommercejsProducts: [
      {
        path: "/shop/:permalink",
        component: "./src/templates/CommercejsProducts.vue"
      }
    ]
  }
}
