// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  // alias: {
  //   '#dodo-ui': path.resolve(__dirname, '../dist'),
  // },
  css: ['~/../dist/style.css'],
  components: ['~/../src/components', '~/components'],
})
