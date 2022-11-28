// file: /config/plugins.js

module.exports = {
  redis: {
    config: {
      connections: {
        default: {
          connection: {
            host: "redis-12044.c283.us-east-1-4.ec2.cloud.redislabs.com",
            port: 12044,
            password: "MOGVrhA2PvjfqCUxBXHcdRMFgduxKvW7",
          },
          settings: {
            debug: false,
          },
        },
      },
    },
  },
  "rest-cache": {
    config: {
      provider: {
        name: "memory",
        options: {
          max: 32767,
          maxAge: 3600,
        },
      },
      strategy: {
        contentTypes: [
          // list of Content-Types UID to cache
          // "api::category.category",
          // "api::article.article",
          // "api::global.global",
          // "api::homepage.homepage",
        ],
      },
    },
  },
};
