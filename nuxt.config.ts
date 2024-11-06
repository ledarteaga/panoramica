// https://nuxt.com/docs/api/configuration/nuxt-config

import Aura from "@primevue/themes/aura";

export default defineNuxtConfig({
  ssr: false,
  modules: ["nuxt-swiper", "nuxt-svgo", "@primevue/nuxt-module"],
  devtools: { enabled: true },
  css: ["~/assets/sass/style.sass"],
  primevue: {
    options: {
      theme: {
        preset: Aura,
      },
    },
    autoImport: true,
  },
  app: {
    head: {
      title: "PANORÁMICA CONSULTING",
      htmlAttrs: {
        lang: "es",
      },
      meta: [
        { charset: "utf-8" },
        { name: "viewport", content: "width=device-width, initial-scale=1" },
        { hid: "description", name: "description", content: "" },
        { name: "format-detection", content: "telephone=no" },
      ],
      link: [
        {
          rel: "icon",
          type: "image/x-icon",
          href: "assets/images/favicon.png",
        },

        { rel: "stylesheet", href: "/assets/_css/flaticon.min.css" },
        { rel: "stylesheet", href: "/assets/_css/fontawesome-5.14.0.min.css" },
        { rel: "stylesheet", href: "/assets/_css/bootstrap.min.css" },
        { rel: "stylesheet", href: "/assets/_css/magnific-popup.min.css" },
        { rel: "stylesheet", href: "/assets/_css/nice-select.min.css" },
        { rel: "stylesheet", href: "/assets/_css/animate.min.css" },
        { rel: "stylesheet", href: "/assets/_css/slick.min.css" },
        { rel: "stylesheet", href: "/assets/_css/custom.css" },
      ],
      script: [
        {
          src: "https://kit.fontawesome.com/684b6840d3.js",
          crossorigin: "anonymous",
        },
      ],
    },
  },

  compatibilityDate: "2024-08-18",
});
