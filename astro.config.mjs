import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'http://k109.morekashop.com,
  base: '/Landing-page',
  integrations: [tailwind()]
});
