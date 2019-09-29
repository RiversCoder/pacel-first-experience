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
