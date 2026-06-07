import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import {defineConfig, loadEnv} from 'vite';
import fs from 'fs';

function imageListPlugin() {
  const generateImageList = () => {
    const imagesDir = path.resolve(__dirname, 'public/images');
    if (!fs.existsSync(imagesDir)) {
      fs.mkdirSync(imagesDir, { recursive: true });
    }
    const files = fs.readdirSync(imagesDir);
    const validExtensions = ['.jpg', '.jpeg', '.png', '.webp', '.svg', '.gif'];
    const images = files
      .filter((file) => validExtensions.includes(path.extname(file).toLowerCase()))
      .map((file) => {
        const baseName = path.parse(file).name;
        const caption = baseName
          .split(/[-_]/)
          .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
          .join(' ');
        return {
          url: `/images/${file}`,
          caption: caption,
          alt: caption
        };
      });

    const outputPath = path.resolve(__dirname, 'public/images.json');
    fs.writeFileSync(outputPath, JSON.stringify(images, null, 2));
    console.log(`[image-list-plugin] Generated list of ${images.length} images.`);
  };

  return {
    name: 'image-list-generator',
    buildStart() {
      generateImageList();
    },
    configureServer(server) {
      server.watcher.on('add', (filePath) => {
        if (filePath.includes('public/images')) generateImageList();
      });
      server.watcher.on('unlink', (filePath) => {
        if (filePath.includes('public/images')) generateImageList();
      });
    }
  };
}

export default defineConfig(({mode}) => {
  const env = loadEnv(mode, '.', '');
  return {
    base: './',
    plugins: [react(), tailwindcss(), imageListPlugin()],
    define: {
      'process.env.GEMINI_API_KEY': JSON.stringify(env.GEMINI_API_KEY),
    },
    resolve: {
      alias: {
        '@': path.resolve(__dirname, '.'),
      },
    },
    server: {
      // HMR is disabled in AI Studio via DISABLE_HMR env var.
      // Do not modify—file watching is disabled to prevent flickering during agent edits.
      hmr: process.env.DISABLE_HMR !== 'true',
    },
  };
});
