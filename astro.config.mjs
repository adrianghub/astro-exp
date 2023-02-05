import image from '@astrojs/image';
import solidJs from '@astrojs/solid-js';
import tailwind from '@astrojs/tailwind';
import astroI18next from 'astro-i18next';
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://adrianzinko.com',
  integrations: [
    tailwind(),
    astroI18next(),
    image({
      serviceEntryPoint: '@astrojs/image/sharp'
    }),
    solidJs()
  ]
});
