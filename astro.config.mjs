import { defineConfig } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import react from "@astrojs/react";
import cloudflare from "@astrojs/cloudflare";

export default defineConfig({
  integrations: [react()],
  output: "server",
  vite: {
    plugins: [tailwindcss()],
    resolve: {
      alias: import.meta.env.PROD && {
        "react-dom/server": "react-dom/server.edge",
      },
    },
  },

  adapter: cloudflare({
    platformProxy: {
      enabled: true,
    },
  }),
  site: "https://indiehackers.tokyo",
});
