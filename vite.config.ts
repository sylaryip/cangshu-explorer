import vue from '@vitejs/plugin-vue';
import { presetAttributify, presetWind } from 'unocss';
import pluginUnocss from 'unocss/vite';
import { defineConfig } from 'vite';
import optimizer from 'vite-plugin-optimizer';
import { buildPlugin } from './plugins/buildPlugin';
import { devPlugin, getReplacer } from './plugins/devPlugin';

export default defineConfig({
  plugins: [
    pluginUnocss({
      presets: [presetAttributify(), presetWind()]
    }),
    optimizer(getReplacer()),
    devPlugin(),
    vue()
  ],
  build: {
    rollupOptions: {
      plugins: [buildPlugin()]
    }
  }
});
