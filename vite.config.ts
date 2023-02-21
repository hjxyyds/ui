/// <reference types="vitest" />
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import { presetUno, presetAttributify, presetIcons } from "unocss";
import Unocss from "unocss/vite";
// https://vitejs.dev/config/
const rollupOptions = {
  external: ["vue", "vue-router"],
  output: {
    globals: {
      vue: "Vue",
    },
  },
};
export default defineConfig({
  test: {
    globals: true,
    environment: "happy-dom",
    transformMode: {
      web: [/.[tj]sx$/],
    },
  },
  plugins: [
    vue(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
    Unocss({
      presets: [presetUno(), presetAttributify(), presetIcons()],
    }),
  ],

  build: {
    rollupOptions,
    minify: true,
    cssCodeSplit: true,
    sourcemap: true,
    lib: {
      entry: "./src/entry.ts",
      name: "SmartyUI",
      fileName: "smarty-ui",
      // 导出模块格式
      formats: ["es", "umd", "iife", "cjs"],
    },
  },
});
