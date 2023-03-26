/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [
      "iili.io",
      "platform-lookaside.fbsbx.com",
      "firebasestorage.googleapis.com",
      "links.papareact.com",
    ],
  },
};

module.exports = nextConfig;
