
import vue from '@vitejs/plugin-vue';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export const libPlugins = () => [vue({ customElement: true }), nxViteTsPaths(), cssInjectedByJsPlugin()]
