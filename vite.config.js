import { defineConfig } from 'vite';
import { fileURLToPath } from 'node:url';

export default defineConfig({
  // Keep the built site portable across localhost and GitHub Pages subfolders.
  base: './',
  build: {
    rollupOptions: {
      input: {
        home: fileURLToPath(new URL('./index.html', import.meta.url)),
        contact: fileURLToPath(new URL('./contact.html', import.meta.url)),
        team: fileURLToPath(new URL('./team.html', import.meta.url)),
        services: fileURLToPath(new URL('./services.html', import.meta.url)),
      },
    },
  },
});
