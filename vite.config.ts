/* eslint-disable @typescript-eslint/no-require-imports */
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import daisyui from "daisyui"; // ✅ require() পরিবর্তে import ব্যবহার করা হয়েছে

export default defineConfig({
  plugins: [tailwindcss()],
});
