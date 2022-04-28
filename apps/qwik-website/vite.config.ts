import { qwikVite } from '@builder.io/qwik/optimizer';
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, resolve } from 'node:path';
import { defineConfig } from 'vite';

export default defineConfig(({ mode }) => {
  return {
    build: {
      rollupOptions: {
        input: ['src/main.tsx', 'index.html'],
        output: {
          // Qwik tends to generate long chunk names
          assetFileNames: 'q-[hash].[ext]',
          chunkFileNames: 'q-[hash].js',
        },
      },
    },
    plugins: [
      qwikVite({
        entryStrategy: {
          type: 'single',
        },
        srcDir: resolve('./src'),
        // On `clientonly` mode, lets disable SSR in development, so app is fully client bootstrapped
        ssr: mode === 'clientonly' ? false : undefined,
        symbolsOutput(data) {
          void outputJSON('./server/q-symbols.json', data);
        },
      }),
    ],
  };
});

async function outputJSON(path: string, data: any): Promise<void> {
  await mkdir(dirname(path), { recursive: true });
  await writeFile(path, JSON.stringify(data, null, 2));
}
