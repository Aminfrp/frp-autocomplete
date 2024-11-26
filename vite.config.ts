import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

export default defineConfig({
  resolve: {
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  build: {
    emptyOutDir: false,
    outDir: "dist",
    lib: {
      entry: "src/index.ts",
      name: "frp-autocomplete",
      fileName: "frp-autocomplete",
    },
  },
  plugins: [dts()],
});
