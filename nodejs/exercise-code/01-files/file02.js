const fs = require('fs');

fs.readFile(__dirname + '/02.txt', 'utf8', (err, res) => {
  if (err) {
    return console.log('文件读取失败', err.message);
  }
  console.log('文件读取成功', res);

  let content = '';
  for (const item of res.split(' ')) {
    content += item.replace("=", "：") + '\r\n';
  };
  console.log(content);

  fs.writeFile(__dirname + '/03.txt', content, 'utf8', (ret) => {
    console.log('写入文件', ret);
  })
})