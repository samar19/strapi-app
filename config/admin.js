module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '0683c10d8419bd870a29ea494a314180'),
  },
});
