const fs = require('fs');

fs.readFile(__dirname + '/01.txt', 'utf8', (err, res) => {
  if (err) {
    return console.log('文件读取失败', err.message);
  }

  console.log('文件读取成功', res);
})

// 存在该文件则写入，不存在则创建文件+写入（写入的内容会替换掉文件内原有的内容）
fs.writeFile(__dirname + '/01.txt', '今天天气好晴朗，处处好风光~~', 'utf8', (res) => {
  if (res) {
    return console.log('文件写入失败', res.message);
  }

  console.log('文件写入成功', res);
})