// @ts-check
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://portfolio-khairyky.vercel.app',
  adapter: vercel(),
});