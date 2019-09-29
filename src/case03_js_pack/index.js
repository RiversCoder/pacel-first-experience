// 使用 CommonJS 语法导入模块
const lod = require('lodash')

// 使用 ES6语法导入模块
import lod2 from 'lodash'

console.log(lod.VERSION)
console.log(lod2.VERSION)

// 使用动态导入一个来自CDN的URL地址
import('https://cdnjs.cloudflare.com/ajax/libs/lodash.js/4.17.11/lodash.min.js').then(() => {
  console.log(_.VERSION)
})
