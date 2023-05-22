/** @type {import('next').NextConfig} */
const runtimeCaching = require("next-pwa/cache");
const withPWA = require("next-pwa");
const withNextra = require("nextra")({
  theme: "nextra-theme-docs",
  themeConfig: "./theme.config.jsx",
  latex: true,
  defaultShowCopyCode: true,
});

module.exports = withNextra(
  withPWA({
    pwa: {
      dest: "public",
      register: true,
      skipWaiting: true,
      runtimeCaching,
    },
  })
);
