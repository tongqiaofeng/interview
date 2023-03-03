const path = require('path')

let pathStr = 'a/b/c/d/index.html'

// 获取文件扩展名
let name = path.extname(pathStr)
console.log(name); // .html