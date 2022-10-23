module.exports = {
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  env: {
    api_image: process.env.BASE_API_IMAGE,
    api_v1: process.env.API_V1,
  },
  images: {
    domains: ["bandhawacoffeebeans.com"],
  },
};
