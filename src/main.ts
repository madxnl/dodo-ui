import { createApp } from 'vue'
import { crashPlugin, provideCustomTheme } from '.'
import DodoDocsApp from './docs/DodoDocsApp.vue'

// This is the main file for the public Dodo UI docs

const app = createApp(DodoDocsApp)

app.use(provideCustomTheme(_ => {
}))

app.use(crashPlugin({ router: null }))

app.mount('#app')
