# React Encrypt Decrypt Data

## Installation

```
npm i encrypto-decrypto --save
```

## Usage

To encrypt

```js
import React from "react";
import { encrypto } from "./lib";

export default function App() {
  const encrypted = encrypto(data);
  return <div>{enc}</div>;
}
```

To decrypt
use encrypted data to decrted it

```js
import React from "react";
import { encrypto, decrypto } from "./lib";

export default function App() {
  const encrypted = encrypto(data);
  const decrypted = encrypted;

  return <div>{enc}</div>;
}
```
