// vite.config.ts
import { defineConfig } from "file:///D:/projects/TwitterFactCheck/node_modules/vite/dist/node/index.js";
import react from "file:///D:/projects/TwitterFactCheck/node_modules/@vitejs/plugin-react/dist/index.mjs";
import svgr from "file:///D:/projects/TwitterFactCheck/node_modules/vite-plugin-svgr/dist/index.mjs";
import { crx } from "file:///D:/projects/TwitterFactCheck/node_modules/@crxjs/vite-plugin/dist/index.mjs";

// manifest.json
var manifest_default = {
  manifest_version: 3,
  name: "Resilient",
  version: "1.0.0",
  action: {
    default_title: "Popup",
    default_popup: "index.html",
    default_icon: "logo.png"
  },
  icons: {},
  content_scripts: [
    {
      matches: ["https://twitter.com/*/status/*"],
      js: ["content-script/src/main.tsx"],
      run_at: "document_end",
      media: []
    }
  ]
};

// vite.config.ts
var vite_config_default = defineConfig({
  plugins: [
    react(),
    svgr({
      svgrOptions: {
        icon: true
      }
    }),
    crx({ manifest: manifest_default })
  ]
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxwcm9qZWN0c1xcXFxUd2l0dGVyRmFjdENoZWNrXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxwcm9qZWN0c1xcXFxUd2l0dGVyRmFjdENoZWNrXFxcXHZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9wcm9qZWN0cy9Ud2l0dGVyRmFjdENoZWNrL3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSBcInZpdGVcIjtcclxuaW1wb3J0IHJlYWN0IGZyb20gXCJAdml0ZWpzL3BsdWdpbi1yZWFjdFwiO1xyXG5pbXBvcnQgc3ZnciBmcm9tIFwidml0ZS1wbHVnaW4tc3ZnclwiO1xyXG5pbXBvcnQgeyBjcnggfSBmcm9tIFwiQGNyeGpzL3ZpdGUtcGx1Z2luXCI7XHJcbmltcG9ydCBtYW5pZmVzdCBmcm9tIFwiLi9tYW5pZmVzdC5qc29uXCI7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHJlYWN0KCksXHJcbiAgICBzdmdyKHtcclxuICAgICAgc3Znck9wdGlvbnM6IHtcclxuICAgICAgICBpY29uOiB0cnVlLFxyXG4gICAgICAgIC8vIC4uLnN2Z3Igb3B0aW9ucyAoaHR0cHM6Ly9yZWFjdC1zdmdyLmNvbS9kb2NzL29wdGlvbnMvKVxyXG4gICAgICB9LFxyXG4gICAgfSksXHJcbiAgICAvLyBCdWlsZCBDaHJvbWUgRXh0ZW5zaW9uXHJcbiAgICBjcngoeyBtYW5pZmVzdCB9KSxcclxuICBdLFxyXG59KTtcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUE0USxTQUFTLG9CQUFvQjtBQUN6UyxPQUFPLFdBQVc7QUFDbEIsT0FBTyxVQUFVO0FBQ2pCLFNBQVMsV0FBVzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBSXBCLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLE1BQU07QUFBQSxJQUNOLEtBQUs7QUFBQSxNQUNILGFBQWE7QUFBQSxRQUNYLE1BQU07QUFBQSxNQUVSO0FBQUEsSUFDRixDQUFDO0FBQUEsSUFFRCxJQUFJLEVBQUUsMkJBQVMsQ0FBQztBQUFBLEVBQ2xCO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
