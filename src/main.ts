import { createApp } from 'vue'
import App from './docs/App.vue'
import { createTheme } from './theme'

const app = createApp(App)

createTheme(app, theme => {
})

app.mount('#app')
