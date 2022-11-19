---
sidebar_position: 3
---

# Get started

Block Eden provides [Sui](https://sui.io/) JSON-RPC API.

* **Standard Interface**: supporting Sui JSON-RPC API with HTTPS.
* **Reliability**: running on the latest network upgrades with a minimum 99.9%
  uptime guarantee.
* **Instant Availability**: connecting your application with one line of code. No
  syncing, and no complicated setups.
* **Full Delegation**: freeing you from dealing with DevOps work for Sui node.


## Sign Up

If you don't have an account yet, please [create a Block Eden account](https://blockeden.xyz/dash/sign-up/) first.

## Create a Block Eden access key

You'll need access keys to call our APIs. Here is how to get them.

1. Go to https://blockeden.xyz/dash/
2. Enter the name of the access key you want to create.
3. Select a network. We support the following networks...
   1. **Sui Devnet** for experimenting with new ideas, where transactions have no real value.


![image info](./img/create_sui_access_key.png)

## Make a request with Block Eden

The access URL is your unique endpoint to use Sui node API. Copy it and
compose the first request:
```
# sui json-rpc discover request

curl -X POST https://sui-devnet.blockeden.xyz/<access_key>
-H 'Content-Type: application/json'
-d '{ "jsonrpc":"2.0", "method":"rpc.discover","id":1}'
```

```
{
    "jsonrpc": "2.0",
    "result": {
        "openrpc": "1.2.6",
        "info": {
            ......
```
If you see a response like the above, you're all set.

## API Reference

Please refer to the official
[API docs](https://docs.sui.io/sui-jsonrpc).

## Starting to Build!

If there’s anything else you need, join us on
[Discord](https://discord.gg/GqzTYQ4YNa)!
