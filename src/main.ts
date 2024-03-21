import { createApp } from 'vue'
import { crashPlugin } from '.'
import './css/main.css'
import DodoDocsApp from './docs/DodoDocsApp.vue'
import { dodoPlugin } from './plugin'

// This is the main file for the public Dodo UI docs

const app = createApp(DodoDocsApp)

app.use(crashPlugin({ router: null }))
app.use(dodoPlugin({ darkMode: 'auto' }))

app.mount('#app')
