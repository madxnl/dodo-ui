import { createApp } from 'vue'
import App from './docs/App.vue'
import { provideCustomTheme } from './theme'

const app = createApp(App)

app.use(provideCustomTheme(theme => {
}))

app.mount('#app')
