import vue from '@vitejs/plugin-vue'
import { ssr } from 'vike/plugin'
import { UserConfig } from 'vite'

const config: UserConfig = {
  plugins: [
    vue(),
    ssr({
      prerender: true,
    }),
  ],
}

export default config
