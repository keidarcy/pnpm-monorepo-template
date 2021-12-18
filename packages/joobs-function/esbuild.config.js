const esbuild = require('esbuild');

// Automatically exclude all node_modules from the bundled version
const { nodeExternalsPlugin } = require('esbuild-node-externals');

(async function build() {
  const results = await esbuild.build({
    entryPoints: ['./src/index.ts'],
    outfile: 'dist/index.js',
    bundle: true,
    platform: 'node',
    // minify: true,
    // sourcemap: true,
    // target: 'node14',
    plugins: [nodeExternalsPlugin()],
    watch: true,
  });
  console.log('results:', results);
})();
