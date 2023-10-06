// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // alias: {
  //   '#dodo-ui': path.resolve(__dirname, '../dist'),
  // },
  css: ['~/../dist/style.css'],
  components: ['~/../dist', '~/components'],
  // imports: {
  //   dirs: ['~/../src'],
  // },
  devtools: { enabled: true },
})
