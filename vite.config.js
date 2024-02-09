import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve, dirname } from 'node:path'
import { fileURLToPath } from 'url'
import VueI18nPlugin from '@intlify/unplugin-vue-i18n/vite'
import dns from 'dns'
import Sitemap from 'vite-plugin-sitemap'
dns.setDefaultResultOrder('verbatim')

export default defineConfig({
  plugins: [
    vue(),
    VueI18nPlugin({
      include: resolve(dirname(fileURLToPath(import.meta.url)), './src/locales/**'),
    }),
    Sitemap(),
  ],
  server: {
    host: 'localhost',
    port: 3000
  }
})
