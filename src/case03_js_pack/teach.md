## Javascript parcel打包
---
javascript打包是前端开发中最常用的打包，本章节内容呢，将使用parcel来打包 CommonJS 和 ES6 、import()的JS模块

* 我们首先使用`CommonJS`的方式进行引入
```js
// 使用 CommonJS 语法导入模块
const lod = require('lodash')
console.log(lod.VERSION)
```
* 接着我们使用`ES6`的方式引入：
```js
import lod2 from 'lodash'
console.log(lod2.VERSION)
```
* 最后我们使用`import`动态导入的方式引入：
```js
import('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.min.js').then(() => {
  console.log(_.VERSION)
})
```
* 我们在控制台打印一下
```shell
npx parcel index.html
Server running at http://localhost:1234
√  Built in 4.74s.
```
* 我们去到浏览器控制台，观察打印结果如下：
```txt
4.17.15
4.17.15
4.17.11
```
* 说明使用`parcel`模块化打包我们JS的这几种规范都是没有什么问题的
