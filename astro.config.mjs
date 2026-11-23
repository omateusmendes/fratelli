// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// TODO(hotel): substituir pelo domínio definitivo antes do lançamento.
const SITE_URL = process.env.SITE_URL ?? 'https://www.fratellipremiumhotel.com.br';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  // URLs com barra final (/sobre/) + pastas com index.html: funcionam sem
  // configuração extra na Vercel e no Nginx/Caddy do Coolify.
  trailingSlash: 'always',
  build: {
    format: 'directory',
    inlineStylesheets: 'auto',
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
