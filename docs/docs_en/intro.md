---
id: intro
title: 介绍
---

## 什么是 Muta？

Muta 是一个高度可定制的高性能区块链框架。它内置了具有高吞吐量和低延迟特性的类 BFT 共识算法「Overlord」，并且可以支持不同的虚拟机，包括 CKB-VM、EVM 和 WASM。Muta 具有跨 VM 的互操作性，不同的虚拟机可以同时在一条基于 Muta 搭建的区块链中使用。Muta 由 Nervos 团队开发，旨在让世界上任何一个人都可以搭建属于他们自己的区块链，同时享受 Nervos CKB 所带来的安全性和最终性。

开发者可以基于 Muta 定制开发 PoA、PoS 或者 DPoS 链，并且可以使用不同的经济模型和治理模型进行部署。开发者也可以基于 Muta 来开发不同的应用链（例如 DEX 链），以实现某种特定的业务逻辑。

Muta 的核心理念是使一个区块链状态转换的开发尽可能的灵活和简便，也就是说在降低开发者搭建高性能区块链障碍的同时，仍然最大限度地保证其灵活性以方便开发者可以自由定制他们的协议。因此，作为一个高度可定制的高性能区块链框架，Muta 提供了一个区块链系统需要有的基础核心组件，开发者可以自由定制链的功能部分。

## 快速开始！

快速搭建一条简单的链并尝试简单的交互，请参考[快速开始](getting_started.md)。

## Muta 提供哪些基础核心组件？
 
Muta 框架提供了搭建一个分布式区块链网络所需的全部核心组件：

* [交易池](transaction_pool.md)
* [P2P 网络](network.md)
* [共识](overlord.md)
* [存储](storage.md)

## 开发者需要自己实现哪些部分？

开发者可以通过开发 Service 来定制链的功能部分。

Service 是 Muta 框架中用于扩展的抽象层，用户可以基于 Service 定义区块治理、添加 VM 等等。每一个 Service 作为一个相对独立的逻辑化组件，可以实现其特定的功能，同时，不同的 Service 之间又可以直接进行交互，从而可以构建更为复杂的功能逻辑。更为灵活的是，不同链的 Service 还可以复用，这使得开发者们可以更为轻松的搭建自己的功能模块。

我们提供了详细的 Service 开发指南，以及一些 Service 示例。

* [Service 开发指南](service_dev.md)
* [Service 示例](service_eg.md)

## 贡献 ![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

#### 提交 PR

- :fork_and_knife:Fork 这个项目并 clone 到本地
- :twisted_rightwards_arrows:新建一个分支: `git checkout -b new-branch`
- :wrench:增加新特性或者解决一些 bug
- :memo:提交你的修改: `git commit -am 'Add some feature'`
- :rocket:推送你的分支: `git push origin new-branch`
- :tada:提交 Pull Request

#### 提交 Issue

- 点击 [issue](https://github.com/nervosnetwork/muta/issues)。欢迎任何有帮助性的建议:stuck_out_tongue_winking_eye:

#### 翻译文档

如果愿意参与翻译文档，请到未翻译的英文文档页面上方点击 edit on GitHub 可以找到源文件，直接修改源文件，并且提 PR，步骤同上面的 PR 步骤。

## 加入我们!

作为一个创业团队，我们还在不断招募优秀的开发者 :heart:，并且在世界末日到来之前我们会一直招募，前端、后端、区块链开发工程师等等！详情参考[工作描述](https://github.com/zhouyun-zoe/Workflow/issues/3)。
