# Dynamic Script Loader

> Tiny (219 bytes) package to dynamically import Javascript files only when needed 🐼

* * *

- [Installation](#installation)
- [Examples](#examples)
- [API](#api)
- [Contribute](#contribute)
- [License](#license)

* * *

## Installation

With node:

```sh
npm i dynamic-script-loader
```

## Examples

```js
// Import using JS Modules
import load from "dynamic-script-loader"

// or using CommonJS
const load = require("dynamic-script-loader")

// Then import a library only when needed
load("https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js")

// You can also pass a callback function which will run on script load
load("https://cdnjs.cloudflare.com/ajax/libs/axios/0.21.1/axios.min.js", () => console.log("Loaded"))
```

## API 
### `load(script: string, callback: Function)`
Default function. It will load the given script and call the callback whenever the script is loaded.

## Contribute
Contributions are welcome and appreciated.

## License
[MIT License](https://github.com/PandaSekh/Dynamic-Script-Loader/blob/master/LICENSE).