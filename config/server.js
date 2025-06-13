// path: ./config/server.js
module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS', ['defaultKeyA','defaultKeyB']),
  },
  admin: {
    auth: {
      secret: env('STRAPI_ADMIN_JWT_SECRET'),
    },
  },
});
