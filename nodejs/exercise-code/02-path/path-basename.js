const path = require('path')

let pathStr = 'a/b/c/d/index.html'

// 获取文件名称
let name = path.basename(pathStr)
console.log(name); // index.html

// 去掉文件扩展名的文件名称
let nameWithout = path.basename(pathStr, '.html')
console.log(nameWithout); // index