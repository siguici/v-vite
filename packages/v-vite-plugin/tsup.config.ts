import { defineConfig } from 'tsup';

export default defineConfig((options) => {
  return {
    format: ['esm', 'cjs'],
    clean: true,
    minify: !options.watch,
    dts: true,
    entry: [
      'src/executor.ts',
      'src/git.ts',
      'src/index.ts',
      'src/pm.ts',
      'src/runtime.ts',
      'src/tool.ts',
      'src/utils.ts'
    ]
  };
});
