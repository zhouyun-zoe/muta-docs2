(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{164:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return b})),n.d(t,"default",(function(){return p}));var a=n(1),i=n(9),l=(n(0),n(188)),r={id:"config",title:"\u914d\u7f6e\u8bf4\u660e"},c={id:"config",title:"\u914d\u7f6e\u8bf4\u660e",description:"\u9ed8\u8ba4\u7684\u521b\u4e16\u5757\u548c\u914d\u7f6e\u6837\u4f8b\u5728 `devtools/chain/` \u6587\u4ef6\u5939\u4e2d\uff0c\u6b64\u5904\u5bf9\u5176\u4e2d\u7684\u4e00\u4e9b\u5b57\u6bb5\u8fdb\u884c\u8bf4\u660e\u3002",source:"@site/docs/config.md",permalink:"/muta-docs2/docs/config",editUrl:"https://github.com/nervosnetwork/muta-docs/docs/config.md",sidebar:"docs",previous:{title:"\u5feb\u901f\u5165\u95e8",permalink:"/muta-docs2/docs/getting_started"},next:{title:"\u591a\u8282\u70b9\u90e8\u7f72\u6307\u5357",permalink:"/muta-docs2/docs/multi_node_deploy"}},b=[{value:"\u521b\u4e16\u5757",id:"\u521b\u4e16\u5757",children:[]},{value:"\u94fe\u7684\u8fd0\u884c\u914d\u7f6e",id:"\u94fe\u7684\u8fd0\u884c\u914d\u7f6e",children:[]},{value:"\u65e5\u5fd7\u793a\u4f8b",id:"\u65e5\u5fd7\u793a\u4f8b",children:[]}],o={rightToc:b};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(l.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(l.b)("p",null,"\u9ed8\u8ba4\u7684\u521b\u4e16\u5757\u548c\u914d\u7f6e\u6837\u4f8b\u5728 ",Object(l.b)("inlineCode",{parentName:"p"},"devtools/chain/")," \u6587\u4ef6\u5939\u4e2d\uff0c\u6b64\u5904\u5bf9\u5176\u4e2d\u7684\u4e00\u4e9b\u5b57\u6bb5\u8fdb\u884c\u8bf4\u660e\u3002"),Object(l.b)("h2",{id:"\u521b\u4e16\u5757"},"\u521b\u4e16\u5757"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"genesis.toml"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml"}),'timestamp = 0\nprevhash = "0x44915be5b6c20b0678cf05fcddbbaa832e25d7e6ac538784cd5c24de00d47472"\n\n[[services]]\nname = "asset"\npayload = \'\'\'\n{\n    "id": "0xf56924db538e77bb5951eb5ff0d02b88983c49c45eea30e8ae3e7234b311436c",\n    "name": "MutaToken",\n    "symbol": "MT",\n    "supply": 320000011,\n    "issuer": "0xf8389d774afdad8755ef8e629e5a154fddc6325a"\n}\n\'\'\'\n\n[[services]]\nname = "metadata"\npayload = \'\'\'\n{\n    "chain_id": "0xb6a4d7da21443f5e816e8700eea87610e6d769657d6b8ec73028457bf2ca4036",\n    "common_ref": "0x703873635a6b51513451",\n    "timeout_gap": 20,\n    "cycles_limit": 1000000,\n    "cycles_price": 1,\n    "interval": 3000,\n    "verifier_list": [\n        {\n            "bls_pub_key": "0x04188ef9488c19458a963cc57b567adde7db8f8b6bec392d5cb7b67b0abc1ed6cd966edc451f6ac2ef38079460eb965e890d1f576e4039a20467820237cda753f07a8b8febae1ec052190973a1bcf00690ea8fc0168b3fbbccd1c4e402eda5ef22",\n            "address": "0xf8389d774afdad8755ef8e629e5a154fddc6325a",\n            "propose_weight": 1,\n            "vote_weight": 1\n        }\n    ],\n    "propose_ratio": 15,\n    "prevote_ratio": 10,\n    "precommit_ratio": 10,\n    "brake_ratio": 7,\n    "tx_num_limit": 20000,\n    "max_tx_size": 1024\n}\n\'\'\'\n')),Object(l.b)("p",null,"\u521b\u4e16\u5757\u7684\u521d\u59cb\u5316\u53c2\u6570\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"timestamp"),": \u521b\u4e16\u5757\u7684\u65f6\u95f4\u6233\uff0c\u53ef\u4ee5\u968f\u610f\u8bbe\u7f6e\uff0c\u914d\u7f6e\u6210 0\uff0c\u6216\u8005\u5f53\u5929 0 \u70b9\u7684\u65f6\u95f4\u90fd\u53ef\u4ee5\u3002"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"prevhash"),": \u53ef\u4ee5\u968f\u610f\u8bbe\u7f6e\uff0c\u53ea\u4f1a\u5f71\u54cd\u67e5\u8be2\u521b\u4e16\u5757\u65f6\u7684\u5b57\u6bb5\u663e\u793a\u3002")),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"services")," \u4e3a\u5404\u4e2a service \u7684\u521d\u59cb\u5316\u53c2\u6570\u3002\u5404 service \u7684\u521d\u59cb\u5316\u53c2\u6570\u8bf4\u660e\uff1a"),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"asset"),": \u5982\u679c\u94fe\u9700\u8981\u53d1\u884c\u539f\u751f\u8d44\u4ea7\uff0c\u53ef\u4ee5\u53c2\u8003\u4e0a\u9762\u7684\u4f8b\u5b50\u586b\u5199\uff0c\u5426\u5219\u53ef\u4ee5\u53bb\u6389",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"id"),": \u8d44\u4ea7\u7684\u552f\u4e00 id\uff0c\u5efa\u8bae\u8bbe\u7f6e\u6210 hash \uff0c\u4ee5\u514d\u5728\u4e4b\u540e\u548c\u94fe\u4e0a\u5176\u4ed6\u8d44\u4ea7\u91cd\u590d"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"name"),": \u8d44\u4ea7\u540d\u5b57"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"symbol"),": \u8d44\u4ea7\u7b80\u79f0"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"supply"),": \u8d44\u4ea7\u53d1\u884c\u603b\u91cf"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"issuer"),": \u53d1\u884c\u65b9\u5730\u5740"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"metadata"),": \u94fe\u7684\u5143\u6570\u636e\uff0c\u5fc5\u987b\u586b\u5199",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"chain_id"),": \u94fe\u552f\u4e00 id\uff0c\u5efa\u8bae\u8bbe\u7f6e\u4e3a\u4efb\u610f hash"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"common_ref"),": BLS \u7b7e\u540d\u9700\u8981"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"timeout_gap"),": \u4ea4\u6613\u6c60\u80fd\u63a5\u53d7\u7684\u6700\u5927\u8d85\u65f6\u5757\u8303\u56f4\u3002\u7528\u6237\u5728\u53d1\u9001\u4ea4\u6613\u7684\u65f6\u5019\uff0c\u9700\u8981\u586b\u5199 ",Object(l.b)("inlineCode",{parentName:"li"},"timeout")," \u5b57\u6bb5\uff0c\u8868\u793a\u5757\u9ad8\u5ea6\u8d85\u8fc7\u8fd9\u4e2a\u503c\u540e\uff0c\u5982\u679c\u8be5\u4ea4\u6613\u8fd8\u6ca1\u6709\u88ab\u6253\u5305\uff0c\u5219\u4ee5\u540e\u90fd\u4e0d\u4f1a\u88ab\u6253\u5305\uff0c\u8fd9\u6837\u53ef\u4ee5\u786e\u4fdd\u4e4b\u524d\u7684\u67d0\u7b14\u4ea4\u6613\u8d85\u65f6\u540e\u4e00\u5b9a\u4f1a\u5931\u8d25\uff0c\u907f\u514d\u7528\u6237\u7684\u4ea4\u6613\u5f88\u957f\u65f6\u95f4\u672a\u88ab\u6253\u5305\u540e\u6362 ",Object(l.b)("inlineCode",{parentName:"li"},"nonce")," \u91cd\u53d1\u4ea4\u6613\uff0c\u7ed3\u679c\u4e24\u7b14\u4ea4\u6613\u90fd\u4e0a\u94fe\u7684\u60c5\u51b5\u3002\u5f53\u7528\u6237\u586b\u5199\u7684 ",Object(l.b)("inlineCode",{parentName:"li"},"timeout")," > ",Object(l.b)("inlineCode",{parentName:"li"},"chain_current_height")," + ",Object(l.b)("inlineCode",{parentName:"li"},"timeout_gap")," \u65f6\uff0c\u4ea4\u6613\u6c60\u4f1a\u62d2\u7edd\u8fd9\u7b14\u4ea4\u6613\u3002\u8003\u8651\u5230\u4e00\u4e9b\u7279\u6b8a\u60c5\u51b5\uff08\u6bd4\u5982\u4e00\u4e9b\u51b7\u94b1\u5305\u5bf9\u4ea4\u6613\u7b7e\u540d\u540e\u8f83\u957f\u65f6\u95f4\u624d\u53d1\u51fa\uff09\uff0c\u8be5\u503c\u53ef\u4ee5\u9002\u5f53\u8c03\u5927"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"cycles_limit"),": 10\u8fdb\u5236\uff0c\u94fe\u7ea7\u522b\u5bf9\u5355\u4e2a\u4ea4\u6613\u53ef\u4ee5\u6d88\u8017\u7684\u6700\u5927 ",Object(l.b)("inlineCode",{parentName:"li"},"cycle")," \u7684\u9650\u5236"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"cycles_price"),": \u6700\u5c0f cycle \u4ef7\u683c\uff0c\u76ee\u524d\u6ca1\u6709\u4f7f\u7528"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"interval"),": \u51fa\u5757\u95f4\u9694\uff0c\u5355\u4f4d\u4e3a ms\u3002\u5f53\u8bbe\u7f6e\u4e3a 3s \u7684\u65f6\u5019\uff0c\u51fa\u5757\u95f4\u9694\u5e76\u4e0d\u662f\u4e25\u683c\u7684 3s\uff0c\u800c\u662f\u5728 3s \u9644\u8fd1\u6ce2\u52a8\uff0c\u8fd9\u662f\u56e0\u4e3a Overlord \u5171\u8bc6\u5728\u54cd\u5e94\u6027\u4e0a\u7684\u4f18\u5316\u3002\u5f53\u7f51\u7edc\u72b6\u51b5\u8f83\u597d\u7684\u65f6\u5019\uff0c\u4f1a\u5c0f\u4e8e 3s\uff0c\u7f51\u7edc\u60c5\u51b5\u8f83\u5dee\uff0c\u5219\u4f1a\u7565\u5927\u4e8e 3s\u3002"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"verifier_list"),": \u5171\u8bc6\u5217\u8868",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"bls_pub_key"),": \u8282\u70b9\u7684 BLS \u516c\u94a5"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"address"),": \u8282\u70b9\u7684\u5730\u5740"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"propose_weight"),": \u8282\u70b9\u7684\u51fa\u5757\u6743\u91cd\u3002\u5982\u679c\u6709\u56db\u4e2a\u5171\u8bc6\u8282\u70b9\uff0c\u51fa\u5757\u6743\u91cd\u5206\u522b\u4e3a ",Object(l.b)("inlineCode",{parentName:"li"},"1, 2, 3, 4"),"\uff0c\u5219\u7b2c\u4e00\u4e2a\u8282\u70b9\u7684\u51fa\u5757\u6982\u7387\u4e3a ",Object(l.b)("inlineCode",{parentName:"li"},"1 / (1 + 2 + 3 + 4)"),"\u3002\u6295\u7968\u6743\u91cd\u7684\u903b\u8f91\u7c7b\u4f3c\u3002"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"vote_weight"),": \u8282\u70b9\u7684\u6295\u7968\u6743\u91cd"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"propose_ratio"),": propose \u9636\u6bb5\u7684\u8d85\u65f6\u65f6\u95f4\u4e0e\u51fa\u5757\u65f6\u95f4\u7684\u6bd4\u4f8b\u3002\u4f8b\u5982 ",Object(l.b)("inlineCode",{parentName:"li"},"propose_ratio")," \u4e3a 5, ",Object(l.b)("inlineCode",{parentName:"li"},"interval")," \u4e3a 3000\uff0c\u5219 propose \u9636\u6bb5\u7684\u8d85\u65f6\u65f6\u95f4\u4e3a ",Object(l.b)("inlineCode",{parentName:"li"},"15 / 10 * 3000 = 4500"),"\uff0c\u5355\u4f4d\u5747\u4e3a\u6beb\u79d2\u3002"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"prevote_ratio"),": prevote \u9636\u6bb5\u7684\u8d85\u65f6\u65f6\u95f4\u4e0e\u51fa\u5757\u65f6\u95f4\u7684\u6bd4\u4f8b"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"precommit_ratio"),": precommit \u9636\u6bb5\u7684\u8d85\u65f6\u65f6\u95f4\u4e0e\u51fa\u5757\u65f6\u95f4\u7684\u6bd4\u4f8b"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"brake_ratio"),": brake \u9636\u6bb5\u7684\u8d85\u65f6\u65f6\u95f4\u4e0e\u51fa\u5757\u65f6\u95f4\u7684\u6bd4\u4f8b"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"tx_num_limit"),": \u6bcf\u4e00\u4e2a\u5757\u91cc\u6700\u591a\u53ef\u4ee5\u6253\u5305\u7684\u4ea4\u6613\u6570"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"max_tx_size"),": \u5355\u4e2a\u4ea4\u6613\u6700\u5927\u7684\u5b57\u8282\u6570")))),Object(l.b)("h2",{id:"\u94fe\u7684\u8fd0\u884c\u914d\u7f6e"},"\u94fe\u7684\u8fd0\u884c\u914d\u7f6e"),Object(l.b)("p",null,Object(l.b)("inlineCode",{parentName:"p"},"config.toml"),":"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-toml"}),'# crypto\nprivkey = "0x45c56be699dca666191ad3446897e0f480da234da896270202514a0e1a587c3f"\n\n# db config\ndata_path = "./devtools/chain/data"\n\n[graphql]\nlistening_address = "0.0.0.0:8000"\ngraphql_uri = "/graphql"\ngraphiql_uri = "/graphiql"\nworkers = 0 # if 0, uses number of available logical cpu as threads count.\nmaxconn = 25000\nmax_payload_size = 1048576\n\n[network]\nlistening_address = "0.0.0.0:1337"\nrpc_timeout = 10\n\n[[network.bootstraps]]\npubkey = "0x031288a6788678c25952eba8693b2f278f66e2187004b64ac09416d07f83f96d5b"\naddress = "0.0.0.0:1888"\n\n[mempool]\npool_size = 20000\nbroadcast_txs_size = 200\nbroadcast_txs_interval = 200\n\n[executor]\nlight = false\n\n[logger]\nfilter = "info"\nlog_to_console = true\nconsole_show_file_and_line = false\nlog_path = "logs/"\nlog_to_file = true\nmetrics = true\n# you can specify log level for modules with config below\n# modules_level = { "overlord::state::process" = "debug", core_consensus = "error" }\n')),Object(l.b)("ul",null,Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"privkey"),": \u8282\u70b9\u79c1\u94a5\uff0c\u8282\u70b9\u7684\u552f\u4e00\u6807\u8bc6\uff0c\u5728\u4f5c\u4e3a bootstraps \u8282\u70b9\u65f6\uff0c\u9700\u8981\u7ed9\u51fa\u5730\u5740\u548c\u8be5\u79c1\u94a5\u5bf9\u5e94\u7684\u516c\u94a5\u8ba9\u5176\u4ed6\u8282\u70b9\u8fde\u63a5\uff1b\u5982\u679c\u662f\u51fa\u5757\u8282\u70b9\uff0c\u8be5\u79c1\u94a5\u5bf9\u5e94\u7684\u5730\u5740\u9700\u8981\u5728 consensus verifier_list \u4e2d"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"data_path"),": \u94fe\u6570\u636e\u6240\u5728\u76ee\u5f55"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"graphql"),":",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"listening_address"),": GraphQL \u76d1\u542c\u5730\u5740"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"graphql_uri"),": GraphQL \u670d\u52a1\u8bbf\u95ee\u8def\u5f84"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"graphiql_uri"),": GraphiQL \u8bbf\u95ee\u8def\u5f84"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"workers"),": \u5904\u7406 http \u7684\u7ebf\u7a0b\u6570\u91cf\uff0c\u586b 0 \u7684\u8bdd\uff0c\u4f1a\u9ed8\u8ba4\u6309 CPU \u7684\u6838\u6570"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"maxconn"),": \u6700\u5927\u8fde\u63a5\u6570"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"network"),":",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"listening_address"),": \u94fe p2p \u7f51\u7edc\u76d1\u542c\u5730\u5740"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"rpc_timeout"),": RPC \u8c03\u7528\uff08\u4f8b\u5982\u4ece\u5176\u5b83\u8282\u70b9\u62c9\u4ea4\u6613\uff09\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u79d2"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"network.bootstraps"),": \u8d77\u94fe\u65f6\u8fde\u63a5\u7684\u521d\u59cb\u8282\u70b9\u4fe1\u606f",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"pubkey"),": \u516c\u94a5"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"address"),": \u7f51\u7edc\u5730\u5740"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"mempool"),": \u4ea4\u6613\u6c60\u76f8\u5173\u914d\u7f6e",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"pool_size"),": \u4ea4\u6613\u6c60\u5927\u5c0f"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"broadcast_txs_size"),": \u4e00\u6b21\u6279\u91cf\u5e7f\u64ad\u7684\u4ea4\u6613\u6570\u91cf"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"broadcast_txs_interval"),": \u6bcf\u6b21\u5e7f\u64ad\u4ea4\u6613\u7684\u65f6\u95f4\u95f4\u9694\uff0c\u5355\u4f4d ms"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"executor"),":",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"light"),": \u8bbe\u4e3a true \u65f6\uff0c\u8282\u70b9\u5c06\u53ea\u4fdd\u5b58\u6700\u65b0\u9ad8\u5ea6\u7684 state"))),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"logger"),": \u65e5\u5fd7\u76f8\u5173\u914d\u7f6e",Object(l.b)("ul",{parentName:"li"},Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"filter"),": \u5168\u5c40\u65e5\u5fd7\u7ea7\u522b"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"log_to_console"),": \u662f\u5426\u8f93\u51fa\u65e5\u5fd7\u5230 console\uff0c\u751f\u4ea7\u73af\u5883\u5efa\u8bae\u8bbe\u4e3a false"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"console_show_file_and_line"),": \u5f53 ",Object(l.b)("inlineCode",{parentName:"li"},"log_to_console")," \u548c\u672c\u914d\u7f6e\u90fd\u7f6e\u4e3a true \u65f6\uff0cconsole \u8f93\u51fa\u7684\u65e5\u5fd7\u91cc\u4f1a\u5305\u542b\u65e5\u5fd7\u6253\u5370\u5904\u7684\u6587\u4ef6\u548c\u884c\u6570\u3002\u672c\u5730\u901a\u8fc7\u65e5\u5fd7\u8c03\u8bd5\u65f6\u6709\u7528\uff0c\u4e00\u822c\u53ef\u4ee5\u8bbe\u4e3a false\u3002"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"log_to_file"),": \u662f\u5426\u8f93\u51fa\u65e5\u5fd7\u5230\u6587\u4ef6"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"metrics"),": \u662f\u5426\u8f93\u51fa metrics\u3002logger \u6a21\u5757\u4e2d\u6709\u4e13\u95e8\u7684 metrics \u8f93\u51fa\u51fd\u6570\uff0c\u5982\u6709\u9700\u8981\uff0c\u53ef\u4ee5\u7528\u6765\u8f93\u51fa metrics \u65e5\u5fd7\uff0c\u4e0d\u53d7\u5168\u5c40\u65e5\u5fd7\u7ea7\u522b\u7684\u5f71\u54cd\uff0c\u4e14\u5bf9\u5e94\u7684\u65e5\u5fd7\u4f1a\u8f93\u51fa\u5230\u4e13\u95e8\u7684\u6587\u4ef6\u3002"),Object(l.b)("li",{parentName:"ul"},Object(l.b)("inlineCode",{parentName:"li"},"log_path"),": \u4f1a\u5728\u8be5\u8def\u5f84\u751f\u6210\u4e24\u4e2a\u65e5\u5fd7\u6587\u4ef6\uff1a",Object(l.b)("inlineCode",{parentName:"li"},"muta.log")," \u548c ",Object(l.b)("inlineCode",{parentName:"li"},"metrics.log"),"\u3002",Object(l.b)("inlineCode",{parentName:"li"},"metrics.log"),"\u4e2d\u5305\u542b\u4e86\u4e13\u95e8\u7684 metrics \u65e5\u5fd7\uff0c",Object(l.b)("inlineCode",{parentName:"li"},"muta.log")," \u4e2d\u5305\u542b\u4e86\u5176\u5b83\u6240\u6709 log \u8f93\u51fa\u3002")))),Object(l.b)("h2",{id:"\u65e5\u5fd7\u793a\u4f8b"},"\u65e5\u5fd7\u793a\u4f8b"),Object(l.b)("p",null,"\u6587\u4ef6\u4e2d\u7684\u65e5\u5fd7\u5747\u4e3a json \u683c\u5f0f\uff0c\u65b9\u4fbf\u7528\u7a0b\u5e8f\u5904\u7406\u3002\u5176\u4e2d message \u4e00\u822c\u4e3a\u4e00\u4e2a\u5d4c\u5957\u7684 json \u7ed3\u6784\uff0c\u7528\u6765\u8868\u8fbe\u7ed3\u6784\u5316\u4fe1\u606f\u3002"),Object(l.b)("pre",null,Object(l.b)("code",Object(a.a)({parentName:"pre"},{className:"language-bash"}),'$ tail logs/muta.log -n 1\n{"time":"2020-02-12T17:11:04.187149+08:00","message":"update_after_exec cache: height 2, exec height 0, prev_hash 0x039d2f399864dba72c5b0f26ec989cba9bdcb9fca23ce48c8bc8c4398cb2ad0b,latest_state_root 0xde37f62c1121e283ad52fe5b3e260c899f03d42da29fdfe08e82655185d9b772 state root [0xde37f62c1121e283ad52fe5b3e260c899f03d42da29fdfe08e82655185d9b772], receipt root [], confirm root [], cycle used []","module_path":"core_consensus::status","file":"/Users/huwenchao/.cargo/git/checkouts/muta-cad92efdb84944c1/34d052a/core/consensus/src/status.rs","line":114,"level":"INFO","target":"core_consensus::status","thread":"main","thread_id":4576796096,"mdc":{}}\n\n$ tail logs/metrics.log -n 1\n{"time":"2020-02-12T17:11:04.187240+08:00","message":"{\\"timestamp\\":1581498664187,\\"event_name\\":\\"update_exec_info\\",\\"event_type\\":\\"custom\\",\\"tag\\":{\\"confirm_root\\":\\"0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421\\",\\"exec_height\\":1,\\"receipt_root\\":\\"0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421\\",\\"state_root\\":\\"0xde37f62c1121e283ad52fe5b3e260c899f03d42da29fdfe08e82655185d9b772\\"},\\"metadata\\":{\\"address\\":\\"0xf8389d774afdad8755ef8e629e5a154fddc6325a\\",\\"v\\":\\"0.3.0\\"}}","module_path":"core_consensus::trace","file":"/Users/huwenchao/.cargo/git/checkouts/muta-cad92efdb84944c1/34d052a/core/consensus/src/trace.rs","line":24,"level":"TRACE","target":"metrics","thread":"main","thread_id":4576796096,"mdc":{}}\n')))}p.isMDXComponent=!0},188:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return u}));var a=n(0),i=n.n(a);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function b(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var o=i.a.createContext({}),p=function(e){var t=i.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},m=function(e){var t=p(e.components);return i.a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},s=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,r=e.parentName,o=b(e,["components","mdxType","originalType","parentName"]),m=p(n),s=a,u=m["".concat(r,".").concat(s)]||m[s]||d[s]||l;return n?i.a.createElement(u,c({ref:t},o,{components:n})):i.a.createElement(u,c({ref:t},o))}));function u(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,r=new Array(l);r[0]=s;var c={};for(var b in t)hasOwnProperty.call(t,b)&&(c[b]=t[b]);c.originalType=e,c.mdxType="string"==typeof e?e:a,r[1]=c;for(var o=2;o<l;o++)r[o]=n[o];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);