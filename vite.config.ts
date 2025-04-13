import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
// @ts-expect-error: type issues with vite-plugin-eslint
import eslint from "vite-plugin-eslint";

// https://vite.dev/config/
export default defineConfig({
  base: "/getting-married/",
  plugins: [vue(), eslint()],
});
