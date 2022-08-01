import { createApp } from 'vue'
// import { createRouter, createWebHashHistory } from 'vue-router'
import App from './docs/App.vue'
import { provideCustomTheme } from './theme'

const app = createApp(App)

app.use(provideCustomTheme(theme => {
}))

// const router = createRouter({
//   history: createWebHashHistory(),
//   routes: [
//     { name: 'installation', path: '/', component: App },
//   ],
// })

// app.use(router)

app.mount('#app')
