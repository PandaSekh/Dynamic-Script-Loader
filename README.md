# Dynamic Script Loader
![Tests](https://github.com/PandaSekh/Dynamic-Script-Loader/workflows/Tests/badge.svg)
[![codecov](https://codecov.io/gh/PandaSekh/Dynamic-Script-Loader/branch/master/graph/badge.svg?token=KTUH71UEZS)](https://codecov.io/gh/PandaSekh/Dynamic-Script-Loader)
![npm bundle size](https://img.shields.io/bundlephobia/minzip/@pandasekh/dynamic-script-loader@1.1.0)

> 🐼 Tiny (~300B) package to dynamically import Javascript files only when needed

Functionalities:
- Promise based
- Hashes the script source, preventing multiple identical imports
- Small, UMD file is less than 350 bytes only!

* * *

- [Installation](#installation)
- [Usage](#usage)
- [Demo](#demo)
- [API](#api)
- [Contribute](#contribute)
- [License](#license)

* * *

## Installation

Node:

```sh
npm i -S @pandasekh/dynamic-script-loader
```

Yarn:
```sh
yarn add @pandasekh/dynamic-script-loader
```

### CDN
- Skypack
```js 
import loader from 'https://cdn.skypack.dev/@pandasekh/dynamic-script-loader';
```

- unpkg
```js 
<script src="https://unpkg.com/@pandasekh/dynamic-script-loader@latest">
```

## Usage

```js
// Import using JS Modules
import load from "@pandasekh/dynamic-script-loader"

// or using CommonJS
const load = require("@pandasekh/dynamic-script-loader")

// Using a CDN (Node not required)
import load from 'https://cdn.skypack.dev/@pandasekh/dynamic-script-loader';

// Then import a library only when needed
load("https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js")

// Promise based API
load("https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js").then(() => console.log("Loaded!"))

// Returns the generated DOM element
load("https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js").then(element => console.log(element.src))
```

## Demo
Test this library on [Codepen](https://codepen.io/pandasekh/pen/LYRXjYy).

## API 
- ### load
`load(src: string) => Promise<HTMLScriptElement>`

Default function, it will load a script asynchronously and return the HTMLScriptElement just created.

## Contribute
Contributions are welcome and appreciated.
Currently I need to setup some tests.

## License
[MIT License](https://github.com/PandaSekh/Dynamic-Script-Loader/blob/master/LICENSE) (c) 2021 Alessio Franceschi
