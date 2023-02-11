/** @type {import('astro-i18next').AstroI18nextConfig} */
export default {
  defaultLocale: "pl",
  locales: ["en", "pl"],
  namespaces: ["about", "common", "home", "404"],
  defaultNamespace: "common",
  i18nextServer: {
    debug: true,
  },
};