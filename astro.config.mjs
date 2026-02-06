import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  output: 'static',
  integrations: [
    tailwind({
      configFile: './tailwind.config.ts',
    }),
  ],
  server: {
    port: 5000,
    host: '0.0.0.0',
  },
});
