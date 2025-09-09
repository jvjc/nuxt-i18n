// https://nuxt.com/docs/api/configuration/nuxt-config
// strategy: "no_prefix",
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ["@nuxtjs/i18n", "vuetify-nuxt-module"],
  i18n: {
    defaultLocale: "es",
    locales: [
      { code: "es", name: "Español", file: "es.json" },
      { code: "en", name: "English", file: "en.json" },
    ],
  },
});
