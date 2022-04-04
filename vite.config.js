import { defineConfig } from 'vite'
import { visualizer } from 'rollup-plugin-visualizer'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        visualizer({
            gzipSize: true,
            template: 'treemap',
        }),
    ],
    resolve: {
        alias: {
            '@/': new URL('./src/', import.meta.url).pathname,
        },
    },
})
