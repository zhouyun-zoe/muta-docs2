---
id: compile-run
title: Compile and Run the Node
---

Once the prerequisites are installed, you can start to build your Muta Chain.

### Compile the source code

Firstly, you need to compile the source code.

1. Clone the source code

   ```
   git clone https://github.com/nervosnetwork/muta.git
   ```

2. Compile the source code
 
   ```
   cd muta 
   cargo build --release --example muta-chain
   ```
:::note
This final compilation can take up to 30 minutes depending on your hardware.
:::

Now that your node has finished compiling, let's show you how to run the node.

### Start Your Node

Run the following command to start your local node:

```
./target/release/examples/muta-chain
```

Your should see something like this if your node is running successfully:

```log
[2020-06-29T15:59:36.253182+08:00 INFO overlord::state::process] Overlord: state goto new height 151
[2020-06-29T15:59:36.253524+08:00 INFO overlord::smr::state_machine] Overlord: SMR triggered by new height 151
[2020-06-29T15:59:36.253624+08:00 INFO overlord::smr::state_machine] Overlord: SMR goto new height: 151
[2020-06-29T15:59:36.253809+08:00 INFO overlord::smr::state_machine] Overlord: SMR throw New round 0 event, lock round None, lock proposal None event
[2020-06-29T15:59:36.254105+08:00 INFO overlord::timer] Overlord: timer set New round 0 event, lock round None, lock proposal None timer
[2020-06-29T15:59:36.254276+08:00 INFO overlord::state::process] Overlord: state goto new round 0
[2020-06-29T15:59:36.254448+08:00 INFO overlord::state::process] Overlord: state self become leader, height 151, round 0
[2020-06-29T15:59:36.254560+08:00 INFO core_mempool] [core_mempool]: 0 txs in map and 0 txs in queue while package
[2020-06-29T15:59:36.254723+08:00 INFO overlord::state::process] Overlord: state broadcast a signed proposal height 151, round 0, hash "94dedbc47bcc95031af8001e5f40f9521c1871c6bacd8c983e6444bd23c9eb7c" and trigger SMR
[2020-06-29T15:59:36.259405+08:00 INFO core_consensus::engine] [consensus-engine]: check block cost 905ns
[2020-06-29T15:59:36.259439+08:00 INFO overlord::smr::state_machine] Overlord: SMR triggered by a proposal hash "94dedbc47bcc95031af8001e5f40f9521c1871c6bacd8c983e6444bd23c9eb7c", from State, height 151, round 0
[2020-06-29T15:59:36.259513+08:00 INFO core_consensus::engine] [consensus-engine]: get txs cost 7.065µs
[2020-06-29T15:59:36.259566+08:00 INFO overlord::smr::state_machine] Overlord: SMR throw Prevote event height 151, round 0, block hash "94dedbc47bcc95031af8001e5f40f9521c1871c6bacd8c983e6444bd23c9eb7c", lock round None event
[2020-06-29T15:59:36.259671+08:00 INFO overlord::timer] Overlord: timer set Prevote event height 151, round 0, block hash "94dedbc47bcc95031af8001e5f40f9521c1871c6bacd8c983e6444bd23c9eb7c", lock round None timer
[2020-06-29T15:59:36.259707+08:00 INFO overlord::state::process] Overlord: state receive Prevote vote event height 151, round 0, hash "94dedbc47bcc95031af8001e5f40f9521c1871c6bacd8c983e6444bd23c9eb7c"
[2020-06-29T15:59:36.259875+08:00 INFO core_consensus::engine] [consensus-engine]: write wal cost 266.879µs order_hashes_len 0
[2020-06-29T15:59:36.262407+08:00 INFO overlord::state::process] Overlord: state round 0, Prevote vote pool length 1
[2020-06-29T15:59:36.262452+08:00 INFO overlord::state::process] Overlord: state aggregate signatures height 151, round 0, voters ["f8389d774afdad8755ef8e629e5a154fddc6325a"]
[2020-06-29T15:59:36.262619+08:00 INFO overlord::state::process] Overlord: state broadcast a Prevote QC, height 151, round 0, hash "94dedbc47bcc95031af8001e5f40f9521c1871c6bacd8c983e6444bd23c9eb7c"
[2020-06-29T15:59:36.262750+08:00 INFO overlord::state::process] Overlord: state receive a verify response true, height 151, round 0, hash "94dedbc47bcc95031af8001e5f40f9521c1871c6bacd8c983e6444bd23c9eb7c"
[2020-06-29T15:59:36.262861+08:00 INFO overlord::smr::state_machine] Overlord: SMR triggered by prevote QC hash "94dedbc47bcc95031af8001e5f40f9521c1871c6bacd8c983e6444bd23c9eb7c" qc round 0 from State, height 151, round 0
[2020-06-29T15:59:36.262961+08:00 INFO overlord::smr::state_machine] Overlord: SMR throw Precommit event height 151, round 0, block hash "94dedbc47bcc95031af8001e5f40f9521c1871c6bacd8c983e6444bd23c9eb7c", lock round Some(0) event
[2020-06-29T15:59:36.263061+08:00 INFO overlord::timer] Overlord: timer set Precommit event height 151, round 0, block hash "94dedbc47bcc95031af8001e5f40f9521c1871c6bacd8c983e6444bd23c9eb7c", lock round Some(0) timer
[2020-06-29T15:59:36.263095+08:00 INFO overlord::state::process] Overlord: state receive Precommit vote event height 151, round 0, hash "94dedbc47bcc95031af8001e5f40f9521c1871c6bacd8c983e6444bd23c9eb7c"
[2020-06-29T15:59:36.266089+08:00 INFO overlord::state::process] Overlord: state round 0, Precommit vote pool length 1
[2020-06-29T15:59:36.266148+08:00 INFO overlord::state::process] Overlord: state aggregate signatures height 151, round 0, voters ["f8389d774afdad8755ef8e629e5a154fddc6325a"]
[2020-06-29T15:59:36.266288+08:00 INFO overlord::state::process] Overlord: state broadcast a Precommit QC, height 151, round 0, hash "94dedbc47bcc95031af8001e5f40f9521c1871c6bacd8c983e6444bd23c9eb7c"
[2020-06-29T15:59:36.266409+08:00 INFO overlord::state::process] Overlord: state trigger SMR Precommit QC height 151, round 0, hash "94dedbc47bcc95031af8001e5f40f9521c1871c6bacd8c983e6444bd23c9eb7c"
[2020-06-29T15:59:36.266510+08:00 INFO overlord::smr::state_machine] Overlord: SMR triggered by precommit QC hash "94dedbc47bcc95031af8001e5f40f9521c1871c6bacd8c983e6444bd23c9eb7c" qc round 0 from State, height 151, round 0
[2020-06-29T15:59:36.266577+08:00 INFO overlord::smr::state_machine] Overlord: SMR throw Commit event hash "94dedbc47bcc95031af8001e5f40f9521c1871c6bacd8c983e6444bd23c9eb7c" event
[2020-06-29T15:59:36.266666+08:00 INFO overlord::state::process] Overlord: state receive commit event height 151, round 0, hash "94dedbc47bcc95031af8001e5f40f9521c1871c6bacd8c983e6444bd23c9eb7c"
[2020-06-29T15:59:36.267090+08:00 INFO core_consensus::engine] [consensus]: validator of height 152 is [bls public key "04188ef9", address "0xf8389d774afdad8755ef8e629e5a154fddc6325a", propose weight 1, vote weight 1]
[2020-06-29T15:59:36.267354+08:00 INFO core_mempool] [core_mempool]: flush mempool with 0 tx_hashes
[2020-06-29T15:59:36.267737+08:00 INFO core_consensus::adapter] [consensus-adapter]: exec transactions cost 762.582µs transactions len 0
[2020-06-29T15:59:36.267854+08:00 INFO overlord::state::process] Overlord: achieve consensus in height 151, costs 1 round 14.371511ms time
[2020-06-29T15:59:36.267885+08:00 INFO core_consensus::adapter] [consensus-adapter]: save receipts cost 56.179µs receipts len 0
[2020-06-29T15:59:36.267955+08:00 INFO core_consensus::status] update_by_executed: info exec height 151, cycles used 0, state root 0xdd0b5a5e75cca4143baec4be1b7d22906e62538da760e1f22655c1d0006903b7, receipt root 0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421, confirm root 0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421
[2020-06-29T15:59:36.268010+08:00 INFO core_consensus::status] update_by_executed: current status latest_committed_height 151, exec height 150, current_hash 0x94dedbc47bcc95031af8001e5f40f9521c1871c6bacd8c983e6444bd23c9eb7c, latest_committed_state_root 0xdd0b5a5e75cca4143baec4be1b7d22906e62538da760e1f22655c1d0006903b7 list state root [], list receipt root [], list confirm root [], list cycle used []
[2020-06-29T15:59:39.254042+08:00 INFO overlord::state::process] Overlord: state goto new height 152
[2020-06-29T15:59:39.254798+08:00 INFO overlord::smr::state_machine] Overlord: SMR triggered by new height 152
[2020-06-29T15:59:39.255410+08:00 INFO overlord::smr::state_machine] Overlord: SMR goto new height: 152
[2020-06-29T15:59:39.255838+08:00 INFO overlord::smr::state_machine] Overlord: SMR throw New round 0 event, lock round None, lock proposal None event
[2020-06-29T15:59:39.255987+08:00 INFO overlord::timer] Overlord: timer set New round 0 event, lock round None, lock proposal None timer
[2020-06-29T15:59:39.256148+08:00 INFO overlord::state::process] Overlord: state goto new round 0
[2020-06-29T15:59:39.256357+08:00 INFO overlord::state::process] Overlord: state self become leader, height 152, round 0
[2020-06-29T15:59:39.256489+08:00 INFO core_mempool] [core_mempool]: 0 txs in map and 0 txs in queue while package
[2020-06-29T15:59:39.256693+08:00 INFO overlord::state::process] Overlord: state broadcast a signed proposal height 152, round 0, hash "87dfcb327358cedd89825f71935aa28c3ac6cb31bde0c13698af103b6e6f2763" and trigger SMR
[2020-06-29T15:59:39.259548+08:00 INFO core_consensus::engine] [consensus-engine]: check block cost 742ns
[2020-06-29T15:59:39.259607+08:00 INFO overlord::smr::state_machine] Overlord: SMR triggered by a proposal hash "87dfcb327358cedd89825f71935aa28c3ac6cb31bde0c13698af103b6e6f2763", from State, height 152, round 0
[2020-06-29T15:59:39.259638+08:00 INFO core_consensus::engine] [consensus-engine]: get txs cost 9.017µs
[2020-06-29T15:59:39.259690+08:00 INFO overlord::smr::state_machine] Overlord: SMR throw Prevote event height 152, round 0, block hash "87dfcb327358cedd89825f71935aa28c3ac6cb31bde0c13698af103b6e6f2763", lock round None event
[2020-06-29T15:59:39.259800+08:00 INFO overlord::timer] Overlord: timer set Prevote event height 152, round 0, block hash "87dfcb327358cedd89825f71935aa28c3ac6cb31bde0c13698af103b6e6f2763", lock round None timer
[2020-06-29T15:59:39.259899+08:00 INFO overlord::state::process] Overlord: state receive Prevote vote event height 152, round 0, hash "87dfcb327358cedd89825f71935aa28c3ac6cb31bde0c13698af103b6e6f2763"
[2020-06-29T15:59:39.260005+08:00 INFO core_consensus::engine] [consensus-engine]: write wal cost 268.058µs order_hashes_len 0
[2020-06-29T15:59:39.263096+08:00 INFO overlord::state::process] Overlord: state round 0, Prevote vote pool length 1
[2020-06-29T15:59:39.263158+08:00 INFO overlord::state::process] Overlord: state aggregate signatures height 152, round 0, voters ["f8389d774afdad8755ef8e629e5a154fddc6325a"]
[2020-06-29T15:59:39.263303+08:00 INFO overlord::state::process] Overlord: state broadcast a Prevote QC, height 152, round 0, hash "87dfcb327358cedd89825f71935aa28c3ac6cb31bde0c13698af103b6e6f2763"
[2020-06-29T15:59:39.263408+08:00 INFO overlord::state::process] Overlord: state receive a verify response true, height 152, round 0, hash "87dfcb327358cedd89825f71935aa28c3ac6cb31bde0c13698af103b6e6f2763"
[2020-06-29T15:59:39.263536+08:00 INFO overlord::smr::state_machine] Overlord: SMR triggered by prevote QC hash "87dfcb327358cedd89825f71935aa28c3ac6cb31bde0c13698af103b6e6f2763" qc round 0 from State, height 152, round 0
```

If the number after `height` is increasing, your blockchain is producing new blocks and reaching consensus about the state they describe!