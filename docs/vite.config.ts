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
  base: '/dodo-ui/', // needed for GH pages
}

export default config
