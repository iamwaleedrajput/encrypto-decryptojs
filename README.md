# React Encrypt Decrypt Data

## Installation

```
npm i encrypto-decryptojs --save
```

## Usage

To encrypt

```js
import React from "react";
import { encrypto } from "encrypto-decryptojs";

export default function App() {
  const encrypted = encrypto(data);
  return <div>{encrypted}</div>;
}
```

To decrypt
use encrypted data to decrypt it

```js
import React from "react";
import { encrypto, decrypto } from "encrypto-decryptojs";

export default function App() {
  const encrypted = encrypto(data);
  const decrypted = decrypto(encrypted);

  return <div>{decrypted}</div>;
}
```
