# pinyin-pro-data

## 📖 介绍

[pinyin-pro] 的官方扩充字典包。目前包含的包如下：

- [@pinyin-pro/data/modern.json](https://github.com/zh-lx/pinyin-pro/blob/main/packages/data/json/modern.json): 《现代汉语词典(第 7 版)》词语拼音合集(gzip 压缩后大概 0.6 MB)
- [@pinyin-pro/data/complete.json](https://github.com/zh-lx/pinyin-pro/blob/main/packages/data/json/complete.json): jieba 中文分词库词语拼音合集(gzip 压缩后大概 3.99 MB)
- [@pinyin-pro/data/chars.json](https://github.com/zh-lx/pinyin-pro/blob/main/packages/data/json/chars.json): 部分补充生僻字字典(gzip 压缩后大概 0.1KB)
- [@pinyin-pro/data/buddhist.json](https://github.com/zh-lx/pinyin-pro/blob/main/packages/data/json/buddhist.json): 佛经（佛教典籍）专用拼音词典（128 条，opt-in）

> **读音标准说明**：`buddhist.json` 采用**佛门传统读音**，逐条依据台湾教育部《重编国语辞典修订本》
> (https://dict.revised.moe.edu.tw/) 与 DDB（buddhism-dict.net）核验，并配有语料验证脚本。
> 与大陆《普通话异读词审音表》(2016 修订稿) 存在已知分歧，故本词典仅作 opt-in 使用，绝不并入通用词库：
>
> | 词 | 本词典 | 审音表 | 说明 |
> |---|---|---|---|
> | 大乘/小乘/上乘 | shèng | chéng | 审音表 2016 修订稿将「大乘」列为 chéng 音例词 |
> | 行愿/本行 | hèng | xíng | 审音表「行」统读 xíng |
> | 迦叶/迦葉 | shè | yè | 审音表「叶」统读 yè |
>
> 单字级别的强制读音（如 相→xiàng、於→yú）为佛经语料特化启发式，
> `addDict` 对单字仅追加读音而非强制，故不纳入本词典；需要时请用 `customPinyin` 自行注入。

## 🔨 安装

选择合适的包管理器

```shell
npm install @pinyin-pro/data
yarn add @pinyin-pro/data
pnpm add @pinyin-pro/data
```

## 💡 使用示例

使用扩展字典：

```js
import CharsDict from '@pinyin-pro/data/chars';
import { addDict } from 'pinyin-pro';

addDict(CharsDict);
```

使用完备字典:

```js
import { addDict } from 'pinyin-pro';
import CompleteDict from '@pinyin-pro/data/complete';
addDict(CompleteDict);
```

使用现代汉语词典:

```js
import { addDict } from 'pinyin-pro';
import ModernDict from '@pinyin-pro/data/modern';
addDict(ModernDict);
```

使用佛经词典（处理佛典文本时再加载，不影响默认读音）:

```js
import { addDict } from 'pinyin-pro';
import BuddhistDict from '@pinyin-pro/data/buddhist';
addDict(BuddhistDict);
```
