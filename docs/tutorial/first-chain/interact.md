---
id: interact
title: Interact with your node
---

## Interact using muta-cli

To interact with your local node, we will use the muta-cli, which is a easy-to-use command line tool for interacting with Muta.

### 1. Install muta-cli

Install it firstly using following command:

   ```
   npm install -g muta-cli
   ```

### 2. Query 

Let’s enter interactive mode and query the blockheight and blockheader:
 
   ```
   $ muta-cli repl
   > await client.getLatestBlockHeight()
   2000  
   > await client.getBlock('0x1')
   { 
     header: {
       chainId: '0xb6a4d7da21443f5e816e8700eea87610e6d769657d6b8ec73028457bf2ca4036',
       confirmRoot: [],
       cyclesUsed: [],
       height: '0000000000000001',
       execHeight: '0000000000000000',
       orderRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
       preHash: '0x12471b0157af0cc1869361160e651cd6670614fea7fc6834d79bb2699555a0a9',
       proposer: '0xf8389d774afdad8755ef8e629e5a154fddc6325a',
       receiptRoot: [],
       stateRoot: '0xf6ec46b4b663a73a3786c27b75d595f9d8e879964faf340c702d078c4d457875',
       timestamp: '000000005e5a06f5',
       validatorVersion: '0000000000000000',
       proof: {
         bitmap: '',
         blockHash: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
         height: '0000000000000000',
         round: '0000000000000000',
         signature: ''
       },
       validators: [ [Object] ]
     },
     orderedTxHashes: [],
     hash: '0x9c77d286a1b4c77f45c910b73996f1ca66bc55e046917864b7652aa31e686ac2'
   }
   ```

### 3. Issue a new token
   
   ```
   $ muta-cli repl
   > const account = accounts[0]

   > const service = new muta_sdk.AssetService(client, account)

   # 发行资产
   > MT = await service.create_asset({name: 'Muta Token', supply: 1000000000, symbol: 'MT'})
   {
     txHash: '0x8510b5da8c54fb7d5b3de83b13a65188e55102a830a1653ab6c839f3fe326530',
     height: '0000000000000026',
     cyclesUsed: '0000000000005208',
     events: [
       {
         data: '{"id":"0xfdd1609dfa84a04bc2074d9a8a6a4fab13ada36c2cb9570810f997b44d5b8074","name":"Muta Token","symbol":"MT","supply":1000000000,"issuer":"0x45f74b60a96160352267f2e4fcdcb92ddea304b1"}',
         service: 'asset'
       }
     ],
     stateRoot: '0x51e2ad9e08aea6cd34f2c170c79b5eca46485bfe8d95f39e73dc2c709a7b6209',
     response: {
       serviceName: 'asset',
       method: 'create_asset',
       ret: {
         id: '0xfdd1609dfa84a04bc2074d9a8a6a4fab13ada36c2cb9570810f997b44d5b8074',
         name: 'Muta Token',
         symbol: 'MT',
         supply: 1000000000,
         issuer: '0x45f74b60a96160352267f2e4fcdcb92ddea304b1'
       },
       isError: false
     }
   }
   ```

## Next Steps

This is the end of your journey to launching your first blockchain with Muta.

You have launched a working Muta-based blockchain,, and issues a new token on your chain. We hope you'll continue learning about Muta.

Your next step may be:

* Decentralize your network with more nodes in the Start a Private Network tutorial.
* Add custom functionality in the Build a dApp tutorial.

If you experienced any issues with this tutorial or want to provide feedback, feel free to open a GitHub issue or reach out on Discord.
    
