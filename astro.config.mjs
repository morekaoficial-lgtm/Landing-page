import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://github.com/morekaoficial-lgtm',
  base: '/landing-moreka',
  integrations: [tailwind()]
});
