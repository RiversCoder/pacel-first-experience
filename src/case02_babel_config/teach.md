## 该章节涉及课程内容 - 配置 babel

1. babel的官网地址：https://babeljs.io/

2. 项目根目录安装模块包：
```shell
  cnpm install --save-dev @babel/core @babel/preset-env @babel/plugin-transform-runtime @babel/runtime-corejs2
```

3. 配置文件
```json
{
  "presets": [
    [ "@babel/preset-env", {
        "useBuiltIns": "usage",
      }
    ]
  ],
  "plugins": [
    [
      "@babel/plugin-transform-runtime", {
        "corejs": 2,
      }
    ]
  ]
}

```

4. 修改`index.js`
```js
function timeout(){
  let timer = setTimeout(() => {
    console.log('2s')
    clearTimeout(timer);
  },2000);
}

async function timer(){
  const result = await timeout();
  console.log(result);
}


timer();

console.log('hello parcel ~~~ hei');
```

5. 打印如下：
```text
hello parcel ~~~ hei
undefined
2s
```
