# V-Vite Plugin 🔥

**V-Vite Plugin** is a [Vite.js](https://vitejs.dev/) plugin
designed to enhance the development experience
of projects built with the [V programming language](https://vlang.io/).

## ✨ Features

- 🔄 Seamless integration of V with Vite.
- ⚡ Hot Module Replacement (HMR) support.
- 🚀 Efficient build process optimized for V projects.

## 📦 Installation

Using npm:

```sh
npm install v-vite --save-dev
```

Using pnpm:

```sh
pnpm add v-vite --save-dev
```

Using yarn:

```sh
yarn add v-vite --dev
```

Using Bun:

```sh
bun add v-vite --dev
```

Using Deno:

```sh
deno add npm:v-vite
```

## ⚙️ Usage

Add `v-vite` to your `vite.config.js` or `vite.config.ts`:

```js
import { defineConfig } from 'vite';
import v from 'v-vite';

export default defineConfig({
  plugins: [v('src/resources/main.js')],
});
```

## 🔧 Configuration

The plugin requires you to specify the entry points of your application.
These can be JavaScript or CSS files, as well as preprocessed language elements
like TypeScript, JSX, TSX, Sass, etc. You can provide a string, an array of entries,
or a configuration object as specified below:

```ts
interface PluginConfig {
  /** The path or paths of the entry points to compile. */
  input: InputOption;

  /** V's public directory. @default 'public' */
  publicDirectory?: string;

  /** The public subdirectory where compiled assets should be written. @default 'build' */
  buildDirectory?: string;

  /** The path to the "hot" file. @default `${publicDirectory}/hot` */
  hotFile?: string;

  /** The path of the SSR entry point. */
  ssr?: InputOption;

  /** The directory where the SSR bundle should be written. @default 'ssr' */
  ssrOutputDirectory?: string;

  /** Configuration for full page refresh on file changes. @default false */
  refresh?: boolean | string | string[] | RefreshConfig | RefreshConfig[];

  /** Transform the code while serving. */
  transformOnServe?: (code: string, url: DevServerUrl) => string;
}

interface RefreshConfig {
  paths: string[];
  config?: FullReloadConfig;
}
```

Example usage:

```js
v({
  input: ['src/rsources/main.css', 'src/resources/main.js'],
  publicDirectory: 'static',
  buildDirectory: 'dist',
  hotFile: 'static/hot',
  ssr: 'src/ssr-entry.v',
  ssrOutputDirectory: 'server',
  refresh: ['src/resources/**', 'src/templates/**'],
});
```

## 🤝 Contribution

We welcome contributions! If you find an issue or have an idea for improvement,
feel free to submit a pull request or open an issue.

## 📜 License

This project is licensed under the MIT License.
See the [LICENSE](./LICENSE) file for details.
