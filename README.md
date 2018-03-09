# Barrel-TypeScript

## 插件简介

- 为你的 TypeScript 项目自动创建 Barrel。方便管理你的 .ts 脚本资源。

- 实现上用了开源项目 [Barrelsby](https://github.com/bencoveney/barrelsby)。当你从 Creator 的工作流里创建文件、移动文件、删除文件、重命名文件时，更新 Barrel。即生成 `index.ts` 文件到 `项目根目录/assets` 路径下。方便 TypeScript 工程 import，不必再写路径。省去移动、重命名脚本资源时还要修改 import 路径的问题。

## 关于 Barrel

Barrel 是一种将多个 module 的 export 汇总为单个 module 的方式，通常为 index.ts 文件。详细了解参见 *TypeScript Deep Dive* 的 [Barrel](https://basarat.gitbooks.io/typescript/content/docs/tips/barrel.html) 一节。

## 使用

1. 点击 `扩展/Barrel-TypeScript` 菜单下的 `添加 TypeScript 项目配置` 。这将在你的项目根目录下添加 `tsconfig.json` 文件，其中设置了项目 `baseUrl` 为项目根目录。并且在项目 assets 下生成了 `index.ts`。

2. 在 `bar.ts` 中 import `foo.ts` 的 `Foo` :

```typescript
//foo.ts
export class Foo extends cc.Component {}

//bar.ts
import {Foo} from "assets";
```

3. 当你从 Creator 的工作流里创建 ts 脚本、移动 ts 脚本、删除 ts 脚本、重命名 ts 脚本时，`index.ts` 会自动更新。

## 已知问题 / 注意事项

- 不能用 `export default`，而 Creator 的 ts 脚本 模板，默认生成时就是 `export default`。

## 反馈

如有问题或建议可以联系我：stromkuo@gmail.com