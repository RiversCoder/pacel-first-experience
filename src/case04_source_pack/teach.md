## 其他Web资源 parcel打包
---
本章节呢，我们使用parcel来打包我们在项目中引入的的`css`, 图片, 文件等资源

* 新建`test.css`，编写如下：
```CSS
html,body{width:100%;height:100%;}
body{background-color: red;}
```
* 新建`some.html`，编辑如下：
```html
<section>
	some.html section box
</section>
```
* 新建一张`test.png`的图片
![./test.png](./test.png)

* 编辑`index.js`如下：
```js
// 导入一个css文件
import './test.css'

// 导入包含 CSS 模块的 CSS 文件
import classNames from './test.css'

// 以 URL 的形式引入图片
import imageURL from './test.png'
let img = document.createElement('img');
img.src = imageURL;
document.body.append(img);

// 导入一个html文件
import('./some.html')
// 或:
import html from './some.html'
// 或:
require('./some.html')

// 写入 box
let iframe = document.createElement('div');
iframe.innerHTML = html;
document.body.append(iframe);
```
* 启动服务，打开浏览器，查看效果如下：
红色的网页背景，`parcel`图片，`some.html section box`的模块
说明我们的资源模块已经打包完毕，没有任何问题
