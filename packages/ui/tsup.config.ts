import { defineConfig } from "tsup";

export default defineConfig({
  entry: ["src/index.ts"],
  format: ["esm", "cjs"],
  dts: true,
  splitting: false,
  clean: true,
  outDir: "dist",
  esbuildOptions(options) {
    options.external = ["react", "react-dom"];
  },
});
