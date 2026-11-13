import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite'; // Note: Astro 5+ uses the Vite plugin for Tailwind v4

export default defineConfig({
  site: 'https://www.wristtrack.app',
  vite: {
    plugins: [tailwindcss()],
  },
});
