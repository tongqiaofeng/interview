const fs = require('fs')
const path = require('path')
const http = require('http')

const server = http.createServer()

server.on('request', (req, res) => {
  // 获取客户端请求的url地址
  const url = req.url;
  let fPath = '';
  if (url === '/') {
    fPath = path.join(__dirname, '/clock/index.html')
  } else {
    fPath = path.join(__dirname, '/clock', url)
  }

  // 把请求的url地址映射为具体文件的存放路径,并进行文件的读取
  fs.readFile(fPath, 'utf8', (err, dataStr) => {
    // 读取结果响应给客户端
    res.setHeader('Content-Type', 'text/html; charset=utf-8')

    if (err) return res.end('404 not found');
    res.end(dataStr)
  })
})

server.listen('1010', () => {
  console.log('服务器启动，地址为：http://192.168.0.120:1010');
})