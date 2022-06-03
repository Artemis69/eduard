import { defineConfig } from "vite";
import { vitePlugin as malinaPlugin } from "malinajs-unplugin";

export default defineConfig(({ mode }) => {
  return {
    plugins: [
      malinaPlugin({ 
        immutable: true, 
        css: mode === 'development',
        useGroupReferencing: false
      }),
    ],
    build: {
      polyfillModulePreload: false
    },
    optimizeDeps: {
      exclude: ['eduard'],
      include: ['malinajs/runtime.js', 'detect-browser', 'luna-object-viewer/luna-object-viewer.css', 'luna-console/luna-console.css', 'luna-console']
    }
  }
});
