import { defineConfig } from 'astro/config';
import react from '@astrojs/react';

export default defineConfig({
  integrations: [react()],
  output: 'static', // Cambiado a 'static' para generar archivos HTML
});
