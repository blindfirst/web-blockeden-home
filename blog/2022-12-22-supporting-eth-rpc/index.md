---
title: Extending BlockEden.xyz RPC Service to Ethereum Ecosystem
authors: [jack]
tags: [product, eth, ethereum, rpc]
abstract: We expand RPC service support to Ethereum mainnet.
---

Back to a month ago, we made a public incognito Ethereum mainnet RPC endpoint
available to Metamask users ([blog post](https://blockeden.xyz/blog/2022/11/25/incognito-ethereum-rpc-url/)),
which attracted and was used by a few users. Now we decided to expand the
benefit to our developer customers too!

## How to get started?

**Step 1.** Go to https://blockeden.xyz/dash/. Please sign up if you haven’t
done so.

**Step 2.** Input your name for the API key, select ETH Mainnet, and then click
**+ Create key**.

**Step 3.** Grab your access URL by clicking it and copying it to the clipboard.

**Step 4.** Use the access URL in your project like the following. Remember to
replace `<access_key>` with your own key.

To test it, using `curl` to connect ETH mainnet
```
curl --location --request POST ‘https://eth-mainnet.blockeden.xyz/<access_key>' \
--header 'Content-Type: application/json' \
--data-raw '{
        "jsonrpc":"2.0",
        "method":"eth_blockNumber",
        "params":[],
        "id":73
}'
```

## Why Ethereum Network?

Ethereum has the biggest developer ecosystem, and there are so many great
innovations accumulated over years. Supporting it is going to create significant
synergy with Move ecosystem. Many of our customers are not exclusive Move
developers. Building a single stop for all needed services makes their life
easier.

Enjoy our new service and happy holidays!

