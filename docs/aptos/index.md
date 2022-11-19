---
sidebar_position: 2
---

# Get started

BlockEden.xyz provides [Aptos](https://aptoslabs.com/) node API.

* **Standard Interface**: supporting Aptos Node API via Restful API with HTTPS.
* **Reliability**: running on the latest network upgrades with a minimum 99.9%
  uptime guarantee.
* **Instant Availability**: connecting your application with one line of code. No
  syncing, and no complicated setups.
* **Full Delegation**: freeing you from dealing with DevOps work for Aptos node.



## How to connect to Aptos mainnet?

**Step 1**. Go to https://blockeden.xyz/dash/. Please sign up if you haven't done so.

**Step 2**. Input your name for the API key, select Aptos Mainnet GraphQL, and then click + Create key.

![create Aptos mainnet api key](./img/create-apotos-mainnet-api-key.png)

**Step 3**. Grab your access URL by clicking it and copying it to the clipboard.

![Aptos mainnet api key](./img/aptos-mainnet-access-key.png)

**Step 4**. Use the access URL in your project like the following. Remember to replace `<access_key>` with your own key.

```typescript
import {AptosClient} from "aptos";

const client = new AptosClient("https://aptos-mainnet.blockeden.xyz/<access_key>");
const block = await client.getBlockByHeight(1);
console.log(block);
```


## Make a request with BlockEden.xyz

The access URL is your unique endpoint to use Aptos node API. Copy it and
compose the first request: e.g., `https://aptos-testnet.blockeden.xyz/<access_key>/v1`

```
{
  "chain_id": 2,
  "epoch": "823",
  "ledger_version": "282458715",
  "oldest_ledger_version": "132658733",
  "ledger_timestamp": "1665901262718511",
  "node_role": "full_node",
  "oldest_block_height": "15427523",
  "block_height": "21026963",
  "git_hash": "36162a71289270c41371874fa2e818da96bc4751"
}
```

## API Reference

We host interactive [API docs here](/aptos-api-reference/get-ledger-info).

## Starting to Build!

If there’s anything else you need, join us on
[Discord](https://discord.gg/GqzTYQ4YNa)!
