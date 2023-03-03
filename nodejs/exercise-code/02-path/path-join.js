const path = require('path');
const fs = require('fs')

// 路径拼接
// 注意：一个../会抵消前面的一层路径，多个抵消多层
let pathStr = path.join('/a', '/b/c', '../../', '/d/e');
console.log(pathStr); // /a/d/e

// 报错：ENOENT: no such file or directory, open 'G:\aa-tong\interview\nodejs\exercise-code\path..\files\01.txt'
// fs.readFile(__dirname + '../files/01.txt', 'utf8', (err, res) => {
//   if (err) {
//     return console.log(err.message); 
//   }

//   console.log(res);
// })

fs.readFile(path.join(__dirname, '../files/01.txt'), 'utf8', (err, res) => {
  if (err) {
    return console.log(err.message);
  }

  console.log(res);
})