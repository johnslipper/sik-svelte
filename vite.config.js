import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 5000,
  },
  plugins: [
    svelte(),
    VitePWA({
      includeAssets: ["favicon.svg", "global.css", "robots.txt"],
      manifest: {
        name: "Songs I know",
        short_name: "SIK",
        start_url: "/",
        display: "standalone",
        background_color: "#9f145c",
        theme_color: "#9f145c",
        orientation: "any",
        description:
          "Collect songs you've learned to find inspiration when you need it",
        icons: [
          {
            src: "icons/icon.svg",
            sizes: "400x400",
            type: "image/svg+xml",
          },
          {
            src: "icons/icon-72x72.png",
            sizes: "72x72",
            type: "image/png",
          },
          {
            src: "icons/icon-96x96.png",
            sizes: "96x96",
            type: "image/png",
          },
          {
            src: "icons/icon-128x128.png",
            sizes: "128x128",
            type: "image/png",
          },
          {
            src: "icons/icon-144x144.png",
            sizes: "144x144",
            type: "image/png",
          },
          {
            src: "icons/icon-152x152.png",
            sizes: "152x152",
            type: "image/png",
          },
          {
            src: "icons/icon-192x192.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "icons/icon-384x384.png",
            sizes: "384x384",
            type: "image/png",
          },
          {
            src: "icons/icon-512x512.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
        splash_pages: null,
        screenshots: [
          {
            src: "screenshots/sik-svelte-app-1.jpg",
            sizes: "540x1200",
            type: "image/jpeg",
          },
          {
            src: "screenshots/sik-svelte-app-2.jpg",
            sizes: "540x1200",
            type: "image/jpeg",
          },
          {
            src: "screenshots/sik-svelte-app-3.jpg",
            sizes: "540x1200",
            type: "image/jpeg",
          },
        ],
      },
    }),
  ],
  resolve: {
    alias: {
      // UI components alias (also listed within tsconfig.json)
      ui: "/src/ui",
    },
  },
});
