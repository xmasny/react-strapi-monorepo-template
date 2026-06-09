import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import TanStackRouterVite from "@tanstack/router-plugin/vite";
import tailwindcss from "@tailwindcss/vite";
import { devtools } from '@tanstack/devtools-vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    devtools({
      removeDevtoolsOnBuild: true,
      consolePiping: {
        enabled: true,
      },
      
    }),
    react(),
    tsconfigPaths(), 
    tailwindcss(),
  ],
});
