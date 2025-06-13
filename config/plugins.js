// path: ./config/plugins.js
module.exports = ({ env }) => ({
  // Configure the users-permissions plugin
  'users-permissions': {
    config: {
      // Read JWT_SECRET from process.env
      jwtSecret: env('JWT_SECRET'),
    },
  },
});
