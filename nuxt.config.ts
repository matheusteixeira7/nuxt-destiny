export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss', 'nuxt-headlessui'],
  srcDir: 'src',
  css: ['~/assets/css/main.css'],
  postcss: {
    plugins: {
      tailwindcss: {},
      autoprefixer: {},
    },
  },
})
