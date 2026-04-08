import {defineConfig} from 'vite'
import react from '@vitejs/plugin-react'
import {resolve} from 'path'
import {cpSync, rmSync, existsSync, readFileSync} from 'fs'

const root = import.meta.dirname;
const src = resolve(root, 'src');

// https://vite.dev/config/
export default defineConfig({
    plugins: [
        react(),
        ],
    base: process.env.VITE_BASE_PATH ?? '/',
    define: {
        __BUILD_TIME__: JSON.stringify(new Date().toISOString()),
    },
    server: {},
    build: {
        rolldownOptions: {
            cwd: root,
            input: {
                main: resolve(src, './index.html'),
            }
        }
    },
    resolve: {
        alias: {
            '@': src,
        }
    }
})
