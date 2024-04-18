/// <reference types='vitest' />
import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { nxViteTsPaths } from '@nx/vite/plugins/nx-tsconfig-paths.plugin';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js'

export const modifySource = ()=>{
  return {
    name:'modifySource',
    transform(source){
      console.log(source)
    }
  }
}

export default defineConfig({
  root: __dirname,
  cacheDir: '../../node_modules/.vite/sdk/onboarding',

  server: {
    port: 4200,
    host: 'localhost',
  },

  preview: {
    port: 4300,
    host: 'localhost',
  },

  plugins: [vue({ customElement: true }), nxViteTsPaths(),modifySource()],

  // Uncomment this if you are using workers.
  // worker: {
  //  plugins: [ nxViteTsPaths() ],
  // },

  build: {
    outDir: '../../dist/sdk/onboarding',
    reportCompressedSize: true,
    commonjsOptions: {
      transformMixedEsModules: true,
    },
    cssCodeSplit :false,
    minify: false,
    lib: {

      // Could also be a dictionary or array of multiple entry points.
      entry: 'src/index.ts',
      name: 'onboarding',
      fileName: 'onboarding.sdk',
      // Change this to the formats you want to support.
      // Don't forget to update your package.json as well.
      formats: ['es', 'cjs'],
    },
    rollupOptions: {
      // External packages that should not be bundled into your library.
      external: [],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
  define: {
    "process.env": {}
  }
});
