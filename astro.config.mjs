// @ts-check
import { defineConfig } from 'astro/config';

import vercel from '@astrojs/vercel';

export default defineConfig({
  site: 'https://khairy-ky.vercel.app',
  adapter: vercel(),
});