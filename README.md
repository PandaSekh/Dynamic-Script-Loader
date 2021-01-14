# Dynamic Script Loader
![Node.js Package](https://github.com/PandaSekh/Dynamic-Script-Loader/workflows/Node.js%20Package/badge.svg)
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@pandasekh/dynamic-script-loader@latest)

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

- Skypack Minified (Recommended) - v1.0.0
```js 
import loader from 'https://cdn.skypack.dev/pin/@pandasekh/dynamic-script-loader@v1.0.0-WVbL4ZUgz0Enyn4aBFAa/min/@pandasekh/dynamic-script-loader.js';
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
