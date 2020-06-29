---
id: setup
title: Set up your computer
---

To develop on Muta, your computer needs some prerequisites to establish a working development environment.

:::note
Setting up your computer is probably the hardest part of this tutorial, so don't let this discourage you.
:::

### 1. Install required dependencies
   
   **MacOS**

   ```
   $ brew install autoconf libtool
   ```
   **ubuntu**
 
   ```
   $ apt update
   $ apt install -y git curl openssl cmake pkg-config libssl-dev gcc build-essential clang libclang-dev
   ```

   **centos7**

   ```
   $ yum install -y centos-release-scl
   $ yum install -y git make gcc-c++ openssl-devel llvm-toolset-7

   # 打开 llvm 支持
   $ scl enable llvm-toolset-7 bash
   ```

   **archlinux**

   ```
   $ pacman -Sy --noconfirm git gcc pkgconf clang make
   ```

### 2. Install Rust 

Substrate uses the Rust programming language. If you’re running macOS, Linux, or another Unix-like OS, we suggest you to install Rust using `rustup`:

```
curl https://sh.rustup.rs -sSf | sh
```
