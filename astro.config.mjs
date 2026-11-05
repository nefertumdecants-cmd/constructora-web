import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

// Una sola página con dos idiomas: el cambio ES/EN se hace en el navegador (ver Base.astro).
export default defineConfig({
  site: 'https://constructora-web.vercel.app', // TODO(cliente): dominio real
  integrations: [preact(), sitemap()],
  vite: { plugins: [tailwindcss()] },
});
