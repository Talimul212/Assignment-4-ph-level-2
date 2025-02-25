/* eslint-disable @typescript-eslint/no-require-imports */
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
export default defineConfig({
  plugins: [tailwindcss(), require("daisyui")],
});
