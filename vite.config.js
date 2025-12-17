import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/H2DC12/",   // 👈 REQUIRED for GitHub Pages
  plugins: [react()],
});
