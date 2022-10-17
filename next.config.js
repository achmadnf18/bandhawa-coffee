module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  env: {
    dns_v1: process.env.API_WEB,
    api_v1: process.env.API_V1,
  },
  images: {
    domains: ["localhost"],
  },
};
