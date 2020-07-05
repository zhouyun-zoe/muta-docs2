(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{164:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return p}));var a=n(1),c=n(9),r=(n(0),n(196)),l={id:"js_sdk",title:"JS-SDK"},b={id:"docs_zh/js_sdk",title:"JS-SDK",description:"# JS-SDK",source:"@site/docs/docs_zh/js_sdk.md",permalink:"/muta-docs2/docs/docs_zh/js_sdk",editUrl:"https://github.com/nervosnetwork/muta-docs/docs/docs_zh/js_sdk.md",sidebar:"docs",previous:{title:"GraphQL",permalink:"/muta-docs2/docs/docs_zh/graphql"},next:{title:"FAQ",permalink:"/muta-docs2/docs/docs_zh/faq"}},s=[{value:"\u5199\u5728\u524d\u9762",id:"\u5199\u5728\u524d\u9762",children:[]},{value:"Install",id:"install",children:[]},{value:"Modules in SDK",id:"modules-in-sdk",children:[]},{value:"Examples",id:"examples",children:[]}],i={rightToc:s};function p(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"js-sdk"},"JS-SDK"),Object(r.b)("p",null,"JS-SDK \u662f\u5b98\u65b9\u63a8\u51fa\u7684\u57fa\u4e8e JavaScript \u7684 SDK\u3002\u7528\u4e8e\u4e0e Muta RPC \u8fdb\u884c\u4ea4\u4e92\u7684\u4e00\u7cfb\u5217\u5de5\u5177\u3002 \u5982\u679c\u4f60\u719f\u6089\u4ee5\u592a\u574a\uff0c\u90a3\u4e48\u53ef\u4ee5\u5c06\u8fd9\u4e2a SDK \u7c7b\u6bd4\u4e8e web3.js\u3002"),Object(r.b)("h2",{id:"\u5199\u5728\u524d\u9762"},"\u5199\u5728\u524d\u9762"),Object(r.b)("p",null,"\u4e3a\u4e86\u4f7f\u6211\u4eec\u4e0d\u4f1a\u8ff7\u60d1\uff0c\u5728\u5f00\u59cb\u4e4b\u524d\u9700\u8981\u4e86\u89e3\u4e00\u4e9b\u57fa\u672c\u7684\u6982\u5ff5\u3002\u5f53\u7136\uff0c\u5982\u679c\u5df2\u7ecf\u5f88\u719f\u6089 Muta \uff0c\u90a3\u4e48\u8bf7\u76f4\u63a5\u8df3\u8fc7\u8fd9\u4e2a\u90e8\u5206\u5427\u3002"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"/muta-docs2/docs/docs_zh/built_in_service"}),"Service"),": Muta \u63d0\u4f9b\u7684\u5404\u79cd\u670d\u52a1\u7531 Service \u66b4\u9732"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://graphql.org"}),"GraphQL"),": Muta \u7684 RPC \u670d\u52a1\u7531GraphQL \u63d0\u4f9b\uff0c\u867d\u7136\u540d\u5b57\u5e26\u6709 QL(Query Language)\uff0c\u4f46\u5b83\u662f\u62e5\u6709 mutation \u80fd\u529b\u7684"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.typescriptlang.org/"}),"TypeScript"),": \u4e00\u79cd JavaScript \u7684\u8d85\u96c6\uff0c\u7ed9 JavaScript \u52a0\u4e0a\u4e86\u7c7b\u578b\uff0c\u5e76\u80fd\u591f\u7f16\u8bd1\u6210 JavaScript\u3002\u987a\u5e26\u4e00\u63d0\uff0c\u8fd9\u4e2a SDK \u5c31\u662f\u7531 TypeScript \u7f16\u5199\uff0c\u56e0\u6b64\u4f7f\u7528\u8bf8\u5982 VSCode \u7b49\u7f16\u8f91\u5668\u4f1a\u6709\u5f88\u5f3a\u7684\u4ee3\u7801\u63d0\u793a\u529f\u80fd\u3002\u6587\u6863\u4e2d\uff0c\u6211\u4eec\u4e5f\u4f1a\u4f7f\u7528 TypeScript \u7684 interface \u63cf\u8ff0\u6570\u636e\u7ed3\u6784")),Object(r.b)("h2",{id:"install"},"Install"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"$ npm install muta-sdk@alpha\n")),Object(r.b)("h2",{id:"modules-in-sdk"},"Modules in SDK"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"Client\uff1a\u5c4f\u853d\u4e86 GraphQL \u7684\u7ec6\u8282\uff0c\u66f4\u65b9\u4fbf\u5730\u548c\u94fe\u7684 GraphQL API \u4ea4\u4e92\u3002"),Object(r.b)("li",{parentName:"ol"},"Account\uff1a\u8fdb\u884c Muta \u7684\u8d26\u6237\u7ba1\u7406\uff0c\u4e00\u4e2a\u8d26\u6237\u5305\u542b\u4e86\u8fd9\u4e2a\u8d26\u6237\u7684\u79c1\u94a5\uff0c\u516c\u94a5\u4ee5\u53ca\u5730\u5740\u3002"),Object(r.b)("li",{parentName:"ol"},"Wallet\uff1aMuta \u7684\u94b1\u5305\u529f\u80fd\uff0c\u53ef\u4ee5\u7ba1\u7406\u591a\u4e2aAccount\u3002"),Object(r.b)("li",{parentName:"ol"},"Service\uff1a\u63d0\u4f9b\u5bf9\u4e8e Muta \u5185\u7f6e Service \u7684\u76f4\u63a5\u901a\u4fe1\uff0c\u7c7b\u4f3c\u4e0e\u5bf9\u4ee5\u592a\u574a\u667a\u80fd\u5408\u7ea6\u8fdb\u884c\u5408\u7ea6\u7ea7\u522b\u7684 API \u901a\u4fe1\u3002"),Object(r.b)("li",{parentName:"ol"},"utils: \u5305\u62ec\u4e86\u7b7e\u540d\u3001\u5730\u5740\u8f6c\u6362\u3001\u5e8f\u5217\u5316\u3001\u7f16\u89e3\u7801\u7b49\u4e00\u7cfb\u5217\u5de5\u5177\u65b9\u6cd5")),Object(r.b)("p",null,"\u8be6\u60c5\u8bf7\u67e5\u770b",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"https://nervosnetwork.github.io/muta-sdk-js/"}),"SDK \u6587\u6863"),"\u3002"),Object(r.b)("h2",{id:"examples"},"Examples"),Object(r.b)("p",null,"\u63a5\u4e0b\u6765\u7684\u4f8b\u5b50\u4e2d\uff0c\u6211\u4eec\u5c06\u901a\u8fc7 5 \u4e2a\u6b65\u9aa4\uff0c\u5b9e\u73b0\u5728\u94fe\u4e0a\u521b\u5efa\u4e00\u79cd\u5c5e\u4e8e\u6211\u4eec\u7684",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/muta-docs2/docs/docs_zh/built_in_service"}),"\u8d44\u4ea7(Asset)"),"\uff0c\u5e76\u8f6c\u8d26\u7ed9\u53e6\u4e00\u4e2a\u8d26\u6237\u3002"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Step 1\uff1a\u6784\u5efa\u4e00\u4e2a Muta \u5bf9\u8c61\uff0c\u7528\u4ee5\u548c\u94fe\u5f00\u59cb\u4ea4\u4e92"),Object(r.b)("li",{parentName:"ul"},"Step 2\uff1a\u521b\u5efa\u5206\u5c42\u786e\u5b9a\u6027 HD \u94b1\u5305\uff0c\u6765\u7ba1\u7406\u4f60\u7684\u8d26\u6237"),Object(r.b)("li",{parentName:"ul"},"Step 3\uff1a\u521b\u5efa\u4e00\u4e2a Account \u5bf9\u8c61\uff0c\u6765\u7ba1\u7406\u8d26\u6237\u7684\u516c\u79c1\u94a5\u5bf9\uff0c\u5e76\u5bf9\u4ea4\u6613\u8fdb\u884c\u7b7e\u540d"),Object(r.b)("li",{parentName:"ul"},"Step 4\uff1a\u6784\u5efa Client \u5bf9\u8c61\uff0c\u6b63\u5f0f\u548c\u94fe\u4e0a\u7684 Service \u8fdb\u884c\u6570\u636e\u4ea4\u4e92"),Object(r.b)("li",{parentName:"ul"},"Step 5(Optional)\uff1a\u901a\u8fc7\u4f7f\u7528 AssetService Binding \u5b9a\u5411\u4e0e AssetService \u8fdb\u884c\u4ea4\u4e92")),Object(r.b)("h4",{id:"step-1\uff1a\u6784\u5efa\u4e00\u4e2a-muta-\u5bf9\u8c61\uff0c\u7528\u4ee5\u548c\u94fe\u8fdb\u884c\u4ea4\u4e92"},"Step 1\uff1a\u6784\u5efa\u4e00\u4e2a Muta \u5bf9\u8c61\uff0c\u7528\u4ee5\u548c\u94fe\u8fdb\u884c\u4ea4\u4e92"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const muta = new Muta({\n    /**\n     * \u901a\u5e38\u662f\u5728genesis.toml\u91cc\u5305\u542b\u6709\u9ed8\u8ba4\u7684chain_id\n     * \u5728\u8fd9\u4e2a\u4f8b\u5b50\u4e2d\u6211\u4eec\u5047\u8bbe 0xb6a4d7da21443f5e816e8700eea87610e6d769657d6b8ec73028457bf2ca4036\u662f\u4f60\u8981\u8bbf\u95ee\u7684\u94fe\u7684ChainId\n     */\n    chainId:\n      '0xb6a4d7da21443f5e816e8700eea87610e6d769657d6b8ec73028457bf2ca4036',\n\n    /**\n     *  \u63a5\u4e0b\u6765\u6211\u4eec\u7ed9\u51fa GraphQL API uri. endpoint \u662f\u7528\u6765\u548c\u94fe\u8fdb\u884c RPC \u4ea4\u4e92\u7684 URI,\n     *  http://127.0.0.1:8000/graphql \u662f\u9ed8\u8ba4\u7684 endpoint \u662f\u7528\u6765\u548c\u94fe\u8fdb\u884c RPC \u4ea4\u4e92\u7684 URI,\n     *  \u4f60\u53ef\u4ee5\u5728 config.toml \u6587\u4ef6\u4e0b\u7684 [graphql] \u90e8\u5206\u627e\u5230 endpoint \u7684\u914d\u7f6e\n     */\n    endpoint: 'http://127.0.0.1:8000/graphql',\n\n    /**\n     * timeout_gap \u8868\u793a\u4e00\u7b14\u4ea4\u6613\u53d1\u51fa\u540e\uff0c\u6700\u591a\u5141\u8bb8\u51e0\u4e2a\u5757\u7684\u5ef6\u8fdf.\u5982\u679c\u968f\u7740\u94fe\u7684\u8fdb\u884c, block \u8d85\u51fa\u4e86\n     * timeout_gap \u7684\u8bbe\u7f6e\u4f46\u662f\u4ea4\u6613\u4ecd\u7136\u6ca1\u6709\u4e0a\u94fe,\u90a3\u4e48\u8fd9\u7b14\u4ea4\u6613\u5c31\u88ab\u8ba4\u4e3a\u65e0\u6548\u4e86.\n     * \u6bd4\u8d77\u4ee5\u592a\u574a\u7684 txpool \u7684\u4e0d\u786e\u5b9a\u6027,muta \u63d0\u4f9b\u4e86tx\u53ca\u65f6\u6027\u7684\u68c0\u6d4b\u548c\u4fdd\u969c.\n     * timeoutGap \u5e76\u6ca1\u6709\u9ed8\u8ba4\u503c,\u4f46\u662f js-sdk \u9884\u8bbe\u4e3a 20,\u4f60\u53ef\u4ee5\u6240\u4ee5\u66f4\u6539\n     */\n    timeoutGap: DEFAULT_TIMEOUT_GAP,\n  });\n")),Object(r.b)("p",null,"\u5f53\u7136,\u5982\u679c\u4f60\u901a\u8fc7",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/muta-docs2/docs/docs_zh/getting_started"}),"\u5feb\u901f\u5165\u95e8"),"\u8d77\u4e86\u4e00\u6761\u9ed8\u8ba4\u914d\u7f6e\u7684\u94fe\uff0c\u5e76\u4e14\u73b0\u5728\u4f60\u53ea\u662f\u60f3\u8dd1\u901a\u672c\u6587\u6863\u7684\u4f8b\u5b50\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u6267\u884c\u4e0b\u9762\u7684\u6307\u4ee4\u3002"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"/**\n* \u56e0\u4e3a\u6d4b\u8bd5\u94fe\u7684\u53c2\u6570\u57fa\u672c\u4e00\u81f4,\u6240\u4ee5\u4e0a\u9762\u7684\u53c2\u6570\u4e00\u822c\u4e0d\u4f1a\u4fee\u6539,\u90a3\u4e48\u4e0b\u9762\u7684\u8bed\u53e5\u548c\u4e0a\u9762\u7684\u903b\u8f91\u662f\u4e00\u6837\u7684\n*/\nconst muta = Muta.createDefaultMutaInstance();\n")),Object(r.b)("p",null,"\u597d\u7684\uff0c\u73b0\u5728\u4f60\u5df2\u7ecf\u4e86\u89e3\u4e86 muta \u7c7b\u4e86\uff0c\u975e\u5e38\u7b80\u5355\uff0c\u63a5\u4e0b\u6765\u8ba9\u6211\u4eec\u770b\u770b\u5206\u5c42\u786e\u5b9a\u6027\u94b1\u5305\u5427\u3002"),Object(r.b)("h4",{id:"step-2\uff1a\u521b\u5efa\u5206\u5c42\u786e\u5b9a\u6027-hd-\u94b1\u5305\uff0c\u6765\u7ba1\u7406\u4f60\u7684\u8d26\u6237"},"Step 2\uff1a\u521b\u5efa\u5206\u5c42\u786e\u5b9a\u6027 HD \u94b1\u5305\uff0c\u6765\u7ba1\u7406\u4f60\u7684\u8d26\u6237"),Object(r.b)("p",null,"\u5982\u679c\u60f3\u8981\u4e86\u89e3 HD \u94b1\u5305(\u5206\u5c42\u786e\u5b9a\u6027\u94b1\u5305) \u7684\u5177\u4f53\u4fe1\u606f\uff0c\u53ef\u4ee5\u4ece\u8fd9\u4e9b eip \u4e2d\u83b7\u53d6\uff1a"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/bitcoin/bips/blob/master/bip-0032.mediawiki"}),"bip32")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/bitcoin/bips/blob/master/bip-0039.mediawiki"}),"bip39")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("a",Object(a.a)({parentName:"li"},{href:"https://github.com/bitcoin/bips/blob/master/bip-0044.mediawiki"}),"bip44"))),Object(r.b)("p",null,"\u6211\u4eec\u9700\u8981\u5148\u83b7\u5f97 HDWallet \u7684\u7c7b\u578b\uff0c\u6ce8\u610f\uff0c\u5b83\u53ea\u662f\u6784\u9020\u51fd\u6570\uff0c\u4e0d\u662f\u5bf9\u8c61\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const Wallet = Muta.hdWallet;\n")),Object(r.b)("p",null,"\u4f7f\u7528 HD \u94b1\u5305\uff0c\u901a\u5e38\u4f60\u9700\u8981\u4e00\u7ec4 12 \u4e2a\u5b57\u7684\u52a9\u8bb0\u8bcd\uff0c\u4f60\u53ef\u4ee5\u7528\u5df2\u6709\u7684\u52a9\u8bb0\u8bcd\uff0c\u6216\u8005\u901a\u8fc7\u4e0b\u9762\u7684\u65b9\u6cd5\u751f\u6210\u52a9\u8bb0\u8bcd\uff0c\n\u5f53\u7136\uff0c\u8be5\u7ec4\u52a9\u8bb0\u8bcd\u4f1a\u7528\u6765\u751f\u6210 seed \u79cd\u5b50\uff0c\u7136\u540e\u6784\u5efa HDWallet \u7684 masterNode\u3002"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const mnemonicWords = Wallet.generateMnemonic();\n")),Object(r.b)("p",null,"\u7136\u540e\u4f60\u53ef\u4ee5\u4f7f\u7528\u52a9\u8bb0\u8bcd\u6765\u6784\u5efa\u4e00\u4e2a HDWallet \u4e86\uff0c\u8fd9\u91cc\u4f7f\u7528\u7684\u662f\u6211\u4eec\u521a\u624d\u968f\u673a\u751f\u6210\u7684\u52a9\u8bb0\u8bcd\uff0c\u5f53\u7136\u4f60\u4e5f\u53ef\u4ee5\u7528\u5df2\u6709\u7684\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const hdWallet = new Wallet(mnemonicWords);\nconst hdWallet = new Wallet(\n    'drastic behave exhaust enough tube judge real logic escape critic horror gold'\n  );\n")),Object(r.b)("p",null,"\u4ec5\u63a5\u7740\uff0c\u53ef\u4ee5\u901a\u8fc7\u521b\u5efa\u7684 HDWallet \u6765\u6d3e\u751f\u5b50\u79d8\u94a5\u4e86\u3002\n\u6839\u636e bip44 \u7684\u89c4\u8303\uff0c\u6211\u4eec\u7684\u6d3e\u751f\u8def\u5f84\u88ab\u8bbe\u5b9a\u4e3a\uff1a\n",Object(r.b)("inlineCode",{parentName:"p"},"m/44'/${COIN_TYPE}'/${accountIndex}'/0/0"),"\n\u5176\u4e2d ",Object(r.b)("inlineCode",{parentName:"p"},"COIN_TYPE = 918"),"\uff0caccountIndex \u5c31\u662f\u9700\u8981\u6d3e\u751f\u7684\u8d26\u6237\u7684\u7d22\u5f15\u3002"),Object(r.b)("h4",{id:"step3\uff1a\u521b\u5efa-account\uff0c\u6765\u7ba1\u7406\u8d26\u6237\u7684\u516c\u79c1\u94a5\u5bf9\u3002"},"Step3\uff1a\u521b\u5efa Account\uff0c\u6765\u7ba1\u7406\u8d26\u6237\u7684\u516c\u79c1\u94a5\u5bf9\u3002"),Object(r.b)("p",null,"Account \u5305\u542b\u4e86\u4e00\u5bf9\u516c\u79c1\u94a5\u5bf9\uff0c\u4ee5\u53ca\u4ed6\u6d3e\u751f\u51fa\u6765\u7684\u5730\u5740\uff0cMuta \u91c7\u7528 secp256k1 \u4f5c\u4e3a\u7b7e\u540d\u66f2\u7ebf\u3002"),Object(r.b)("p",null,"\u901a\u8fc7 HDWallet \u53ef\u4ee5\u6d3e\u751f\u51fa\u8d26\u6237:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const account = hdWallet.deriveAccount(2); // \u6211\u4eec\u6d3e\u751faccountIndex=2 \u7684\u8d26\u6237\n")),Object(r.b)("p",null,"\u5f53\u7136\uff0c\u5982\u679c\u4f60\u6709\u81ea\u5df1\u79c1\u94a5\uff0c\u4e5f\u53ef\u4ee5\u901a\u8fc7\u6307\u5b9a\u79c1\u94a5\u521b\u5efa Account\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const account = Muta.accountFromPrivateKey(\n    '0x1000000000000000000000000000000000000000000000000000000000000000',\n  );\n")),Object(r.b)("p",null,"\u63a5\u7740\uff0c\u83b7\u53d6\u5bf9\u5e94\u7684\u516c\u94a5\u548c\u5730\u5740\u4e5f\u4e0d\u5728\u8bdd\u4e0b\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const publicKey = account.publicKey;\nconst address = account.address;\n")),Object(r.b)("p",null,"\u5230\u4e86\u8fd9\u91cc\uff0c\u4f60\u5df2\u7ecf\u6210\u529f\u521b\u5efa\u4e86 Account\uff0c\u73b0\u5728\u8ba9\u6211\u4eec\u8fdb\u5165 Client\uff0c\u6765\u5b66\u4e60\u5982\u4f55\u548c\u94fe\u8fdb\u884c\u4ea4\u4e92\u3002"),Object(r.b)("h4",{id:"step-4\uff1a\u6784\u5efa-client-\u5bf9\u8c61\uff0c\u6b63\u5f0f\u548c\u94fe\u4e0a\u7684-service-\u8fdb\u884c\u6570\u636e\u4ea4\u4e92"},"Step 4\uff1a\u6784\u5efa Client \u5bf9\u8c61\uff0c\u6b63\u5f0f\u548c\u94fe\u4e0a\u7684 Service \u8fdb\u884c\u6570\u636e\u4ea4\u4e92"),Object(r.b)("p",null,"\u5173\u4e8e Muta \u7684 GraphQL API \u63a5\u53e3, \u8bf7\u53c2\u770b",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"./graphql_api"}),"\u63a5\u53e3"),"\u7ae0\u8282\u3002"),Object(r.b)("p",null,"Muta \u7684 GraphQL API \u63d0\u4f9b\u4e86 Query \u548c Mutation\u3002"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Query \u7684\u8c03\u7528\u4e0d\u4f1a\u5bf9\u6570\u636e\u8fdb\u884c\u4efb\u4f55\u5f62\u5f0f\u7684\u4fee\u6539\uff0c\u4e00\u822c\u662f\u67e5\u8be2"),Object(r.b)("li",{parentName:"ul"},"Mutation \u7684\u8c03\u7528\u5219\u80fd\u591f\u4fee\u6539\u94fe\u4e0a\u6570\u636e\u7684")),Object(r.b)("p",null,"Client \u7c7b\u8fd8\u63d0\u4f9b\u4e86\u4e00\u4e9b\u5de5\u5177\u65b9\u6cd5\uff0c\u8fd9\u4e9b\u65b9\u6cd5\u4e0d\u4f1a\u53d1\u9001\u8bf7\u6c42\u5230\u7f51\u7edc\uff0c\u6240\u4ee5\u4ed6\u4eec\u4e0d\u5c5e\u4e8e Muta GraphQL API \u63a5\u53e3\uff0c\u4f46\u662f\u4e5f\u88ab\u5305\u542b\u5728 Client \u7c7b\u91cc\u3002"),Object(r.b)("p",null,"\u76ee\u524d\u7684 API \u5927\u81f4\u5206\u4e3a\u5982\u4e0b\uff1a"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Query")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"getBlock, getLatestBlockHeight and waitForNextNBlock"),Object(r.b)("li",{parentName:"ol"},"getTransaction"),Object(r.b)("li",{parentName:"ol"},"getReceipt"),Object(r.b)("li",{parentName:"ol"},"queryService and queryServiceDyn")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Mutation")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"sendTransaction")),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"Locally")),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"composeTransaction")),Object(r.b)("p",null,"\u6211\u4eec\u901a\u8fc7\u4f8b\u5b50\uff0c\u4e00\u6b65\u4e00\u6b65\u6765\u4e86\u89e3\u3002\u56e0\u4e3a Client \u5fc5\u987b\u77e5\u9053\u901a\u8fc7\u90a3\u4e2a\u63a5\u53e3\u548c\u8282\u70b9\u8fdb\u884c\u6570\u636e\u901a\u4fe1\uff0c\u6240\u4ee5\u5fc5\u987b\u63d0\u4f9b uri\u3002\u4e0d\u8fc7\u5728\u672c\u6587\u6863\u7b2c\u4e00\u6b65\u6784\u5efa muta \u5bf9\u8c61\u65f6\uff0c\u7ed9\u51fa\u4e86 endpoint \u53c2\u6570\uff0c\u90a3\u4e48\u73b0\u5728\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7 muta \u5bf9\u8c61\u6765\u83b7\u5f97\u4e00\u4e2a Client \u5bf9\u8c61\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"let client = Muta.createDefaultMutaInstance().client();\n")),Object(r.b)("p",null,"\u5f53\u7136,\u4f60\u4e5f\u53ef\u4ee5\u81ea\u5df1\u6784\u5efa\u4e00\u4e2a Client \u5bf9\u8c61\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"let client = new Client({\n  chainId:\n    '0xb6a4d7da21443f5e816e8700eea87610e6d769657d6b8ec73028457bf2ca4036',\n  defaultCyclesLimit: '0xffff',\n  defaultCyclesPrice: '0xffff',\n  endpoint: 'http://127.0.0.1:8000/graphql',\n  maxTimeout: DEFAULT_TIMEOUT_GAP * DEFAULT_CONSENSUS_INTERVAL,\n});\n")),Object(r.b)("p",null,"\u6211\u4eec\u6765\u89e3\u91ca\u4e0b\u5176\u4e2d\u7684\u53c2\u6570\uff1a"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"chainId\uff1a\u94fe\u552f\u4e00 id"),Object(r.b)("li",{parentName:"ul"},"endpoint\uff1a\u8282\u70b9\u6d88\u606f\u7aef\u3002\u8282\u70b9\u901a\u8fc7\u6ce8\u518c\u6d88\u606f\u7aef\u5730\u5740\u5bf9\u5916\u66b4\u9732\u670d\u52a1\uff0c\u5b9e\u73b0\u6d88\u606f\u63a5\u53d7\u53ca\u5904\u7406"),Object(r.b)("li",{parentName:"ul"},"defaultCyclesLimit/defaultCyclesPrice\uff1a\u662f\u5728\u5c06\u6765\u53d1\u9001 GraphQL API \u8bf7\u6c42\u65f6\u7ed9\u5b9a\u7684\u9ed8\u8ba4\u503c\uff0c\u5f53\u7136\u4f60\u5728\u53d1\u9001\u8bf7\u6c42\u7684\u65f6\u5019\u53ef\u4ee5\u6307\u5b9a\u65b0\u7684\u503c\u3002"),Object(r.b)("li",{parentName:"ul"},"maxTimeout = DEFAULT_TIMEOUT_GAP * DEFAULT_CONSENSUS_INTERVAL\uff1a\u56e0\u4e3a\u533a\u5757\u94fe\u6ca1\u6709\u4e16\u754c\u65f6\u949f\uff0c\u6240\u4ee5\u53ea\u80fd\u901a\u8fc7 block \u9ad8\u5ea6 x \u5e73\u5747\u671f\u671b\u51fa\u5757\u65f6\u95f4\u6765\u5927\u81f4\u8ba1\u7b97\u51fa\u73b0\u5b9e\u65f6\u95f4\u3002Muta \u5185\u7f6e Overlord \u5171\u8bc6\u7b97\u6cd5\u7684\u9884\u671f",Object(r.b)("strong",{parentName:"li"},"\u5355\u8f6e"),"\u51fa\u5757\u65f6\u95f4\u662f 3 \u79d2\uff0c\u6240\u4ee5 DEFAULT_CONSENSUS_INTERVAL=3000 // (ms)\u3002")),Object(r.b)("p",null,"\u4e07\u4e8b\u4ff1\u5907\uff0c\u63a5\u4e0b\u6765\u6211\u4eec\u5f00\u59cb\u4e0e\u94fe\u8fdb\u884c\u4ea4\u4e92\u3002\u6211\u4eec\u5148\u5c1d\u8bd5\u83b7\u5f97\u67d0\u4e2a\u533a\u5757\u7684\u4fe1\u606f\uff0c\u56e0\u4e3a\u5982\u679c\u4f60\u80fd\u67d0\u4e00\u4e2a\u533a\u5757\u7684\u4fe1\u606f\uff0c\u5c31\u80fd\u83b7\u5f97\u6240\u6709\u7684\u533a\u5757\u7684\u4fe1\u606f\uff0c\u5c31\u80fd\u83b7\u5f97\u533a\u5757\u94fe\u7684\u4fe1\u606f\u3002"),Object(r.b)("p",null,"\u6211\u4eec\u83b7\u5f97\u7b2c 10 \u9ad8\u5ea6\u7684\u533a\u5757\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const blockInfo = await client.getBlock('10');\n")),Object(r.b)("p",null,"\u4e5f\u53ef\u4ee5\u83b7\u5f97\u6700\u65b0\u7684\u9ad8\u5ea6\u7684\u533a\u5757:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const latestBlockInfo = await client.getBlock();\n")),Object(r.b)("p",null,"\u5f53\u7136\uff0c\u4f60\u53ef\u4ee5\u76f4\u63a5\u83b7\u5f97\u6700\u65b0\u533a\u5757\u7684\u9ad8\u5ea6\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const latestBlockHeight = await client.getLatestBlockHeight();\n")),Object(r.b)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u66f4\u8fdb\u4e00\u6b65\uff0c\u6211\u4eec\u4ece\u8282\u70b9 Query \u4e00\u4e9b\u6570\u636e\uff0c\u8fd8\u8bb0\u5f97\u4e48 Query \u548c Mutation \u7684\u5dee\u522b\u4e48?"),Object(r.b)("p",null,"Muta \u62e5\u6709\u82e5\u5e72 service\uff0c\u4f8b\u5982 ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/muta-docs2/docs/docs_zh/built_in_service"}),"metadata")," \u670d\u52a1\u4f1a\u63d0\u4f9b\u4e00\u4e9b\u5173\u4e8e\u94fe\u7684\u57fa\u7840\u4fe1\u606f\uff1b",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/muta-docs2/docs/docs_zh/built_in_service"}),"asset")," \u8d44\u4ea7\u670d\u52a1\u53ef\u4ee5\u63d0\u4f9b\u521b\u5efa\u7528\u6237\u81ea\u5b9a\u4e49 token \u7684\u529f\u80fd(User defined tokens)\u3002\n\u670d\u52a1\u4e4b\u95f4\u901a\u5e38\u5c45\u7136\u6709\u4f9d\u8d56\u5173\u7cfb\uff0c\u53ef\u4ee5\u4e92\u76f8\u8c03\u7528\uff0c\u6784\u5efa\u51fa\u66f4\u9ad8\u7ea7\u7684\u4e1a\u52a1\u903b\u8f91\u3002\u5982\u679c\u4f60\u662f\u8981\u548c\u5185\u7f6e\u670d\u52a1\u4ea4\u4e92\uff0c\u90a3\u4e48\u8bf7\u53c2\u8003\u6211\u4eec\u7684\u5185\u7f6e\u670d\u52a1\u7684 GraphQL API \u63a5\u53e3\u624b\u518c\uff0c\u5982\u679c\u4f60\u662f\u8981\u548c\u7528\u6237\u81ea\u5b9a\u4e49\u670d\u52a1\u4ea4\u4e92\uff0c\u90a3\u4e48\u53ef\u4ee5\u5728 GitHub issue \u4e0b\u7559\u4e0b\u5927\u4fa0\u7684\u8db3\u8ff9\u3002"),Object(r.b)("p",null,"\u4e3a\u4e86\u8fdb\u4e00\u6b65\u5b66\u4e60\uff0c\u6211\u4eec\u73b0\u5728\u5411 AssetService \u6765\u53d1\u8d77 Query \u8bf7\u6c42\uff0c\u8bbf\u95ee\u6570\u636e\u3002\u5728\u53d1\u8d77\u4efb\u4f55 Query \u4e4b\u524d\uff0c\u6211\u4eec\u90fd\u5fc5\u987b\u77e5\u9053\u8bf7\u6c42\u63a5\u53e3\u4ea4\u4e92\u7684\u6570\u636e\u683c\u5f0f\u662f\u4ec0\u4e48\u3002"),Object(r.b)("p",null,"\u63a5\u4e0b\u6765\uff0c\u6211\u4eec\u8981\u5411 AssetService \u6765\u53d1\u8d77\u67e5\u8be2 Asset \u7684\u8bf7\u6c42\u3002"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"type Address = string;\nexport interface GetBalancePayParam {\n  asset_id: string;\n  user: Address;\n}\n")),Object(r.b)("p",null,"\u63a5\u53e3\u8fd4\u56de\u7684\u6570\u636e\u7c7b\u578b\u662f\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"type Hash = string;\n\nexport interface Balance {\n  asset_id: Hash;\n  balance: number | BigNumber;\n}\n")),Object(r.b)("p",null,"\u5176\u4e2d asset_id \u662f\u521b\u5efa\u4e00\u4e2a Asset \u540e\uff0cAsset \u670d\u52a1\u8fd4\u56de\u7684\u552f\u4e00\u6807\u8bc6\u3002"),Object(r.b)("p",null,"\u73b0\u5728\u6211\u4eec\u901a\u8fc7 queryServiceDyn \u65b9\u6cd5\u6765\u8bbf\u95ee\u4ed6\uff0cqueryServiceDyn \u548c queryService \u7684 api\uff0c\u8bf7\u53c2\u8003 SDK \u6587\u6863\u6216\u8005 API \u6587\u6863\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"  try {\n    const asset_id =\n      '0x0000000000000000000000000000000000000000000000000000000000000000';\n    asset = await client.queryServiceDyn<\n      GetBalancePayParam,\n      Balance\n    >({\n      method: 'get_balance',\n      payload: { \n        asset_id, \n        user: '0x2000000000000000000000000000000000000000'\n      },\n      serviceName: 'asset',\n    } as ServicePayload<GetAssetParam>);\n  } catch (e) {\n    // TODO\n    console.error(e)\n  }\n")),Object(r.b)("p",null,"\u5f88\u597d\uff0c\u8fd9\u6bb5\u4ee3\u7801\u5e94\u8be5\u4f1a\u8fdb\u5165 catch\uff0c\u7136\u540e\u8bbe\u5b9a asset \u4e3a null\uff0c\u6bd5\u7adf\u6211\u4eec\u4ec0\u4e48 Asset \u90fd\u6ca1\u6709\u521b\u5efa\u8fc7\u3002\u8fd9\u4ec5\u4ec5\u662f\u4e00\u4e2a Query\uff0c\u67e5\u8be2\u7684\u4f8b\u5b50\u3002"),Object(r.b)("p",null,"\u73b0\u5728\u6211\u4eec\u8fdb\u5165\u589e\u5220\u6539\u7684\u90e8\u5206\uff0c\u4e5f\u5c31\u662f Mutation \u8bf7\u6c42\u3002 SendTransaction \u662f\u4e00\u4e2a Mutation \u7684\u8bf7\u6c42\u3002\u90a3\u4e48\u6211\u4eec\u6765\u770b\u770bSendTransaction \u9700\u8981\u63d0\u4f9b\u90a3\u4e9b\u6570\u636e\u3002"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"    public async sendTransaction(\n    signedTransaction: SignedTransaction,\n  ): Promise<Hash> \n\n    export interface SignedTransaction {\n      chainId: string;\n      cyclesLimit: string;\n      cyclesPrice: string;\n      nonce: string;\n      timeout: string;\n      serviceName: string;\n      method: string;\n      payload: string;\n      txHash: string;\n      pubkey: string;\n      signature: string;\n    }\n")),Object(r.b)("p",null,"\u53ef\u4ee5\u770b\u5230\uff0c\u53d1\u9001\u4e00\u7b14\u4ea4\u6613\uff0c\u548c\u5927\u591a\u6570\u533a\u5757\u94fe\u7c7b\u4f3c\uff0c\u9700\u8981\u4e00\u7b14\u88ab",Object(r.b)("strong",{parentName:"p"},"\u7b7e\u540d"),"\u7684\u4ea4\u6613"),Object(r.b)("p",null,"\u90a3\u4e48\u6211\u4eec\u5148\u6765\u6784\u5efa\u4e00\u7b14",Object(r.b)("strong",{parentName:"p"},"\u521b\u5efa")," Asset \u4ea4\u6613\uff0c\u7136\u540e\u5bf9\u5176\u7b7e\u540d\u3002"),Object(r.b)("p",null,"\u901a\u8fc7\u67e5\u8be2 GraphQL API \u63a5\u53e3\u6587\u6863,"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u521b\u5efa Asset \u670d\u52a1\u7684\u670d\u52a1\u540d\u662f: asset")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u63a5\u53e3\u7684\u65b9\u6cd5\u4e3a: create_asset,")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"\u63a5\u53d7\u63a5\u53d7\u7684\u53c2\u6570\u4e3a: CreateAssetParam"))),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"    export interface CreateAssetParam {\n      name: string;\n      symbol: string;\n      supply: number | BigNumber;\n    }\n")),Object(r.b)("p",null,"\u90a3\u4e48\u6211\u4eec\u901a\u8fc7 Client \u7684\u5de5\u5177\u65b9\u6cd5 composeTransaction \u6765\u6784\u5efa\u4e00\u4e2a\u8fd9\u6837\u7684\u4ea4\u6613\u5bf9\u8c61\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"    const tx = await client.composeTransaction({\n        method: 'create_asset',\n        payload: { name: 'MY_COIN', symbol: 'SC', supply: 10000000 },\n        serviceName: 'asset',\n      });\n")),Object(r.b)("p",null,"\u968f\u540e\u6211\u4eec\u9700\u8981\u4f7f\u7528\u4e00\u4e2a\u7528\u6237\uff0c\u5bf9\u4ea4\u6613\u7b7e\u540d\uff0c\u90a3\u4e48\u8fd9\u4e2a\u7528\u6237\u5c31\u662f\u8fd9\u4e2a Asset \u7684 issuer\u3002\u8fd8\u8bb0\u5f97 Account \u7c7b\u578b\u4e48\uff1f\u73b0\u5728\u662f\u4ed6\u4e0a\u573a\u7684\u65f6\u5019\u4e86\uff0c\u4f7f\u7528\u4f60\u6240\u671f\u671b\u7684\u7528\u6237\u7684 Account \u5bf9\u8c61\u8c03\u7528 signTransaction \u6765\u5bf9\u4ea4\u6613\u7b7e\u540d\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"    const signedTransaction = Muta.accountFromPrivateKey(\n        '0x1000000000000000000000000000000000000000000000000000000000000000',\n      ).signTransaction(tx);\n")),Object(r.b)("p",null,"\u73b0\u5728\u6211\u4eec\u53ef\u4ee5\u8c03\u7528 signTransaction \u6765\u53d1\u9001\u6211\u4eec\u7684\u4ea4\u6613\u4e86\u3002\u548c\u5927\u591a\u6570\u533a\u5757\u94fe\u4e00\u6837\uff0c\u7531\u4e8e\u662f\u5f02\u6b65\u7f51\u7edc\u548c\u8d77\u6b65\u4e1a\u52a1\u7cfb\u7edf\uff0c\u4f60\u6240\u63d0\u4ea4\u7684\u4ea4\u6613\u53ef\u80fd\u4e0d\u4f1a\u88ab\u7acb\u523b\u63d0\u4ea4\u5230\u533a\u5757\u94fe\u4e0a\u3002\u53d1\u9001\u4ea4\u6613\u540e\u901a\u5e38\u8fd4\u56de\u4ea4\u6613\u7684\u4f4d\u7f6e\u6807\u8bc6\u54c8\u5e0c\u503c\u3002"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"    const txHash = await client.sendTransaction(signedTransaction);\n")),Object(r.b)("p",null,"\u63a5\u4e0b\u6765\u6211\u4eec\u53ea\u9700\u8981\u901a\u8fc7\u6807\u8bc6\u54c8\u5e0c\u5b9a\u671f\u53bb\u67e5\u8be2\u4ea4\u6613\uff0c\u770b\u4ea4\u6613\u662f\u5426\u88ab\u6210\u529f\u63d0\u4ea4\u5230\u4e86\u533a\u5757\u94fe\u3002\u5982\u679c\u4e00\u7b14\u4ea4\u6613\u88ab\u6210\u529f\u5730\u63d0\u4ea4\u5230\u4e86\u533a\u5757\u94fe\uff0c\u90a3\u4e48\u4ed6\u5c06\u4e0d\u53ef\u7be1\u6539\u4e0d\u53ef\u56de\u6eda\u3002"),Object(r.b)("p",null,"\u5f53\u533a\u5757\u94fe\u8ba4\u4e3a\u4e00\u7b14\u4ea4\u6613\u6bd4\u6210\u529f\u7684\u63d0\u4ea4\u4e86\uff0c\u4ed6\u4f1a\u8fd4\u56de\u4e00\u5f20 Receipt \u4ea4\u6613\u51ed\u8bc1\uff0c\u7ed9\u51fa\u4e86\u4ea4\u6613\u7684\u8bf8\u591a\u4fe1\u606f\uff0c\u4ee5\u53ca\u4ea4\u6613\u6267\u884c\u540e\u7684\u8fd4\u56de\uff0c\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7getReceipt \u6765\u83b7\u5f97\u51ed\u8bc1\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"    const receipt = await client.getReceipt(txHash);\n")),Object(r.b)("p",null,"Receipt \u51ed\u8bc1\u7684\u6570\u636e\u7c7b\u578b\u5982\u4e0b:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"export interface Receipt {\n  stateRoot: string; // \u4ea4\u6613\u88ab\u6267\u884c\u540e\u7684 MerkleRoot\n  height: string; // \u4ea4\u6613\u88ab\u63d0\u4ea4\u8fdb\u5165\u7684\u5757\u7684\u76d6\u9ad8\u5ea6\n  txHash: string; // \u8be5\u7b14\u4ea4\u6613\u7684\u552f\u4e00\u54c8\u5e0c\u8868\u793a\n  cyclesUsed: string; // \u8be5\u7b14\u4ea4\u6613\u4f7f\u7528\u7684 cycles\n  events: Event[]; // \u8be5\u7b14\u4ea4\u6613\u4ea7\u751f\u7684\u4e8b\u4ef6\n  response: ReceiptResponse; // \u8be5\u7b14\u4ea4\u6613\u7684\u6267\u884c\u7ed3\u679c\n}\n\nexport interface ReceiptResponse {\n  serviceName: string; // \u8be5\u7b14\u4ea4\u6613\u8c03\u7528\u7684\u670d\u52a1\u540d\u79f0\n  method: string; // \u8be5\u7b14\u4ea4\u6613\u8c03\u7528\u7684\u670d\u52a1\u65b9\u6cd5\n  ret: string; // \u670d\u52a1\u7ed9\u51fa\u7684\u8fd4\u56de\u6570\u636e\n  isError: boolean; // \u670d\u52a1\u7ed9\u51fa\u7684\u8fd4\u56de\u7ed3\u679c,\u8fd0\u884c\u662f\u5426\u6210\u529f\n}\n")),Object(r.b)("p",null,"\u8bf7\u4ed4\u7ec6\u9605\u8bfb\u4e0a\u9762\u7684\u6570\u636e\u7ed3\u6784\uff0c\u9700\u8981\u53ea\u51fa\u7684\u662f\uff0cret \u548c isError \u53ef\u80fd\u540c\u65f6\u7ed9\u51fa\u3002\u4f8b\u5982 ret \u7ed9\u51fa\u9519\u8bef\u4fe1\u606f\u3002\u8fd4\u56de ret \u6570\u636e\u662f\u901a\u7528\u7684\u5b57\u7b26\u4e32\u7c7b\u578b\uff0c\u4f46\u5177\u4f53\u6570\u636e\u53ef\u662f\u8bf7\u53c2\u8003\u5bf9\u5e94\u670d\u52a1\u7684 GraphQL API \u63a5\u53e3\u3002"),Object(r.b)("p",null,"\u8fd9\u91cc\u6211\u4eec\u7684 create_asset \u65b9\u6cd5\u8fd4\u56de\u7684\u683c\u5f0f\u5c31\u662f\u4e4b\u524d\u89c1\u8fc7\u7684 Asset \u6570\u636e\u683c\u5f0f\uff0c\u5e76\u4e14\u662f\u901a\u8fc7 JSON \u6765\u5e8f\u5217\u5316\u7684\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"export interface Asset {\n  asset_id: Hash;\n  name: string;\n  symbol: string;\n  supply: number | BigNumber;\n  issuer: Address;\n}\n")),Object(r.b)("p",null,"\u6240\u4ee5\u6211\u4eec\u53ef\u4ee5\u901a\u8fc7 JSON.parse \u6765\u628a ret \u5b57\u7b26\u4e32\u8f6c\u6362\u6210\u5bf9\u5e94\u7684 Asset \u5bf9\u8c61\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"  let createdAssetResult = utils.safeParseJSON(receipt.response.ret); // util \u5de5\u5177\u7c7b\u8bf7\u53c2\u8003API doc\n")),Object(r.b)("h4",{id:"step5\uff1a\u901a\u8fc7\u4f7f\u7528-assetservice-binding-api\uff0c\u76f4\u63a5\u548c-assetservice-\u4ea4\u4e92"},"Step5\uff1a\u901a\u8fc7\u4f7f\u7528 AssetService Binding API\uff0c\u76f4\u63a5\u548c AssetService \u4ea4\u4e92"),Object(r.b)("p",null,"\u597d\u7684\uff0c\u901a\u8fc7 Client \u7684\u4f8b\u5b50\uff0c\u4f60\u5df2\u7ecf\u53ef\u4ee5\u5411\u4efb\u4f55\u670d\u52a1\u53d1\u8d77\u6570\u636e\u4ea4\u4e92\u4e86\u3002\u4f46\u662f\u6bcf\u6b21\u90fd\u8c03\u7528\u539f\u751f\u7684 ",Object(r.b)("inlineCode",{parentName:"p"},"queryService")," \u4e0e ",Object(r.b)("inlineCode",{parentName:"p"},"sendTransaction")," \u975e\u5e38\u7684\u607c\u4eba\uff0c\u6240\u4ee5\uff0c\u6211\u4eec\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528\u5df2\u7ecf\u5185\u7f6e\u4e86\u7684 Service Binding\u3002\u8fd8\u662f\u62ff AssetService \u4e3e\u4f8b\u5b50\uff0cSDK \u4e2d\u63d0\u4f9b\u4e86\u5b83\u7684 binding\u3002"),Object(r.b)("p",null,"\u8001\u89c4\u77e9\uff0c\u6211\u4eec\u4ecd\u7136\u9700\u8981\u4e00\u4e2a Client \u5bf9\u8c61\u548c Account \u5bf9\u8c61\uff0c\u5c31\u50cf\u4e0a\u4e00\u8282\u91cc\u6211\u4eec\u7528\u5230\u7684\u4e00\u6837\uff0c\u4f5c\u7528\u4e5f\u662f\u4e00\u6837\u7684\u3002\u968f\u540e\u6211\u4eec\u521b\u5efa\u4e00\u4e2aAssetService\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"    const muta = Muta.createDefaultMutaInstance();\n    const account = Muta.accountFromPrivateKey(\n      '0x1000000000000000000000000000000000000000000000000000000000000000',\n    );\n    \n    const client = muta.client();\n\n    /**\n     * we build a service, pass the client and account object\n     * nothing abnormal\n     */\n    const service = new AssetService(client, account);\n")),Object(r.b)("p",null,"\u63a5\u4e0b\u6765\u5c31\u975e\u5e38\u7b80\u5355\u4e86\uff0c\u6211\u4eec\u76f4\u63a5\u521b\u5efa\u4e00\u4e2a\u8d44\u4ea7\uff0c\u53c2\u6570\u7c7b\u578b\u548c\u4e4b\u524d\u7684\u76f8\u540c\uff0c\u4e0d\u518d\u8d58\u8ff0\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"  // \u8c03\u7528 binding \u7684 create_asset\uff0c\u5b83\u80fd\u591f\u5e2e\u6211\u4eec sendTransaction \u5e76 getReceipt\n  const assetReceipt = await service.create_asset({\n    name: 'LOVE_COIN',\n    supply: 1314,\n    symbol: 'LUV',\n  });\n  \n  // \n  const asset = assetReceipt.response.ret;\n  \n  const assetId = asset.id;\n")),Object(r.b)("p",null,"\u67e5\u8be2\u4e00\u4e0b\u67d0\u4e2a\u7528\u6237\u7684\u4f59\u989d\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"const balanceReceipt = await service.get_balance({\n  asset_id: assetId, \n  user: '0x2000000000000000000000000000000000000000'\n});\n")),Object(r.b)("p",null,"\u6700\u540e\u662f\u5411\u67d0\u4e2a\u7528\u6237\u53d1\u9001\u4e00\u5b9a\u6570\u91cf\u7684 UDT\uff0c\u8fd9\u91cc\u662f LOVE_COIN\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-typescript"}),"  await service.transfer({\n    asset_id: assetId,\n    to:'0x2000000000000000000000000000000000000000',\n    value: 520,\n  });\n")),Object(r.b)("p",null,"\u597d\u4e86\uff01\u6559\u7a0b\u5230\u6b64\u7ed3\u675f\u4e86\uff0c\u76f8\u4fe1\u4f60\u5df2\u7ecf\u53ef\u4ee5\u719f\u7ec3\u4f7f\u7528 JS-SDK \u4e86\u3002"))}p.isMDXComponent=!0},196:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return j}));var a=n(0),c=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,c=function(e,t){if(null==e)return{};var n,a,c={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var i=c.a.createContext({}),p=function(e){var t=c.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):b({},t,{},e)),n},o=function(e){var t=p(e.components);return c.a.createElement(i.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},O=Object(a.forwardRef)((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,i=s(e,["components","mdxType","originalType","parentName"]),o=p(n),O=a,j=o["".concat(l,".").concat(O)]||o[O]||u[O]||r;return n?c.a.createElement(j,b({ref:t},i,{components:n})):c.a.createElement(j,b({ref:t},i))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=O;var b={};for(var s in t)hasOwnProperty.call(t,s)&&(b[s]=t[s]);b.originalType=e,b.mdxType="string"==typeof e?e:a,l[1]=b;for(var i=2;i<r;i++)l[i]=n[i];return c.a.createElement.apply(null,l)}return c.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"}}]);