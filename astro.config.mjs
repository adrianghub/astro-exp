import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';
import astroI18next from 'astro-i18next';
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://adrianzinko.com',
  integrations: [react(), tailwind(), astroI18next()]
});
