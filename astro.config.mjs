import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://example.com', // TODO(cliente): dominio real
  integrations: [preact(), sitemap({ i18n: { defaultLocale: 'es', locales: { es: 'es-ES', en: 'en-US' } } })],
  i18n: { defaultLocale: 'es', locales: ['es', 'en'], routing: { prefixDefaultLocale: false } },
  vite: { plugins: [tailwindcss()] },
});
