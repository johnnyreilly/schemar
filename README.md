<h1 align="center">Schemar</h1>

<p align="center">GitHub Action for validating structured data</p>

<p align="center">
	<a href="https://github.com/johnnyreilly/schemar/blob/main/.github/CODE_OF_CONDUCT.md" target="_blank"><img alt="Contributor Covenant" src="https://img.shields.io/badge/code_of_conduct-enforced-21bb42" /></a>
	<a href="https://github.com/johnnyreilly/schemar/blob/main/LICENSE.md" target="_blank"><img alt="License: MIT" src="https://img.shields.io/github/license/johnnyreilly/schemar?color=21bb42"></a>
	<img alt="Style: Prettier" src="https://img.shields.io/badge/style-prettier-21bb42.svg" />
	<img alt="TypeScript: Strict" src="https://img.shields.io/badge/typescript-strict-21bb42.svg" />
</p>

## Usage

```shell
npm i schemar
```

```ts
import { greet } from "schemar";

greet("Hello, world! 💖");
```

## Development

To develop this GitHub Action, you'll need to install the dependencies:

```shell
pnpm i
```

To run the action locally you can either use the `debug` script:

```shell
pnpm run debug
```

Or debug in VS Code using the `Debug Action` launch configuration.

Whichever you use, you configure inputs using the [.env](./.env) file.

<!-- You can remove this notice if you don't want it 🙂 no worries! -->

> 💙 This package was templated with [`create-typescript-app`](https://github.com/JoshuaKGoldberg/create-typescript-app).
