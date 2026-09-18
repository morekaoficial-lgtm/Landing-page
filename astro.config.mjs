import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://morekaoficial-lgtm.github.io',
  base: '/Landing-page',
  integrations: [tailwind()]
});
