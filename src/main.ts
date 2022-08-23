import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './docs/App.vue'
import { chapters } from './docs/chapters'
import { provideCustomTheme } from './theme'

const app = createApp(App)

app.use(provideCustomTheme(theme => {
}))

const router = createRouter({
  history: createWebHistory('dodo-ui'),
  routes: [
    ...chapters.value.flatMap(p => p.pages).map(p => {
      return { name: p.title, path: '', hash: '#' + p.title, component: App }
    }),
  ],

  scrollBehavior(to, from, savedPosition) {
    const el = document.getElementById(to.hash.slice(1))!
    el?.scrollIntoView()
  },
})

app.use(router)

app.mount('#app')
