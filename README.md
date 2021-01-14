# Dynamic Script Loader
![npm bundle size (scoped)](https://img.shields.io/bundlephobia/minzip/@pandasekh/dynamic-script-loader)

> Tiny (<350B) package to dynamically import Javascript files only when needed 🐼

Functionalities:
- Promise based,
- Hashes the script source, preventing multiple identical imports,
- Small, UMD file is about 350 bytes only!

* * *

- [Installation](#installation)
- [Usage](#usage)
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

CDN:
```js
<script src="https://unpkg.com/@pandasekh/dynamic-script-loader@latest/dist/index.umd.js" />
```

## Usage

```js
// Import using JS Modules
import load from "@pandasekh/dynamic-script-loader"

// or using CommonJS
const load = require("@pandasekh/dynamic-script-loader")

// Then import a library only when needed
load("https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js")

// Promise based API
load("https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js").then(() => console.log("Loaded!"))

// Returns the generated DOM element
load("https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js").then(element => console.log(element.src))
```

## API 
- ### load
`load(src: string) => Promise<HTMLScriptElement>`

Default function, it will load a script asynchronously and return the HTMLScriptElement just created.

## Contribute
Contributions are welcome and appreciated.
Currently I need to setup some tests.

## License
[MIT License](https://github.com/PandaSekh/Dynamic-Script-Loader/blob/master/LICENSE) (c) 2021 Alessio Franceschi