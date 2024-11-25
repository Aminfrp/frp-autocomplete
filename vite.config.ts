import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve("src", "Main.tsx"),
      name: "frp-autocomplete",
      fileName: (format) => `frp-autocomplete.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom"],
      output: {
        globals: {
          react: "React",
        },
      },
    },
  },
  plugins: [react()],
});
