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
      fileName: (format) => `frp-autocomplete.${format}.js`,
    },
    rollupOptions: {
      external: [
        /^lit/,
        "@storybook/react",
        "@storybook/addon-styling",
        "@storybook/addon-essentials",
        "@storybook/addon-interactions",
        "@storybook/addon-links",
        "@storybook/addon-actions",
      ],
    },
  },
  plugins: [dts()],
});
