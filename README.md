# WKD Client

This library implements a client for the Web Key Directory (WKD) protocol
in order to lookup keys on designated servers.

## Example: lookup public key using WKD

```js
import WKD from '@openpgp/wkd-client';
import { readKey } from 'openpgp';

(async () => {
  const wkd = new WKD();
  const publicKeyBytes = await wkd.lookup({
    email: 'alice@example.com'
  });
  const publicKey = await readKey({
    binaryKey: publicKeyBytes
  });
})();
```
