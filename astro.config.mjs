import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://k109.morekashop.com',
  integrations: [tailwind()]
});
