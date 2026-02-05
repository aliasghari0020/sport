import react from '@vitejs/plugin-react'
import {defineConfig} from 'vitest/config'
import tailwindcss from "@tailwindcss/vite";
import i18nextLoader from 'vite-plugin-i18next-loader'

export default defineConfig({
      base: '/sport/',
    plugins: [react(), tailwindcss(), i18nextLoader({
        paths: ['./src/locales'],
        include: ['**/*.json', '**/*.yaml'],
        namespaceResolution: 'basename',
    }),],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './src/setupTests.ts',
    },
})
