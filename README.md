[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)

# chalk-cross: modified version of chalk5 for better support in devolve-ui projects

## Installing

chalk-cross can be installed using [npm](https://www.npmjs.com/) or [pnpm](https://pnpm.io/).

```shell
pnpm install @raycenity/chalk-cross
```

Alternatively you can just download the built code directly [here](https://github.com/Jakobeha/chalk-cross/releases/latest). The code is an unminified ES module (learn about ES modules [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules))

## Repository info (e.g. for contributing)

chalk-cross is built using [esbuild](https://esbuild.org/). The package manager used is [pnpm](https://pnpm.io/). Linting is done by [standard](https://standardjs.com/), however we use a *slightly* modified version removing some warnings which is run through `pnpm run lint` (specifically `node ts-standardx.mjs`).
