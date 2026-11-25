// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

/**
 * Domínio público do site — usado no canonical, sitemap, robots.txt e nas
 * URLs absolutas do OpenGraph (WhatsApp/redes buscam a imagem por essa URL).
 * Ordem de prioridade:
 * 1. SITE_URL (defina na Vercel/Coolify quando houver domínio definitivo)
 * 2. Domínio de produção detectado automaticamente na Vercel ou no Coolify
 * 3. Endereço local (apenas desenvolvimento)
 */
/** @param {string | undefined} host */
const withProtocol = (host) => (host ? (host.startsWith('http') ? host : `https://${host}`) : undefined);
const SITE_URL =
  process.env.SITE_URL ||
  withProtocol(process.env.VERCEL_PROJECT_PRODUCTION_URL) ||
  withProtocol(process.env.VERCEL_URL) ||
  withProtocol(process.env.COOLIFY_URL?.split(',')[0]) ||
  withProtocol(process.env.COOLIFY_FQDN?.split(',')[0]) ||
  'http://localhost:4321';

export default defineConfig({
  site: SITE_URL,
  output: 'static',
  // URLs com barra final (/sobre/) + pastas com index.html: funcionam sem
  // configuração extra na Vercel e no Nginx/Caddy do Coolify.
  trailingSlash: 'always',
  build: {
    format: 'directory',
    // CSS embutido no HTML: elimina a requisição que bloqueava a primeira pintura
    inlineStylesheets: 'always',
  },
  devToolbar: {
    enabled: false,
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
