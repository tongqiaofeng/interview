<!-- 包的说明文档 -->

## 安装

```
npm install tools
```

## 导入

```js
const tools = require("./tools");
```

## 格式化时间

```js
// 调用 dateFormat 方法对时间进行格式化
const date = tools.dateFormat(new Date());
// 结果：2022-05-19 17:01:17
console.log(date);
```

## 转义 HTML 中的特殊字符

```js
// 待转换的 HTML 字符串
const str = '<h1 title="123456">你好<span>我好&nbsp;</span></h1>';
// 调用 htmlEscape 方法进行转换
const newStr = tools.htmlEscape(str);
// 结果：&lt;h1 title=&quot;123456&quot;&gt;你好&lt;span&gt;我好&amp;nbsp;&lt;/span&gt;&lt;/h1&gt;
console.log(newStr);
```

## 还原 HTML 中的特殊字符

```js
// 调用 htmlUnEscape 方法进行还原
const newStr2 = tools.htmlUnEscape(newStr);
// 结果：<h1 title="123456">你好<span>我好&nbsp;</span></h1>
console.log(newStr2);
```

## 开源协议

ISC
