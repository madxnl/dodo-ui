import vue from '@vitejs/plugin-vue';
import { defineConfig, Plugin } from 'vite';
import { parse } from 'vue-docgen-api';

// This plugin generates component documenatation object using vue-docgen-api
function docgen(): Plugin {
  return {
    name: 'vue-docgen-plugin',
    resolveId(source) {
      if (source.endsWith(':doc')) {
        return source; // this signals that rollup should not ask other plugins or check the file system to find this id
      }
      return null; // other ids should be handled as usually
    },
    async load(id) {
      if (id.endsWith(':doc')) {
        // Generate documentation from component file path and return it as JS
        const file = 'src/' + id.split(':')[0]
        const componentDoc = await parse(file)
        return `export default ${JSON.stringify(componentDoc)}`;
      }
      return null; // other ids should be handled as usually
    }
  };
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    docgen(),
  ],
  build: {
    outDir: 'docs'
  }
})
