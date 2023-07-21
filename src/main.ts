import { createApp } from 'vue'
import { crashPlugin } from '.'
import DodoDocsApp from './docs/DodoDocsApp.vue'

// This is the main file for the public Dodo UI docs

const app = createApp(DodoDocsApp)

app.use(crashPlugin({ router: null }))

app.mount('#app')
