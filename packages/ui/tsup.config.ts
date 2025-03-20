import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: {
    resolve: true,
  },
  splitting: false,
  clean: true,
  minify: false,
  outDir: "dist",
  esbuildOptions(options) {
    options.external = ["react", "react-dom"];
  },
});
