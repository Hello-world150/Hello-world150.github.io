+++
title = '项目：一个微型操作系统'
date = 2024-09-06T19:09:47Z
draft = false
ShowToc = true
+++
# 一个微型操作系统（内核 + 软件）
很早就想写一个操作系统了，学习一下操作系统方面的知识~~其实是满足一下自己的虚荣心😜~~。奈何父母最近才同意给我买电脑，于是拖了大半年。

## 功能
目前打算实现的有：

- 一个**Shell**，
  - 简化现有的**Shell**语法，参考[Fish-shell](https://fishshell.com)
  - 拥有**Nushell**的结构化输出，参考[Nushell](https://www.nushell.sh)
- 多任务
  > 看了看《现代操作系统》，页面调度算法可行的有**老化算法**，**Clock算法**等
- 兼容**Linux**`API`，理论上能直接运行不依赖特殊系统调用的程序，例如3A大作之类需要硬件加速的软件就算了，当然最好还是自己写原生的😚
- 文件系统
  > 实现一个在性能和支持现代特性上平衡的文件系统，性能以[Ext4](https://ext4.wiki.kernel.org/index.php/Main_Page)为标准，特性参考[Btrfs](https://archive.kernel.org/oldwiki/btrfs.wiki.kernel.org/)的**透明压缩**等
- GUI子系统？
  > - 不知道是实现**Wayland**协议还是自己写一套框架。如果可行的话打算在系统层面做一种类似**Vim**的操作逻辑：把窗口作为文本对象操作，同时将**Vim**中的`f`指令用于定位应用程序的各类元素，例如`Button`等
  > - **WM**（窗口管理器）大概率会做成平铺式，参考[Hyprland](https://hyprland.org)
  > - 开箱即用的美观度。悄悄告诉你，这个OS是个小礼物😁
- 一个类似(**Neo**)**vim**的文本编辑器
  > 扩展系统想试试**Python**，容易上手，库丰富，就是不知道集成进去的性能如何，等实现的时候再测试测试。打算只编写GUI版本。参考[Helix](https://helix-editor.com)
- 重写一个**Git**？
- 试试看移植Firefox

感觉头有点大，慢慢来吧😅
## 语言
如果可能的话内核和应用程序尽量使用**Rust**编写。

写操作系统传统上都是用C语言，但看在Rust性能基本没损失的前提下还拥有内存安全的特性，就入了Rust~~邪教~~。

## 附录

### 参考
- [Writing an OS in Rust](https://os.phil-opp.com/)
- "Modern Operating System"(《现代操作系统》)
> 感谢大佬的教程和书籍🙏

### 唠叨
过几天就开学了,三天打鱼两天晒网，不知道什么时候能够做完。😙

